import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';

const SearchForm = () => {
  return (
    <form className={styles.SearchForm}>
      <TextInput placeholder="Search..." />
      <TextInput placeholder="Add new recipes" />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchForm;