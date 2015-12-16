import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { Counter } from './components/counter';

export class App extends Component {
   render() {
    return (
      <div >
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}
