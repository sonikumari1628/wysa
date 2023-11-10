import React from "react";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import peng from "../images/peng.jpeg";
import "./welcome.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Box className="box">
      <img alt="peng" src={peng} className="img" />
      <Typography
        sx={{ fontSize: "3.2em", fontWeight: "600" }}
        className="typo">
        Hey! I'm <span className="wysa">wysa</span>
      </Typography>
      <Typography sx={{ fontSize: "2em" }} className="typo2">
        I'm here to help you sleep better
      </Typography>
      <Link to="/auth">
        <ArrowDownwardIcon className="icon" />
      </Link>
    </Box>
  );
};

export default WelcomePage;
