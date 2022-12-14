import { StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider  from './src/context/context';

export default function App() {
	return (
			<NavigationContainer>
				<StatusBar barStyle="dark-content" backgroundColor="red"/>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</NavigationContainer>
	);
}
 

