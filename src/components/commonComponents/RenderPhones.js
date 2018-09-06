import React from 'react'
import { Field } from 'redux-form'
import InputWithMask from 'components/commonComponents/InputMask'
import { Typography, withStyles } from '@material-ui/core'
import { Add, ButtonDelete } from 'utils/icons'
import Button from '@material-ui/core/Button/Button'
import { stylesRenderPhone } from 'styles/styles'
import PropTypes from 'prop-types'

const RenderPhone = ({ fields, classes }) => {
  return (
    <ul className={classes.root}>
      {fields.map((name, index) =>
        <li key={index} className={classes.button}>
          {fields.length > 1 &&
          <button
            type='button'
            onClick={() => { if (fields.length > 1)fields.remove(index) }}
            className={classes.buttonRemove}
          >
            {ButtonDelete}
          </button>}
          <Field
            name={name}
            type='text'
            component={InputWithMask}
            label={`Phone #${index + 1}`}
            mask='+7 (999) 999-99-99'
          />
        </li>
      )}
      {(fields.length < 3) &&
      (<li>
        <Button
          variant='outlined'
          component='span'
          className={classes.addNumber}
          disableRipple
          onClick={() => { if (fields.length < 3) fields.push() }}
        >
          <Typography variant='body2' gutterBottom>
            {Add}
            <span className={classes.addNumberColor}>add phone number</span>
          </Typography>
        </Button>
      </li>)}
    </ul>
  )
}

RenderPhone.propTypes = {
  fields: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(stylesRenderPhone)(RenderPhone)
