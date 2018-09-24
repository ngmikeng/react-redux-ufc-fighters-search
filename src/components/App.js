import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import FighterListContainer from '../containers/FighterListContainer';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <SearchInput />
      <FighterListContainer />
    </div>
  </Provider>
)

export default App;
