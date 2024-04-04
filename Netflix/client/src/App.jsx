import Divider from "./components/Divider";
import Hero from "./components/Hero";
import "typeface-open-sans";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[100%] flex flex-col">
      <Hero />
      <Divider />
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 />
      <Divider />
      <Section4 />
      <Divider />
      <Section5 />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
