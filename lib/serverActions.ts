"use server";
import { redirect } from "next/navigation";

import { FormShareMealType, MealItemType } from "@/types";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text: string): boolean => {
  return !text || text.trim() === "";
};

const isValidEmail = (email: string): boolean => {
  return email.includes("@") && email.includes(".com");
};

const shareMeal = async (prevState: {message: string}, formData: FormData) => {
  const meal: FormShareMealType = {
    id: Number(formData.get("id")),
    title: formData?.get("title"),
    summary: formData?.get("summary"),
    creator: formData?.get("name"),
    creator_email: formData?.get("email"),
    instructions: formData?.get("instructions"),
    imageFile: formData?.get("imagePicker"),
  };

  if (
    isInvalidText(meal.title as string) ||
    isInvalidText(meal.summary as string) ||
    isInvalidText(meal.creator as string) ||
    !isValidEmail(meal.creator_email as string) ||
    isInvalidText(meal.instructions as string) ||
    meal.imageFile === null
  ) {
    return {
      message: "Invalid Input",
    };
  }

  await saveMeal(meal as MealItemType);
  revalidatePath("/meals");
  redirect("/meals");
};

export default shareMeal;
