import React from 'react'
import { Button, withStyles } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
  button: {
    backgroundColor: '#5E97F3',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    fontSize: '14px',
    textAlign: 'center',
    color: '#FFFFFF',
    textTransform: 'unset',
    borderRadius: 'unset',
    padding: '12px 30px',
    '&:hover': {
      backgroundColor: '#5E97F3'
    }
  }
};

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

const TablePlaceholder = ({classes, push}) => {
  const handleClick = () => {
    push('/create-user/account')
  };

  return (
    <TableRow className={classes.row}>
      <CustomCell component='td' scope='row' colSpan='4'>
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

export default withStyles(styles)(TablePlaceholder)