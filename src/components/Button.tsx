import { ButtonHTMLAttributes } from 'react'

type Props = {
	title: string
	onClick: () => void
}

// * тоже самое
// type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ title, onClick }: Props) => {
	return <button onClick={onClick}>{title}</button>
}
