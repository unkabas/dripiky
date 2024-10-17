export default function Card() {
	return (
		<>
			<div className='card'>
				<div className='card-body px-3 pt-3'>
					<img src='https://picsum.photos/200' alt='' className='rounded-md' />
				</div>
				<div className='card-footer flex flex-col items-start pl-3'>
					<p className='font-bold'>Song</p>
					<p className=''>Artist</p>
				</div>
			</div>
		</>
	)
}
