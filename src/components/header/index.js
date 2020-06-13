import { h } from 'preact'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
  return (
    <AppBar color="transparent">
      <Toolbar>
        <Typography variant="h6">dada</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
