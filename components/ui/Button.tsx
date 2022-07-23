import { FC } from 'react';

interface IButton {
	children: string;
}

const Button: FC<IButton> = ({ children }) => {
	return (
		<button
			className='bg-green shadow-xl font-button text-white font-semibold uppercase tracking-wider p-4 rounded'
			type='submit'
		>
			{children}
		</button>
	);
};

export default Button;
