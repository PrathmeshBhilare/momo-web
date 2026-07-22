import { useState } from 'react';
import { LenisProvider } from './components/layout/LenisProvider';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Signature } from './components/sections/Signature';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { FeaturedMenu } from './components/sections/FeaturedMenu';
import { CinematicVideo } from './components/sections/CinematicVideo';
import { Gallery } from './components/sections/Gallery';
import { Reviews } from './components/sections/Reviews';
import { Locations } from './components/sections/Locations';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <LenisProvider>
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
      
      {/* Main Content */}
      <div className={`transition-opacity duration-1000 bg-bg-main ${loadingComplete ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Navbar />
        <main>
          <Hero />
          <Signature />
          <WhyChooseUs />
          <FeaturedMenu />
          <CinematicVideo />
          <Gallery />
          <Reviews />
          <Locations />
          <Contact />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}

export default App;
