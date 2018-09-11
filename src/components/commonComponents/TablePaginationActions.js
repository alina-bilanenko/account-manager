import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
})

class TablePaginationActions extends React.Component {
  render () {
    const {
      classes,
      count,
      page,
      rowsPerPage,
      theme,
      onChangePage
    } = this.props

    return (
      <div className={classes.root}>
        <IconButton
          onClick={event => onChangePage(event, 1)}
          disabled={page === 1}
          aria-label='First Page'
        >
          {theme.direction === 'rtl'
            ? <LastPageIcon />
            : <FirstPageIcon />
          }
        </IconButton>
        <IconButton
          onClick={event => onChangePage(event, page - 1)}
          disabled={page === 1}
          aria-label='Previous Page'
        >
          {theme.direction === 'rtl'
            ? <KeyboardArrowRight />
            : <KeyboardArrowLeft />
          }
        </IconButton>
        <IconButton
          onClick={event => onChangePage(event, page + 1)}
          disabled={page >= Math.ceil(count / rowsPerPage)}
          aria-label='Next Page'
        >
          {theme.direction === 'rtl'
            ? <KeyboardArrowLeft />
            : <KeyboardArrowRight />
          }
        </IconButton>
        <IconButton
          onClick={event => onChangePage(
            event,
            Math.max(1, Math.ceil(count / rowsPerPage))
          )}
          disabled={page >= Math.ceil(count / rowsPerPage)}
          aria-label='Last Page'
        >
          {theme.direction === 'rtl'
            ? <FirstPageIcon />
            : <LastPageIcon />
          }
        </IconButton>
      </div>
    )
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions
)
