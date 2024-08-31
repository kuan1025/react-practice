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

    const person = { name: "Zhang San", age: "18", sex: "Female" };
    ReactDOM.render(<Person {...person} />, document.getElementById('root'));
</script>

```

### 3. The Spread Operator (...)
The spread operator is not only used for arrays but also has other useful applications:

### 3.1 Copying Objects

```javascript
const original = { name: "Zhang San", age: "18", sex: "Female" };
const copy = { ...original };
original.name = "Li Si";
console.log(copy);  // { name: "Zhang San", age: "18", sex: "Female" }
```
In this case, `copy` is a new object, and changes to original do not affect it.

### 3.2 Merging Objects
```javascript
const original = { name: "Zhang San", age: "18", sex: "Female" };
const merged = { ...original, name: "Li Si", hobby: "Photography" };
console.log(merged);  // { name: "Li Si", age: "18", sex: "Female", hobby: "Photography" }
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

ReactDOM.render(<Person name="Li Si" age={14} speak={speak} />, document.getElementById('root'));

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



























