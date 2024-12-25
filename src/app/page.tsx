import AppHeader from "@/components/AppHeader";
import About from '@/pages/About';
import Education from "@/pages/Education";
import Experience from "@/pages/Experience";
import Home from '@/pages/Home';

const HomePage = () => {
  return (
    <div className="px-[200px]">
      <AppHeader />
      <Home />
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default HomePage;
