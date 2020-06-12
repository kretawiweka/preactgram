import { h } from 'preact'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import style from './style'

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Typography variant="body2" color="textSecondary" align="center">
			Based on the{' '}
			<Link href="https://github.com/mui-org/material-ui/tree/master/examples/preact">
				original example
			</Link>{' '}
			<Button variant="contained" color="primary">
				Primary
			</Button>
			by the Material-UI team.
		</Typography>
	</div>
)

export default Home
