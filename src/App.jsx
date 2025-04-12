import "./App.css";
import { Navbar } from "./components/navbar";
import { LaunchRoadMap } from "./components/launchroadmap";
import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/hero-section";
import { DevelopmentRoadMapSection } from "./components/develepmentRoadmapSection";
import { TeamSection } from "./components/TeamSection";
import { DiscordSection } from "./components/discordSection";
import { EventSection } from "./components/eventSection";
import MyComponent from "./components/mycomponent";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />

      <LaunchRoadMap />

      <DevelopmentRoadMapSection />
      <TeamSection />
      <DiscordSection />
      <EventSection />
      <MyComponent />
      <Footer />
    </div>
  );
}

export default App;
