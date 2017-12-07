// let's go!
import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(e) {
    e.preventDefault();
    console.log('go to store invoked')

  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Please Enter A Store</h2>
        <input 
          type="text" 
          required placeholder="Store Name" 
          defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input }}
          />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;