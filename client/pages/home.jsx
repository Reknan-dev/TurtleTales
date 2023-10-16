import React from "react";
import Main from "../components/Main";
import Section from "../components/Section";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent"
import IstructionMap from "../components/InstructionMap"
import InspirationSection from "../components/InspirationSection";


export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <div className="flex">
      <IstructionMap />
      <MapComponent />
      </div>
      <InspirationSection />
      <Footer />
    </div>
  );
}
