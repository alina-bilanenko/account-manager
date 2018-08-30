import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button
} from '@material-ui/core'
import TablePlaceholder from 'components/listOfUsers/TablePlaceholder'
import { fieldNames } from 'consts'
import moment from 'moment'
import { Edit, Delete } from 'icons'
import { stylesTable } from 'styles'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#4E86E4',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    fontSize: '14px'
  },
  body: {
    fontSize: 14,
    '&:first-child': {
      padding: '0'
    },
    border: 'none',
    fontWeight: '500',
    color: '#475666',
    lineHeight: 'normal'
  }
}))(TableCell)

function TableList (props) {
  const { classes, usersList, push } = props

  const createContact = (user) => {
    return user[fieldNames.phone] &&
    user[fieldNames.phone].length &&
    user[fieldNames.phone][0]
      ? user[fieldNames.phone][0]
      : user[fieldNames.email]
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead >
          <TableRow>
            <CustomTableCell />
            <CustomTableCell>name</CustomTableCell>
            <CustomTableCell>company</CustomTableCell>
            <CustomTableCell>contacts</CustomTableCell>
            <CustomTableCell>last update</CustomTableCell>
            <CustomTableCell />
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          {usersList.length
            ? usersList.map(user => {
              return (
                <TableRow className={classes.row} key={user.id}>
                  <CustomTableCell component='td' scope='row'>
                    <Avatar
                      alt='photo'
                      src={user[fieldNames.photo]}
                      className={classes.bigAvatar}
                    />
                  </CustomTableCell>
                  <CustomTableCell>
                    <span>{`${user[fieldNames.firstName]} ${user[fieldNames.lastName]}`}</span>
                    <br />
                    <span className={classes.userName}>{user[fieldNames.userName]}</span>
                  </CustomTableCell>
                  <CustomTableCell>
                    {user[fieldNames.company]}
                  </CustomTableCell>
                  <CustomTableCell>
                    {createContact(user)}
                  </CustomTableCell>
                  <CustomTableCell>
                    {moment(user[fieldNames.lastUpdate]).fromNow()}
                  </CustomTableCell>
                  <CustomTableCell>
                    <Button
                      disableRipple
                      className={classes.button}
                    >
                      {Edit}
                    </Button>
                    <Button
                      disableRipple
                      className={classes.button}
                    >
                      {Delete}
                    </Button>
                  </CustomTableCell>
                </TableRow>
              )
            })
            : <TablePlaceholder push={push} />
          }
        </TableBody>
      </Table>
    </Paper>
  )
}

TableList.propTypes = {
  classes: PropTypes.object.isRequired,
  userList: PropTypes.array,
  push: PropTypes.func
}

export default withStyles(stylesTable)(TableList)
