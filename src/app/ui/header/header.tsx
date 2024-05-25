import styles from './header.module.css';

export const Header: React.FC = () => (
	<div className={styles.container}>
		<h1 className={styles.header}>Statistics</h1>
		<h2 className={styles.subtitle}>More than premium abstract imagery</h2>
		<p className={styles.description}>
			Our platform is more than just a service to us - it is a catalyst for
			enriching lives through premium abstract imagery.
		</p>
	</div>
);
