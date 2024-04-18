import { Box, Grid, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo-1.png";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./drawer";

const Nav = () => {
  let links = [
    { text: " الصفحة الرئيسية", path: "/" },
    { text: " من نحن", path: "/about-us" },
    { text: " خدماتنا", path: "/services" },
    { text: " مشاريعنا", path: "/projects" },
    { text: " تواصل معنا", path: "/contact" },
  ];
  let [drawer,setDrawer] = useState(false)
  return (
    <Box className="navbar" sx={{padding :{xs :"0px 30px" , md :"0px"}}}>
      <Drawer drawer = {drawer} setDrawer={setDrawer}/>

      <Grid container className="container" sx={{justifyContent :{xs :"space-between",md:"space-around"}}}>
        <Grid item>
          <MenuIcon
            className="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick = {() => {
                setDrawer(true)
                
            }}
          />
        </Grid>
        <Grid
          item
          className="links"
          xs={9}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {links.map((item) => {
            return <a href={item.path}>{item.text}</a>;
          })}
        </Grid>
        <Grid item>
          <CardMedia component="img" image={logo} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
