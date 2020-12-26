import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

import App from './App';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
