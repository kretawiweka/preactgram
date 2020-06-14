import { h } from 'preact'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Post = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          title
        </Typography>
        <Typography variant="body2" component="p">
          body
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Edit</Button>
        <Button color="secondary">Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Post
