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
	console.log('isSubmitted: ', isSubmitted);
	console.log('isGmail: ', isGmail);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('email: ', email);
		axios
			.post('http://localhost:3002/actions/signup-email', { email: email })
			.then((res) => {
				setEmail('');
				console.log('res.data: ', res.data);
				setSubmitted({
					isSubmitted: res.data.success,
					isGmail: res.data.isGmail,
				});
				console.log('isSubmitted: ', isSubmitted);
				console.log('isGmail: ', isGmail);
			})
			.catch((error) => console.log('error: ', error));
	};

	const EmailForm = () => {
		return (
			<form className='flex flex-row gap-4' onSubmit={handleSubmit}>
				<InputText email={email} setEmail={setEmail} />
				<Button>Je m'inscris</Button>
			</form>
		);
	};

	const EmailFormFeedBack = () => {
		return (
			<div className='flex flex-col items-center justify-center gap-4 text-black bg-white p-8'>
				<p>Vous avez reçu votre premier email !</p>
				{isGmail && (
					<Link href={gmailLink}>
						<a className='p-4 bg-green text-white' target='_blank'>
							Consulter
						</a>
					</Link>
				)}
			</div>
		);
	};

	return <div>{isSubmitted ? <EmailFormFeedBack /> : <EmailForm />}</div>;
}

export default SubscribeForm;
