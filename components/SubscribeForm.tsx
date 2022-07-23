import { useState } from 'react';
import axios from 'axios';
import InputText from './ui/InputText';
import Button from './ui/Button';
import SubscriptionInfo from './ui/SubscriptionInfo';
import Spinner from './ui/Spinner';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function SubscribeForm() {
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [{ isRegistered, isGmail }, setIsRegistered] = useState({
		isRegistered: false,
		isGmail: false,
	});
	const gmailLink = `https://mail.google.com/mail/u/0/#advanced-search/from=${EMAIL}&query=${EMAIL}&isrefinement=true&fromdisplay=${EMAIL}`;

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setIsSubmitting(true);
		axios
			.post(`${API_URL}/create/user`, { email: email })
			.then((res) => {
				setIsRegistered({
					isRegistered: res.data.success,
					isGmail: res.data.isGmail,
				});
				setIsSubmitting(false);
			})
			.catch((error) => console.log('error: ', error));
		setEmail('');
	};

	return (
		<>
			{isRegistered ? (
				<SubscriptionInfo isGmail={isGmail} gmailLink={gmailLink} />
			) : (
				<form className='flex flex-row gap-4' onSubmit={handleSubmit}>
					<InputText email={email} setEmail={setEmail} />
					{isSubmitting ? <Spinner /> : <Button>Je m&apos;inscris</Button>}
				</form>
			)}
		</>
	);
}

export default SubscribeForm;
