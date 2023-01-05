import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>RECIPES APP</h1>
      <p className={styles.subtitle}>A simple recipe maker app</p>
    </div> 
  );
};

export default Hero;