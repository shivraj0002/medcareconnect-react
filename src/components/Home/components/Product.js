import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useNavigate } from "react-router";

export default function Product(props) {
  const navigate = useNavigate();
  const { name, price, description, imgUrl, category } = props.item;
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, m: "10px" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgUrl} alt="Product" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.length > 30
              ? description.substring(0, 30) + "..."
              : description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          endIcon={<TrendingFlatIcon />}
          onClick={() => {
            navigate("/products");
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
