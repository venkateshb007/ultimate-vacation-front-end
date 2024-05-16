import "./App.css";
import Cards from "./components/cards/Cards";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import InfoBox from "./components/info-box/InfoBox";
import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage id="vacation-info" />
      <Cards id="cards" />
      <InfoBox id="info-box" />
      <Contact id="contact-us" />
      <Footer />
    </div>
  );
}

export default App;
