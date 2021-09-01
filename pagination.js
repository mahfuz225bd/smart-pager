function pagination(data, perPage) {
	const totalRec = data.length;
	const recordsLastPage = totalRec % perPage;

	// Getting page ranges \w 2-dimensional array
	const pageRange = () => {
		const result = [];

		// For first record
		result.push([0, perPage]);

		for (let i = 1; i < parseInt(totalRec / perPage); i++) {
			result.push([perPage * i + 1, perPage * (i + 1)]);
		}

		// recordsLastPage is odd (or extra records need to show)
		if (recordsLastPage) {
			const prevLast = result[result.length - 1][1];
			result.push([prevLast + 1, prevLast + recordsLastPage]);
		}

		return result;
	};

	// Showing data \w index range
	const showData = (from, to) => {
		const result = [];

		for (let i = from; i < to + 1; i++) {
			const element = data[i];
			result.push(element);
		}

		return result;
	};

	const paginatedData = [];

	pageRange().forEach((eachRange) => {
		const from = eachRange[0];
		const to = eachRange[1];

		paginatedData.push(showData(from, to));
	});
  
	return paginatedData;
}
