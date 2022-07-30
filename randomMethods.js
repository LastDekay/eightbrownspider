class RandomMethods {
	testMod = () => {
		console.log(this.sampleList([1, 2, 3, 4, 5], 4));
	};

	sampleList = (arr, choose) => {
		const sampleList = [];
		for (let i = 0; i < choose; i++) {
			let itemC = arr[Math.floor(Math.random() * arr.length)];
			while (sampleList.includes(itemC)) {
				itemC = arr[Math.floor(Math.random() * arr.length)];
			}
			sampleList.push(itemC);
		}
		return sampleList;
	};

	selectFrom = (arr) => {
		return arr[Math.floor(Math.random() * arr.length)];
	};
}

export default RandomMethods;
