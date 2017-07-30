// Let's make a stateful component pass its state to a stateless component
// To make that happen, you need two component classes: a stateful class, and a stateless class.

// example made a stateful component class named Parent
import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <div></div>;
  }
}

// Now, let's make our stateless component class
import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}
