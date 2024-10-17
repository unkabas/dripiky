import home from './home.svg'
import player from './player.svg'
import profile from './profile.svg'
export default function Navbar() {
	return (
		<nav
			className='
			sticky
			top-0
			flex
			justify-between
			bg-[#353535]
			items-center
			z-10
			'
		>
			<div className='flex gap-10 my-2'>
				<button className=''>
					<img src={home} alt='home' className='ml-10' />
				</button>
				<button className=''>
					<img src={player} alt='player' />
				</button>
				<input className='input text-gray-600' placeholder='Search' />
			</div>
			<button className=''>
				<img src={profile} alt='profile' className='justify-self-end ' />
			</button>
		</nav>
	)
}
