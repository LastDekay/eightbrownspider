import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import objectNames from '../json/objectNames.json';
import { useState } from 'react';

const randomizeProjectName = () => {
	let newPN = '';
	for (let i = 0; i < 3; i++) {
		newPN += chooseCateWord();
	}
	return newPN;
};

const chooseCateWord = () => {
	const projKeys = Object.keys(objectNames);
	const category =
		projKeys[Math.floor(Math.random() * Object.keys(objectNames).length)];
	const cateKeys = Object.keys(objectNames[category]);
	const cateElem =
		objectNames[category][Math.floor(Math.random() * cateKeys.length)];
	return cateElem;
};

const ProjectName = () => {
	const [displayProjectName, changeDisplayProjectName] = useState();
	return (
		<View>
			<Text>Create Project Names</Text>
			<Text>{displayProjectName ? displayProjectName : ''}</Text>
			<Button
				onPress={() => {
					console.log(Object.keys(objectNames));
					changeDisplayProjectName(randomizeProjectName());
				}}
				title="Print JSON test"
			/>
		</View>
	);
};

export default ProjectName;
