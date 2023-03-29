import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input, Button, Icon } from 'react-native-elements';

export const FormScreen = ({ route, navigation }) => {
	const { role, user } = route.params;

	const calculateImc = (weight, height) => {
		const weightInKg = Number(weight);
		const heightInM = Number(height) / 100;
		const imc = weightInKg / (heightInM * heightInM);
		return imc.toFixed(2);
	};

	const calculateClass = (imc) => {
		if (imc < 18) return 'Peso bajo';
		if (imc > 18.1 && imc < 24.9) return 'Normal';
		if (imc > 25 && imc < 29.9) return 'Sobre peso';
		if (imc > 30 && imc < 34.9) return 'Sobre peso 1';
		if (imc > 35 && imc < 39.9) return 'Sobre peso 2';
		if (imc > 40) return 'Riesgo';
	};

	const calculateAge = (yearOfBirth) => {
		return new Date().getFullYear() - Number(yearOfBirth);
	};

	const formik = useFormik({
		initialValues: { weight: '', height: '', yearOfBirth: '' },
		validationSchema: yup.object({
			weight: yup
				.number('El peso debe ser un número')
				.required('El peso es requerido'),
			height: yup
				.number('La altura debe ser un número')
				.required('La altura es requerida'),
			yearOfBirth: yup
				.number('El año de nacimiento debe ser un número')
				.required('El año de nacimiento es requerido'),
		}),
		validateOnChange: false,
		onSubmit: async (formValue, { setSubmitting }) => {
			console.log(formValue);

			const imc = calculateImc(formValue.weight, formValue.height);
			const imcClass = calculateClass(imc);
			const age = calculateAge(formValue.yearOfBirth);

			navigation.navigate('info', {
				role,
				user,
				imc,
				imcClass,
				age,
			});

			setSubmitting(false);
		},
	});

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<>
				<Text style={{ fontSize: 24, marginBottom: 20 }}>
					Rol: {role}{' '}
				</Text>

				<Text>Peso</Text>
				<Input
					style={styles.inputs}
					placeholder='Peso (kg)'
					onChangeText={(text) =>
						formik.setFieldValue('weight', text)
					}
					keyboardType='numeric'
					errorMessage={formik.errors.weight}
				/>

				<Text>Altura</Text>
				<Input
					style={styles.inputs}
					placeholder='Altura (cm)'
					onChangeText={(text) =>
						formik.setFieldValue('height', text)
					}
					keyboardType='numeric'
					errorMessage={formik.errors.height}
				/>

				<Text>Año de nacimiento</Text>
				<Input
					style={styles.inputs}
					placeholder='Año de nacimiento'
					onChangeText={(text) =>
						formik.setFieldValue('yearOfBirth', text)
					}
					keyboardType='numeric'
					errorMessage={formik.errors.yearOfBirth}
				/>

				<Button
					title='IMC'
					buttonStyle={styles.btn}
					titleStyle={{ color: 'black' }}
					onPress={formik.handleSubmit}
					loading={formik.isSubmitting}
				/>
			</>
		</View>
	);
};

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
