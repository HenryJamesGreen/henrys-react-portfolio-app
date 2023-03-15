
import React from "react";
import "./style.css";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div>
 
        <Grid
        container
        spacing={0}
        justifyContent="center"
        style={{ marginTop: "0px", color: "white" , fontSize: "10px" }}
      
      >
      <span>Henry Green 2023</span>
      </Grid>
    </div>
  );
}

export default Footer;
