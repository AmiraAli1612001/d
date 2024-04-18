import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import write from "../images/write.png";
import em from "../images/em.png";
import town from "../images/town.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

/*

*/
const Service = () => {
  return (
    <Box className="service">
      <Grid container className="small-image">
        <Grid item xs={11} md={6} lg={6}>
          <h1>خدماتنا</h1>
          <p className="one">
            نحن نقدم خدمات إدارة البناء على مرحلتين: ما قبل البناء والتشييد شركة
            دبي لتشييد المباني تؤمن إيمانا راسخا بضرورة المشاركة المبكرة لفريق
            البناء يفيد كل جانب من جوانب المشروع. خلال مرحلة ما قبل البناء، شركة
            دبي لتشييد المباني يوفر التخطيط والجدولة والتقدير وهندسة القيمة
            ومراجعات قابلية البناء، شراء العناصر طويلة الأمد، وتطوير الميزانية
            ومراقبتها، والتأهيل المسبق للمقاولين من الباطن. خلال مرحلة البناء،
            تقوم شركة دبي لمقاولات البناء بشراء المواد المطلوبة، خدمات المقاول
            من الباطن، وبناء المنشأة
          </p>
        </Grid>
        <Grid item xs={11} md={6} lg={6}>
          <Grid container className="cont" sx={{transform : {xs : " translateY(50px)" , md : " translateY(-50px)"}}}>
            <Grid item>
              <CardMedia component="img" image={town} />
              <HashLink smooth="true" to="/services/#public">التصميم و البناء</HashLink>
            </Grid>
            <Grid item>
              <CardMedia component="img" image={em} />
              <HashLink smooth="true" to="/services/#manage">ادارة الانشاءات</HashLink>
            </Grid>
            <Grid item>
              <CardMedia component="img" image={write} />
              <HashLink smooth="true" to="/services/#design">المقاولات العامه</HashLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container  className="service-container" >
   
        <Grid item   xs={11} md={6}  id="public" >
          <CardMedia component="img" image={town} />
        </Grid>
        <Grid item xs={11} md={6}>
          <h1>المقاولات العامة</h1>
          <p>
            باعتبارنا المقاول العام نقوم أولا بانشاء اعلى مستوى من الثقة
            والنزاهة مع عملائنا نحن نقدر دورنا في نجاح مشروعك وتتخذ جميع الخطوات
            اللالزمة لضمان أن المنتج النهائي هو الذي يلبي احتياجاتك ويجعلنا
            فخورين أن اختياري كمقاول عام يعني انك تترك التفاصيل لنا - بدءا من
            الاشراف اليومي على موقع البناء وإدارة البائعين والتجارة حتى توصيل
            المعلومات الي الأطراف المعنية طوال فترة المشروع
          </p>
          <Link>نمذجة معلومات البناء</Link>
        </Grid>
      </Grid>

      <Grid container  className="service-container">
        
        <Grid item  xs={11} md={6} id="manage">
          <CardMedia component="img" image={em} />
        </Grid>
        <Grid item  xs={11} md={6}>
          <h1>إدارة الانــــــشاءات</h1>
          <p>
            نحن ننظر الي دورنا كمؤيد لك , نحن هنا للتأكيد من أن المشروع  تم
            تصميمة و انشاؤه في حدود ميزانيتك و أنك تحصل على مستوى الجودة الذي
            تتوقعه تركز فلسفتنا في إدارة الانشائات على تطوير علاقة عمل شاملة
            و علاقة عمل شاملة بين العميل و شركات التصميم و فريق بناء الكمبيوتر تبقى
            الشركة معك حتى انهاء المشروع و يصبح المبنى جاهزا للعمل بالكامل ,
            و يشعر جميع أعضاء الفريق بالرضا
          </p>
          <Link>البناء المسبق و التخطيط</Link>
        </Grid>
      </Grid>
      <Grid container  className="service-container">
      
        <Grid item  xs={11} md={6} id="design">
          <CardMedia component="img" image={write} />
        </Grid>
        <Grid item  xs={11} md={6}>
          <h1>التصميم والبناء</h1>
          <p>
            ان الركيزة الأساسية لفلسفتنا في مشاريع التصميم والبناء هي الثقة بين
            المالك والمقاول والمهندس يتم التطوير بشكل ملحوظ والاهم إرضاء العملاء
            عنما يتحقق ذلك, وعند الثقة في شركة دبكو يحصل العملاء على ما يريدون
            وتصبح تجربة البناء رحلة ممتعة `
          </p>
          <Link>مشاريع خاصة</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Service;
