import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Rectangle } from 'icons'

const stylesButtonUsersList = () => ({
  root: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontSize: '24px',
    color: '#9BB0CB',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  name: {
    margin: '8px'
  }
})

const ButtonUsersList = (props) => {
  const {
    classes,
    url,
    push
  } = props

  const handleClickBack = () => {
    if (url) push(url)
  }

  return (
    <Button
      onClick={handleClickBack}
      disableRipple
      className={
        classes.root
      }
    >
      {Rectangle}
      <span className={classes.name}>Users List</span>
    </Button>
  )
}

ButtonUsersList.propTypes = {
  classes: PropTypes.object,
  url: PropTypes.string,
  push: PropTypes.func
}

export default withStyles(stylesButtonUsersList)(ButtonUsersList)
