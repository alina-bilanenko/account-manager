import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button
} from '@material-ui/core'
import PropTypes from 'prop-types'

function ConfirmDeleteDialog (props) {
  const {
    classes,
    deleteUser,
    openConfirmation,
    deleteConfirmation
  } = props

  return (
    <Dialog
      fullScreen={false}
      open={openConfirmation}
      onClose={() => deleteUser(0)}
      aria-labelledby='responsive-dialog-title'
      className={classes.dialog}
    >
      <DialogTitle
        id='responsive-dialog-title'
        className={classes.dialog}
      >
        {'Are you sure you want to delete the user?'}
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={() => deleteUser(0)}
          color='primary'
          className={classes.buttonDialog}
        >
          CANCEL
        </Button>
        <Button
          onClick={deleteConfirmation}
          color='primary'
          className={classes.buttonDialog}
          autoFocus
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

ConfirmDeleteDialog.propTypes = {
  classes: PropTypes.object,
  deleteUser: PropTypes.func,
  openConfirmation: PropTypes.bool,
  deleteConfirmation: PropTypes.func
}

export default (ConfirmDeleteDialog)
