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

// Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
  }

  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(
<Parent />,
document.getElementById('app'));

// A component should never update this.props. Look at Bad.js to see an example of what not to do.
import React from 'react';

class Bad extends React.Component {
  render() {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
}
