import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
