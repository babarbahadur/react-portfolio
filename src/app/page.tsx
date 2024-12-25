import AppHeader from "@/components/AppHeader";
import About from '@/pages/About';
import Experience from "@/pages/Experience";
import Home from '@/pages/Home';

const HomePage = () => {
  return (
    <div className="px-[200px]">
      <AppHeader />
      {/* Sections */}
      <Home />
      <About />
      <Experience />
    </div>
  );
};

export default HomePage;
