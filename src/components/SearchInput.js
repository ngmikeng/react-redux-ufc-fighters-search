import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

function SearchInput({ onChange }) {
  return (
    <div className="SearchInput">
      <input type="text" className="SearchInput-text" />
    </div>
  );
}

SearchInput.propTypes = {
};

export default SearchInput;
