//import fs from "node:fs";

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

// Initialize Supabase client
const supabase = createClient(
  "https://vltasuojbirpwazivnuz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsdGFzdW9qYmlycHdheml2bnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzM0NDcsImV4cCI6MjAzNzQwOTQ0N30.ZvN5qswA0bFDhg5s0nTpzH3ZglldyMTNxvgVsN9ToW4",
);

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

/*export async function saveMeal(meal: MealItemType) {
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
}*/

export async function saveMeal(meal: MealItemType) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.imageFile.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  // Upload image to Supabase Storage
  const { error } = await supabase.storage
    .from("yourfoodies")
    .upload(filename, meal.imageFile);

  if (error) {
    throw new Error("Failed to upload image: " + error.message);
  }

  // Get public URL of the uploaded image
  const {
    data: { publicUrl },
  } = supabase.storage
    .from("yourfoodies") // Replace with your bucket name
    .getPublicUrl(filename);

  meal.image = publicUrl;

  // Insert meal data into the database
  const { data: insertData, error: insertError } = await supabase
    .from("meals")
    .insert([
      {
        title: meal.title,
        summary: meal.summary,
        instructions: meal.instructions,
        creator: meal.creator,
        creator_email: meal.creator_email,
        image: meal.image,
        slug: meal.slug,
      },
    ]);

  if (insertError) {
    console.error("Error inserting meal data:", insertError);
    throw new Error("Failed to save meal data");
  }

  return insertData;
}
