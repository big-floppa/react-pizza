import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

const App = ({ logo, categories }) => {
  return (
    <div className="wrapper">
      <Header logo={logo} />
      <div className="content">
        <Route exact path="/">
          <Home categories={categories} />
        </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
      </div>
    </div>
  );
};

export default App;
