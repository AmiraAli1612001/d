import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import one from "../images/em-one.png";
import two from "../images/em-two.png";
import phone from "../images/phone-w.png";
import { Link } from "react-router-dom";

const Employer = () => {
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Box className="employee">
      <Grid container className="container">
        <Grid item className="bottom" xs={11} md={8} lg={6}>
          <Box>
            <CardMedia component="img" image={two} />
          </Box>
          <Box>
            <p>
              نحن خبراء في خدمات <span>المقاولات</span>
            </p>
            <p className="small">اتصل بنا</p>
            <p className="phone-con">
              0559911374{" "}
              <CardMedia component="img" image={phone} className="phone" />
            </p>
          </Box>
        </Grid>
        <Grid item className="top" xs={11} md={8} lg={6}>
          <Box>
            <p>
              نحن رائعون لماذا <span>اختارتنا ؟</span>
            </p>
            <p className="small">ابدا مع فريق رائع وخدمات ممتازه</p>
            <Link to="/jobs" onClick={() => {
                              toTops()
            }}>الهيكل الوظيفي</Link>
          </Box>
          <Box>
            <CardMedia component="img" image={one} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Employer;
