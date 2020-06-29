import { h, Fragment } from 'preact'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Header from 'components/header'
import Container from 'components/container'

import Comment from './comment'

const Commnet = () => {
	return (
		<Fragment>
			<Header />
			<Container>
				<Typography variant="h4" component="h4">
					Comment
				</Typography>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={6} md={4}>
						<Comment />
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	)
}
export default Commnet
