import Link from "next/link";
import Image from "next/image";
import "./Cover.css";
import coverImage from "../../assets/imagecover.svg"

const caminhoDaImagem = coverImage.src || "";

export default function Cover() {
  return (
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
          <span>Desenvolvedor WEB</span>
          <h1>
            Hi There, I’m <b>Michel Gerônimo</b>
          </h1>
          <h3>
            Computer engineer / Backend Developer (Java, Spring, ASP.NET C#,
            Node.JS)
            <br />
            {/* 
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together. */}
          </h3>
          <div className="buttons">
            <button id="hireMe">Hire me</button>
            <button id="port">Portifólio</button>
          </div>
        </div>
        <Image
            src={caminhoDaImagem}
            alt="projeto 1"
            width={350} // Defina a largura da imagem conforme necessário
            height={350} // Defina a altura da imagem conforme necessário
          />      </section>
    </section>
  );
}
