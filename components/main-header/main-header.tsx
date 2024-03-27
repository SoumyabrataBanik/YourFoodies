import Logo from "./logo";
import Navbar from "./navbar";

import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader(): JSX.Element {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Logo classname={styles.logo} />
        <Navbar classname={styles.nav} />
      </header>
    </>
  );
}
