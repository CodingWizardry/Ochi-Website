import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Reviews from "./components/Reviews";
import Cards from "./components/Cards";
import Playful from "./components/Playful";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <Cards />
      <Playful />
      <Footer />
    </div>
  );
}

export default App;
