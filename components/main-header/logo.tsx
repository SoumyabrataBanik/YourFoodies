import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import { LogoTypes } from "@/types";

export default function Logo({ classname }: LogoTypes): JSX.Element {
  return (
    <>
      <Link href="/" className={classname}>
        <Image src={logoImg} alt="Logo" priority />
        YourFoodies
      </Link>
    </>
  );
}
