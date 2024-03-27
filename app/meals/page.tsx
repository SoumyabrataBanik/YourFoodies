import Link from "next/link";

import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { MealItemType } from "@/types";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import PageLoading from "./loading-out";

async function Meals() {
  const meals: MealItemType[] = await getMeals() as MealItemType[];

  return <MealsGrid meals={meals} />
}

export default async function MealsPage(): Promise<JSX.Element> {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals cooked{" "}
          <span className={styles.highlight}>by You</span>
        </h1>
        <p>Choose your recipe and cook it yourself.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">
            Share your favorite meal with the world
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<PageLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
