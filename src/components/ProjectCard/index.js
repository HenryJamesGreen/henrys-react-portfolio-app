import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ProjectCard(props) {
  return (
    <Link to={`/details/${props.id}`}>
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 200,
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid rgba(0,20,50,0.7) ",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={process.env.PUBLIC_URL + props.image}
          title={props.name}
        />
        <CardContent style={{ borderTop: "1px solid rgba(0,20,50,0.7)" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "black", textAlign: "center" }}
          >
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProjectCard;
