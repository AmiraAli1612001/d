import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import hand from "../images/hand.png"
import house from "../images/house.png"
import eng from "../images/engineers.png"

export default function tasks() {
  return (
    <Box className="tasks">
      <h1>القيم والمبادئ مهمتنا</h1>
      <Grid container className="text">
        <Grid item  xs={11} md={3}>
          <p>
            نلتزم بتزويد عملائنا بافضل التصاميم الهندسية في جميع المجالات
            السابقة و ذلك ضمن راحة وتلبية حاجة العميل من خلال افضل الحلول
            الهندسية والاستراتيجية للوصول الى المطلوب بجودة عالية مع استعمال
            مواد صديقة للبيئة للحد من الاخطار والمحافظة على المحيط
          </p>
        </Grid>
        <Grid item xs={11} md={3}>
          <p>
            تسعى دابكو ان تقود صناعة البناء والتشييد بالمملكة العربية السعودية
            اولا وبالخليج و الوطن العربي ثانيا للوصول الى مواصفات الجودة
            العالمية في جميع المجالات بالاضافة الى ان نكون سابقين في استغلال
            وتوظيف التكنولوجيا الحديثة في مجالاتنا وانتقاء المواد التي تناسب
            بيئتنا{" "}
          </p>
        </Grid>
        <Grid item xs={11} md={3}>
          <p>
            مع النهضة والتطور و تسارع النمو الذي يشهده العالم في عصرنا نحن دائما
            نسعى لان نكون جزء من هذه النهضة ومواكبة كل ما هو جديد وله علاقة
            بمجال صناعة البناء والتشييد ونحن مؤمنون بقدرتنا على خلق الاضافةى
            والفضل يعود لادارتنا الرشيدة و الكفاءات التي تحرر تزخر بها دابكو
            للمقاولات
          </p>
        </Grid>
       
        </Grid>
        <Box className="ul" sx={{marginRight : {xs :"60px" ,lg :"145px" } , marginTop:"50px" , marginBottom :"50px"}}>
          <ul>
            <li>
              {" "}
              <span>كن عالميا : </span> الاتصال على نطاق محلي وعالمي 
            </li>
            <li>
              {" "}
              <span>قيادة الابتكار :</span> الريادة في مجال التكنولوجيا
            </li>
            <li>
              {" "}
              <span>بناء علاقات  :</span>  تنمية العلاقات مع العملاء والشركات في جميع انحاء العالم
              
            </li>
            <li>
            <span>الاسفادة من نقاط القوه :</span>  استخدام حجم GE وخبرتها
            </li>
          </ul>
        </Box>
        

        <Grid container className="house">
          <Grid item xs={11} md={3}>
            <p>
              <span>
                <EngineeringIcon />
              </span>{" "}
              الاشراف و التخطيط
            </p>
          <CardMedia component="img" image={hand} />

          </Grid>
          <Grid item  xs={11} md={3}>
            <p>
              <span>
                <SettingsIcon />
              </span>{" "}
              التصميم و التنفيذ
            </p>
          <CardMedia component="img" image={eng} />

          </Grid>
          <Grid item  xs={11} md={3}>
            <p>
              <span>
                <CheckCircleOutlineIcon />
              </span>{" "}
              التدقيق و التسليم
            </p>
          <CardMedia component="img" image={house} />

          </Grid>
        </Grid>
    </Box>
  );
}
