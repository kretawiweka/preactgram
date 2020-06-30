import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { useSelector, useDispatch } from 'react-redux'

// import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

import Header from 'components/header'
import Container from 'components/container'
import { loadPost } from 'stacks/services/post/action'

import Post from './post'
import Form from './form'

const Home = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [postData, setPostData] = useState(null)
	const dispatch = useDispatch()
	const postDataState = useSelector((state) => state.post)

	const handleModalChange = () => {
		setIsOpenModal(!isOpenModal)
	}

	useEffect(() => {
		dispatch(loadPost())
	}, [dispatch])

	useEffect(() => {
		postDataState.response.data !== null &&
			setPostData(postDataState.response.data)
	}, [postDataState])

	return (
		<Fragment>
			<Header />
			<Container>
				<Typography variant="h4" component="h4">
					Post
				</Typography>
				<Form
					isOpen={isOpenModal}
					handleModalChange={handleModalChange}
				/>
				<Grid container spacing={1}>
					{!postDataState.meta.isLoading && postData !== null ? (
						postData.map((item, index) => (
							<Grid key={index} item xs={12} sm={6} md={4}>
								<Post data={item} />
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
			<Fab
				className="float-btn"
				color="primary"
				aria-label="add"
				onClick={handleModalChange}
			>
				<AddIcon />
			</Fab>
		</Fragment>
	)
}

export default Home
