import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import IntegrationReactSelect from 'components/collectiveComponents/IntegrationReactSelect'
import BootstrapInput from 'components/collectiveComponents/BootstrapInput'
import ButtonGroup from "components/collectiveComponents/ButtonGroup";

const styles = theme =>({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px'
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit*7,
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%',
  }
});

const Contacts = (props) => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <BootstrapInput label='Company'/>
            <BootstrapInput label='Github link'/>
            <BootstrapInput label='Facebook link'/>
            <IntegrationReactSelect isMulti={false}/>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <BootstrapInput label='Fax'/>
            <BootstrapInput label='Phone #1'/>
            <BootstrapInput label='Phone #2'/>
            <ButtonGroup leftName='Back' rightName='Forward'/>
          </div>
        </Grid>
      </Grid>
    </div>
  )};

export default withStyles(styles)(Contacts);