import { NextPage } from "next";

import { MealsSlugPageTypes } from "@/types";

const MealsSlugPage: NextPage<MealsSlugPageTypes> = ({ params }) => {
  console.log(params);
  return (
    <main>
      <h1>This is the Dynamic Meals Page {params.mealSlug}</h1>
    </main>
  );
};

export default MealsSlugPage;
