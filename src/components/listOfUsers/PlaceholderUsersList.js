import React, { Fragment } from "react";
import { Button, withStyles, Grid} from '@material-ui/core'
import { stylesListPlaceholder } from 'styles'
import PropTypes from 'prop-types'


const PlaceholderUsersList = ({ classes, push }) => {
  const handleClick = () => {
    push('/create-user/account')
  }

  return (
    <Grid container className={classes.body}>
      <Grid item xs={12} sm={12} >
        <p>No users here :(</p>
        <Button
          onClick={handleClick}
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Create new user
        </Button>
      </Grid>
    </Grid>
  )
}

PlaceholderUsersList.propTypes = {
  classes: PropTypes.object.isRequired,
  push: PropTypes.func
}

export default withStyles(stylesListPlaceholder)(PlaceholderUsersList)
