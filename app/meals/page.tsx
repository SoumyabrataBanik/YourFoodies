import Link from "next/link";

import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { MealItemType } from "@/types";

export default function MealsPage(): JSX.Element {
  const meals: MealItemType[] = []
  
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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
