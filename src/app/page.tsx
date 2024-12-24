import AppHeader from '../components/AppHeader'

const HomePage = () => {
  return (
    <div className="px-[200px]">
      <AppHeader />

      {/* Sections */}
      <section id="home" className="h-screen bg-blue-500 text-white">
        <h1 className="text-4xl text-center pt-40">Home Section</h1>
      </section>

      <section id="about" className="h-screen bg-red-500 text-white">
        <h1 className="text-4xl text-center pt-40">About Section</h1>
      </section>

      <section id="services" className="h-screen bg-yellow-500 text-white">
        <h1 className="text-4xl text-center pt-40">Services Section</h1>
      </section>
    </div>
  );
};

export default HomePage;
