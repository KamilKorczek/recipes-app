import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={styles.SearchForm}>
      <TextInput placeholder="Search..." />
      <TextInput placeholder="Add new recipes" />
      <Button text="Search" />
      <Button text="Add" />
    </form>
  );
};

export default SearchForm;