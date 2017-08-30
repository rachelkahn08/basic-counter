import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Header from './Header';
import Root from './Root';
import Counter from './Counter';
import CounterForm from './CounterForm';

const CounterPage = (title) => (
  <Counter title={title} />
);

class App extends Component {

  updateCounter(newCount) {
    
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>

          <div className="App-body">
            <Route path="/" exact component={ Root } />
            <Route path="/Counter1" component={ () => CounterPage(1) } />
            <Route path="/CounterForm" component={ CounterForm } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
