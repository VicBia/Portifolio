import Link from "next/link";
import Image from "next/image";
import "./Cover.css";
import coverImage from "../../assets/imagecover.svg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const caminhoDaImagem = coverImage.src || "";

export default function Cover() {
  return (
    <>
      <section className="coverMain">
        <section className="hero">
          <nav>
            <Link href="/" className="logo">
              MICHEL
            </Link>
            <div>
              <Link href="#about">Sobre</Link>
              <Link href="#services">Serviços</Link>
              <Link href="#portifolio">Portifolio</Link>
            </div>
            <Link href="#contact" className="contactButton">
              Contato
            </Link>
          </nav>
        </section>
        <section className="cover">
          <div className="info">
            {/* <span>Desenvolvedor WEB</span> */}
            <h1>
              Olá, eu sou <b>Michel Gerônimo</b>
            </h1>
            <h3>
              Engenheiro da computação | Desenvolvedor BackEnd <br /> (Java, Spring,
              ASP.NET C#, Node.JS)
              <br />
              {/*
    Welcome to my portfolio of captivating digital experiences. Explore
    my work and let's create something extraordinary together. */}
            </h3>
            {/* <div className="buttons">
              <button id="hireMe">Hire me</button>
              <button id="port">Portifólio</button>
            </div> */}
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
