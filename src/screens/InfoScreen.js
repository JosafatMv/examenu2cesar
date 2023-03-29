import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';

const InfoScreen = ({ route, navigation }) => {
	const { role, user, age, imc, imcClass } = route.params;

	const signOut = () => {
		navigation.navigate('index');
	};

	return (
		<View>
			<Text style={{ fontSize: 24, marginBottom: 20 }}>Rol: {role} </Text>
			<Text style={{ fontSize: 24, marginBottom: 20 }}>
				Hola: {user} Tienes: {age} y tu IMC: {imc} te clasificas como
				IMC: {imcClass}
			</Text>

			<Button
				title='Salir'
				buttonStyle={styles.btn}
				titleStyle={{ color: 'black' }}
				onPress={signOut}
			/>
		</View>
	);
};

export default InfoScreen;

const styles = StyleSheet.create({
	container: {},
	img: {
		width: 130,
		height: 130,
		marginBottom: 10,
		marginTop: 10,
	},
	inputs: {},
	icon: {},
	btnContainer: {},
	btn: {},
});
