import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import left from "../images/about.png";
import Footer from "../component/Footer";

const About = () => {
  return (
    <Box className="about">
      <Grid container className="container">
        <Grid item xs={11} md={5}>
          <h1>من نحن ؟</h1>
          <p>
            شركة دبكو المتحدة لمقاولات البناء تشارك في بناء وصيانة خدمات
            المقاولات للمباني العامة / الصناعية والمستشفيات الأبراج الشاهقة،
            وشبكات النقل والتوزيع لأنظمة المياه والصرف الصحي، وخزانات المياه،
            ومحطات الصرف الصحي ومعالجة النفايات محطات الضخ، الطرق، الجسور، أنفاق
            السكك الحديدية، محطات السكك الحديديةو الموانئ
          </p>
          <p>
            تصنف من ضمن الشركات الرائدة في مجال أعمال البناء والتشييد والمقاولات
            في منطقة الخليج والوطن العربي ونحن نرحب بك للانضمام الي قائمة
            عملائنا الكرام ولضمان جودة وسرعة انجاز مشاريعكم المستقبليةمع مراعاة
            الدقة في التنفيذ وحسن التسيير فقط مع بيانات دبكو المتحدة للمقاولات
            ونحن فخارورن بأن تكون عميل لدينا
          </p>
        </Grid>
        <Grid
          item
          xs={11}
          md={6}
          className="left"
          sx={{ marginTop: { xs: "30px", md: "0px" } }}
        >
          <CardMedia component="img" image={left} className="img" />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default About;
