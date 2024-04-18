import { Box, Button, CardMedia, Grid } from '@mui/material';
import React from 'react';
import right from "../images/home-left.png";
import left from "../images/home-right.png";
import { useNavigate } from "react-router-dom";

const Index = () => {
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let navigate = useNavigate()
    return (
        <Box className="index">
        <Grid container className="container">
          <Grid item xs={11} md={6} className="right">
            <CardMedia component="img" image={left} />
            <h1 >خطط لحلمك مع خدمتنـــــــا</h1>
            <p>سيساعدك مهندسونا المحترفون على تحقيق حلمك</p>
            <Box className="btns">
              <Button className="right-btn" onClick={() => {
                navigate("/services")
                toTops()
                
              }}>المزيد</Button>
              <Button className="left-btn" onClick={() => {
                navigate("/contact")
                toTops()

                
              }}>ابقى على تواصل</Button>
            </Box>
          </Grid>
          <Grid item sx={{display:{xs :"none" , lg :"flex"}}} md={3.2} className="left">
            <CardMedia component="img" image={right} />
          </Grid>
        </Grid>
      </Box>
    );
}

export default Index;
