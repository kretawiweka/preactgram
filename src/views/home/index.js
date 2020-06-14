import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

// import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import Header from 'components/header'
import Container from 'components/container'

import Post from './post'
import Form from './form'

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModalChange = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <Fragment>
      <Header />
      <Container>
        <Form isOpen={isOpenModal} handleModalChange={handleModalChange} />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Post />
          </Grid>
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
export default Home
