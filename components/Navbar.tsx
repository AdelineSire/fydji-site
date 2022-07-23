import Link from 'next/link';

import Logo from './logo/Logo';

function Navbar() {
	return (
		<nav>
			<Link href='/'>
				<>
					<Logo />
				</>
			</Link>
		</nav>
	);
}

export default Navbar;
