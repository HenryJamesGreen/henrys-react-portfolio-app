/* eslint-disable */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_jfh2kxf",
        "template_2j5119u",
        formData,
        "fvg_RcErhnk6slDnq"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            subject: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Message failed to send.");
        }
      );
  };

  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Typography
        variant="h2"
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        CONTACT
      </Typography>

      <Card
        style={{
          maxWidth: 450,
          margin: "0 auto",
          padding: "20px 5px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Me
          </Typography>
          <Typography
            gutterBotom
            color="secondary"
            variant="body2"
            component="p"
          >
            Contact me at{" "}
            <a href="mailto:henryjamesgreen92@gmail.com">
              henryjamesgreen92@gmail.com
            </a>{" "}
            , or simply fill out this form!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name."
                  variant="outlined"
                  fullWidth
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email."
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="subject"
                  label="Subject"
                  placeholder="Enter subject."
                  variant="outlined"
                  fullWidth
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="message"
                  multiline
                  rows={4}
                  placeholder="Type your message here."
                  variant="outlined"
                  fullWidth
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ bgcolor: "rgba(0,20,50, 0.9)" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "10px", marginBottom: "100px" }}
      >
        <Grid item>
          <a
            href={process.env.PUBLIC_URL + "/images/henryjamesgreenresume.pdf"}
            target="_blank"
          >
            <FaFilePdf
              className="icons pdf"
              style={{ fontSize: 150, color: "White" }}
            />
          </a>
        </Grid>

        {/* Github */}
        <Grid item>
          <a href="https://github.com/HenryJamesGreen" target="_blank">
            <FaGithub
              className="icons youtube"
              style={{ fontSize: 150, color: "White" }}
            />
          </a>
          {/* LinkedIn */}
        </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/henryjamesgreen/"
            target="_blank"
          >
            <FaLinkedin
              className="icons linkedin"
              style={{ fontSize: 150, color: "White" }}
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
