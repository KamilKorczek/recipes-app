import styles from './List.module.scss';

const List = () => {
  return (
    <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>Calculate batch size</h2>
        </header>
        <p className={styles.description}>Chemical products useful at home and more</p>
        <section className={styles.columns}>
            <article>
                <h2>SOLVENTS</h2>
            </article>
            <article>
                <h2>ADHESIVES</h2>
            </article>
            <article>
                <h2>HOUSEHOLD CHEMICAL TECHNICAL</h2>
            </article>
            <article>
                <h2>PAINTS</h2>
            </article>
            <article>
                <h2>PREPARATION FOR PAINTING AND GLUING</h2>
            </article>
            <article>
                <h2>SEALANTS</h2>
            </article>
        </section>
    </div>
  );
};

export default List;