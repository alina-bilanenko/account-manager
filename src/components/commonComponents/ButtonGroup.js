import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import classNames from 'classnames'
import { stylesButtonGroup } from 'styles'

const ButtonGroup = (props) => {
  const {
    classes,
    finish,
    hidden,
    url = undefined,
    push
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
            { [classes.hidden]: hidden }
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
            { [classes.finish]: finish }
          )
        }>
        {finish ? 'Finish' : 'Forward'}
      </Button>
    </div>
  )
}

export default withStyles(stylesButtonGroup)(ButtonGroup)
