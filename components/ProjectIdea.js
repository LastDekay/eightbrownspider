import React from 'react';
import { Button, Text, View } from 'react-native-web';
import objectNames from '../json/objectNames.json';
import randomMethods from '../randomMethods';

const randMod = new randomMethods();

const genIdeas = () => {
	//cats = categories
	const rawList = Object.keys(objectNames).filter(
		(cat) =>
			!(cat = ['Color', 'Texture', 'Military', 'Ranking'].includes(cat))
	);

	const ideaCats = randMod.sampleList(rawList, 3);

	const finalList = [];
	for (let cats of ideaCats) {
		finalList.push(randMod.selectFrom(objectNames[cats]));
	}
	console.log('raw', rawList, 'sampled', ideaCats, 'final', finalList);
};

const ProjectIdea = () => {
	return (
		<View>
			<Text>3d Project Idea</Text>
			<Button title="Test" onPress={genIdeas} />
		</View>
	);
};

export default ProjectIdea;
