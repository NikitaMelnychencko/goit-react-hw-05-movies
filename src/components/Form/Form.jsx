import { FiSearch } from 'react-icons/fi';
import s from './Form.module.scss';

const Form = ({ handleSubmit, searchName, handleNameChange }) => {
  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.SearchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies"
        value={searchName}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.SearchFormButton} aria-label="search">
        <FiSearch />
      </button>
    </form>
  );
};
export default Form;
