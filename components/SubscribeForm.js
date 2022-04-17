import { useState } from 'react';
import axios from 'axios';
import InputText from './ui/InputText';
import Button from './ui/Button';

function SubscribeForm() {
	const [email, setEmail] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('email: ', email);
		axios
			.post('http://localhost:3002/actions/signup-email', { email: email })
			.then(() => {
				console.log("l'email a été enregistré");
				setEmail('');
				setSubmitted('true');
			})
			.catch((error) => console.log('error: ', error));
	};

	return (
		<form className='flex flex-row gap-4' onSubmit={handleSubmit}>
			<InputText email={email} setEmail={setEmail} />
			<Button>Je m'inscris</Button>
		</form>
	);
}

export default SubscribeForm;
