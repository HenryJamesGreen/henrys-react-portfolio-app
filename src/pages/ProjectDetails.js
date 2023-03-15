import { useParams } from "react-router-dom";
import projectData from "../projects.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function ProjectDetails() {
  // hook allows extraction of id value from router to then use and find relevant project in the json file. If no project is found, return 'no project found'. If found, jsx set.
  let { id } = useParams();
  let project = projectData.find((p) => p.id === parseInt(id));
  //console.log(projectData);
  //console.log(project);

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
      <Card
        sx={{
          width: 500,
          marginBottom: "200px",
          marginTop: "50px",
          border: "1px solid rgba(0,20,50,0.7)",
        }}
      >
        <CardMedia
          sx={{ height: 400 }}
          image={process.env.PUBLIC_URL + project.image}
          title={project.name}
        />
        <CardContent
          sx={{ textAlign: "center", borderTop: "1px solid rgba(0,20,50,0.7)" }}
        >
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
            style={{
              border: "1px solid rgba(0,20,50,0.7)",
              color: "rgba(0,20,50,0.7)",
            }}
          >
            View Code
          </Button>
          <Button
            variant="outlined"
            size="small"
            component={Link}
            to="/projects"
            style={{
              border: "1px solid rgba(0,20,50,0.7)",
              color: "rgba(0,20,50,0.7)",
            }}
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectDetails;
