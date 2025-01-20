import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Schedule from "@/components/Schedule";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Schedule />
      <Footer />
    </main>
  );
}

export default App;
