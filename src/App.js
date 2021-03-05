import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './components/Appbar.js';
import Routes from './routes/index';

import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

Amplify.configure(awsExports);

const App = () => {
	const palletType = 'dark';
	const darkTheme = createMuiTheme({
		palette: {
			type: palletType
		}
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<>
				{/* <CssBaseline /> */}
				<Appbar />
				<Routes />
			</>
		</ThemeProvider>
	);
};

export default withAuthenticator(App);
