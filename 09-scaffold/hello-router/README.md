# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## 10. Passing Parameters

### 10.1 Passing `params` Parameters

Our goal is to display detailed content when clicking on a message from a list.

There are three methods to achieve this. The first method is to pass `params` parameters. Since the data we display comes from a dataset, we need to pass the data to the `Detail` component.

First, we save the detailed data list in `DetailData` and keep the message list in the `state` of the `Message` component.

We can pass data by appending it to the end of the route address.

```html
 <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
```

As shown above, we append the `id` and `title` of the message to the route URL.

> **Note**: Make sure to use template literals and the `$` symbol to retrieve data.

When registering the route, we can pass data using the `:parameterName` format.

```html
<Route path="/home/message/detail/:id/:title" component={Detail} />
```

As shown, by using `:id/:title`, we successfully receive the `id` and `title` passed from `Link`.

This way, we not only navigate to the route but also pass the necessary data to the `Detail` component.

In the `Detail` component, print `this.props` to see the received data.

You'll notice that the passed data is stored in the `params` attribute of the `match` object.

Therefore, in the `Detail` component, we can access the `params` data passed from the `Message` component.

```js
const { id, title } = this.props.match.params
const findResult = DetailData.find((detailObj) => {
    return detailObj.id === id
})

Finally, we can render the data.

### 10.2 Passing `search` Parameters

Another way to pass data is by using the `search` parameters.

First, we define the method of data transmission.

In the `Link`, we use the `?` symbol to indicate that the following part is usable data.

```html
<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
```

When passing data with `search`, there's no need to declare it again in the `Route`. It can be accessed directly in the `Detail` component.

You'll find that the data is stored as a string in the `search` attribute of the `location` object. We can use a library like `qs` to parse it.

> `qs` is a package managed by the npm repository and can be installed using the `npm install qs` command.
>
> 1. `qs.parse()` parses a URL into an object format.
>
> 2. `qs.stringify()` serializes an object into a URL format, concatenated with `&`.
>
> ```js
> // Debugging in Node.js
> const qs = require('qs');
> 
> // 1. qs.parse()
> const str = "username='admin'&password='123456'";
> console.log(qs.parse(str)); 
> // Output: { username: "admin", password: "123456" }
> 
> // 2. qs.stringify()
> const a = qs.stringify({ username: 'admin', password: '123456' });
> console.log(a); 
> // Output: username=admin&password=123456
> 
> 
> How is `qs.stringify()` different from `JSON.stringify()`?
> 
> var a = {name:'hehe', age:10};
> The result of `qs.stringify()` is:
> name=hehe&age=10
> --------------------
> While the result of `JSON.stringify()` is:
> "{"name":"hehe","age":10}"
> ```


### 10.3 Passing `state` Parameters

Using `state` parameters is the most ideal method because it doesn't expose data in the URL, keeping it in internal state.

```html
<Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
```

First, when registering the `Link`, we pass a route object, which includes a destination and a `state` object. This allows us to access the passed `state` data in the `Detail` component.


```js
const { id, title } = this.props.location.state
```

> **Note**: There's no need to declare the data reception in this method.

In the `Detail` component, we can retrieve the passed data from the `state` attribute of the `location` object.
