import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Foods from "../FoodsData";
import FoodCard from "./FoodCard";
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});
function FoodList() {
  const Food = Foods.map((x) => (
    <Grid item xs={12} sm={6} md={3}>
      <FoodCard
        foodImg={x.foodImg}
        foodName={x.foodName}
        foodDesc={x.foodDesc}
      />
    </Grid>
  ));
  const classes = useStyles();
  return (
    <div className="food__container">
      <Grid container spacing={6} className={classes.gridContainer}>
        {Food}
      </Grid>
    </div>
  );
}

export default FoodList;
