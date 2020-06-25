import { h, Fragment } from 'preact'
import { useEffect, useContext } from 'preact/hooks'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { Context, Consumer } from 'stacks/context'

import Header from 'components/header'
import Container from 'components/container'

import Comment from './comment'

const Commnet = () => {
	const context = useContext(Context)
	const { dispatch } = context

	useEffect(() => {
		context.comment.list(dispatch)
	}, [])

	return (
		<Consumer>
			{({ state }) => (
				<Fragment>
					<Header />
					<Container>
						<Typography variant="h4" component="h4">
							Comment
						</Typography>
						<Grid container spacing={1}>
							{!state.meta.load &&
								state.response.data.map((item) => (
									<Grid
										key={item.id}
										item
										xs={12}
										sm={6}
										md={4}
									>
										<Comment data={item} />
									</Grid>
								))}
						</Grid>
					</Container>
				</Fragment>
			)}
		</Consumer>
	)
}
export default Commnet
