import Link from "next/link";

import styles from "./page.module.css";
import { Suspense } from "react";
import PageLoading from "./loading-out";
import Meals from "./meals-client";

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
