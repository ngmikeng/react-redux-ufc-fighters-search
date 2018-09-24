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

const mapStateToProps = (state) => ({
  listData: state.fighters.listFighters
});

FighterListContainer.propTypes = {
  listData: PropTypes.array.isRequired,
  fetchFightersData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchFightersData })(FighterListContainer);
