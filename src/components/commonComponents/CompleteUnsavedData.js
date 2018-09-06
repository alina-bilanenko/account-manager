import React from 'react'
import {
  Typography,
  BottomNavigationAction,
  withStyles
} from '@material-ui/core'
import { Close } from 'icons'
import PropTypes from 'prop-types'

const styles = theme => ({
  unsavedUserData: {
    backgroundColor: '#5E97F3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  unsavedUserDataText: {
    fontWeight: '500',
    lineHeight: '16px',
    color: '#FFFFFF',
    marginBottom: 0
  },
  unsavedUserDataTextBlack: {
    fontWeight: '900',
    lineHeight: '16px',
    color: '#FFFFFF',
    padding: '0 !important',
    marginLeft: theme.spacing.unit * 2
  },
  rightIcons: {
    marginLeft: 'auto',
    minWidth: '30px',
    maxWidth: '30px',
    padding: '0 !important'
  }
})

const CompleteUnsavedData = ({ classes, completeData, closeComplete }) => (
  <div className={classes.unsavedUserData}>
    <Typography
      variant='body2'
      gutterBottom
      className={classes.unsavedUserDataText}
    >
      You have an unsaved user data. Do you want to complete it?
    </Typography>
    <BottomNavigationAction
      icon='Continue'
      className={classes.unsavedUserDataTextBlack}
      disableRipple
      onClick={completeData}
    />
    <BottomNavigationAction
      icon={Close}
      className={classes.rightIcons}
      disableRipple
      onClick={closeComplete}
    />
  </div>
)

CompleteUnsavedData.propTypes = {
  classes: PropTypes.object,
  completeData: PropTypes.func,
  closeComplete: PropTypes.func
}

export default withStyles(styles)(CompleteUnsavedData)
