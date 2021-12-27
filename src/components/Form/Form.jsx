import PropTypes from 'prop-types';
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
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};
export default Form;
