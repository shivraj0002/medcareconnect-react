import React from 'react'
import Box from '@mui/material/Box'
import Product from './Product'
import ProductCarousel from '../../Utils/ProductCarousel';

const imgu = 'https://plus.unsplash.com/premium_photo-1671886498603-a71f79861aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'

const medicalProducts = [
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

const Products = () => {
    return (
        <Box >
            <ProductCarousel>

                {medicalProducts.map((item, index) => {
                    return (<Product key={index} item={item} />)
                })}
            </ProductCarousel>
        </Box>
    )
}

export default Products