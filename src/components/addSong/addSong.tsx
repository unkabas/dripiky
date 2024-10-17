import plus from './plus.svg'
export interface AddSongProps {
	className?: string
}
export default function AddSong({ className }: AddSongProps) {
	return (
		<div>
			<button className={`btn btn-ghost w-20 h-20 rounded-full ${className}`}>
				<img src={plus} alt='' className='' />
			</button>
		</div>
	)
}
