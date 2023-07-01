import React, { useState, useEffect, useRef } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor"

// components
import Navigation from './components/Navigation';

// views
import Home from './views/Home';

import About from './views/About';
import Qualifications from './views/Qualifications';
import TechStack from './views/TechStack';
// import Skills from './views/Skills';
import Projects from './views/Projects';
// import Design from './views/Design';
import Contacts from './views/Contacts';
import Footer from './views/Footer';
// import NotFound from './views/NotFound';
import BIRDS from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x17003D,
          midtoneColor: 0x17003D,
          lowlightColor: 0x17003D,
          baseColor: 0x7200ff,
          blurFactor: 0.67,
          speed: 0.00,
          zoom: 1.40
        })
      );
    }
  }, [vantaEffect]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
        style={{
          zIndex: 10000000,
          position: "fixed"
        }}
      />
      <Navigation />
      <main className="l-main"  ref={vantaRef}>
        <Home />
        <div className='bg-transparent'>

          <About />
          <Qualifications />
          {/* <Skills /> */}
          <TechStack />
          <Projects />
          {/* <Design /> */}
          <Contacts />
          <Footer />
        </div>

      </main>
    </div>
  );
};

export default App;
