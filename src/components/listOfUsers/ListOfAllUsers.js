import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import TableList from 'components/listOfUsers/TableList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { stylesListUsers } from 'styles'

const ListOfAllUsers = (props) => {
  const { classes, usersList, push } = props
  return (
    <div className={classes.root}>
      <Typography
        variant='display1'
        gutterBottom
        className={classes.caption}
      >
    List of users
      </Typography>
      <TableList usersList={usersList} push={push} />
    </div>
  )
}

ListOfAllUsers.propTypes = {
  classes: PropTypes.object,
  userList: PropTypes.array,
  push: PropTypes.func
}

const mapStateToProps = (props) => {
  return {
    usersList: props.usersList
  }
}

const mapDispatchToProps = {
  push: push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesListUsers)(ListOfAllUsers))
