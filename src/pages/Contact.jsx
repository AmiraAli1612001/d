import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Service from "../component/service";
import Footer from "../component/Footer";
import map from "../images/map.png";
import left from "../images/Group 34.png";

const Contact = () => {
  return (
    <Box className="contact">
        <Typography
            variant="h1"
            className="h1 c"
            sx={{
              textAlign: { xs: "center", md: "right" },fontWeight: "bold" 
            }}
          >
            ابقى على تواصل
          </Typography>
      <Grid container className="container">
        <Grid item xs={12} md={6}>
        
          <p>
            مسؤوليتنا تجاه عملائنا هي الأولوية الأعلى و نحن نقوم بها بشكل ممتاز
            للحفاظ على أعلى المعايير ومستويات الأداء .إذا كان يوجد شيء تود
            معرفته لا تتردد في استخدام تفاصيل الاتصال لدينا المذكورة هنا، ونحن
            نضمن أن نعطيك الجواب الذي تريده
          </p>
        </Grid>
        <Grid item xs={11} md={6} sx={{ marginTop: { xs: "50px", md: "0px" } }}>
          <CardMedia component="img" image={left} />
        </Grid>
      </Grid>
      <Grid container className="form">
        <Grid item xs={10.5} md={6}>
          <h1 className="h1">تواصل معنا</h1>
          <form>
            <label>الاسم</label>
            <input type="text" />
            <label>البريد الالكتروني</label>
            <input type="text" />
            <label>الموضوع</label>
            <input type="text" />
            <label>الرسالة</label>
            <textarea></textarea>
            <input type="submit" className="sub" value="ارسال" />
          </form>
        </Grid>
      </Grid>
      <CardMedia component="img" image={map} />

      <Footer />
    </Box>
  );
};

export default Contact;
