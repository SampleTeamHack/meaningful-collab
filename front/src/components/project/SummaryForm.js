import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function SummaryForm(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen del proyecto
      </Typography>
      <List disablePadding>
          <ListItem className={classes.listItem} key={props.data.name}>
            <ListItemText primary="Nombre del proyecto" secondary={props.data.name} />
          </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Problematica" secondary={props.data.problematic}/>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Promotor
          </Typography>
          <Typography gutterBottom>{props.data.promoterFirstName} {props.data.promoterLastName}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Se llevara a cabo
          </Typography>
          <Grid container>
              <React.Fragment key={props.data.method}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.data.method}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}