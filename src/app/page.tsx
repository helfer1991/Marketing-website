import Image from 'next/image';
import styles from './page.module.css';
import { Header } from './ui/header/header';
import { Statistics } from './ui/statistics/statistics';
import { Loading } from './ui/statistics/loading';
import { Suspense } from 'react';

export default async function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<div className={styles.desktopContainer}>
				<Image
					alt='statistics page image'
					className={styles.image}
					height={100}
					layout='responsive'
					src='/images/white-blocks.png'
					width={100}
				/>
				<Suspense fallback={<Loading />}>
					<Statistics />
				</Suspense>
			</div>
		</main>
	);
}
