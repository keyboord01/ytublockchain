import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import RoadmapSection from "@/components/RoadmapSection";
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Events />
      <RoadmapSection />
      <Footer />
    </main>
  );
}

export default App;
