import Image from 'next/image';
import headline from '../public/headline.svg';

import Navbar from './Navbar';
import CallToAction from './CallToAction';
import SubscribeForm from './SubscribeForm';

function Hero() {
	return (
		<header className='hero-area'>
			<div className='overlay'>
				<span></span>
				<span></span>
			</div>
			<Navbar />
			<div>
				<div className='px-8'>
					<CallToAction />
					<SubscribeForm />
				</div>
				<div className='pt-20'>
					<Image src={headline} alt='Une personne devant un ordinateur' />
				</div>
			</div>
		</header>
	);
}

export default Hero;
