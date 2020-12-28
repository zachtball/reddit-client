import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import theme from './theme';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
