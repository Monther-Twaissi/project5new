import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./FoodO.css";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: { minWidth: 200, height: 400 },
  formControl: {
    minWidth: 120,
  },
}));

export default function FoodCard(props) {
  const [quantity, setQuantity] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  console.log(quantity);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const AddItem = async (e) => {
    e.preventDefault();
    const newName = "Group 2";
    const newPostImg =
      "https://cdn-www.bluestacks.com/bs-images/89cfc0bdd6e77f409b33c59d5289b155.png";
    if (quantity !== "") {
      let newJSON = await {
        username: newName,
        cardName: props.foodName,
        cardDesc: props.foodDesc,
        cardImg: props.foodImg,
        quantity: quantity,
        price: props.price,
      };
      axios.post("http://localhost:5000/api/orders", newJSON).then(() => {});
    }
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.foodImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.foodName}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h3">
            Price: {props.price} <small>JOD</small>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.foodDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="Space__bet">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Quantity
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={quantity}
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={AddItem}
            disabled={quantity ? false : true}
            variant="contained"
          >
            Order now
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
