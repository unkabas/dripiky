import AddSong from '../components/addSong/addSong'
import Card from '../components/card/card'
import Navbar from '../components/nav/navbar'

export default function Main() {
	return (
		<div>
			<Navbar />
			<h1 className='font-extrabold text-3xl text-[#D9D9D9] p-5'>
				ROOM'S PLAYLIST
			</h1>
			<div className='grid grid-cols-3 pl-5'>
				<Card
					image='https://picsum.photos/200'
					artist='Dua Lipa'
					song='Physical'
				/>
			</div>
			<h1 className='font-extrabold text-3xl text-[#D9D9D9] p-5 mt-10'>
				SONGS
			</h1>
			<div className='flex justify-center gap-5'>
				<div className='mx-5 flex items-center justify-center'>
					<AddSong />
				</div>
				<Card
					image='https://picsum.photos/200'
					artist='Dua Lipa'
					song='Physical'
				/>
				<Card
					image='https://picsum.photos/200'
					artist='Dua Lipa'
					song='Physical'
				/>
				<Card
					image='https://picsum.photos/200'
					artist='Dua Lipa'
					song='Physical'
				/>
			</div>
		</div>
	)
}
