import styles from './styles.module.scss';

export default function Movies() {
  return (
    <>
      <h1 className={styles.pageTitle}>Populares</h1>
      <div className={styles.contentContainer}>
        <label className={styles.label}>Filmes</label>
      </div>
      <div className={styles.contentContainer}>
        <label className={styles.label}>Séries</label>
      </div>
    </>
  )
}