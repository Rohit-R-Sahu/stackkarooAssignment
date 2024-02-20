import Career from "./components/Career";
import ChooseSec from "./components/ChooseSec";
import DigitalService from "./components/DigitalService";
import Hero from "./components/Hero";
import UserNavbar from "./components/Navbar";
import SeoServices from "./components/SeoServices";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <div className="container-fluid ">
        <UserNavbar />
      </div>

      <div className="container-fluid bg-1 pt-5">
        <Hero />
        <Services />
        <ChooseSec />
        <DigitalService />
        <SeoServices />
        <Career />
      </div>
    </main>
  );
}
