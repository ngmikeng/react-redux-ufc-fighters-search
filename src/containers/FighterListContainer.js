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

const filterListData = (listData, searchInputText) => {
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
};

const mapStateToProps = (state) => ({
  listData: filterListData(state.fighters.listFighters, state.search.inputText)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFightersData: () => dispatch(fetchFightersData())
});

FighterListContainer.propTypes = {
  listData: PropTypes.array.isRequired,
  fetchFightersData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FighterListContainer);
