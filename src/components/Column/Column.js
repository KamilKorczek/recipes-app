import styles from './Column.module.scss';

const Column = props => {
  return (
    <article className={styles.column}>
      <img className={styles.image} src={`${process.env.PUBLIC_URL}/images/${props.title}.jpg`} alt={props.title} />
      <h2 className={styles.title}>{props.title}</h2>
    </article>
  );
};

export default Column;