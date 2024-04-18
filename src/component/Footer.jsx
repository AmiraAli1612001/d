import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import img1 from "../images/msg.png";
import img2 from "../images/phone.png";
import img3 from "../images/location.png";
import t from "../images/Path 455.png";
import e from "../images/Group 344.png";
import r from "../images/Rectangle 202.png";
// import f from "../images/Path 455.png"
import w from "../images/Group 375.png";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <Box className="footer">
      <CardMedia component="img" image={logo} className="logo" />

      <Grid container className="container">
        <Grid item xs={10} md={6} lg={4} className="about">
          <p>
            لقد تشكلت قيمنا الاساسية منذ 5 سنين نقدم افضل , خدمات البناء
            لعملائنا . لقد صمدوا امام اختبار الزمن وتبقى هذه المبادئ هي الركيزه
            الاساسية لدينا . لم نحاول ابدا التقليل من الجودةاو وتيرة العمل او اي
            جانب بناء اخر . نحن نبقى صادقين مع وعدنا الكامل بالكفاءه
          </p>
        </Grid>
        <Grid item xs={10} md={6} lg={3.5} className="address">
          <Box className="box">
            <CardMedia component="img" image={img1} />
            <p>info@dubco.net</p>
          </Box>
          <Box className="box">
            <CardMedia component="img" image={img2} className="img-2" />
            <p>
              <span> ت : 0112250915</span>
              <span>ه : 0559911374</span>
            </p>
          </Box>
          <Box className="box">
            <CardMedia component="img" image={img3} />

            <p>
              دبكو , مجمع المربع , الرياض مبنى 7074 / 2 الدور الخامس مكتب 88
            </p>
          </Box>
        </Grid>
        <Grid item xs={10} md={6} lg={4} className="contact">
          <p>ابقى على تواصل</p>
          <p>
            <b>تابعنا</b>
          </p>
          <Box className="icons">
            <CardMedia component="img" image={t} />
            <CardMedia component="img" image={e} />
            <CardMedia component="img" image={r} />
            {/* <CardMedia component="img" image={f} /> */}
            <CardMedia component="img" image={w} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
