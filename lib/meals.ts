import { MealItemType } from "@/types";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<unknown[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare("SELECT * FROM meals").all();
}
