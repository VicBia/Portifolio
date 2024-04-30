/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="Footer">
      <footer>
        <div>
          <Link href="#About">Sobre</Link>
          <Link href="#Services">Serviços</Link>
        </div>
        <Link href="/" className="logo">
          MICHEL
        </Link>
        <div>
          <Link href="#Portifolio">Portfolio</Link>
        </div>
      </footer>
    </section>
  );
}
