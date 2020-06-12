import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import style from './style'

const Profile = ({ user }) => {
	const [count, setCount] = useState(10)
	const [time, setTime] = useState(Date.now())
	const updateTime = () => {
		setTime(Date.now())
	}
	useEffect(() => {
		setTime(setInterval(updateTime, 1000))
	}, [])
	const increament = () => {
		setCount(count + 1)
	}
	return (
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named {user}.</p>
			<div>Current time: {new Date(time).toLocaleString()}</div>
			<p>
				<button onClick={increament}>Click Me</button> {count} Clicked
				times.
			</p>
		</div>
	)
}

export default Profile
