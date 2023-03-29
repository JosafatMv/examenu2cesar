import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, StatusBar, SafeAreaView, Image } from 'react-native';
import { useFormik } from 'formik';
import { Input, Button, Icon } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import * as yup from 'yup';

import RNPickerSelect from 'react-native-picker-select';

export default function LoginScreen(props) {
	const { navigation } = props;
	const [password, setPassword] = useState(false);
	const [userData, setUserData] = useState({});

	const formik = useFormik({
		initialValues: {
			user: '',
			password: '',
			role: '',
		},
		validationSchema: yup.object({
			user: yup.string().required('Usuario obligatorio'),
			password: yup.string().required('Contraseña obligatoria'),
			role: yup.string().required('Rol obligatorio'),
		}),
		validateOnChange: false,
		onSubmit: async (formValue, { setSubmitting }) => {
			const user = formValue.user;
			const password = formValue.password;
			if (user == 'josa' && password == '1234') {
				setUserData({
					user: formValue.user,
					role: formValue.role,
				});
				const data = formValue;
				navigation.navigate('form', data);
			} else {
				Toast.show({
					type: 'error',
					text1: 'Error',
					text2: 'Usuario o contraseña incorrectos',
				});
			}
			setSubmitting(false);
		},
	});

	const showPass = () => {
		setPassword(!password);
	};

	return (
		<ScrollView>
			<>
				<StatusBar barStyle={'light-content'} />

				<SafeAreaView style={styles.container}>
					<View style={{ alignItems: 'center' }}>
						<View>
							<Image
								style={styles.img}
								source={require('../../assets/logo.png')}
							/>
						</View>
					</View>

					<View style={styles.container}>
						<View style={{ alignItems: 'center' }}>
							<Input
								style={styles.inputs}
								placeholder='Pepe'
								rightIcon={
									<Icon
										type='material-community'
										name='at'
										iconStyle={styles.icon}
									/>
								}
								onChangeText={(text) =>
									formik.setFieldValue('user', text)
								}
								errorMessage={formik.errors.user}
							/>

							<Input
								style={styles.inputs}
								placeholder='****'
								secureTextEntry={password ? false : true}
								rightIcon={
									<Icon
										type='material-community'
										name={
											password
												? 'eye-off-outline'
												: 'eye-outline'
										}
										iconStyle={styles.icon}
										onPress={showPass}
									/>
								}
								onChangeText={(text) =>
									formik.setFieldValue('password', text)
								}
								errorMessage={formik.errors.password}
							/>

							<RNPickerSelect
								style={styleSelect}
								placeholder={{
									label: 'Selecciona el rol...',
									value: null,
								}}
								onValueChange={(value) =>
									formik.setFieldValue('role', value)
								}
								items={[
									{ label: 'admin', value: 'admin' },
									{
										label: 'estudiante',
										value: 'estudiante',
									},
								]}
							/>

							<View style={styles.btnContainer}>
								<Button
									title='Iniciar sesión'
									buttonStyle={styles.btn}
									titleStyle={{ color: 'black' }}
									onPress={formik.handleSubmit}
									loading={formik.isSubmitting}
								/>
							</View>
						</View>
					</View>
				</SafeAreaView>
			</>
		</ScrollView>
	);
}

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

const styleSelect = StyleSheet.create({
	inputAndroid: {
		backgroundColor: '#fff',
		marginTop: 10,
		fontSize: 16,
		padding: 10,
		borderWidth: 0.5,
		borderColor: 'black',
		borderRadius: 6,
		paddingRight: 25,
		color: 'black',
	},
	inputIOS: {
		backgroundColor: '#fff',
		marginTop: 10,
		fontSize: 16,
		padding: 10,
		borderWidth: 0.5,
		borderColor: 'black',
		borderRadius: 6,
		paddingRight: 25,
		color: 'black',
		marginVertical: -5,
	},
});
