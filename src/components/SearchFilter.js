import React from 'react';
import PropTypes from 'prop-types';
import { FILTER_TYPES } from '../actions/types';

const SearchFilter = ({ onChange }) => {
  return (
    <div className="SearchFilter">
      <select onChange={onChange}>
        {
          FILTER_TYPES.map((item, index) => 
            <option key={index} value={item.type}>{item.label}</option>
          )
        }
      </select>
    </div>
  );
}

SearchFilter.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchFilter;
