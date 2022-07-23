import LogoSvg from './LogoSvg';

function Logo() {
	return (
		<div className='flex flex-row items-center px-8 py-4 gap-2'>
			<LogoSvg />
			<h1 className='text-3xl font-logo text-white'>Fydji</h1>
			<span className='self-end font-bold text-white text-[0.6em]'>BETA</span>
		</div>
	);
}

export default Logo;
