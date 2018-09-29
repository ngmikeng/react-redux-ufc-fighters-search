import React from 'react';
import PropTypes from 'prop-types';
import './FighterListItem.css';

const FighterListItem = ({ dataFighter, onClick }) => {
  return (
    <div className="FightersList-item">
      <img src={dataFighter.thumbnail} alt="thumbnail"/>
      <div><b>{dataFighter.first_name} {dataFighter.last_name}</b></div>
      <div>{dataFighter.weight_class ? dataFighter.weight_class.replace('_', ' ') : ''}</div>
      <button type="button" style={{ cursor: 'pointer' }} onClick={(e) => onClick(dataFighter)}>View Detail</button>
    </div>
  );
}

FighterListItem.propTypes = {
  dataFighter: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FighterListItem;
