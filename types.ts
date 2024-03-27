import { ReactNode } from "react"

export type RootLayoutTypes = {
  children: ReactNode;
}

export type MealsSlugPageTypes = {
  params: {
    slug: string;
  }
}

export type NavbarTypes = {
  classname: string;
}

export type LogoTypes = {
  classname: string;
}