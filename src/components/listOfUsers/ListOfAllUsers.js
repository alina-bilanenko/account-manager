import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'
import TableList from 'components/listOfUsers/TableList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from "connected-react-router";

const styles = theme => ({
  caption: {
    width: '100%',
    maxWidth: 500,
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '41px',
    color: '#475666',
    textAlign: 'center',
    margin: '1.5em auto 1em auto'
  },
  root: {
    width: '71%',
    margin: 'auto'
  }
})

const ListOfAllUsers = (props) => {
  const { classes, usersList, push } = props
  return (
    <div className={classes.root}>
      <Typography variant='display1' gutterBottom className={classes.caption}>
    List of users
      </Typography>
      <TableList usersList={usersList} push={push}/>
    </div>
  )
}

ListOfAllUsers.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = (props) => {
  return {
    usersList: props.usersList
  }
}

const mapDispatchToProps = {
  push: push,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListOfAllUsers))
