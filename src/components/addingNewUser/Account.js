import React from 'react';
import { withStyles, Typography, BottomNavigationAction, Grid, Card, TextField, Button } from '@material-ui/core';
import { Close, Add, Avatar } from "icons";

const styles = theme =>({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px'
  },
  unsavedUserData: {
    backgroundColor: '#5E97F3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit*3}px`,
  },
  unsavedUserDataText: {
    fontWeight: '500',
    lineHeight: '16px',
    color: '#FFFFFF',
    marginBottom: 0,
  },
  unsavedUserDataTextBlack: {
    fontWeight: '900',
    lineHeight: '16px',
    color: '#FFFFFF',
    padding: '0 !important',
    marginLeft: theme.spacing.unit*2,
  },
  rightIcons: {
    marginLeft: 'auto',
    minWidth: '30px',
    maxWidth: '30px',
    padding: '0 !important',
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit*4,
    height: '600px'
  },
  card: {
    boxShadow: 'none',
    border: '3px solid #5E97F3',
    borderRadius: '50%',
    width: '11rem',
    height: '11rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 'auto',
    marginTop: theme.spacing.unit*3
  },
  avatar: {
    margin: 'auto',
    display: 'block'
  },
  addAvatar: {
    color: '#9BB0CB',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing.unit*12,

  },
  bootstrapInput: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #C1CFE0',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    padding: '10px 12px',
    marginBottom: '25px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A'
  },
  button: {
    backgroundColor: '#5E97F3',
    textTransform: 'none',
    display: 'block',
    marginTop: '140px',
    marginLeft: 'auto',
    marginRight: theme.spacing.unit*12,
  }
});

const Account = (props) => {
  const {classes } = props;

  const AddAvatar = (
    <Typography variant="body2" gutterBottom className={classes.addAvatar}>
      {Add}
      <span>add avatar</span>
    </Typography>
  );

  return (
    <div className={classes.root}>
      <div className={classes.unsavedUserData}>
        <Typography variant="body2" gutterBottom className={classes.unsavedUserDataText}>
          You have an unsaved user data. Do you want to complete it?
        </Typography>
        <BottomNavigationAction icon='Continue' className={classes.unsavedUserDataTextBlack}/>
        <BottomNavigationAction icon={Close} className={classes.rightIcons}/>
      </div>
      <Grid container>
        <Grid item xs={6} className={classes.gridItem}>
          <Card className={classes.card}>
            {Avatar}
          </Card>
          <div>
            <BottomNavigationAction icon={AddAvatar}  className={classes.avatar}/>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <TextField
              label="User name"
              id="bootstrap-input"
              InputProps={{
                disableUnderline: true,
                classes: {
                  input: classes.bootstrapInput,
                },
              }}
              InputLabelProps={{
                shrink: true,
                className: classes.bootstrapFormLabel,
              }}
            />
            <TextField
              label="Password"
              id="bootstrap-input"
              InputProps={{
                disableUnderline: true,
                classes: {
                  input: classes.bootstrapInput,
                },
              }}
              InputLabelProps={{
                shrink: true,
                className: classes.bootstrapFormLabel,
              }}
            />
            <TextField
              label="Repeat Password"
              id="bootstrap-input"
              InputProps={{
                disableUnderline: true,
                classes: {
                  input: classes.bootstrapInput,
                },
              }}
              InputLabelProps={{
                shrink: true,
                className: classes.bootstrapFormLabel,
              }}
            />
          </div>
          <Button variant="contained" color="primary" className={classes.button}>
            Forward
          </Button>
        </Grid>
      </Grid>
    </div>
  )
};

export default withStyles(styles)(Account);