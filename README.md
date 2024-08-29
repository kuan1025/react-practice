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
