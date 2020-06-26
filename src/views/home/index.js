import { h, Fragment } from 'preact'
import { useState, useEffect, useContext } from 'preact/hooks'

// import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

import { Context, Consumer } from 'stacks/context'

import Header from 'components/header'
import Container from 'components/container'

import Post from './post'
import Form from './form'

const Home = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const context = useContext(Context)
	const { dispatch } = context

	const handleModalChange = () => {
		setIsOpenModal(!isOpenModal)
	}

	useEffect(() => {
		context.post.list(dispatch)
	}, [])

	return (
		<Consumer>
			{({ state }) => (
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
							{!state.post.meta.load &&
								state.post.response.data.map((item) => (
									<Grid
										key={item.id}
										item
										xs={12}
										sm={6}
										md={4}
									>
										<Post data={item} />
									</Grid>
								))}
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
			)}
		</Consumer>
	)
}
export default Home
