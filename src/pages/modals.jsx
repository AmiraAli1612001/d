import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import ImageGallery from "react-image-gallery";
import one from "../images/model-1.png";
import two from "../images/model-2.png";
import three from "../images/model-3.png";
import four from "../images/model-4.png";
import rec89 from "../images/Rectangle 89.png";
import img103 from "../images/Rectangle-103.png";
import img101 from "../images/Rectangle-101.png";
import img99 from "../images/Rectangle-99.png";
import name from "../images/name.png";
import name1 from "../images/name-2.png";
import name2 from "../images/name-3.png";
import name41 from "../images/Rectangle-41.png";
import name44 from "../images/Rectangle-44.png";
import name46 from "../images/Rectangle-46.png";
import name48 from "../images/Rectangle-48.png";
import name130 from "../images/Rectangle 130.png";
import plane from "../images/plane.png";
import rec118 from "../images/Rectangle 118.png";
import rec119 from "../images/Rectangle 119.png";
import rec117 from "../images/Rectangle 117.png";
import rec120 from "../images/Rectangle 120.png";
import rec191 from "../images/Rectangle 124.png";
import rec19 from "../images/Rectangle 191.png";
import rec196 from "../images/Rectangle 196.png";
import rec199 from "../images/Rectangle 199.png";

import img133 from "../images/Rectangle 133.png";
import img134 from "../images/134.png";
import rec138 from "../images/Rectangle 138.png";

import rec188 from "../images/Group 188.png";

import group398 from "../images/Group 398.png";
import group383 from "../images/Rectangle 383.png";
import group381 from "../images/Rectangle 381.png";
import group397 from "../images/Rectangle 379.png";
import group118 from "../images/Group 118.png";

import group83 from "../images/Rectangle 83.png";
import group82 from "../images/Rectangle 82.png";
import group85 from "../images/Rectangle 85.png";
import group87 from "../images/Rectangle 87.png";


import group62 from "../images/Rectangle 62.png";
import group69 from "../images/Rectangle 69.png";

import med from "../images/2021-12-20.png";

import { useParams } from "react-router";
import "../css/style.css";
import Footer from "../component/Footer";

const Modals = () => {
  const params = useParams();
  const id = params;

  console.log(+id.ok);
  const images2022 = [
    {
      original: img133,
      thumbnail: img133,
    },
    {
      original: img134,
      thumbnail: img134,
    },
    {
      original: rec138,
      thumbnail: rec138,
    },
  ];

  const images = [
    {
      original: one,
      thumbnail: one,
    },
    {
      original: two,
      thumbnail: two,
    },
    {
      original: three,
      thumbnail: three,
    },
    {
      original: four,
      thumbnail: four,
    },
  ];
  const images2019 = [
    {
      original: img103,
      thumbnail: img103,
    },
    {
      original: img101,
      thumbnail: img101,
    },
    {
      original: img99,
      thumbnail: img99,
    },
  ];
  const images2024 = [
    {
      original: name,
      thumbnail: name,
    },
    {
      original: name1,
      thumbnail: name1,
    },
    {
      original: name2,
      thumbnail: name2,
    },
  ];

  const images2018 = [
    {
      original: name41,
      thumbnail: name41,
    },
    {
      original: name44,
      thumbnail: name44,
    },
    {
      original: name46,
      thumbnail: name46,
    },
    {
      original: name48,
      thumbnail: name48,
    },
  ];

  const images20182 = [
    {
      original: name130,
      thumbnail: name130,
    },
  ];
  let images19201 = [
    {
      original: plane,
      thumbnail: plane,
    },
    {
      original: rec117,
      thumbnail: rec117,
    },
    {
      original: rec118,
      thumbnail: rec118,
    },
    {
      original: rec119,
      thumbnail: rec119,
    },
  ];

  let images19202 = [
    {
      original: plane,
      thumbnail: plane,
    },
    {
      original: rec120,
      thumbnail: rec120,
    },
    {
      original: rec191,
      thumbnail: rec191,
    },
    {
      original: rec188,
      thumbnail: rec188,
    },
  ];
  let medicine = [
    {
      original: med,
      thumbnail: med,
    },
  ];
  let images2012 = [
    {
      original: group118,
      thumbnail: group118,
    },
  ];

  let images2010 = [
    {
      original: group398,
      thumbnail: group398,
    },
    {
      original: group383,
      thumbnail: group383,
    },
    {
      original: group381,
      thumbnail: group381,
    },
    {
      original: group397,
      thumbnail: group397,
    },
  ];

  let images2015 = [
    {
      original: rec19,
      thumbnail: rec19,
    },
    {
      original: rec196,
      thumbnail: rec196,
    },
    {
      original: rec199,
      thumbnail: rec199,
    },
    // {
    //   original: group397,
    //   thumbnail: group397,
    // },
  ];

  let images2011 = [
    {
      original: group82,
      thumbnail: group82,
    },
    {
      original: group83,
      thumbnail: group83,
    },
    {
      original: group85,
      thumbnail: group85,
    },
    {
      original: group87,
      thumbnail: group87,
    },
  ];

  let images2014 = [
    {
      original: rec89,
      thumbnail: rec89,
    },
    {
      original: two,
      thumbnail: two,
    },
    {
      original: three,
      thumbnail: three,
    },
    {
      original: four,
      thumbnail: four,
    },
    // {
    //   original: group397,
    //   thumbnail: group397,
    // },
  ];
  // let medicine = [
  //   {

  //     original: med,
  //     thumbnail: med,

  //   }
  // ]
  

  let images2016 = [
    {
      original: group62,
      thumbnail: group62,
    },
    {
      original: group69,
      thumbnail: group69,
    },
    // {
    //   original: three,
    //   thumbnail: three,
    // },
    // {
    //   original: four,
    //   thumbnail: four,
    // },
    // {
    //   original: group397,
    //   thumbnail: group397,
    // },
  ];
  // let medicine = [
  //   {

  //     original: med,
  //     thumbnail: med,

  //   }
  // ]
  


  return (
    <Box className="modals">
      {+id.ok === 2010 ? (
        <Box>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>مطعم كنتاكي{" "}
              </p>
              <p>
                <span>العنوان : </span> الشفاء شارع 60{" "}
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2010
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span> مدرسة طريب الثانية الابتدائية
              </p>

              <p>
                <span>العنوان : </span> طريق منطقة عسير{" "}
              </p>

              <p>
                <span> مدة الانجاز : </span> 730 يوم
              </p>

              <p>
                <span>سنة التنفيذ : </span> 2010
              </p>

              <p>
                <span>تكلفة المشروع : </span> 26.000.000 ريال
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images2010} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        console.log(undefined)
      )}

      {+id.ok === 2024 ? (
        <Grid container className="model">
          <Grid item xs={11} md={5} lg={6}>
            <p>
              <span>اسم المشروع : </span> محطة فيول
            </p>
            <p>
              <span>العنوان : </span> النسيم شارع النسائي
            </p>
            <p>
              <span>سنة التنفيذ : </span> 2024
            </p>
            <p>
              <span>تكلفة المشروع : </span> 3.500.000 ريال
            </p>
            <p>
              <span>الوصف : </span> انشاء متكامل - 3.500
            </p>
          </Grid>
          <Grid item xs={11} md={5} lg={6} className="image">
            <ImageGallery items={images2024} />
            <Box className="logo">
              <CardMedia component="img" image={logo} />
            </Box>
          </Grid>
        </Grid>
      ) : (
        console.log(undefined)
      )}
      {+id.ok === 2018 ? (
        <Box>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span> محطة الدريس للبترول
              </p>
              <p>
                <span>العنوان : </span> طريق الخرج - 18
              </p>
              <p>
                <span> مدة الانجاز : </span> 365 يوم
              </p>

              <p>
                <span>سنة التنفيذ : </span> 2018
              </p>
              <p>
                <span>تكلفة المشروع : </span> 9.000.000 ريال
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images2018} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span> جيم بودي ماس
              </p>
              <p>
                <span>العنوان : </span> شارع التخصص
              </p>

              <p>
                <span>سنة التنفيذ : </span> 2018
              </p>
              <p>
                <span>تكلفة المشروع : </span> 2.000.000 ريال
              </p>
              <p>
                <span> وصف : </span> تشطيب فقط{" "}
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images20182} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        console.log(undefined)
      )}
      {+id.ok === 1921 ? (
        <Box>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>اسواق العثيم
              </p>
              <p>
                <span>العنوان : </span> البديعة مخرج 28 - الخرج - قرطبة
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2019 - 2021
              </p>
              <p>
                <span>تكلفة المشروع : </span>13.650.000 ريال
              </p>
              <p>
                <span>الوصف : </span> تشطيب فقط
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images2019} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>محطة وي{" "}
              </p>
              <p>
                <span>العنوان : </span> مخرج 5 - مخرج قوات الامن
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2019 - 2021
              </p>
              <p>
                <span>الوصف : </span> انشاء فقط - 5.000
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images19201} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>محطة وي{" "}
              </p>
              <p>
                <span>العنوان : </span> طريق القصيم{" "}
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2019 - 2021
              </p>
              <p>
                <span>الوصف : </span> انشاء فقط - 60.000.000..
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images19202} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>محطة وي{" "}
              </p>
              <p>
                <span>العنوان : </span> طريق الدمام
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2019 - 2021
              </p>
              <p>
                <span>الوصف : </span> انشاء فقط - 30.000
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images19202} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        console.log(undefined)
      )}
      {+id.ok === 2011 ? (
        <Grid container className="model">
          <Grid item xs={11} md={5} lg={6}>
            <p>
              <span>اسم المشروع : </span> مجمع الرياض السكني
            </p>
            <p>
              <span>العنوان : </span> حي السويدي الرياض
            </p>
            <p>
              <span>مدة الانجاز : </span> 700 يوم
            </p>
            <p>
              <span> سنة التنفيذ : </span> 2011
            </p>
          </Grid>
          <Grid item xs={11} md={5} lg={6} className="image">
            <ImageGallery items={images2011} />
            <Box className="logo">
              <CardMedia component="img" image={logo} />
            </Box>
          </Grid>
        </Grid>
      ) : (
        console.log(undefined)
      )}
      {+id.ok === 2017 ? (
        <Box>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>صيدلية الدوا
              </p>
              <p>
                <span>العنوان : </span> الرحمانية شارع التخص{" "}
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2017
              </p>
              <p>
                <span>تكلفة المشروع : </span> 2.500.000 ريال
              </p>
              <p>
                <span>الوصف : </span> انشاء فقط - 1.500
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={medicine} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>صيدلية الدوا
              </p>
              <p>
                <span>العنوان : </span> قرطبة - رقم الصي -1114{" "}
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2017
              </p>
              <p>
                <span>تكلفة المشروع : </span> 1.800.000 ريال
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={medicine} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        console.log(undefined)
      )}

      {+id.ok === 2013 ? (
        <Grid container className="model">
          <Grid item xs={11} md={5} lg={6}>
            <p>
              <span>اسم المشروع : </span>صيدلية الدوا
            </p>
            <p>
              <span>العنوان : </span> المونسية رقم الصدل 296
            </p>
            <p>
              <span>سنة التنفيذ : </span> 2013
            </p>
            <p>
              <span>تكلفة المشروع : </span> 3.000.000 ريال
            </p>
            <p>
              <span>الوصف : </span> تشطيب فقط{" "}
            </p>
          </Grid>
          <Grid item xs={11} md={5} lg={6} className="image">
            <ImageGallery items={medicine} />
            <Box className="logo">
              <CardMedia component="img" image={logo} />
            </Box>
          </Grid>
        </Grid>
      ) : (
        console.log(undefined)
      )}
      {+id.ok === 2023 ? (
        <Box>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span> صيدلية الدواء
              </p>
              <p>
                <span>العنوان : </span>صيدلية القاعدة العسكرية - خميس مشيط
              </p>

              <p>
                <span>سنة التنفيذ : </span> 2023
              </p>

              <p>
                <span>تكلفة المشروع : </span> 2.000.000 ريال
              </p>
              <p>
                <span> الوصف : </span> انشاء فقط - 1.300 م
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={medicine} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span> محطة ساسكو
              </p>
              <p>
                <span>العنوان : </span> الميزان - حي الفلاح
              </p>

              <p>
                <span>سنة التنفيذ : </span> 2023
              </p>

              <p>
                <span>تكلفة المشروع : </span>1.700.000 ريال
              </p>
              <p>
                <span> الوصف : </span> تطوير - 2.500 م
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images2022} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        console.log(undefined)
      )}

      {+id.ok === 2012 ? (
        <Grid container className="model">
          <Grid item xs={11} md={5} lg={6}>
            <p>
              <span>اسم المشروع : </span> مطعم فرايد
            </p>
            <p>
              <span>العنوان : </span> منطقة جيزا{" "}
            </p>
            <p>
              <span> مدة الانجاز : </span> 365 يوم
            </p>

            <p>
              <span>سنة التنفيذ : </span> 2012
            </p>
            <p>
              <span>تكلفة المشروع : </span> 6.000.000 ريال
            </p>
          </Grid>
          <Grid item xs={11} md={5} lg={6} className="image">
            <ImageGallery items={images2012} />
            <Box className="logo">
              <CardMedia component="img" image={logo} />
            </Box>
          </Grid>
        </Grid>
      ) : (
        console.log(undefined)
      )}
      {+id.ok === 2014 ? (
        <Grid container className="model">
          <Grid item xs={11} md={5} lg={6}>
            <p>
              <span>اسم المشروع : </span> فلل الاسكان بالعلا{" "}
            </p>
            <p>
              <span>العنوان : </span> العلا بالسعو{" "}
            </p>
            <p>
              <span>مدة التنفيذ : </span> 730 يوم{" "}
            </p>

            <p>
              <span>سنة التنفيذ : </span> 2014
            </p>
          </Grid>
          <Grid item xs={11} md={5} lg={6} className="image">
            <ImageGallery items={images2014} />
            <Box className="logo">
              <CardMedia component="img" image={logo} />
            </Box>
          </Grid>
        </Grid>
      ) : (
        console.log(undefined)
      )}
      {+id.ok === 2015 ? (
        <Grid container className="model">
          <Grid item xs={11} md={5} lg={6}>
            <p>
              <span>اسم المشروع : </span> مبنى توكيلات الجزيرة للسيا
            </p>
            <p>
              <span>العنوان : </span> حي البديعة الرياض - 28
            </p>
            <p>
              <span>مدة الانجاز : </span> 365 يوم{" "}
            </p>

            <p>
              <span>سنة التنفيذ : </span> 2015{" "}
            </p>
          </Grid>
          <Grid item xs={11} md={5} lg={6} className="image">
            <ImageGallery items={images2015} />
            <Box className="logo">
              <CardMedia component="img" image={logo} />
            </Box>
          </Grid>
        </Grid>
      ) : (
        console.log(undefined)
      )}

      {+id.ok === 2022 ? (
        <Box>
          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span>صيدلية الدوا
              </p>
              <p>
                <span>العنوان : </span> صيدلية احد روفيده منطقة الجن
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2022
              </p>
              <p>
                <span>تكلفة المشروع : </span> 3.000.000 ريال
              </p>
              <p>
                <span>الوصف : </span> انشاء فقط - 1.500
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={medicine} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="model">
            <Grid item xs={11} md={5} lg={6}>
              <p>
                <span>اسم المشروع : </span> محطة ساسك
              </p>
              <p>
                <span>العنوان : </span>ظهرة لب
              </p>
              <p>
                <span>سنة التنفيذ : </span> 2022
              </p>
              <p>
                <span>تكلفة المشروع : </span> 1.200.000 ريال
              </p>
              <p>
                <span>الوصف : </span> تطوير - 2.400
              </p>
            </Grid>
            <Grid item xs={11} md={5} lg={6} className="image">
              <ImageGallery items={images2022} />
              <Box className="logo">
                <CardMedia component="img" image={logo} />
              </Box>
            </Grid>
          </Grid>




        </Box>
      ) : (
        console.log(undefined)
      )}
      {
        +id.ok === 2016 ? 
        <Grid container className="model">
        <Grid item xs={11} md={5} lg={6}>
          <p>
            <span>اسم المشروع : </span> مبنى توكيلات الجزيرة للسيارات
          </p>
          <p>
            <span>العنوان : </span>  حي المنصورة الرياض مخرج - 22
          </p>
          <p>
            <span>مدة الانجاز : </span> 365 يوم
          </p>
          <p>
            <span>سنة التنفيذ  : </span>2016
          </p>
         
        </Grid>
        <Grid item xs={11} md={5} lg={6} className="image">
          <ImageGallery items={images2016} />
          <Box className="logo">
            <CardMedia component="img" image={logo} />
          </Box>
        </Grid>
      </Grid>
      : console.log(undefined)
      }
      <Footer />
    </Box>
  );
};

export default Modals;
