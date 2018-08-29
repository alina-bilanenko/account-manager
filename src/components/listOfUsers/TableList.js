import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePlaceholder from 'components/listOfUsers/TablePlaceholder'
import {fieldNames} from "../../consts";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#4E86E4',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    fontSize: '14px',
    paddingLeft: theme.spacing.unit*8
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    boxShadow: 'unset'
  },
  table: {
    minWidth: 600,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
})


function TableList (props) {
  const { classes, usersList } = props

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead >
          <TableRow>
            <CustomTableCell>name</CustomTableCell>
            <CustomTableCell>company</CustomTableCell>
            <CustomTableCell>contacts</CustomTableCell>
            <CustomTableCell>last update</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.length
            ? usersList.map(user => {
              return (
                <TableRow className={classes.row} key={user.id}>
                  <CustomTableCell component='td' scope='row'>
                    {user[fieldNames.lastName]}
                  </CustomTableCell>
                  <CustomTableCell>{user[fieldNames.company]}</CustomTableCell>
                  <CustomTableCell>{user[fieldNames.email]}</CustomTableCell>
                  <CustomTableCell>{user[fieldNames.gender]}</CustomTableCell>
                </TableRow>
              )
            })
            : <TablePlaceholder />
          }
        </TableBody>
      </Table>
    </Paper>
  )
}

TableList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TableList)
