import Image from 'next/image';
import headline from '../public/headline.svg';

import Navbar from './Navbar';
import CallToAction from './CallToAction';
import SubscribeForm from './SubscribeForm';

function Hero() {
	return (
		<header className='hero-area w-full flex flex-col items-center'>
			<div className='overlay'>
				<span></span>
				<span></span>
			</div>
			<div>
				<Navbar />
				<div>
					<div className='px-8'>
						<CallToAction />
						<SubscribeForm />
					</div>
					<div className='pt-20 flex justify-center'>
						<Image src={headline} alt='Une personne devant un ordinateur' />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Hero;
