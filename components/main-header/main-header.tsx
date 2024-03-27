import Logo from "./logo";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

export default function MainHeader(): JSX.Element {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Logo classname={styles.logo} />
        <nav className={styles.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">YourFoodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
