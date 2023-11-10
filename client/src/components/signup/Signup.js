import React, { useState } from "react";
import { Box, InputBase, Paper, Typography } from "@mui/material";
import "./Signup.scss";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../hooks/FetchQuestion";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(data);

  const HandleSignup = () => {
    const userData = {
      username,
      password,
    };
    dispatch(signup(userData));
  };
  return (
    <Box className="box">
      <Typography className="typo">
        Hey! I'm <span className="wysa">wysa</span>
      </Typography>
      <Typography className="text">
        Our conversations are private & anonymous. Just choose a nickname,
        password and we're good to go.
      </Typography>
      <Paper className="paper">
        <InputBase
          type="text"
          placeholder="Choose a nickname..."
          className="input"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Paper>
      <Paper className="paper">
        <InputBase
          type="password"
          placeholder="Choose a password..."
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Paper>
      <Link to="/auth/questions" onClick={HandleSignup}>
        <ArrowDownwardIcon className="icon" />
      </Link>
    </Box>
  );
};

export default Signup;
