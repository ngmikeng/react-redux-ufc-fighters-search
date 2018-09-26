import React from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput';
import { changeSearchInput } from '../actions'

const SearchInputContainer = ({ dispatch }) => {
  function handleOnChange(event) {
    let text = event.target.value ? event.target.value.trim() : '';
    dispatch(changeSearchInput(text));
  }

  return (
    <div>
      <form>
        <SearchInput onChange={handleOnChange} />
      </form>
    </div>
  )
}

export default connect()(SearchInputContainer);