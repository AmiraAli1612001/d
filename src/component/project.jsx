import { Box, CardMedia, Grid } from "@mui/material";
import Footer from "../component/Footer"
import React, { useState } from "react";

import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";


const Project = () => {
 
  let years = [
    {text  : "مشاريع سنة ", year : 2010}, // done
    {text  : "مشاريع سنة ", year : 2015}, // done
    {text  : "مشاريع سنة ", year : 2022},  // done
    {text  : "مشاريع سنة ", year : 2011},  // done
    {text  : "مشاريع سنة ", year : 2016},
    {text  : "مشاريع سنة ", year : 2023},
    {text  : "مشاريع سنة ", year : 2012}, // done
    {text  : "مشاريع سنة ", year : 2017},
    {text  : "مشاريع سنة ", year : 2024},  // done
    {text  : "مشاريع سنة ", year : 2013},
    {text  : "مشاريع سنة ", year : 2018},  // done
    {text  : "مشاريع سنة ", year : 2014},  // done
    {text  : "مشاريع سنة ", year : 1921},  // done

  ]

 

  return (
    <Box className="project">
      <h1>مشاريعنا</h1>

    <Grid container className="links">

     {
      years.map((item , index)=>{
        return(
          <Grid item className="grid" key={index} xs={11} md={2.5}><Link to={`/modals/${item.year}`} className="link">{item.text} {item.year}</Link></Grid>
        )
      })
     }
    </Grid>



      <Footer/>
    </Box>
  );

};

export default Project;
