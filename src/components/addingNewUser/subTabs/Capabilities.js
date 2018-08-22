import React from 'react';
import { withStyles, Grid} from '@material-ui/core';
import IntegrationReactSelect from 'components/collectiveComponents/IntegrationReactSelect'
import BootstrapInput from 'components/collectiveComponents/BootstrapInput'
import CheckboxesGroup from 'components/collectiveComponents/CheckboxesGroup'
import ButtonGroup from 'components/collectiveComponents/ButtonGroup'

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

const Capabilities = (props) => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <IntegrationReactSelect isMulti={true}/>
            <BootstrapInput label='Additional information'/>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <div className={classes.container}>
            <CheckboxesGroup />
            <ButtonGroup leftName='Back' rightName='Finish'/>
          </div>
        </Grid>
      </Grid>
    </div>
  )};

export default withStyles(styles)(Capabilities);