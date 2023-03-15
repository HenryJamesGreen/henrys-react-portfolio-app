import { useParams } from "react-router-dom";
import projectData from "../projects.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProjectDetails() {
  let { id } = useParams();
  let project = projectData.find((p) => p.id === parseInt(id));
  console.log(projectData);
  console.log(project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: 500, marginBottom: "200px" }}>
        <CardMedia
          sx={{ height: 400 }}
          image={process.env.PUBLIC_URL + project.image}
          title={project.name}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          {project.deployed && (
            <Button
              variant="outlined"
              size="small"
              href={project.deployed}
              target="_blank"
            >
              Visit Site
            </Button>
          )}
          <Button
            variant="outlined"
            size="small"
            href={project.repo}
            target="_blank"
          >
            View Code
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectDetails;
