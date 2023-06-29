import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


function PreviousArrow(props) {
    const { onClick } = props;
    return (
        <IconButton onClick={onClick} sx={{ position: "absolute", left: "0px", top: '50%', transform: 'translateY(-50%)', zIndex: 999 }}>
            <AiOutlineLeft />
        </IconButton>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <IconButton onClick={onClick} sx={{ position: "absolute", right: "0px", top: '50%', transform: 'translateY(-50%)', zIndex: 999 }}>
            <AiOutlineRight />
        </IconButton>
    );
}



const ProductCarousel = ({ children }) => {
    const numSlides = children?.length;
    const centerPadding = numSlides === 1 ? '0px' : '20%';
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        prevArrow: isSmallScreen ? <></> : <PreviousArrow />,
        nextArrow: isSmallScreen ? <></> : <NextArrow />,
        // centerMode: true,
        // centerPadding,
        variableWidth: true,
        autoplay: false,

    };

    return <Slider {...settings}>{children}</Slider>;
};

export default ProductCarousel;