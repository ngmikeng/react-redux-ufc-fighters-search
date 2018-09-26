import React from 'react';
import PropTypes from 'prop-types';
import FighterListItem from './FighterListItem';

function FighterList({ listData }) {
  return (
    <div className="FightersList">
      {
        listData.map(fighter => (
          <FighterListItem key={fighter.id} dataFighter={fighter} />
        ))
      }
    </div>
  );
}

FighterList.propTypes = {
  listData: PropTypes.array.isRequired
};

export default FighterList;
