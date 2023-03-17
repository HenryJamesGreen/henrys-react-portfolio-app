import React from "react";
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
import emailjs from 'emailjs-com';


//Contact forms and buttons for page. Could make this cleaner (given more time) by putting the form itself in the components folder.
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const templateParams = {
      subject: formData.get("subject"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    emailjs
      .send(
        "service_jfh2kxf",
        "template_2j5119u",
        templateParams,
        "fvg_RcErhnk6slDnq"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
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
