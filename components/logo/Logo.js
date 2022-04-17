import LogoSvg from './LogoSvg';

function Logo() {
	return (
		<div className='flex flex-row items-center px-8 py-4 gap-2'>
			<LogoSvg />
			<h1 className='text-3xl  font-logo'>Fydji</h1>
		</div>
	);
}

export default Logo;
