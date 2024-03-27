import styles from "./loading.module.css";

export default function PageLoading(): JSX.Element {
  return <p className={styles.loading}>Fetching Data...</p>;
}
