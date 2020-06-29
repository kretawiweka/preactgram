import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { connect } from 'react-redux'

// import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

import Header from 'components/header'
import Container from 'components/container'
import { listPost } from 'stacks/services/post/action'

import Post from './post'
import Form from './form'

const Home = (props) => {
	const [isOpenModal, setIsOpenModal] = useState(false)

	const handleModalChange = () => {
		setIsOpenModal(!isOpenModal)
	}

	useEffect(() => {
		// props.listPost()
	}, [])

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
					<Grid item xs={12} sm={6} md={4}>
						<Post />
					</Grid>
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

const mapStateToProps = (state) => ({
	postData: state.post.response.data,
})

const mapDispatchToProps = (dispatch) => ({
	listPost: () => dispatch(listPost()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
