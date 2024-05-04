import "./Tech.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// Importe os ícones restantes aqui

export default function Tech() {
    const techsBack = [
        { name: "JAVA", color: "#007396"},
        { name: "SPRING", color: "#6DB33F"},
        { name: "APACHE MAVEN", color: "#C71A36"},
        { name: "C#", color: "#239120"},
        { name: ".NET", color: "#512BD4"},
        { name: "NODE.JS", color: "#026E00"},
        { name: "PHP", color: "#777BB4"},
        { name: "PYTHON", color: "#3776AB"},
      ];
      const techsVersion = [
        { name: "GIT", color: "#F05032"},
        { name: "GIT HUB", color: "#181717"},
      ];
      

  return (
    <section className="containerTech">
      <h1>Tecnologias</h1>
      <h2>BackEnd</h2>
      <Stack direction="row" spacing={2}>
        <div className="techs">
          {techsBack.map((tech, index) => (
            <Button
              key={index}
              variant="contained"
              // endIcon={tech.icon}
              style={{
                backgroundColor: tech.color,
                color: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {tech.name}
            </Button>
          ))}
        </div>
      </Stack>
      <h2>Controle de Versão</h2>
      <Stack direction="row" spacing={2}>
        <div className="techs">
          {techsVersion.map((tech, index) => (
            <Button
              key={index}
              variant="contained"
              // endIcon={tech.icon}
              style={{
                backgroundColor: tech.color,
                color: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {tech.name}
            </Button>
          ))}
        </div>
      </Stack>
    </section>
  );
}
