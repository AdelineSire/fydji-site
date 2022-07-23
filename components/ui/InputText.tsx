import { FC, Dispatch } from 'react';

interface IInputText {
	email: string;
	setEmail: Dispatch<React.SetStateAction<string>>;
}

const InputText: FC<IInputText> = ({ email, setEmail }) => {
	return (
		<input
			className='rounded px-2 grow text-black'
			type='email'
			placeholder='prenom.nom@gmail.com'
			value={email}
			onChange={(e) => setEmail(e.target.value)}
			required
		/>
	);
};

export default InputText;
