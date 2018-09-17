import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import classNames from 'classnames'
import { stylesButtonGroup } from 'styles/styles'
import PropTypes from 'prop-types'

const ButtonGroup = (props) => {
  const {
    classes,
    finish,
    hidden,
    url,
    push,
    isCreateUser
  } = props

  return (
    <div className={
      classNames(
        classes.buttonGroup,
        { [classes.position]: hidden || !isCreateUser }
      )
    }>
      {!hidden && isCreateUser
        ? (<Button
          onClick={url ? () => push(url) : null}
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Back
        </Button>)
        : null
      }
      <Button
        type='submit'
        variant='contained'
        color='primary'
        className={
          classNames(
            classes.button,
            { [classes.finish]: finish && isCreateUser }
          )
        }>
        {isCreateUser
          ? finish
            ? 'Finish'
            : 'Forward'
          : 'Save'
        }
      </Button>
    </div>
  )
}

ButtonGroup.propTypes = {
  classes: PropTypes.object,
  finish: PropTypes.bool,
  hidden: PropTypes.bool,
  url: PropTypes.string,
  push: PropTypes.func,
  isCreateUser: PropTypes.bool
}

export default withStyles(stylesButtonGroup)(ButtonGroup)
