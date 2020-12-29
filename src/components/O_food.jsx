import React from "react";
import O_card from "./O_card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});
function O_food() {
  const classes = useStyles();
  return (
    <div className="food__container">
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <O_card />
        </Grid>
      </Grid>
    </div>
  );
}

export default O_food;
