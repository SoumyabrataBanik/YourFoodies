import { NextPage } from "next";

import { MealsSlugPageTypes } from "@/types";

const MealsSlugPage: NextPage<MealsSlugPageTypes> = ({ params }) => {
  return (
    <main>
      <h1>This is the Dynamic Meals Page {params.slug}</h1>
    </main>
  );
};

export default MealsSlugPage;
