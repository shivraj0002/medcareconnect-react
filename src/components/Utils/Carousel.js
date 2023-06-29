import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


function PreviousArrow(props) {
    const { onClick } = props;
    return (
        <IconButton onClick={onClick} sx={{ position: "absolute", left: "10px", top: '50%', transform: 'translateY(-50%)', zIndex: 999, color: 'black' }}>
            <AiOutlineLeft />
        </IconButton>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <IconButton onClick={onClick} sx={{ position: "absolute", right: "10px", top: '50%', transform: 'translateY(-50%)', zIndex: 999, color: 'black' }}>
            <AiOutlineRight />
        </IconButton>
    );
}



const Carousel = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // prevArrow: <PreviousArrow />,
        // nextArrow: <NextArrow />,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500

    };

    return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
