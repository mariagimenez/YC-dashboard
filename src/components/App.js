import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Boletas from '../components/Boletas'
import GraficoBar from '../components/GraficoBar'
import GraficoLineal from '../components/GraficoLineal'
import GraficoRadar from '../components/GraficoRadar'
import GraficoPieCustome from '../components/GraficoPieCustome'
import GraficoRadialBar from '../components/GraficoRadialBar'
import GraficoStack from '../components/GraficoStack'

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
      {fecha: "13/12/2019", cantidad: 20 },
      {fecha: "14/12/2019", cantidad: 70 },
      {fecha: "15/12/2019", cantidad: 84 },
      {fecha: "16/12/2019", cantidad: 85 }
    ],
    dataGrafBoletasxOficial: [
      {subject: "Yani", cantidad: 50, fill: '#8884d8'},
      {subject: "Ivo", cantidad: 20 , fill: '#83a6ed'},
      {subject: "Sole", cantidad: 70 , fill: '#8dd1e1'},
      {subject: "Marian", cantidad: 84 , fill: '#82ca9d' },
      {subject: "Mery", cantidad: 95 , fill: '#a4de6c'}
    ],
    dataGrafCheques: [
      {analizados: 100, comprados: 50, rechazados: 50},
      {analizados: 250, comprados: 220 , rechazados: 30 },
      {analizados: 130, comprados: 70 , rechazados: 60},
      {analizados: 90, comprados: 84 , rechazados: 6 },
      {analizados: 150, comprados: 90 , rechazados: 60 }
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
              Grafico Lineal
              <GraficoLineal data={state.dataGrafBoletas} ></GraficoLineal>
          </Paper>          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Grafico de Barras
            <GraficoBar data={state.dataGrafBoletas}> </GraficoBar>
          </Paper>          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Grafico de Radar
            <GraficoRadar data={state.dataGrafBoletasxOficial}> </GraficoRadar>
          </Paper>          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Grafico de Pie
            <GraficoPieCustome data={state.dataGrafBoletasxOficial}> </GraficoPieCustome>
          </Paper>          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Grafico de Radial Bar
            <GraficoRadialBar data={state.dataGrafBoletasxOficial}> </GraficoRadialBar>
          </Paper>          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Grafico de Stack
            <GraficoStack data={state.dataGrafCheques}> </GraficoStack>
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
