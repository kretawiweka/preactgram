import { h, Fragment } from 'preact'

// import Typography from '@material-ui/core/Typography'

import Header from 'components/header'
import Container from 'components/container'

import Post from './post'

const Home = () => (
  <Fragment>
    <Header />
    <Container>
      <Post />
    </Container>
  </Fragment>
)

export default Home
