import { Box, Grid, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { Component } from "react";
import Slider from "react-slick";


const images = [
    {
        review: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        name: 'Name 1'
    },
    {
        review: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        name: 'Name 2'
    },
    {
        review: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        name: 'Name 3'
    },
    {
        review: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        name: 'Name 4'
    },
];

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
        };
        return (
            <Box sx={{ p: '15px', pb: '30px' }} bgcolor={'lightgreen'}>
                <Grid container rowSpacing={1}>
                    <Grid item xs={12} md={2.5} flexDirection={'column'}>

                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ width: '98%', mb: { sm: '30px', md: '0px' } }} >
                            <Typography variant="h5" color="initial" fontFamily={'Poppins'} gutterBottom sx={{ mt: '15px' }} textAlign={'center'}>Happy Customers</Typography>
                            <Slider {...settings}>
                                {images.map((item, index) => {
                                    return (
                                        <Box>
                                            <img src={item.imgPath} alt='' height={'65px'} width={'65px'} style={{ borderRadius: '50%' }} />
                                            <Typography variant="body1" color="inherit" fontFamily={'Poppins'} fontSize={'1.1rem'}>
                                                {item.review}
                                            </Typography>
                                            <Typography variant="body1" color={deepOrange[600]} fontFamily={'Poppins'} fontSize={'0.8rem'} gutterBottom>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    )
                                })}
                            </Slider>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2.5} flexDirection={'column'}>

                    </Grid>

                </Grid>



            </Box>
        );
    }
}