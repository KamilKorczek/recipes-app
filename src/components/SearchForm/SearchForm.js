import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search..." />
      <TextInput placeholder="Add new recipes" />
      <Button>
        <span className="fa fa-search" />
      </Button>
      <Button>Add</Button>
    </form>
  );
};

export default SearchForm;