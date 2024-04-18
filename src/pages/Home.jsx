import { Box, Grid, CardMedia, Button } from "@mui/material";
import React from "react";

import Employer from "../component/employer";
import Owl from "../component/owl";
import Index from "../component/index";
import Tasks from "../component/tasks";

import Footer from "../component/Footer";

const Home = () => {
  return (
    <Box className="home">
      <Index />
      <Owl />

      <Employer />
      <Tasks />

      <Footer />
    </Box>
  );
};

export default Home;
