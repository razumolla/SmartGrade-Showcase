import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Students from "./components/Students";

function App() {
  return (
    <main className="bg-[#172227]  text-white">
      <Navbar />
      <Hero />
      <Students />
      <Footer />
    </main>
  );
}

export default App;
