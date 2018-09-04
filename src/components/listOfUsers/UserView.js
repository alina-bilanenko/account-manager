import React, { Component, Fragment } from "react";
import Typography from '@material-ui/core/Typography'
import { Avatar, Button, Table, TableBody, TableCell, TableRow, withStyles } from "@material-ui/core";
import PropTypes from 'prop-types'
import ButtonUsersList from 'components/commonComponents/ButtonUsersList'
import { push } from "connected-react-router";
import connect from "react-redux/es/connect/connect";
import { fieldNames, srtuctureUser } from "consts";
import classNames from 'classnames'
import { compose } from "redux"
import { Edit } from 'icons'
import {collectiveActions} from 'actions/action'

const styles = theme => ({
  captions: {
    display: 'flex',
    margin: '3.5em auto 1em auto'
  },
  caption: {
    width: '100%',
    maxWidth: 500,
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '41px',
    color: '#475666',
    textAlign: 'center',
  },
  root: {
    width: '70%',
    margin: 'auto'
  },
  body: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: '35px 58px',
    padding: '0',
    backgroundColor: '#FFFFFF'
  },
  firstRow: {
    verticalAlign: "top",
    paddingTop: theme.spacing.unit*2
  },
  tableText: {
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#475666',
    borderBottom: 'none'
  },
  tableValue: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#657C9A',
    borderBottom: 'none'
  },
  button: {
    '&:hover': {
      backgroundColor: 'unset'
    },
    padding: '4px',
    minWidth: '20px'
  }
})


const UserView = (props) => {

  const { classes, push, user, isCreateUser } = props

  const editUser = (tabName) => {
    isCreateUser()
    push(`/create-user/${tabName}`)
  }

  return (
    <div className={classes.root}>
      <div className={classes.captions}>
        <ButtonUsersList url='/list-of-user' push={push}/>
        <Typography variant='display1' gutterBottom className={classes.caption}>
          User Name
        </Typography>
      </div>
      <div className={classes.body}>
        <Avatar
          alt='photo'
          src={user[fieldNames.photo]}
          className={classes.bigAvatar}
        />

        <Table>
          <TableBody>
            {srtuctureUser.map((item) => (
              item.data.map((elem, i) => {
                if (i === 0) return (
                  <Fragment key={i} >
                    <TableRow>
                      <TableCell className={classes.tableText}/>
                      <TableCell className={classes.tableText}/>
                      <TableCell className={classes.tableText}/>
                    </TableRow>
                    <TableRow>
                      <TableCell rowSpan={item.data.length}  className={classNames(classes.tableText, classes.firstRow)}>
                        {item.title}
                        <Button
                          disableRipple
                          className={classes.button}
                          onClick={()=>editUser(item.name)}
                        >
                          {Edit}
                        </Button>
                      </TableCell>
                      <TableCell  className={classes.tableText}>
                        {elem.title}
                      </TableCell>
                      <TableCell  className={classes.tableValue}>
                        {elem.name}
                      </TableCell>
                    </TableRow>
                  </Fragment>
                );
                return (
                  <TableRow key={i}>
                    <TableCell  className={classes.tableText}>
                      {elem.title}
                    </TableCell>
                    <TableCell className={classes.tableValue}>
                      {user[elem.name]}
                    </TableCell>
                  </TableRow>
                )
              })
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


UserView.propTypes = {
  classes: PropTypes.object
}

const mapStateToProps = (store) => {
  return {
    user: store.collectiveState.editingUser
  }
}

const mapDispatchToProps = {
  push: push,
  isCreateUser: collectiveActions.createUser
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(UserView)
