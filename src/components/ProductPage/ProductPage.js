import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, TextField, styled } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const imgu = 'https://plus.unsplash.com/premium_photo-1671886498603-a71f79861aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'

const productsData = [
    {
        name: 'Product 1',
        category: 'Category 1',
        price: 10.99,
        description: 'Description of Product 1',
        imgUrl: imgu
    },
    {
        name: 'Product 2',
        category: 'Category 2',
        price: 19.99,
        description: 'Description of Product 2',
        imgUrl: imgu
    },
    {
        name: 'Product 3',
        category: 'Category 1',
        price: 15.49,
        description: 'Description of Product 3',
        imgUrl: imgu
    },
    {
        name: 'Product 4',
        category: 'Category 2',
        price: 8.99,
        description: 'Description of Product 4',
        imgUrl: imgu
    },
    {
        name: 'Product 5',
        category: 'Category 3',
        price: 12.99,
        description: 'Description of Product 5',
        imgUrl: imgu
    },
    {
        name: 'Product 6',
        category: 'Category 1',
        price: 9.99,
        description: 'Description of Product 6',
        imgUrl: imgu
    },
];

const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const ProductsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <StyledContainer maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Products
            </Typography>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ mb: '20px' }}
            />
            <Grid container spacing={3}>
                {filteredProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card variant="outlined">
                            <CardActionArea>
                                <CardMedia component="img" height="140" image={product.imgUrl} alt="Product" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" endIcon={<TrendingFlatIcon />}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </StyledContainer>
    );
};

export default ProductsPage;
