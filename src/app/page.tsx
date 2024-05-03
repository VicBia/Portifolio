import styles from "./page.module.css";
import Cover from "@/app/components/Cover/Cover";
import About from "@/app/components/About/About";
import Services from "@/app/components/Services/Services";
import Portfolio from "@/app/components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="blueBack" id="column">
        <Cover />
      </div>
      <div className="blackBack">
        <About />
      </div>
      <Services />
      <Portfolio />
      <div className="blueBack">
        <Contact />
      </div>
      <div className="blackBack">
        <Footer />
      </div>
    </main>
  );
}
