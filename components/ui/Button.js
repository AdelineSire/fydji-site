function Button({ onClick, children }) {
	return (
		<button
			className='shadow-xl text-white font-semibold uppercase tracking-wider p-4 rounded'
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
