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
          marginLeft: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={process.env.PUBLIC_URL + props.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProjectCard;
