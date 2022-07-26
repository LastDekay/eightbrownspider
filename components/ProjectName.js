import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import projName from '../json/projectNaming.json';
import { useState } from 'react';

const randomizeProjectName = () => {
	let newPN = '';
	for (let i = 0; i < 3; i++) {
		newPN += chooseCateWord();
	}
	return newPN;
};

const chooseCateWord = () => {
	const projKeys = Object.keys(projName['projectName']);
	const category =
		projKeys[
			Math.floor(
				Math.random() * Object.keys(projName['projectName']).length
			)
		];
	const cateKeys = Object.keys(projName['projectName'][category]);
	const cateElem =
		projName['projectName'][category][
			Math.floor(Math.random() * cateKeys.length)
		];
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
					changeDisplayProjectName(randomizeProjectName());
				}}
				title="Print JSON test"
			/>
		</View>
	);
};

export default ProjectName;
