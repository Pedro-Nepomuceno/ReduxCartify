# ReduxCartify

A simple and yet powerfull application that uses Redux for managing and centralizing application state

Libraries used

Redux Tolkit

- setting up and working with Redux traditionally involves writing a significant amount of boilerplate code.
- Redux Toolkit provides several utilities to streamline the Redux development process such as :

. createSlice: A function that generates Redux slice reducers. It allows you to define a reducer and its actions in a more concise manner.

. configureStore: A function that simplifies the creation of a Redux store. It combines the reducer, middleware, and devtools setup in a more opinionated way.

. createAsyncThunk: A utility to simplify the process of handling asynchronous actions (e.g., API calls) in a Redux application.

Axios

- Axios can be used to make asynchronous HTTP requests, such as fetching data from a server or sending data to a server
- Axios can be integrated into Redux Thunk middleware to make API calls and update the Redux store with the received data
