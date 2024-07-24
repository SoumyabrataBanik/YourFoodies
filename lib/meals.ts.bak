import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { MealItemType } from "@/types";

const db = sql("meals.db");

export async function getMeals(): Promise<unknown[]> {
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug: string): Promise<unknown> {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
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

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `
  ).run(meal);
}
