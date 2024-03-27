import { MealGridTypes } from "@/types";
import styles from "./meals-grid.module.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }: MealGridTypes) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
