import React from 'react'
import ReactGoogleMapLoader from 'react-google-maps-loader'
import ReactGooglePlacesSuggest from 'react-google-places-suggest'
import { withStyles, InputLabel } from '@material-ui/core'
import { stylesGoogleAddress } from 'styles'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const MY_API_KEY = 'AIzaSyD6o3pVfK5AraeDIOnmUI1wQsK5nv8U6v0'

class GoogleAddress extends React.Component {
  handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    this.props.input.onChange(geocodedPrediction.formatted_address)
  }

  render () {
    const { input, label, classes } = this.props

    return (
      <div className={classes.root}>
        <InputLabel
          className={classes.bootstrapFormLabel}
        >
          {label}
        </InputLabel>
        <ReactGoogleMapLoader
          params={{
            key: MY_API_KEY,
            libraries: 'places,geocode'
          }}
          render={googleMaps =>
            googleMaps && (
              <ReactGooglePlacesSuggest
                googleMaps={googleMaps}
                autocompletionRequest={{
                  input: input.value
                }}
                onSelectSuggest={this.handleSelectSuggest}
                textNoResults={null}
                customRender={prediction => (
                  <div className={classNames('customWrapper', classes.customAddress)}>
                    {prediction
                      ? prediction.description
                      : ''}
                  </div>
                )}
              >
                <input
                  type='text'
                  value={input.value}
                  placeholder=''
                  onChange={input.onChange}
                  className={classes.bootstrapInput}
                />
              </ReactGooglePlacesSuggest>
            )
          }
        />
      </div>
    )
  }
}

GoogleAddress.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(stylesGoogleAddress)(GoogleAddress)
