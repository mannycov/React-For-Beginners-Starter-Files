import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }

  addFish(fish) {
    // update our state
    // the three dots are the spread operator
    // which takes every item from the the object passrd in
    // amd makes a copy of it
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;
    // set state
    // this.setState({ fishes: fishes }) same as doing what's done below
    this.setState({ fishes })
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => 
                  <Fish 
                    key={key} 
                    details={this.state.fishes[key]}
                  />)
            }
          </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish}
          loadSamples={this.loadSamples} 
        />
      </div>
    )
  }
}

export default App;