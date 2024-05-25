import { fetchStatisticData } from '@/app/lib/action';
import styles from './statistics.module.css';
import { StatisticsCard } from './statistics-card/statistics-card';
import { Suspense } from 'react';
import { Loading } from './loading';

export const Statistics: React.FC = async () => {
	const statisticsData = await fetchStatisticData();

	return (
		<div>
			<h3 className={styles.title}>Our mission, in numbers</h3>
			<Suspense fallback={<Loading />}>
				<div className={styles.cardsWrapper}>
					{statisticsData.map((statisticData, index) => (
						<StatisticsCard
							key={`${statisticData.metric} - ${index}`}
							metric={statisticData.metric}
							statistic={statisticData.value}
						/>
					))}
				</div>
			</Suspense>
		</div>
	);
};
