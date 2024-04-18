import { Close } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";

const Drawer = (props) => {
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let links = [
    { text: " الصفحة الرئيسية", path: "/" },
    { text: " من نحن", path: "/about-us" },
    { text: " خدماتنا", path: "/services" },
    { text: " مشاريعنا", path: "/projects" },
    { text: " تواصل معنا", path: "/contact" },
  ];
  return (
    <Box className="drawer" sx={{ height: props.drawer ? "100%" : "0px" }}>
      <Grid container>
        <Grid item>
          <Close
            onClick={() => {
              props.setDrawer(false);
            }}
          />
        </Grid>
        <Grid item className="links" xs={12}>
          {links.map((item) => {
            return (
              <a
                href={item.path}
                onClick={() => {
                  toTops();
                }}
              >
                {item.text}
              </a>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Drawer;
