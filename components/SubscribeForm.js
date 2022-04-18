import { useState } from 'react';
import Link from 'next/Link';
import axios from 'axios';
import InputText from './ui/InputText';
import Button from './ui/Button';

function SubscribeForm() {
	const [email, setEmail] = useState('');
	const [{ isSubmitted, isGmail }, setSubmitted] = useState({
		isSubmitted: false,
		isGmail: false,
	});
	const mail = 'adeline.sire%40gmail.com';
	const gmailLink = `https://mail.google.com/mail/u/0/#advanced-search/from=${mail}&query=${mail}&isrefinement=true&fromdisplay=${mail}`;

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('email: ', email);
		axios
			.post('http://localhost:3002/actions/signup-email', { email: email })
			.then((res) => {
				console.log("l'email a été enregistré");
				setEmail('');
				setSubmitted({
					isSubmitted: res.data.success,
					isGmail: res.data.isGmail,
				});
			})
			.catch((error) => console.log('error: ', error));
	};

	return (
		<>
			{isSubmitted ? (
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
			) : (
				<form className='flex flex-row gap-4' onSubmit={handleSubmit}>
					<InputText email={email} setEmail={setEmail} />
					<Button>Je m'inscris</Button>
				</form>
			)}
		</>
	);
}

export default SubscribeForm;
