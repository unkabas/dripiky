import Card from '../components/card/card'
import Navbar from '../components/nav/navbar'

export default function Main() {
	return (
		<div>
			<Navbar />
			<Card
				image='https://picsum.photos/200'
				artist='Dua Lipa'
				song='Physical'
			/>
		</div>
	)
}
