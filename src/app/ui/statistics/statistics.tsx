import { fetchStatisticData } from '@/app/lib/action';
import styles from './statistics.module.css';
import { StatisticsCard } from './statistics-card/statistics-card';

export const Statistics: React.FC = async () => {
	const statisticsData = await fetchStatisticData();

	return (
		<div className={styles.desktopContainer}>
			<h3 className={styles.title}>Our mission, in numbers</h3>
			<div className={styles.cardsWrapper}>
				{statisticsData.map((statisticData, index) => (
					<StatisticsCard
						key={`${statisticData.metric} - ${index}`}
						metric={statisticData.metric}
						statistic={statisticData.value}
					/>
				))}
			</div>
		</div>
	);
};
