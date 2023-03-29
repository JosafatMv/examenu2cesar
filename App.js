import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import LoginScreen from './src/screens/LoginScreen';
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {
	return (
		<>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
			{/* <LoginScreen /> */}
			<Toast />
		</>
	);
}
