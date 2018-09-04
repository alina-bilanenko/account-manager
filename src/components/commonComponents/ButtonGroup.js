import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import classNames from 'classnames'
import { stylesButtonGroup } from 'styles'
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

  const handleClickBack = () => {
    if (url) push(url)
  }

  return (
    <div className={classes.buttonGroup}>
      <Button
        onClick={handleClickBack}
        variant='contained'
        color='primary'
        className={
          classNames(
            classes.button,
            { [classes.hidden]: hidden || !isCreateUser }
          )
        }>
        Back
      </Button>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        className={
          classNames(
            classes.button,
            { [classes.finish]: finish && isCreateUser}
          )
        }>
        {isCreateUser && (finish ? 'Finish' : 'Forward')}
        {!isCreateUser && 'Save'}
      </Button>
    </div>
  )
}

ButtonGroup.propTypes = {
  classes: PropTypes.object,
  finish: PropTypes.bool,
  hidden: PropTypes.bool,
  url: PropTypes.string,
  push: PropTypes.func
}

export default withStyles(stylesButtonGroup)(ButtonGroup)
