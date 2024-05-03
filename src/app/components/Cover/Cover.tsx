"use client";

import Link from "next/link";
import Image from "next/image";
import "./Cover.css";
import { useState } from "react";
import coverImage from "../../assets/imagecover.svg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const caminhoDaImagem = coverImage.src || "";

export default function Cover() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <ListItem key={index} style={{ justifyContent: "center" }}>
        <Link href={item.href}  onClick={toggleMenu}>{item.label}</Link>
      </ListItem>
    ));
  };

  return (
    <>
      <section className="coverMain">
        <section className="hero">
          <nav>
            <Link href="/" className="logo">
              MICHEL
            </Link>
            <div className="hide">
              <div>
                <Link href="#about">Sobre</Link>
                <Link href="#services">Serviços</Link>
                <Link href="#portifolio">Portifolio</Link>
              </div>
            </div>
            <div className="hide">
              <Link href="#contact" className="contactButton">
                Contato
              </Link>
            </div>
            <div className="menuIcon" onClick={toggleMenu}>
              <MenuIcon />
            </div>
          </nav>
          <Drawer anchor="right" open={openMenu} onClose={toggleMenu}>
            <Box
              sx={{
                p: 2,
                width: "100vw",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#ccd2ff",
                fontSize: "2rem",
                fontWeight: 500,
              }}
            >
              <IconButton
                sx={{
                  left: "40px",
                  top: "20px",
                  position: "absolute",
               
                }}
              >
                <CloseIcon onClick={toggleMenu} style={{ fontSize: 35 }} />
              </IconButton>

              <List>{renderMenuItems()}</List>
            </Box>
          </Drawer>
        </section>
        <section className="cover">
          <div className="info">
            {/* <span>Desenvolvedor WEB</span> */}
            <h1>
              Olá, eu sou <b>Michel Gerônimo</b>
            </h1>
            <h3>
              Engenheiro da computação | Desenvolvedor BackEnd <br /> (Java,
              Spring, ASP.NET C#, Node.JS)
            </h3>
          </div>
          <Image
            src={caminhoDaImagem}
            alt="projeto 1"
            width={350}
            height={350}
          />{" "}
        </section>
      </section>
      <section className="contactHeader">
        <Stack direction="row" spacing={2}>
          {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button> */}
          <Button
            variant="contained"
            endIcon={<LinkedInIcon />}
            style={{
              backgroundColor: "#0A66C2",
              color: "#fff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/michel-geronimo-carvalho-8a0201204/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
          </Button>
          <Button
            variant="contained"
            endIcon={<GitHubIcon />}
            style={{
              backgroundColor: "#333",
              color: "#fff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link
              href="https://github.com/Meichl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
        </Stack>
      </section>
    </>
  );
}
