import AppHeader from "@/components/AppHeader";
import About from '@/pages/About';
import Education from "@/pages/Education";
import Experience from "@/pages/Experience";
import Home from '@/pages/Home';
import Testimonial from "@/pages/Testimonial";

const HomePage = () => {
  return (
    <div className="px-5 md:px-[50px] lg:px-[200px]">
      <AppHeader />
      <Home />
      <About />
      <Experience />
      <Education />
      <Testimonial />
    </div>
  );
};

export default HomePage;
