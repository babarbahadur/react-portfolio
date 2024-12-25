import AboutSection from '@/components/AboutSection';
import AppHeader from "@/components/AppHeader";
import HomeSection from '@/components/HomeSection';

const HomePage = () => {
  return (
    <div className="px-[200px]">
      <AppHeader />
      {/* Sections */}
      <HomeSection />
      <AboutSection />
      <section id="services" className="h-screen bg-yellow-500 text-white">
        <h1 className="text-4xl text-center pt-40">Services Section</h1>
      </section>
    </div>
  );
};

export default HomePage;
