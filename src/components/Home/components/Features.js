import React from 'react'
import Graph from './../../../assets/SVG/Graph.svg'
import Globe from './../../../assets/SVG/Globe.svg'
import Industry from './../../../assets/SVG/Industry.svg'
import Lab from './../../../assets/SVG/Lab.svg'
import { Box, Stack } from '@mui/material'
import Feature from './Feature'
import ProductCarousel from '../../Utils/ProductCarousel'


const featuresArray = [
    {
        logo: Graph,
        title: 'Strong API Legacy',
        desc: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.'
    },
    {
        logo: Industry,
        title: 'State of Art Manufacturing',
        desc: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.'
    },
    {
        logo: Lab,
        title: 'Robust Research',
        desc: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.'
    },
    {
        logo: Globe,
        title: "World's First Innovation",
        desc: 'Deserunt dolor cupidatat eiusmod nisi. Duis aliqua fugiat Lorem voluptate eiusmod occaecat excepteur Lorem nisi sit quis fugiat.'
    }
]
const Features = () => {
    return (
        <Box >
            <ProductCarousel >
                {featuresArray.map((item, index) => {
                    return <Feature key={index} title={item.title} logo={item.logo} desc={item.desc} />
                })}
            </ProductCarousel>
        </Box>
    )
}

export default Features