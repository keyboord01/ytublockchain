import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NotFound404 from "@/components/NotFound404/NotFound404";

export default function NotFound() {
  return (
    <main className="relative w-screen overflow-x-hidden">
      <NavBar />
      <NotFound404 />
      <Footer />
    </main>
  );
}
