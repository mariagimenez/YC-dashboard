import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Boletas from '../components/Boletas'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  text: {
    color : 'blue'
  }
});

function App(props) {
  const { classes } = props;

  let state = {
    dataGrafBoletas: [
      {fecha: "12/12/2019", cantidad: 50},
      {fecha: "13/12/2019", cantidad: 20},
      {fecha: "14/12/2019", cantidad: 70}
    ],
    dayBoletas: {
      cantidad : 70
    },
    cheques: {
      analizados : 100,
      seleccionados : 90,
      rechazados : 10
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Dashboard Journey Cheques</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              Boletas generadas en el dia
            <Boletas cantidad={state.dayBoletas.cantidad}  />
          </Paper>          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Grafico de los ultimos 5 dias
            Aca va un grafico
          </Paper>          
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Cheques Analizados en Boletas del Dia
            <Boletas cantidad={state.cheques.analizados}  />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Cheques Rechazados en Boletas del Dia
            <Boletas cantidad={state.cheques.rechazados}  />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Cheques Seleccionados en Boletas del Dia
            <Boletas cantidad={state.cheques.seleccionados}  />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
