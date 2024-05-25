export type StatisticData = {
	metric: string;
	value: number;
};

export const fetchStatisticData = async (): Promise<Array<StatisticData>> => {
	const response = await fetch(
		'https://www.greatfrontend.com/api/projects/challenges/statistics-metrics'
	);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const result = await response.json();

	return result.data;
};
