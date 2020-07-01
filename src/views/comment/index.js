import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { useSelector, useDispatch } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Header from 'components/header'
import Container from 'components/container'
import { loadComment } from 'stacks/services/comment/action'

import Comment from './comment'

const CommentContainer = () => {
	const dispatch = useDispatch()
	const [commentData, setCommentData] = useState(null)
	const commentDataState = useSelector((state) => state.comment)

	useEffect(() => {
		console.log('test')
	}, [])

	useEffect(() => {
		dispatch(loadComment())
	}, [dispatch])

	useEffect(() => {
		commentDataState.response.data !== null &&
			setCommentData(commentDataState.response.data)
	}, [commentDataState])

	return (
		<Fragment>
			<Header />
			<Container>
				<Typography variant="h4" component="h4">
					Comment
				</Typography>
				<Grid container spacing={1}>
					{!commentDataState.meta.isLoading &&
					commentData !== null ? (
						commentData.map((item, index) => (
							<Grid key={index} item xs={12} sm={6} md={4}>
								<Comment data={item} />
							</Grid>
						))
					) : (
						<Typography
							variant="body1"
							component="p"
							gutterBottom={true}
						>
							Loading ...
						</Typography>
					)}
				</Grid>
			</Container>
		</Fragment>
	)
}
export default CommentContainer
