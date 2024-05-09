/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="Footer">
      <footer>
        {/* <div>
          <Link href="#about">Sobre</Link>
          <Link href="#services">Serviços</Link>
        </div> */}
        <Link href="/" className="logoFooter">
          MICHEL
        </Link>
        {/* <div>
          <Link href="#portifolio">Portfolio</Link>
        </div> */}
      </footer>
    </section>
  );
}
