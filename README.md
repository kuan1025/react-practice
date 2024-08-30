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