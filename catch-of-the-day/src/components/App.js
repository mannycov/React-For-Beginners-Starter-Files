import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    // the three dots are the spread operator
    // which takes every item from the 
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;
    // set state
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header 
            tagline="Fresh Seafood Market"
          />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;