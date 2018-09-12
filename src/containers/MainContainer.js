import React, { Component } from 'react'
import {
  withStyles,
  Grid,
  BottomNavigationAction,
  Typography
} from '@material-ui/core'
import { Logo, AddUser, ListOfUsers } from 'utils/icons'
import { mainStyles } from 'styles/styles'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { collectiveActions } from 'actions/action'
import { editingUser } from 'actions/listOfUsersActions'
import { paginationActions } from 'actions/paginationActions'
import classNames from 'classnames'
import routes from 'utils/route'
import { headerLink } from 'utils/consts'

class MainContainer extends Component {
  static AddNewUser (classes) {
    return (
      <Typography
        variant='body2'
        gutterBottom
        className={classes.text}
      >
        {AddUser}
        <span className={classes.icon}>Add new user</span>
      </Typography>
    )
  }

  static ListAllUsers (classes) {
    return (
      <Typography
        variant='body2'
        gutterBottom
        className={classes.text}
      >
        {ListOfUsers}
        <span className={classes.icon}>List of users</span>
      </Typography>
    )
  }

  hiddenButtonDeleteRow = (e) => {
    if (!e.target.closest('#show-delete-button') &&
      !e.target.closest('#delete-button')) {
      this.props.deleteUserId(0)
    }
  }

  handlerClickAddUser = () => {
    this.props.isCreateUser(true)
    this.props.changeEditingUser()
  }

  handlerClickListOfUsers = () => {
    this.props.setFilter('')
    this.props.changePage(1)
  }

  render () {
    const { classes, location: { pathname: path } } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify='center'>
          <Grid item xs={12} className={classes.header}>
            <div className={classes.headerFlex}>
              <div className={classes.logo}>
                {Logo}
              </div>
              <div className={classes.logo}>
                {headerLink.map((link, i) => (
                  <Link
                    to={link.linkTo}
                    className={classes.linkUnderlain}
                    onClick={this[link.onClick]}
                    key={i}
                  >
                    <BottomNavigationAction
                      icon={MainContainer[link.icon](classes)}
                      className={classNames(
                        classes.link,
                        {
                          [classes.activeLink]: link.classActive(path)
                        }
                      )}
                      disableRipple
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} onClick={this.hiddenButtonDeleteRow}>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  exact = {!!route.exact}
                  path = {route.path}
                  component={route.component}
                  key={i}
                />
              ))}
            </Switch>
          </Grid>
        </Grid>
      </div>
    )
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object,
  isCreateUser: PropTypes.func,
  changeEditingUser: PropTypes.func,
  deleteUserId: PropTypes.func,
  changePage: PropTypes.func,
  setFilter: PropTypes.func,
  location: PropTypes.object
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  isCreateUser: collectiveActions.createUser,
  changeEditingUser: editingUser,
  changePage: paginationActions.page,
  setFilter: collectiveActions.filter,
  deleteUserId: collectiveActions.deleteUserId
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(mainStyles)
)(MainContainer)
