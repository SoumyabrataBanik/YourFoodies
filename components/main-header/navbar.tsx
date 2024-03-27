import Link from "next/link";

import { NavbarTypes } from "@/types";

export default function Navbar({ classname }: NavbarTypes): JSX.Element {
  return (
    <>
      <nav className={classname}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">YourFoodies Community</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
