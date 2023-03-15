import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: 400, marginBottom: "100px" }}>
        <CardMedia sx={{ height: 400 }} image={process.env.PUBLIC_URL + "/images/oldheadshot.jpg"} title="Henry Green" />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Henry James Green
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            A very warm welcome to my portfolio site!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            An aspiring frontend developer who is also an experienced
            professional musician, tutor and composer, I am used to working in
            target-driven and results-based environments with people from a
            diverse range of cultures and backgrounds. Currently studying a
            Postgraduate Diploma in Law, as well as participating in a course in
            Frontend Software Development with the Skills for Life organisation,
            I am keen to develop my new-found love of code and embark on a new,
            fruitful career.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
