import Advertisement from "./components/Advertisement";
import EventInfo from "./components/EventInfo";
import EventSchedule from "./components/EventSchedule";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import SpeakersInfo from "./components/SpeakersInfo";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <div className="container">
        <EventInfo />
        <SpeakersInfo />
      </div>
      <Advertisement />
      <EventSchedule />
      <Footer />
    </div>
  );
}

export default App;
