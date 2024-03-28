import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export type RootLayoutTypes = {
  children: ReactNode;
};

export type MealsSlugPageTypes = {
  params: {
    mealSlug: string;
  };
};

export type NavlinkTypes = {
  href: Url;
  children: ReactNode;
};

export type LogoTypes = {
  classname: string;
};

export type MealItemType = {
  id: number;
  title: string;
  slug: string;
  imageFile: File;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
};

export type MealGridTypes = {
  meals: Array<MealItemType>;
};

export type ImagePickerTypes = {
  label: string;
  name: string;
};

export type FormShareMealType = {
  id: number;
  title: FormDataEntryValue | null;
  summary: FormDataEntryValue | null;
  creator: FormDataEntryValue | null;
  creator_email: FormDataEntryValue | null;
  instructions: FormDataEntryValue | null;
  imageFile: FormDataEntryValue | null;
};
