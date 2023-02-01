import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Calculate batch size</h2>
      </header>
      <p className={styles.description}>Chemical products useful at home and more</p>
      <section className={styles.columns}>
        <Column title="SOLVENTS" />
        <Column title="ADHESIVES" />
        <Column title="HOUSEHOLD CHEMICAL TECHNICAL" />
        <Column title="PAINTS" />
        <Column title="PREPARATION FOR PAINTING AND GLUING" />
        <Column title="SEALANTS" />
      </section>
    </div>
  );
};

export default List;