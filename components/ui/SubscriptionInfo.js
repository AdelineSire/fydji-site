import Link from 'next/link';

function SubscriptionInfo({ isGmail, gmailLink }) {
	return (
		<div className='flex flex-col items-center justify-center gap-4 text-black bg-white p-8'>
			<p>Vous avez reçu votre premier email !</p>
			{isGmail && (
				<Link href={gmailLink}>
					<a
						className='bg-green shadow-xl font-button text-white font-semibold uppercase tracking-wider p-4 rounded'
						target='_blank'
					>
						Consulter
					</a>
				</Link>
			)}
		</div>
	);
}

export default SubscriptionInfo;
