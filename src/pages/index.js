import "../../styles/globals.css";
import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certs from "@/components/Certs";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zach Gallman SWE Portfolio",
  description: "A personal portfolio using Next.Js, React, and TailwindCSS",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Gallman Portfolio</title>
        {/* Include other meta tags, stylesheets, or scripts */}
      </Head>
      <NavBar />
      <main>
        <Intro />
        <Experience />
        <About />
        <Skills />
        <Certs />
        <Projects />
        <Contact />
        {/* Render other components */}
      </main>
      <Footer />
      {/* Include a footer component if needed */}
    </>
  );
}
