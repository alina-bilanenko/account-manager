import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { iconTablePagination } from 'utils/consts'

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
        {iconTablePagination.map((icon, i) => (
          <IconButton
            key={i}
            onClick={event => onChangePage(event, icon.page(page, count, rowsPerPage))}
            disabled={icon.disabled(page, count, rowsPerPage)}
            aria-label={icon.label}
          >
            {theme.direction === 'rtl'
              ? icon.isDirectionRtl
              : icon.noDirectionRtl
            }
          </IconButton>
        ))}
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
