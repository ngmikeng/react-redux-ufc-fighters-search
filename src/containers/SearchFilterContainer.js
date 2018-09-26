import React from 'react';
import { connect } from 'react-redux';
import SearchFilter from '../components/SearchFilter';
import { changeSearchFilter } from '../actions'

const SearchInputContainer = ({ dispatch }) => {
  function handleOnChange(event) {
    let type = event.target.value;
    dispatch(changeSearchFilter(type));
  }

  return (
    <div>
      <form>
        <SearchFilter onChange={handleOnChange} />
      </form>
    </div>
  )
}

export default connect()(SearchInputContainer);