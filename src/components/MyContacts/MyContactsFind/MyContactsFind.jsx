import PropTypes from 'prop-types';

import css from './MyContactsFind.module.css';

const MyContactsFind = ({ handleChange, value }) => {
  return (
    <div className={css.formGroup}>
      <label>Find contact by name</label>
      <input
        className={css.input}
        name="filter"
        value={value}
        onChange={handleChange}
        placeholder="Enter a name"
      />
    </div>
  );
};

export default MyContactsFind;

MyContactsFind.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
