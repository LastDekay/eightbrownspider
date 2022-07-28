import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProjectName from './components/ProjectName';
import ProjectIdea from './components/ProjectIdea';
import { Button } from 'react-native-web';

const displayTestRender = (comp) => {
	switch (comp) {
		case 'PN':
			return <ProjectName />;

		case 'PI':
			return <ProjectIdea />;

		default:
			return <Text>Test Statement</Text>;
	}
};

export default function App() {
	const [viewComp, changeComp] = useState('PN');
	console.log(viewComp);
	return (
		<View style={styles.container}>
			<Text>Eight Brown Spider Work Assist App</Text>
			<select
				onChange={(comp) => {
					changeComp(comp.target.value);
				}}
			>
				<option comp={'PN'}>PN</option>
				<option comp={'PI'}>PI</option>
			</select>
			{displayTestRender(viewComp)}
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
