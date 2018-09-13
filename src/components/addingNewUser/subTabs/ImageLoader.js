import React from 'react'
import {
  withStyles,
  Button,
  Typography,
  FormHelperText, Dialog
} from '@material-ui/core'
import { Add } from 'utils/icons'
import { stylesImgLoader } from 'styles/styles'
import PropTypes from 'prop-types'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

function ImageLoader (props) {
  const {
    classes,
    input,
    meta,
    type,
    photo,
    changeCrop,
    crop,
    modalOpenDialogCrop,
    changeModalOpenDialogCrop
  } = props

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

  function getCroppedImg (image, pixelCrop) {
    const img = new Image()
    img.src = image
    const canvas = document.createElement('canvas')
    canvas.width = img.width * (pixelCrop.width / 100)
    canvas.height = img.height * (pixelCrop.height / 100)
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      img,
      img.width * (pixelCrop.x / 100),
      img.height * (pixelCrop.y / 100),
      img.width * (pixelCrop.width / 100),
      img.height * (pixelCrop.height / 100),
      0,
      0,
      img.width * (pixelCrop.width / 100),
      img.height * (pixelCrop.height / 100)
    )

    return canvas.toDataURL('image/jpeg')
  }

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        () =>
          input.onChange(reader.result),
        false
      )
      reader.readAsDataURL(e.target.files[0])
      changeModalOpenDialogCrop()
    }
  }

  const onCropComplete = crop => {
    changeCrop({ ...crop })
  }
  const onCropChange = crop => {
    changeCrop({ ...crop })
  }

  const handleCancel = () => {
    changeModalOpenDialogCrop()
  }

  const handleCropClose = () => {
    input.onChange(getCroppedImg(photo, crop))
    changeModalOpenDialogCrop()
  }

  return (
    <div>
      <input
        {...input}
        accept='image/*'
        name={input.name}
        value={undefined}
        onChange={onSelectFile}
        className={classes.input}
        id='icon-button-file'
        type={type}
      />
      {photo
        ? (<Dialog
          title='Crop the image'
          open={modalOpenDialogCrop}
          classes={
            { paper: classes.sizeDialog }
          }
        >
          <ReactCrop
            src={photo}
            crop={crop}
            minWidth={20}
            minHeight={20}
            onComplete={onCropComplete}
            onChange={onCropChange}
          />
          <div className={classes.buttons}>
            <Button
              label='Cancel'
              onClick={handleCancel}
            >Cancel</Button>
            <Button
              label='Crop'
              onClick={handleCropClose}
            >Save</Button>
          </div>
        </Dialog>
        )
        : null
      }
      <label htmlFor='icon-button-file'>
        <Button
          variant='outlined'
          component='span'
          className={classes.avatar}
          disableRipple
        >
          {meta.error
            ? (<FormHelperText
              id='name-error-text'
              className={classes.error}
            >
              {meta.error}
            </FormHelperText>)
            : null
          }
          {AddAvatar}
        </Button>
      </label>
    </div>
  )
}
ImageLoader.propTypes = {
  classes: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string
}
export default withStyles(stylesImgLoader)(ImageLoader)
