import React from "react";
import Main from "../components/Main";
import Section from "../components/Section";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent";
import InspirationSection from "../components/InspirationSection";
import withAuth from "../context/withAuth";

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <MapComponent />
      <InspirationSection />
      <Footer />
    </div>
  );
}

export default withAuth(Home);
