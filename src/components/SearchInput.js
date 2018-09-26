import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

const SearchInput = ({ onChange }) => {
  return (
    <div className="SearchInput">
      <input type="text" className="SearchInput-text" onChange={onChange} />
    </div>
  );
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchInput;
