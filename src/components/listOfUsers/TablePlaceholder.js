import React from 'react'
import { Button, withStyles, TableRow, TableCell } from '@material-ui/core'
import { stylesTablePlaceholder } from 'styles'
import PropTypes from 'prop-types'

const CustomCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontSize: '35px',
    textAlign: 'center',
    color: '#9BB0CB',
    height: '300px',
    verticalAlign: 'middle',
    backgroundColor: '#FAFCFF'
  }
}))(TableCell)

const TablePlaceholder = ({ classes, push }) => {
  const handleClick = () => {
    push('/create-user/account')
  }

  return (
    <TableRow className={classes.row}>
      <CustomCell component='td' scope='row' colSpan='6'>
        <p>No users here :(</p>
        <Button
          onClick={handleClick}
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Create new user
        </Button>
      </CustomCell>
    </TableRow>
  )
}

TablePlaceholder.propTypes = {
  classes: PropTypes.object.isRequired,
  push: PropTypes.func
}

export default withStyles(stylesTablePlaceholder)(TablePlaceholder)
