import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchFightersData } from '../actions';
import FighterList from '../components/FighterList';

class FighterListContainer extends Component {
  componentWillMount() {
    this.props.fetchFightersData();
  }

  render() {
    return (
      <FighterList listData={this.props.listData.splice(0, 10)} />
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
        return fighter.weight_class.toLowerCase().indexOf(weightClass.toLowerCase()) > -1 ;
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
  return data;
};

const mapStateToProps = (state) => ({
  listData: handleFilterListData(state.fighters.listFighters, state.search.inputText, state.search.filterType)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFightersData: () => dispatch(fetchFightersData())
});

FighterListContainer.propTypes = {
  listData: PropTypes.array.isRequired,
  fetchFightersData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FighterListContainer);
