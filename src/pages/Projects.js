import React from "react";
import Wrapper from "../components/Wrapper";
import ProjectCard from "../components/ProjectCard";
import projectData from "../projects.json";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

function Projects() {
  // Here we set the state for friends and also create a function to update it.
  // Set the initial value to friendsData imported from the json file
  const [projects, setProjects] = useState(projectData);

  // Map over friends and render a FriendCard component for each friend object
  return (
    <Wrapper>
      <Typography variant="h2" style={{ color: "white", textAlign: "center" }}>
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard 
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              deployed={project.deployed}
              repo={project.repo}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Projects;
