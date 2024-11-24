import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Aboutinform from "../components/Aboutinform";

function About() {
  return (
    <>
      <Navbar />

      <Hero
        cName="about"
        title="About"
        heroimg="https://images.unsplash.com/photo-1462400362591-9ca55235346a?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        btnclass="hide"
      />
      <Aboutinform />

      <Footer />
    </>
  );
}
export default About;
