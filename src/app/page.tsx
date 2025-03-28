import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer"
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <Layout>
      <div id="top"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
    </Layout>
  );
}
