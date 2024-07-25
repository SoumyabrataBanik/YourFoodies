import { getMeals } from "@/lib/meals";

export async function GET() {
  try {
    const meals = await getMeals();
    return Response.json(meals);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch data" });
  }
}
