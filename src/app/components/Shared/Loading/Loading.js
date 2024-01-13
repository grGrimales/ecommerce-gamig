import styles from "./Loading.module.scss";

export const LoadingPage = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
    </div>
  );
};
