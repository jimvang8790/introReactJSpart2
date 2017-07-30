Intro to ReactJS part 2
=======================

This course will teach you the remaining most essential tools that any React.js programmer is expected to know, including lifecycle methods, proptypes, basic styling, stateless functional components, and more. You will also be introduced to your first React.js programming patterns, and learn to setup React on your local computer.

Why learn ReactJS?
------------------

ReactJS presents graceful solutions to some of front-end programming's most persistent issues. It's fast, scalable, flexible, powerful, and has a robust developer community that's rapidly growing. There's never been a better time to learn React.

npm Install
-----------

npm install --save react
npm install --save react-dom

Stateless Child
---------------

The stateless, child component will update the state of the parent component.

1. The parent component class defines a method that calls this.setState(). For an example, look in Step1.js at the .handleClick() method.
2. The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component. For an example, look in Step2.js at the end of the constructor() method.
3. Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child. Look in Step2.js, at the prop
4. The child receives the passed-down function, and uses it as an event handler. Look in Step3.js. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent's state.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}

```

Child
-----

Child had two jobs:
1. Child displayed a name.
2. Child offered a way to change that name.

Patterns within patterns within patterns!
-----------------------------------------

In lesson 2, you learned that lesson 1's pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent's state.

A child component updates its parent's state, and the parent passes that state to a sibling component.
