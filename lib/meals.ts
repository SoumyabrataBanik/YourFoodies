import fs from "node:fs";
import { Pool } from "pg";
import slugify from "slugify";
import xss from "xss";
import { createClient } from "@supabase/supabase-js";

import { MealItemType } from "../types";

// PostgreSQL connection
const pool = new Pool({
  connectionString:
    "postgresql://postgres.vltasuojbirpwazivnuz:Qs7S8UxFBU63iRSZ@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres",
});

export async function getMeals(): Promise<unknown[]> {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM meals");
    return result.rows;
  } finally {
    client.release();
  }
}

export async function getMeal(slug: string): Promise<unknown> {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM meals WHERE slug = $1", [
      slug,
    ]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

export async function saveMeal(meal: MealItemType) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.imageFile.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);

  const arrayBufferedImage = await meal.imageFile.arrayBuffer();

  stream.write(Buffer.from(arrayBufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save image!");
    }
  });

  meal.image = `/images/${filename}`;

  const client = await pool.connect();
  try {
    await client.query(
      `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [
        meal.title,
        meal.summary,
        meal.instructions,
        meal.creator,
        meal.creator_email,
        meal.image,
        meal.slug,
      ],
    );
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}
