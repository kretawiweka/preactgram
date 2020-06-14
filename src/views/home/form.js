import { h } from 'preact'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Modal from 'components/modal'

const Form = (props) => {
  return (
    <Modal className="modal" isOpen={props.isOpen}>
      <form noValidate autoComplete="off" onSubmit={props.onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Body" multiline fullWidth />{' '}
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="outlined" color="primary">
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={props.handleModalChange}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Modal>
  )
}

export default Form
