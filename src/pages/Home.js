import { Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Contact from "../components/Contact";

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return <>
    <Grid container justifyContent='center' className="pt-8">
      <Grid item sm={10}>
        <Slider {...settings} className="w-auto mx-auto">
          <div className="bg-gray-200 rounded-lg">
            <img src="../images/building2.jpg" alt="slide 1" className="rounded-lg" />
          </div>
          <div className="bg-gray-200 rounded-lg">
            <img src="../images/building2.jpg" alt="slide 2" className="rounded-lg" />
          </div>
          <div className="bg-gray-200 rounded-lg">
            <img src="../images/building2.jpg" alt="slide 3" className="rounded-lg" />
          </div>
        </Slider>
      </Grid>
    <Contact />
    </Grid>
  </>;
};

export default Home;
