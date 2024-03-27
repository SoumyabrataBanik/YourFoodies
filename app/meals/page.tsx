import { NextPage } from "next";
import Link from "next/link";

export default function MealsPage(): JSX.Element {
  return (
    <main>
      <h1>This is the Meals Page</h1>
      <h2><Link href="meals/share">Meals Share Page</Link></h2>
      <h3><Link href="meals/1">Meals Slug Page 1</Link></h3>
      <h3><Link href="meals/2">Meals Slug Page 2</Link></h3>
    </main>
  )
}