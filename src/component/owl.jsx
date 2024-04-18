import { Box, Button, CardMedia } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../images/owl-1.png";
import two from "../images/owl-2.png";
import three from "../images/owl-3.png";
import { Link } from "react-router-dom";

const Owl = () => {
  let img = [
    {
      img: one,
      span: "لماذا اخترتنا",
      bold: "لدينا خدمة محترفة",
      button: "خدماتنا",
    },
    {
      img: two,
      span: "نحن الافضل",
      bold: "ثق في مهندسين شركتنا",
      button: "خدماتنا",
    },
    {
      img: three,
      span: "الذي نفعل",
      bold: "احصل على بعض خدماتنا",
      button: "خدمتنا",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2500, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 994, min: 350 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
    },
  };
  return (
    <Box className="owl-parent">
      <Carousel
        className="owl"
        responsive={responsive}
        autoPlaySpeed={1000}
        //   swipeable={true}
        draggable={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
      >
        {img.map((item, index) => {
          return (
            <Box className="item" key={index}>
              <Box className="background">
                <CardMedia component="img" image={item.img} />
                <Box className="content">
                  <span>{item.span}</span>
                  <p>{item.bold}</p>
                  <Link>{item.button}</Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Owl;
