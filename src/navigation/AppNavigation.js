import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import InfoScreen from '../screens/InfoScreen';
import { FormScreen } from '../screens/FormScreen';
const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='index'
				component={LoginScreen}
				options={{ title: 'Iniciar sesión' }}
			/>
			<Stack.Screen
				name='form'
				component={FormScreen}
				options={{
					title: 'Formulario',
					headerBackButtonMenuEnabled: false,
				}}
			/>
			<Stack.Screen
				name='info'
				component={InfoScreen}
				options={{
					title: 'Información',
					headerBackButtonMenuEnabled: false,
				}}
			/>
			{/* <Stack.Screen
				name='register'
				component={RegistrationScreen}
				options={{ title: 'Registro' }}
			/>
			<Stack.Screen
				name='password'
				component={PasswordScreen}
				options={{ title: 'Recuperar contraseña' }}
			/>
			<Stack.Screen
				name='homeClient'
				component={HomeCScreen}
				options={{ title: 'Inicio' }}
			/> */}
		</Stack.Navigator>
	);
};
