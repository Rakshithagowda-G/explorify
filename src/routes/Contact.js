import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="about"
        title="Contact"
        heroimg="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        btnclass="hide"
      />
      <Contactform />
      <Footer />
    </>
  );
}
export default Contact;
