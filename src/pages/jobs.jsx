import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import one from "../images/pngwing.com (2).png";
import two from "../images/architect-holding-pl.png";
import three from "../images/businessman-with-his.png";
import four from "../images/medium-shot-adult-su.png";
import five from "../images/cheerful-young-busin.png";
import six from "../images/young-man-taking-not.png";
import seven from "../images/mature-businessman-c.png";
import "../css/style.css";
import Footer from "../component/Footer";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HubIcon from "@mui/icons-material/Hub";
import PaidIcon from "@mui/icons-material/Paid";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CreateIcon from "@mui/icons-material/Create";
import ArchitectureIcon from '@mui/icons-material/Architecture';
export default function jobs() {
  return (
    <Box className="jobs">
      <h1>الهيكل الوظيفي</h1>
      <Grid container className="container-job">
        
        <Grid item className="item" xs={11} md={3}>
        <ArchitectureIcon />

          <p>مدير مشاريع</p>
        </Grid>

        <Grid item className="item" xs={11} md={3}>
        <CreateIcon />

          <p>مدير قسم الدراسات</p>
        </Grid>

        <Grid item className="item" xs={11} md={3}>
        <EngineeringIcon />

          <p>مدير تنفيذ</p>
        </Grid>

        <Grid item className="item" xs={11} md={3}>
        <HubIcon />

          <p>مدير التسويق</p>
        </Grid>

        <Grid item className="item" xs={11} md={3}>
        <PaidIcon />

          <p>المدير المالي</p>
        </Grid>

        <Grid item className="item" xs={11} md={3}>
        <ManageAccountsIcon />

          <p>منسق مشاريع</p>
        </Grid>

        <Grid item className="item" xs={11} md={3}>
        <MeetingRoomIcon />

          <p>المكتب الفني</p>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}
