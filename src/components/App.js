import React from 'react';
import Header from './Header';
import SearchInputContainer from '../containers/SearchInputContainer';
import FighterListContainer from '../containers/FighterListContainer';
import SearchFilterContainer from '../containers/SearchFilterContainer';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <SearchInputContainer />
      <SearchFilterContainer />
      <FighterListContainer />
    </div>
  </Provider>
)

export default App;
