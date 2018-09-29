import React from 'react';
import PropTypes from 'prop-types';
import FighterListItem from './FighterListItem';

const FighterList = ({ listData, onShowFighter }) => {
  return (
    <div className="FightersList">
      {
        listData.map(fighter => (
          <FighterListItem key={fighter.id} dataFighter={fighter} onClick={onShowFighter} />
        ))
      }
    </div>
  );
}

FighterList.propTypes = {
  listData: PropTypes.array.isRequired,
  onShowFighter: PropTypes.func.isRequired
};

export default FighterList;
