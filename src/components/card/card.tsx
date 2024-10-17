interface CardProps {
	image: string
	artist: string
	song: string
}

export default function Card({ image, artist, song }: CardProps) {
	return (
		<>
			<div className='card w-13 h-auto'>
				<div className='card-body px-3 pt-3'>
					<img src={image} alt='' className='rounded-md' />
				</div>
				<div className='card-footer flex flex-col items-start pl-3 pb-5'>
					<p className='font-extrabold'>{song}</p>
					<p className='font-light'>{artist}</p>
				</div>
			</div>
		</>
	)
}
