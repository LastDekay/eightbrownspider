import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Modal } from 'react-native-web';
import ProjectName from './components/ProjectName';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Eight Brown Spider Work Assist App</Text>
			<ProjectName />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
