import Divider from "./Divider";
import Hero from "./Hero";
import "typeface-open-sans";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
const LandingPage = () => {
  return (
    <div className="w-[100%] flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
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
};

export default LandingPage;
