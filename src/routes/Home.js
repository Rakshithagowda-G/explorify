import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trips from "../components/Trips";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        className="marque"
        cName="hero"
        heroimg="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Uncover Hidden Gems"
        text="Discover Your Next Stop"
        btntxt="Dream Gateway Plan"
        url="/"
        btnclass="show"
      />

      <Trips />
      <Footer />
    </>
  );
}
export default Home;
