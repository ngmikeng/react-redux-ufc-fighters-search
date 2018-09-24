import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FighterListItem.css';

function FighterListItem({ dataFighter, onClick }) {
  return (
    <div className="FightersList-item">
      <img src={dataFighter.thumbnail} alt="thumbnail"/>
      <div><b>{dataFighter.first_name} {dataFighter.last_name}</b></div>
      <div>{dataFighter.weight_class ? dataFighter.weight_class.replace('_', ' ') : ''}</div>
      <button type="button" style={{ cursor: 'pointer' }}>View Detail</button>
    </div>
  );
}

FighterListItem.propTypes = {
  dataFighter: PropTypes.object.isRequired
};

export default FighterListItem;
