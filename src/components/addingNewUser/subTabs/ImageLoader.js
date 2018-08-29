import React from 'react'
import {
  withStyles,
  Button,
  Typography,
  FormHelperText
} from '@material-ui/core'
import { Add } from 'icons'
import { stylesImgLoader } from 'styles'
import PropTypes from 'prop-types'

function ImageLoader (props) {
  const { classes, input, meta, type } = props

  const AddAvatar = (
    <Typography
      variant='body2'
      gutterBottom
      className={classes.addAvatar}
    >
      {Add}
      <span>add avatar</span>
    </Typography>
  )

  function handleFile (e) {
    e.preventDefault()

    const file = e.target.files[0]
    if (!file) {
      return
    }

    let reader = new FileReader()

    reader.onloadend = () => {
      input.onChange(reader.result)
    }

    reader.readAsDataURL(file)
  }

  return (
    <div>
      <input
        accept='image/*'
        name={input.name}
        {...input}
        value={undefined}
        onChange={handleFile}
        className={classes.input}
        id='icon-button-file'
        type={type}
      />
      <label htmlFor='icon-button-file'>
        <Button
          variant='outlined'
          component='span'
          className={classes.avatar}
        >
          {meta.error &&
          <FormHelperText
            id='name-error-text'
            className={classes.error}
          >
            {meta.error}
          </FormHelperText>
          }
          {AddAvatar}
        </Button>
      </label>
    </div>
  )
}

ImageLoader.propTypes = {
  classes: PropTypes.object.isRequired
}

ImageLoader.propTypes = {
  classes: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string
}

export default withStyles(stylesImgLoader)(ImageLoader)
