# Introduction to React

## What is React?

React is a JavaScript library used for building user interfaces. It’s an open-source library that renders data as HTML views.

## Why Learn React?

1. Native JavaScript operations on the DOM are cumbersome and inefficient.
2. Directly manipulating the DOM with JavaScript leads to extensive browser reflow and repaint processes.
3. Native JavaScript lacks a component-based coding approach, resulting in low code reusability.

## Basic React Example

### 1. Import Required Packages

First, you need to import the following three packages:

- `react.development.js`
- `react-dom.development.js`
- `babel.min.js`

Make sure to import them in this order:

```html
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>
<script src="../js/babel.min.js" type="text/javascript"></script>
```
### 2. Create a Container
Next, create a container in your HTML where the React component will be rendered.


### 3. Create a Virtual DOM and Render It
Now, create a virtual DOM using JSX and render it to the container.

```html
<body>
    <!-- Prepare the container -->
    <div id="test"></div>

    <!-- Include the dependencies, in this specific order -->
    <script src="../js/react.development.js" type="text/javascript"></script>
    <script src="../js/react-dom.development.js" type="text/javascript"></script>
    <script src="../js/babel.min.js" type="text/javascript"></script>

    <!-- Use Babel to parse JSX syntax -->
    <script type="text/babel">
        // 1. Create a virtual DOM
        const VDOM = <h1>Hello</h1>; // Using JSX syntax

        // 2. Render the virtual DOM into the container
        // If multiple renderings target the same container, the last one will overwrite the previous ones.
        ReactDOM.render(VDOM, document.getElementById("test"));
    </script>
</body>
```

# JSX Basic Syntax

1. **Define a Virtual DOM**: Do not use quotes `""` when defining a virtual DOM.
2. **Embed JavaScript Expressions**: Use `{}` to embed JavaScript expressions within tags.
3. **Class Names**: Use `className` instead of `class` to specify class names.
4. **Inline Styles**: Use double curly braces `{{}}` to wrap inline styles.
5. **Single Root Element**: There can be only one root element; multiple root elements are not allowed.
6. **Tag Closure**: Tags must be properly closed.
7. **Tag Name Convention**:
   - Lowercase tag names are converted to HTML elements. If the element doesn't exist in HTML, an error will be thrown.
   - Uppercase tag names are treated as React components. If the component doesn't exist, an error will be thrown.

### JSX Expressions vs JSX Statements

- **JSX Expressions**: Return a value and can be used anywhere a value is required (e.g., `a`, `a+b`, `demo(a)`, `arr.map()`, `function text(){}`).
- **JavaScrJSXipt Statements**: Do not return a value (e.g., `if(){}`, `for(){}`, `while(){}`, `switch(){}`).

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .sss {
            color: red;
        }
    </style>
</head>
<body>
    <!-- Prepare the container -->
    <div id="test"></div>

    <!-- Include dependencies in this order -->
    <script src="../js/react.development.js" type="text/javascript"></script>
    <script src="../js/react-dom.development.js" type="text/javascript"></script>
    <script src="../js/babel.min.js"></script>

    <!-- Create a Virtual DOM using JSX -->
    <script type="text/babel">
        const MyId = "title";
        const MyData = "Cyk";
        // 1. Create a virtual DOM
        const VDOM = (
            <h1 id={MyId.toLocaleUpperCase()}>
                <span className="sss" style={{ fontSize: '50px' }}>sss</span>
            </h1>
        );
        // 2. Render the virtual DOM
        ReactDOM.render(VDOM, document.getElementById("test"));
    </script>
</body>
</html>

```
### Creating Virtual DOM: Two Methods

### 1. Using JSX:
```html
const VDOM = (
    <h1 id={MyId.toLocaleUpperCase()}>
        <span className="sss" style={{ fontSize: '50px' }}>sss</span>
    </h1>
);
```
This method was demonstrated in the example above.

### 2. Using JSX:
```html
// Create a virtual DOM using JSX
const VDOM = React.createElement('h1', { id: "title" }, "nihao");
```
Both JSX and JavaScript can create a virtual DOM, but JSX is generally preferred as it is less cumbersome, especially when dealing with multiple tags.

# Components

Components are the building blocks of a React application. When an application is built using multiple components, it is called a component-based application.

### Important Notes:

Component Naming: Component names must start with an uppercase letter.
React treats components that start with lowercase letters as native DOM elements. For example, `<div />` represents an HTML div tag, while `<Welcome />` represents a React component.

Props: Passed parameters cannot be modified within the component.

## Functional Components
### 1. Create a function. The function can take parameters and must return a virtual DOM:

```html
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 2. Render the component:
```html
ReactDOM.render(<Welcome name="ss" />, document.getElementById("div"));
```
ReactDOM.render() is called with `<Welcome name="Sara" />` as an argument.
React calls the `Welcome` component, passing `{name: 'Sara'}` as `props`.
`Welcome` returns a `Hello, Sara` element.
ReactDOM efficiently updates the DOM to display `Hello, Sara`.

## Class Components
Class components must extend React.Component.
The render() method must be overridden and return a virtual DOM.

```html
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(<Welcome name="ss" />, document.getElementById("div"));

```
Execution Process:
React parses the component tag and finds the corresponding class component.
It instantiates the class and calls the `render` method.
The `render` method returns the virtual DOM, which is then converted into a real DOM and displayed on the page.

### Component Example
Here’s an example of how components can be used together, focusing on the core code:

```html
<script type="text/babel">
    // Create a <li> component
    function GetLi(props){      
        return <li>{props.value}</li>;
    }

    // Create a class component <ul>
    class MyComponent extends React.Component {
        render() {
            let com = this.props.arr.map((item, index) =>
                // Include the <GetLi> component, passing a unique key for each item
                <GetLi value={item} key={index} />
            );
            return <ul>{com}</ul>;
        }
    }

    let num = [1, 2, 3, 4];
    // Render the component
    ReactDOM.render(<MyComponent arr={num} />, document.getElementById("test"));
</script>
```

### Key Points:
Components can be nested within each other.

When creating arrays of elements, each element should have a unique `key`.

`key` helps React identify which items have changed, been added, or removed.




# Core Properties of React Component Instances

## State

`state` is a crucial part of React components, representing the internal data that drives the component's rendering. React is often described as a `state` machine because it updates the UI based on changes in `state`. When `state` changes, React re-renders the component, ensuring that the UI reflects the current `state`.

Example: Display "The weather is hot today" on the page, and when clicked, change it to "The weather is cool today."

```html
class Weather extends React.Component {
    state = { isHot: true };

    toggleWeather = () => {
        this.setState({ isHot: !this.state.isHot });
    };

    render() {
        return (
            <h1 onClick={this.toggleWeather}>
                The weather is {this.state.isHot ? "hot" : "cool"} today.
            </h1>
        );
    }
}

ReactDOM.render(<Weather />, document.getElementById('root'));

```


## 1. Props and State

- **Props**: Props are the input parameters for a component, passed down from a parent component. They are immutable and determine the behavior and appearance of the component.
- **State**: State is the data managed internally by a component. It can be changed, allowing the component to dynamically respond to user input or other changes.

## 2. `this` Keyword

- In React class components, `this` refers to the component instance. However, because class methods run in strict mode, `this` may be `undefined` when called directly.
- To ensure `this` references the correct instance, use arrow functions when defining methods.

## 3. Modifying State with `setState`

- To update the state, use the `setState` method. This method accepts either an object or a function.
  - **Object**: Directly updates the specified state properties.
  - **Function**: Takes the current state and props as arguments and returns an object representing the new state. This method is useful when the new state depends on the previous state.
  
### Example of Object Update:
```javascript
this.setState((prevState, props) => ({
  isHot: !prevState.isHot
}));
```




### Key Points:

Updating State: 

    Use setState to update state. Direct modification won't trigger re-rendering.

Asynchronous Updates:

    React may batch multiple setState calls into a single update for performance reasons. The state might not immediately reflect the updated values right after a setState call.


### Props


**Props** (short for "properties") are used to pass data between components in React. Props are immutable, meaning they cannot be changed once set, and are primarily used for rendering dynamic content in components.

### 1. Basic Usage Example:

```html
<body>
    <div id="root"></div>
</body>

<script type="text/babel">
    class Person extends React.Component {
        render() {
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            );
        }
    }
    // Passing data via props
    ReactDOM.render(<Person name="Tom" age="41" sex="Male" />, document.getElementById('root'));
</script>



const personData = { name: "Tom", age: 41, sex: "Male" };
ReactDOM.render(<Person {...personData} />, document.getElementById('root'));
```

### 2. Passing Objects as Props:

If the data to be passed is an object, the spread operator (...) can be used to simplify the code:

```html
<script type="text/babel">
    class Person extends React.Component {
        render() {
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            );
        }
    }

    const person = { name: "Jack", age: "18", sex: "Female" };
    ReactDOM.render(<Person {...person} />, document.getElementById('root'));
</script>

```

### 3. The Spread Operator (...)
The spread operator is not only used for arrays but also has other useful applications:

### 3.1 Copying Objects

```javascript
const original = { name: "Jack", age: "18", sex: "Female" };
const copy = { ...original };
original.name = "Ted";
console.log(copy);  // { name: "Jack", age: "18", sex: "Female" }
```
In this case, `copy` is a new object, and changes to original do not affect it.

### 3.2 Merging Objects
```javascript
const original = { name: "Jack", age: "18", sex: "Female" };
const merged = { ...original, name: "Ted", hobby: "Photography" };
console.log(merged);  // { name: "Ted", age: "18", sex: "Female", hobby: "Photography" }
```



### 4. Validating `Props` with `propTypes` and `defaultProps`
React allows you to validate the types of props to avoid unexpected behavior

### 4.1 propTypes: Type Checking

```javascript
class Person extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,  // `name` must be a string and is required
        sex: PropTypes.string,  // `sex` must be a string
        speak: PropTypes.func   // `speak` must be a function
    };

    static defaultProps = {
        sex: "Not Specified",  // Default value for `sex`
        age: 18  // Default value for `age`
    };

    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.sex}</li>
            </ul>
        );
    }
}

ReactDOM.render(<Person name="Ted" age={14} speak={speak} />, document.getElementById('root'));

function speak() {
    console.log("This is a function");
}

```

### 4.2 `defaultProps`: Setting Default Values
`defaultProps` allows you to define default values for props that are not provided:

```javascript
static defaultProps = {
    sex: "Not Specified",  // Default value for `sex`
    age: 18  // Default value for `age`
};
```

### 5. Functional Components
In functional components, props are used as function arguments:
```javascript
function Person(props) {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.sex}</li>
        </ul>
    );
}

```

## Refs

Refs provide a way to access DOM nodes or React elements that are created in the `render` method.

Types of Refs

React offers three main ways to create refs:


### 1. String Refs
You can directly add a ref attribute to a DOM node to access it later. This method stores the DOM element in the component's refs object, allowing you to access the node through this.refs.

```javaScript
<input ref="dian" type="text" placeholder="Click to alert" />

inputBlur = () => {
    alert(this.refs.dian.value);
}

```

### 2. Callback Refs

With callback refs, you can pass a function as the `ref` attribute. The function receives the DOM element as its argument, allowing you to store it in a component property.

```javaScript
<input ref={self => { this.dian = self; console.log(self); }} placeholder="Click to alert" />
```

You can also extract the function and reference it:

```javaScript
isRef = (self) => {
    this.dian = self;
    console.log(self);
}

<input ref={this.isRef} type="text" placeholder="Click to alert" />
```

Note:
In React, there is a subtle difference with the callback ref method. When the component's state is updated and triggers a re-render, the function defined in the ref will be called twice. The first call passes null for initialization, and the second call passes the node information. Defining the ref function within the class can prevent it from being called twice during a re-render.

### 3. API Refs

React provides a built-in API for creating refs, which automatically assigns the DOM element to a `current` property of the ref object. Each ref needs to be created with this API and attached to the desired DOM node

```javaScript
MyRef = React.createRef();
MyRef1 = React.createRef();

<input ref={this.MyRef} type="text" placeholder="Click to alert" />
<input ref={this.MyRef1} type="text" placeholder="Click to alert" />

btnOnClick = () => {
    console.log(this.MyRef.current.value);
}
```

## Controlled and Uncontrolled Components in React

### Controlled Components

Controlled components in React refer to form elements whose values are controlled by the React state. In this approach, the React component renders the form and also manages the user input, making the React state the "single source of truth" for the form data.

### Example:
```javascript
saveName = (event) => {
    this.setState({ name: event.target.value });
}

savePwd = (event) => {
    this.setState({ pwd: event.target.value });
}

render() {
    return (
        <form action="http://www.baidu.com" onSubmit={this.login}>
            Username: <input value={this.state.name} onChange={this.saveName} type="text" />
            Password: <input value={this.state.pwd} onChange={this.savePwd} type="password" />
            <button>Login</button>
        </form>
    );
}

```

### Uncontrolled Components

Uncontrolled components, on the other hand, allow form elements to maintain their own internal state without updating the React state. The data entered by the user is accessed only when needed, typically via a `ref`.

```javascript
class Login extends React.Component {

    login = (event) => {
        event.preventDefault(); // Prevent form submission
        console.log(this.name.value);
        console.log(this.pwd.value);
    }

    render() {
        return (
            <form action="http://www.baidu.com" onSubmit={this.login}>
                Username: <input ref={self => this.name = self} type="text" name="username" />
                Password: <input ref={self => this.pwd = self} type="password" name="password" />
                <button>Login</button>
            </form>
        );
    }
}
```
# React Component Lifecycle

React components go through several specific stages from creation to termination. Throughout these stages, React provides a series of lifecycle hook functions (also known as lifecycle methods) that are called at particular moments. By defining components, we can perform specific tasks at these particular points in the component's lifecycle.

## Old Lifecycle Structure

In the old version of React, the component lifecycle is divided into three main phases:

1. **Mounting** - When the component is being inserted into the DOM.
   - `constructor()`
   - `componentWillMount()` (deprecated)
   - `render()`
   - `componentDidMount()`

2. **Updating** - When the component is being re-rendered as a result of changes to its props or state.
   - `componentWillReceiveProps(nextProps)` (deprecated)
   - `shouldComponentUpdate(nextProps, nextState)`
   - `componentWillUpdate(nextProps, nextState)` (deprecated)
   - `render()`
   - `componentDidUpdate(prevProps, prevState)`

3. **Unmounting** - When the component is being removed from the DOM.
   - `componentWillUnmount()`

These lifecycle methods provide a powerful way to execute code at specific stages of a component’s existence. However, some methods have been deprecated in newer versions of React, as the React team has introduced more efficient patterns and hooks.

### Deprecated Lifecycle Methods:
- `componentWillMount()`
- `componentWillReceiveProps(nextProps)`
- `componentWillUpdate(nextProps, nextState)`

These methods have been deprecated in favor of more robust alternatives in the new lifecycle methods introduced in React 16.3 and beyond.

**Note:** If you are using an older version of React, you may encounter these lifecycle methods, but it's recommended to upgrade to the latest version of React and adopt the new lifecycle methods.

## Old Lifecycle Diagram

Below is a diagram illustrating the old structure of the React component lifecycle:

![alt text](./image/lifeCycle.png)


## React Component Lifecycle (Latest Version)

In the latest versions of React, certain lifecycle hooks have been deprecated. According to the official React documentation:

> **The most important lesson we've learned is that outdated lifecycle methods often lead to unsafe coding practices.**

The specific lifecycle methods that have been deprecated are:

- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

These lifecycle methods are often misunderstood and misused. Moreover, we anticipate that their potential for misuse could be even greater with the introduction of asynchronous rendering in future versions of React. Therefore, in upcoming versions, these lifecycle methods will be prefixed with `UNSAFE_`. (Here, "unsafe" does not refer to security but rather indicates that code using these lifecycle methods is more likely to contain bugs in future versions of React, especially when asynchronous rendering is enabled.)

### Deprecated Methods in New Versions:

- `UNSAFE_componentWillMount`
- `UNSAFE_componentWillReceiveProps`
- `UNSAFE_componentWillUpdate`

Although these methods with the `UNSAFE_` prefix are still available, React's official recommendation is to avoid using them. There is a possibility that these methods will be completely removed in future versions.

### New Lifecycle Diagram

![alt text](./image/lifecycle2.png)

### Differences Between Old and New React Lifecycles

From the updated lifecycle diagram, we can observe the following key differences between the old and new React lifecycle:

### 1. Deprecated Lifecycle Methods
The following three lifecycle hooks have been deprecated:
- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

These methods are still available, but it's recommended to avoid using them as they might be removed in future React versions.

### 2. Introduction of New Lifecycle Methods
Two new lifecycle methods have been introduced in the updated React lifecycle:

#### `static getDerivedStateFromProps(props, state)`
- **When it's called:** This method is invoked right before calling the `render` method, both during the initial mounting and subsequent updates.
- **Characteristics:**
  - It must be declared as a static method.
  - It receives the component's props and state as arguments.
  - It must return a value, which can either be `null` or an object representing the new state.
  - Since this method is called on both initialization and updates, returning a new state object will overwrite the existing state. Therefore, modifying the state within this method will not work as expected.

#### `getSnapshotBeforeUpdate(prevProps, prevState)`
- **When it's called:** This method is invoked right before the most recently rendered output is committed to the DOM.
- **Purpose:** It allows your component to capture some information from the DOM (e.g., scroll position) before it potentially changes.
- **Return Value:** Any value returned by this method will be passed as a parameter to `componentDidUpdate()`.

### Example of using getSnapshotBeforeUpdate()

Continuously outputs content in a fixed area

```javascript
  class New extends React.Component{

        state = {num:[]};

        componentDidMount(){
            setInterval(()=>{
                let {num} = this.state;
                const news = num.length + 1;
                this.setState({num:[news,...num]})
            },500)
        }

        getSnapshotBeforeUpdate(){
            return this.refs.list.scrollHeight;
        }

        componentDidUpdate(preProps,preState,height){
            this.refs.list.scrollTop += (this.refs.list.scrollHeight - height);
        }


        render(){
            return (

                <div ref = "list" className = "list">{
                    this.state.num.map((n,index)=>{
                    return <div className="news" key={index} >Article {n}</div>
                    })
                }</div>
            )
        }

    }
```

# Diff Algorithm in React

## Overview

The Diff algorithm in React is a crucial aspect of how React manages updates to the user interface efficiently. Understanding the concept of `key` in React is essential when discussing the Diff algorithm.

### Keys in React

Each element in a React component typically has a `key` attribute. While some keys must be explicitly defined, others can be implicit.

- **Static Content**: If the content generated by `render` is static and won't change, there's no need to specify a `key`. React will automatically generate a default identifier.
- **Dynamic Content**: If your elements are dynamic and may be updated, you must explicitly define a `key`. For example, when rendering a list using `map`, each item should have a unique `key`.

```jsx
this.state.num.map((n, index) => {
  return <div className="news" key={index}>article {n}</div>
});
```

### Efficiency Concerns with Keys

Although it's possible to use the array index as a key, the official React documentation does not recommend this practice because it can lead to efficiency issues.

Example Scenario: Inefficient Key Usage
Consider an array of objects representing people:

```jsx
person: [
  {id: 1, name: "Jack", age: 18},
  {id: 2, name: "Ted", age: 19}
]

this.state.person.map((person, index) => {
  return <li key={index}>{person.name}</li>;
});

<button onClick={this.addObject}>click to add a person</button>

addObject = () => {
  let { person } = this.state;
  const p = { id: person.length + 1, name: "Kuan", age: 20 };
  this.setState({ person: [p, ...person] });
};

```


At first glance, this functionality seems to work fine. However, it can lead to performance issues. Let's examine the changes in the component's state before and after:

1. **Initial Order**: The objects are ordered as Jack, Ted.
2. **After Adding a New Object**: The order becomes Kuan, Jack, Ted.

Since we're using the `index` as the `key`, the keys for these elements change:

- Jack's original key was `0`, now it becomes `1`.
- Ted's original key was `1`, now it becomes `2`.
- Kuan becomes `0`.

When React re-renders the component, it checks whether the old virtual DOM matches the new virtual DOM based on the `key`:

- **key = 0**: Old virtual DOM content was Jack; new virtual DOM is Kuan. React considers this a change and recreates the real DOM.
- **key = 1**: Old virtual DOM content was Ted; new virtual DOM is Jack. React considers this a change and recreates the real DOM.
- **key = 2**: The old virtual DOM did not exist; a new real DOM is created.

Even though two virtual DOM elements could have been reused, React recreates everything due to the `key` changes, leading to significant performance degradation.

This problem occurs because we added the new object to the beginning of the array. Adding it to the end would avoid this issue. However, to avoid potential problems, it's recommended to use a unique identifier (like `id`) as the `key` instead of `index`.

### Issues with Using Index as Key

1. **Reversing or altering the data order**:
   - This can cause unnecessary real DOM updates. While the UI might look correct, the performance can suffer.

2. **Input elements within the structure**:
   - Incorrect DOM updates can occur, leading to UI issues.

3. **If the data order is not altered**:
   - Using the `index` as the key is generally acceptable for rendering lists where the data order is consistent.

### Choosing the Right Key

- Ideally, use a unique identifier for each data item as the `key` (e.g., `id`, phone number, or ID card number).
- If you're sure the data is only used for display and the order won't change, using the `index` as the `key` is acceptable.

### The Role of the Diff Algorithm

The Diff algorithm in React is responsible for comparing the new virtual DOM with the previous one:

- **If a matching key is found in the old virtual DOM**:
  - If the content hasn't changed, React reuses the old real DOM.
  - If the content has changed, React creates a new real DOM.

- **If no matching key is found**:
  - React creates a new real DOM and renders it on the page.


## React Scaffolding

1. **Install and Create a New Project**

   ```bash
   npx create-react-app hello-react
   ```
2. ```
    bash npm start 
    ```

### Handling Style Conflicts

As the number of components increases, the styles also become more complex. This can lead to conflicts where styles in one component might overwrite styles in another due to the order in which components are imported.

To avoid these style conflicts, follow these steps:

1. Rename the CSS File:

2. Change the file name from hello.css to hello.module.css.
Import and Use the Styles:

``` javascript
import React, { Component } from 'react';
import hello from './hello.module.css'; // Assign a name to the import

export default class Hello extends Component {
    render() {
        return (
            <h1 className={hello.title}>Hello</h1> // Use curly braces to apply the style
        );
    }
}

```


## Componentized Development Workflow

1. Component Breakdown:

     Break down the UI and extract components.

2. Implement Static Components:

    Build the structure and layout without any dynamic behavior.
3. Implement Dynamic Components:

    Dynamically display initial data.
    Define data types, names, and decide which component will hold the data.
    Handle interactions.


### Key Considerations

1. Component Breakdown and Static Implementation:

     Pay attention to the usage of `className` and `style`.

2. Dynamic Initialization of Lists:

    How to determine which component's state should hold the data?

    If only one component uses the data, store it in that component's state.

    If multiple components use the data, store it in the common parent component's state (state lifting).

3. Communication Between Parent and Child Components:

    Parent to Child: Pass data through `props`.
    Child to Parent: Pass data through `props`. The parent should pass a function to the child component in advance.

4. Distinguish Between `defaultChecked` and `checked`:

    `defaultChecked` is executed only once during initialization.
    `checked` does not have this limitation but requires the addition of an onChange method.
    Similarly, understand the difference between `defaultValue` and `value`.
5. State Management:

    The state and methods to manipulate the state should be located in the same component.


# React AJAX 

React focuses on rendering the UI and does not include built-in methods for sending AJAX requests. Therefore, you need to integrate third-party libraries or create your own wrappers for AJAX requests.

One popular library for handling AJAX in React is **Axios**.

## Handling Cross-Origin Issues

During development, you might face **CORS (Cross-Origin Resource Sharing)** issues. This happens when the protocol, domain, or port of the requested URL differs from the current page's URL, which is known as **cross-origin**.

### Solution: Using a Proxy in React

To resolve cross-origin issues in React, you can configure a proxy. Here are two common methods:

### Method 1: Configuring Proxy in `package.json`

Add the following configuration to your `package.json`:

```json
"proxy": "http://localhost:5000"
```

### Pros:

Simple configuration.

You don't need to add any prefix when making requests.

### Cons:
You can only configure one proxy.

### How it works:

When you request a resource that does not exist on the development server (running on port 3000), the request is forwarded to port 5000. The proxy prioritizes matching front-end resources.

### Method 2: Using `setupProxy.js`

1. Create Proxy Configuration File

    In the src directory, create a new file called `setupProxy.js`.

2. Define Proxy Rules

    In `setupProxy.js`, configure the proxy rules as follows:

```javascript
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:5000', 
      changeOrigin: true, 
      pathRewrite: {'^/api1': ''} 
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  );
}

```
### Pros:

    You can configure multiple proxies.
    More flexible control over whether a request should go through a proxy.
### Cons:
    More complex setup.
    When making requests, you must add a prefix (e.g., /api1 or /api2).


### Proxy Configuration Details:

- **`target`**: Specifies the backend server that will handle the forwarded request.
- **`changeOrigin`**: Controls the value of the `Host` header in the request.
  - `true`: The `Host` header will match the target server (e.g., `localhost:5000`).
  - `false`: The `Host` header will match the original request (e.g., `localhost:3000`).
- **`pathRewrite`**: Modifies the URL path by removing or replacing the specified prefix (e.g., `/api1`), ensuring that the backend receives the correct request path.



# 【react-router】

## 1. Preparation

### 1.1 SPA

To reduce issues with traditional web applications, we have another type of application called SPA (Single Page Application). 

SPAs are faster than traditional web applications because they execute logic in the browser itself rather than on the server. After the initial page load, **only data is exchanged**, not the entire HTML, which reduces bandwidth usage. They can independently request markup and data, rendering the page directly in the browser.

**Disadvantages**

1. SPA cannot remember the previous scroll position when navigating back to a page.
2. Using the browser’s forward and back buttons may trigger unnecessary requests, without properly utilizing caching.

### How Frontend Routing Works

Frontend routing mainly relies on the browser's `history`, which is the browser's history stack.

> `history` is an attribute under the BOM (Browser Object Model), and in HTML5, several APIs were added to manipulate the `history`.

The browser’s history works like a stack, where moving forward is like pushing to the stack, and moving backward is like popping from the stack.

Using the `listen` method, we can monitor route changes to detect path updates.

In HTML5, the `createBrowserHistory` API allows creating a `history` stack, enabling manual manipulation of the browser’s history.

New APIs: `pushState`, `replaceState`—similar in principle to hash-based routing. With HTML5, the URL in a single-page application doesn't include a `#`, making it more aesthetically pleasing.

## 2. Understanding and Using react-router-dom

React provides three types of routers:

- Web (for frontend)
- Native (for mobile apps)
- Anywhere (for any environment)

We primarily use the web version, which is the focus of this topic—`react-router-dom`.

> A library specifically for web development.

1. A React repository
2. Commonly used—almost every application uses this library
3. Specifically designed for SPA applications

To install: `npm i react-router-dom@5`

First, we need to structure the page layout, dividing it into a navigation section and a display section.

We need to import the `react-router-dom` library to expose attributes like `Link` and `BrowserRouter`.

```js
import { Link, BrowserRouter, Route } from 'react-router-dom'
```

Change `<a>` tags in the navigation area to `<Link>` tags:
```js
<Link className="list-group-item" to="/about">About</Link>
```
We also need to use the `<Route>` tag to match paths and switch components accordingly:
```js
<Route path="/about" component={About}></Route>
<Route path="/home" component={Home}></Route>
```

Finally, add a router. In the above code, we wrote two sets of routes, but an error will indicate that a router is needed to manage these routes. A page transition can only occur under the management of a single router.

Therefore, wrap the outer tags of `Link` and `Route` tags with `BrowserRouter` (or HashRouter), but wrapping each individually isn't ideal when there are too many routes. To solve this, wrap the entire `App` component in `BrowserRouter` inside the `index.js` file in the `App.jsx` directory:
```js
// index.js
<BrowserRouter>
  <App />
</BrowserRouter>

```

## 3. Routing Components vs General Components

In our previous content, we treated the `Home` component and the `About` component as general components, placing them in the `components` folder under the `src` directory. However, we noticed that they differ slightly from ordinary components. For ordinary components, we reference them using tags. But as shown above, when using them as routes, we reference them using `{Home}`.

From this, we can conclude that there are differences between general components and routing components:

1. **Different Syntax**

   - **General Component**: `<Demo/>`
   - **Routing Component**: `<Route path="/demo" component={Demo}/>`
   
2. **Different Storage Locations**

   - To standardize our code organization, routing components are typically placed in the `pages`/`views` folder, while general components are placed in the `components` folder.


## 4. NavLink Tag

### 4.1 Basic Usage

The `NavLink` tag serves the same purpose as the `Link` tag but offers more functionality.

In previous demos, you might have noticed that clicking a button did not highlight it. Normally, we can achieve the highlight effect by adding an `active` class to the tag.

The `NavLink` tag helps us achieve this effect automatically. When a `NavLink` is selected, it will automatically add an `active` class to the tag.

```html
<NavLink className="list-group-item" to="/about">About</NavLink>
{/* NavLink will look for the class specified by activeClassName="ss" when clicked.
    By default, it is "active". This is because the Link component is fixed and cannot be customized. */}

<NavLink activeClassName="ss" className="list-group-item" to="/about">About</NavLink>
<NavLink className="list-group-item" to="/home">Home</NavLink>
```
By default, the NavLink tag adds the active class. However, you can customize this by adding an activeClassName attribute to the tag. The following code demonstrates how to use activeClassName to apply a specific class when the link is clicked

### 4.2 `NavLink` Component Wrapping
In the above `NavLink` tags, we repeatedly write out style names or activeClassName, which leads to redundant code. To improve this, we can encapsulate the `NavLink` into a `MyNavLink` component.

First, create a new `MyNavLink` component:
```html
// Spread object properties using {...object} to apply all properties from the object
<NavLink className="list-group-item" {...this.props} />

```

An important point is that the content inside the tag will become a `children` property. Therefore, when using `MyNavLink`, the content inside the tag will be part of the `props`, achieving the desired effect.

```html
<MyNavLink to="/home">home</MyNavLink>
```

##  Resolving Path Conflicts with `Switch`

Consider the following code:

```html
<Route path="/home" component={Home}></Route>
<Route path="/about" component={About}></Route>
<Route path="/about" component={About}></Route>
```

Here, we see that the About component is rendered twice. Why does this happen?

This is due to how the Route mechanism works. Once it matches the first `/about` route, it continues to match subsequent routes, leading to the About component being rendered twice. To address this issue, you can use the Switch component to wrap your routes.

```html
<Switch>
    <Route path="/home" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/about" component={About}></Route>
</Switch>

```
When using `Switch`, make sure to import the `Switch` component from react-router-dom. This will resolve the issue and ensure that only the first matching route is rendered.

## 5. Resolving Issues with Styles Not Loading in Nested Routes

Here are three methods to solve this problem:

### 5.1 Use Absolute Paths for Styles
```javasctipt
<link href="/css/bootstrap.css" rel="stylesheet">
```
### 5.2 Use `%PUBLIC_URL%`
```javasctipt
<link href="%PUBLIC_URL%/css/bootstrap.css" rel="stylesheet">
```
### 5.3 Use `Use HashRouter`

HashRouter adds a # to the URL, which means that the part of the URL after the # is not handled by the server, thus avoiding path issues for styles.

## 6. Route Redirection

When configuring routes, initially opening a page might not match any component. This results in an empty or inappropriate page. To handle this, you should set up a default route to redirect to a specific component.

You can use `Redirect` for this purpose:

```html
<Redirect to="/home" />
```

With this line of code, if the page cannot find the specified path, it will redirect to the `/home` page. This way, accessing port 3000 will automatically redirect to `/home`, achieving the desired effect.

Here’s an example of how to set up default routing to the `/home` component:
``` html
<Switch>
    <Route path="/about" component={About}/>
    {/* exact={true}: Enables strict matching mode; path must be exact */}
    <Route path="/home" component={Home}/>
    {/* Redirect: If none of the above routes match, redirect to this path */}
    <Redirect to="/home"/>
</Switch>

```


## 7. Route Navigation

### 7.1 Push and Replace Modes

By default, the push mode is enabled. This means that every time you navigate, a new address is pushed onto the stack. When you click back, you can return to the previous address.

However, when reading messages, this frequent navigation might feel tedious. In such cases, you can enable the replace mode. Unlike push mode, replace mode **replaces** the current address with the new one, effectively updating the top of the stack.

To enable replace mode, simply add the `replace` attribute to the link where it is needed.

```jsx
<Link replace to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
```

### 7.2 Programmatic Route Navigation

By leveraging the API on the `this.props.history` object, you can control route navigation, including forward and backward actions.

```js
        -this.prosp.history.push()
        -this.prosp.history.replace()
        -this.prosp.history.goBack()
        -this.prosp.history.goForward()
        -this.prosp.history.go(1)
```
You can also implement route navigation by binding events. For example, you can bind an `onClick` event to a button, and when the event is triggered, a callback function is executed to handle the navigation.

### 7.3 withRouter

When you need to add back or forward buttons within a page, you might encounter an issue where the **history object is unavailable**. This is because the component you're working with is a regular component.

```js
//push+params
// this.props.history.push(`/home/message/detail/${id}/${title}`)

//push+search
// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

//push+state
this.props.history.push(`/home/message/detail`,{id,title})

//replace+params
//this.props.history.replace(`/home/message/detail/${id}/${title}`)

//replace+search
// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

//replace+state
this.props.history.replace(`/home/message/detail`,{id,title})
```

Only route components can access the history object.

To resolve this, you can use the `withRouter` function from the `react-router-dom` package to wrap your exported `Header` component. This allows regular components to access the history object and the special APIs provided by route components.


```js
// Header/index.jsx
import { withRouter } from 'react-router-dom'
// use `withRouter` export the class
export default withRouter(index);
```

Simply import `withRouter` in the component you want to wrap, and you'll have access to these route-related features.

## 8. Differences Between BrowserRouter and HashRouter

#### **They differ in how they are implemented**

For `BrowserRouter`, it uses the history API that React has wrapped specifically for it. The history in this context differs from the browser's history. Through this API, `BrowserRouter` can manage routing, but it’s important to note that this API was introduced in HTML5, so it is **not compatible with versions of Internet Explorer below IE9**.

On the other hand, `HashRouter` works by utilizing the hash value in the URL. To put it simply, it's like an anchor navigation. Anchor tags save history, which enables the back and forward functionality in `HashRouter`. Moreover, `HashRouter` does not request the content after the `#` symbol, providing better compatibility.

#### **Different display in the address bar**

- `HashRouter` includes a `#` symbol in the URL path, such as `localhost:3000/#/demo/test`.

#### **State changes after refreshing the page**

1. In `BrowserRouter`, the state is saved in the history object, so refreshing does not lose the state.
2. In `HashRouter`, refreshing the page causes the state to be lost.
