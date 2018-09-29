import React from 'react';
import PropTypes from 'prop-types';
import './FighterDetail.css';

const FighterDetail = ({ fighterData }) => {
  return (
    <div className="FighterDetail">
    {fighterData.left_full_body_image ? (
      <div className="FighterDetail-body-image">
        <img src={fighterData.left_full_body_image} alt="fighter-full-img" />
      </div>
    ) : null}
      <div className="FighterDetail-info">
      {fighterData.rank ? (
        <div>
          <label className="FighterDetail-info-label">{fighterData.rank === 'C' ? 'Champion' : '#' + fighterData.rank}</label>
        </div>
      ) : null}
        <div>
          <label className="FighterDetail-info-label">Name</label>
          <p>{fighterData.first_name + ' ' + fighterData.last_name}</p>
        </div>
      {fighterData.nickname ? (
        <div>
          <label className="FighterDetail-info-label">Nickname</label>
          <p>{fighterData.nickname}</p>
        </div>
      ) : null}
        <div>
          <label className="FighterDetail-info-label">Wins/Losses/Draws</label>
          <p>{fighterData.wins + '/' + fighterData.losses + '/' + fighterData.draws}</p>
        </div>
      </div>
    </div>
  )
}

FighterDetail.propTypes = {
  fighterData: PropTypes.object.isRequired
};

export default FighterDetail;
