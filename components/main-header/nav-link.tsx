"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavlinkTypes } from "@/types";
import styles from "./nav-link.module.css";

export default function Navlink({ href, children }: NavlinkTypes) {
  const path = usePathname();
  
  return (
    <Link href={href} className={path === href ? `${styles.link} ${styles.active}` : styles.link}>
      {children}
    </Link>
  )
}
