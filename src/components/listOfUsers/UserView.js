import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import { Avatar, Button, Table, TableBody, TableCell, TableRow, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import ButtonUsersList from 'components/commonComponents/ButtonUsersList'
import { push } from 'connected-react-router'
import connect from 'react-redux/es/connect/connect'
import { fieldNames, srtuctureUser, myHobbiesList } from 'utils/consts'
import classNames from 'classnames'
import { compose } from 'redux'
import { Edit } from 'utils/icons'
import { collectiveActions } from 'actions/action'
import moment from 'moment'
import { editingUser } from 'actions/listOfUsersActions'
import { stylesUserView } from 'styles/styles'

class UserView extends Component {
  componentDidMount () {
    this.props.editingUser(this.props.match.params.id)
  }

  valueToTableCell = (name) => {
    const user = this.props.user
    if (!user[name] && name !== 'checkBox') return
    let value = ''

    switch (name) {
      case 'checkBox':
        const hobbies = Object.keys(user).filter(item => {
          return item.indexOf('checkBox') !== -1
        })

        return (hobbies.map(item => (
          myHobbiesList.map((hobie, i) => (
            (hobie.name === item)
              ? (<Fragment key={i}>
                <span>{hobie.title}</span>
                <br />
              </Fragment>)
              : null
          )))
        ))
      case fieldNames.phone:
        return (user[name].map((item, i) => {
          if (!item) return null
          return (
            <Fragment key={i}>
              <span>
                {item}
              </span>
              <br />
            </Fragment>
          )
        }))
      case fieldNames.birthDate:
        return moment(user[name]).format('DD.MM.YYYY')

      case fieldNames.skills:
        user[name].map(item => (
          value = value + item.label + ', '
        ))
        return value

      default:
        return user[name]
    }
  }

  editUser = (tabName) => {
    this.props.isCreateUser(false)
    this.props.push(`/create-user/${tabName}`)
  }

  render () {
    const { classes, user, push } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.captions}>
          <ButtonUsersList url='/list-of-user' push={push} />
          <Typography
            variant='display1'
            gutterBottom
            className={classes.caption}
          >
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
                  if (i === 0) {
                    return (
                      <Fragment key={i}>
                        <TableRow>
                          <TableCell className={classes.tableText} />
                          <TableCell className={classes.tableText} />
                          <TableCell className={classes.tableText} />
                        </TableRow>
                        <TableRow>
                          <TableCell rowSpan={item.data.length}
                            className={
                              classNames(
                                classes.tableText, classes.firstRow)
                            }>
                            {item.title}
                            <Button
                              disableRipple
                              className={classes.button}
                              onClick={() => this.editUser(item.name)}
                            >
                              {Edit}
                            </Button>
                          </TableCell>
                          <TableCell className={classes.tableText}>
                            {elem.title}
                          </TableCell>
                          <TableCell className={classes.tableValue}>
                            {this.valueToTableCell(elem.name)}
                          </TableCell>
                        </TableRow>
                      </Fragment>
                    )
                  }
                  return (
                    <TableRow key={i}>
                      <TableCell className={classes.tableText}>
                        {elem.title}
                      </TableCell>
                      <TableCell className={classes.tableValue}>
                        {this.valueToTableCell(elem.name)}
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
}

UserView.propTypes = {
  classes: PropTypes.object,
  editingUser: PropTypes.func,
  match: PropTypes.object,
  user: PropTypes.object,
  isCreateUser: PropTypes.func,
  push: PropTypes.func
}

const mapStateToProps = (store) => {
  return {
    user: store.collectiveState.editingUser
  }
}

const mapDispatchToProps = {
  push: push,
  isCreateUser: collectiveActions.createUser,
  editingUser: editingUser
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesUserView)
)(UserView)
