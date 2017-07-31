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

React programmers are expected to know
--------------------------------------

make a stateless functional component, how to make a propType, how to write a form, and how to use styles

dividing components into presentational components and container components.

separating presentational components from display components
------------------------------------------------------------
Separating container components from presentational components helps to answer that question. It shows you when it might be a good time to divide a component into smaller components. It also shows you how to perform that division.

A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes. We'll cover those advantages in this lesson.

Stateless functional components usually have props passed to them.

To access these props, give your stateless functional component a parameter. This parameter will automatically be equal to the component's props object.

It's customary to name this parameter props

Not only are stateless functional components more concise, but they will subtly influence how you think about components in a positive way. They emphasize the fact that components are basically functions! A component takes two optional inputs, props and state, and outputs HTML and/or other components.

Validation
----------

In this lesson, you will learn to use an important React feature called propTypes.

propTypes are useful for two reasons. The first reason is prop validation.

Validation can ensure that your props are doing what they're supposed to be doing. If props are missing, or if they're present but they aren't what you're expecting, then a warning will print in the console.

This is useful, but reason #2 is arguably more useful: documentation.

Documenting props makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.

React Form
----------

In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application.

Controlled vs Uncontrolled
--------------------------

React forms: controlled component and uncontrolled component.
An uncontrolled component is a component that maintains its own internal state.
A controlled component is a component that does not maintain any internal state.

```
let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.

```
The important thing here is that the <input /> keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.
The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.
A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.
