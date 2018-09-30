import React from 'react';
import { connect } from 'react-redux';
import SearchFilter from '../components/SearchFilter';
import { changeSearchFilter, loadMoreFighters } from '../actions'

const SearchInputContainer = ({ dispatch }) => {
  function handleOnChange(event) {
    let type = event.target.value;
    // reset load more cursor to default
    dispatch(loadMoreFighters(0, 10));
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
