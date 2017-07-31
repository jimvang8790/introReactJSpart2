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

// There are many different ways to use styles in React. This lesson is focused on one of them: inline styles.
// An inline style is a style that's written as an attribute, like this:
<h1 style={{ color: 'red' }}>Hello world</h1> // The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX."

// another exmaple
import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }} >Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

// An alternative that's often nicer is to store a style object in a variable, and then inject that variable into JSX.
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color:      'darkred'
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

// In React, style names are written in camelCase:
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color:      'darkred',
  marginTop: '100px',
  fontSize: '50px'
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

// In React, if you write a style value as a number, then the unit "px" is assumed.
{ fontSize: 30 }

// If you want to use units other than "px," you can use a string:
{ fontSize: "2em" }

// another example
import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color:      'darkred',
  marginTop: 100,
  fontSize: 50
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);
