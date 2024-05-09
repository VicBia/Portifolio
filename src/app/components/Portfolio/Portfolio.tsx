/* eslint-disable react/no-unescaped-entities */
"use client";
import "./Portfolio.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import Exemplo from "../../assets/exemplo.png";
import Image from "next/image";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  width: "auto",
};

const color = grey[50];

export default function Portfolio() {
  const projects = [
    {
      name: "projeto 1",
      resume: "msoejifoihgsjpjf",
      src: "/assets/exemplo.png",
      color: "#007396",
    },
    {
      name: "projeto 2",
      resume: "msoejifoihgsjpjf",
      src: "/assets/exemplo.png",
      color: "#512BD4",
    },
    {
      name: "projeto 3",
      resume: "msoejifoihgsjpjf",
      src: "/assets/exemplo.png",
      color: "#026E00",
    },
    {
      name: "projeto 4",
      resume: "msoejifoihgsjpjf",
      src: "/assets/exemplo.png",
      color: "#777BB4",
    },
    {
      name: "projeto 5",
      resume: "msoejifoihgsjpjf",
      src: "/assets/exemplo.png",
      color: "#3776AB",
    },
    {
      name: "projeto 6",
      resume: "msoejifoihgsjpjf",
      src: "/assets/exemplo.png",
      color: "#F05032",
    },
  ];

  const [open, setOpen] = useState(projects.map(() => false));

  const handleOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    let newOpen = [...open];
    newOpen[index] = true;
    setOpen(newOpen);
  };

  const handleClose = (
    event: React.MouseEvent<HTMLElement> | null,
    index: number
  ) => {
    if (event) {
      // Seu código aqui se o evento existir
    }
    let newOpen = [...open];
    newOpen[index] = false;
    setOpen(newOpen);
  };

  return (
    <section className="Portfolio" id="portifolio">
      <div className="heading">
        <div className="portHead">
          <h1>Meu Portifolio</h1>
          <p>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
      </div>
      <div className="cardsPortfolio">
        {projects.map((project, index) => (
          <div key={index}>
            <Card sx={{ maxWidth: 300 }} key={index}>
              <CardActionArea onClick={(event) => handleOpen(event, index)}>
                <Image
                  src={project.src}
                  alt="projeto 1"
                  width={300} // ajuste para o tamanho desejado
                  height={200} // ajuste para o tamanho desejado
                />
                <div className="cardInfo">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.resume}
                    </Typography>
                  </CardContent>
                </div>
              </CardActionArea>
            </Card>
            <Modal
              open={open[index]}
              onClose={() => handleClose(null, index)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <IconButton
                  aria-label="close"
                  onClick={() => handleClose(null, index)}
                  sx={{
                    backgroundColor: "#d5d5d5c2",
                    width: "fit-content",
                    top: "-16px",
                    left: "-16px",
                  }}
                >
                  <CloseIcon />
                </IconButton>{" "}
                <Image
                  src={project.src}
                  alt="projeto 1"
                  width={450} // ajuste para o tamanho desejado
                  height={370} // ajuste para o tamanho desejado
                />
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {project.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
                  {project.resume}
                </Typography>
              </Box>
            </Modal>
          </div>
        ))}
      </div>
    </section>
  );
}
