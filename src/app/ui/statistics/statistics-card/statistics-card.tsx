import styles from './statistics-card.module.css';

type StatisticCardProps = {
	metric: string;
	statistic: number;
};

export const StatisticsCard: React.FC<StatisticCardProps> = ({
	metric,
	statistic,
}) => {
	return (
		<div className={styles.card}>
			<h4 className={styles.statistic}>{statistic.toLocaleString()}</h4>
			<p className={styles.metric}>
				{(metric[0].toUpperCase() + metric.slice(1)).replace('_', ' ')}
			</p>
		</div>
	);
};
