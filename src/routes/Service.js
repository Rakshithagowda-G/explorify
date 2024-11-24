import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trips from "../components/Trips";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="about"
        title="Service"
        heroimg="https://images.unsplash.com/photo-1675906798393-89cbae461520?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        btnclass="hide"
      />
      <Trips />
      <Footer />
    </>
  );
}
export default Service;
