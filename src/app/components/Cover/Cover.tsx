import Link from "next/link";
import "./Cover.css";

export default function Cover() {
  return (
    <section className="coverMain">
      <section className="hero">
        <nav>
          <Link href="/" className="logo">
            CAIO
          </Link>
          <div>
            <Link href="#About">Sobre</Link>
            <Link href="#Services">Serviços</Link>
            <Link href="#Portifolio">Portfolio</Link>
          </div>
          <Link href="#Contact" className="contactButton">
            Contato
          </Link>
        </nav>
      </section>
      <section className="cover">
        <div className="info">
          <span>Desenvolvedor WEB</span>
          <h1>
            Hi There, I’m <b>Caio Bindeiro</b>
          </h1>
          <h3>
            Welcome to my portfolio of captivating digital experiences. Explore
            my work and let's create something extraordinary together.
          </h3>
          <div className="buttons">
            <button id="hireMe">Hire me</button>
            <button id="port">Portifólio</button>
          </div>
        </div>
        <h1>imagem</h1>
      </section>
    </section>
  );
}
