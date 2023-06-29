import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


export default function Product(props) {
    const { name, price, description, imgUrl, category } = props.item
    return (
        <Card variant='outlined' sx={{ maxWidth: 345, m: '10px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl}
                    alt="Product"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" endIcon={<TrendingFlatIcon />}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}