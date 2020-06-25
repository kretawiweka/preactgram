import { h } from 'preact'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Comment = ({ data }) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="h2" gutterBottom={true}>
					{data.name}
				</Typography>
				<Typography
					variant="caption"
					component="h6"
					gutterBottom={true}
				>
					{data.email}
				</Typography>
				<Typography variant="body1" component="p">
					{data.body}
				</Typography>
			</CardContent>
			<CardActions>
				<Button color="primary">Edit</Button>
				<Button color="secondary">Delete</Button>
			</CardActions>
		</Card>
	)
}

export default Comment
