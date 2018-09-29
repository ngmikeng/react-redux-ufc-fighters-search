import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { fetchFightersData, viewFighterDetail, closeFighterDetail } from '../actions';
import FighterList from '../components/FighterList';
import FighterDetail from '../components/FighterDetail';

class FighterListContainer extends Component {
  componentWillMount() {
    this.props.fetchFightersData();
  }

  render() {
    return (
      <div>
        <FighterList listData={this.props.listData} onShowFighter={this.props.onShowFighter} />
        <Modal
          isOpen={this.props.showDetail}
          onRequestClose={this.props.closeFighterDetail}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          }}
          contentLabel="Fighter Detail"
        >
          <div className="App-modal-header">
            <h2>Fighter</h2>
            <button className="App-modal-close" onClick={this.props.closeFighterDetail}>x</button>
          </div>
          <div className="App-modal-body">
            <FighterDetail fighterData={this.props.fighterDetail} />
          </div>
        </Modal>
      </div>
    );
  }
}

const filterByInputText = (listData, searchInputText) => {
  if (!searchInputText) {
    return listData;
  } else {
    return listData.filter(fighter => {
      let fighterName = fighter.first_name + ' ' + fighter.last_name;
      fighterName = fighterName.toLowerCase();
      if (fighterName.indexOf(searchInputText.toLowerCase()) > -1) {
        return true;
      }
      return false;
    });
  }
}

const filterByWeightClass = (listData, weightClass) => {
  if (weightClass) {
    return listData.filter(fighter => {
      if (fighter.weight_class) {
        return fighter.weight_class.toLowerCase() === weightClass.toLowerCase();
      }
      return false;
    });
  }
  return listData;
}

const filterByType = (listData, type) => {
  if (type === 'all') {
    return listData;
  } else if (type === 'champ') {
    return listData.filter(fighter => {
      return fighter.title_holder;
    });
  } else {
    return filterByWeightClass(listData, type);
  }
};

const handleFilterListData = (listData, searchInputText, filterType) => {
  let data = filterByType(listData, filterType);
  data = filterByInputText(data, searchInputText);

  return data.slice(0, 10);
};

const mapStateToProps = (state) => ({
  listData: handleFilterListData(state.fighters.listFighters, state.search.inputText, state.search.filterType),
  showDetail: state.fighters.showDetail,
  fighterDetail: state.fighters.fighterDetail
});

const mapDispatchToProps = (dispatch) => ({
  fetchFightersData: () => dispatch(fetchFightersData()),
  onShowFighter: (fighter) => dispatch(viewFighterDetail(fighter)),
  closeFighterDetail: () => dispatch(closeFighterDetail())
});

FighterListContainer.propTypes = {
  listData: PropTypes.array.isRequired,
  fetchFightersData: PropTypes.func.isRequired,
  onShowFighter: PropTypes.func.isRequired,
  closeFighterDetail: PropTypes.func.isRequired,
  fighterDetail: PropTypes.object.isRequired,
  showDetail: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FighterListContainer);
