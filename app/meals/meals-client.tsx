"use client";

import MealsGrid from "@/components/meals/meals-grid";
import { MealItemType } from "@/types";
import { useEffect, useState } from "react";

export default function Meals() {
  const [meals, setMeals] = useState<MealItemType[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const meals = await fetch("api/getMeals");
        setMeals(await meals.json());
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeals();
  });

  return <MealsGrid meals={meals} />;
}
