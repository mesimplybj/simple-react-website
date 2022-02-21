import About from './components/About/About'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Services from './components/Services/Services'
import Counter from './components/Counter/Counter'
import Portfolio from './components/Portfolio/Portfolio'
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { AppConstants } from './Constants';
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <main id="main">
        <About />
        <Services/>
        <Counter props={AppConstants.Counter}/>
        <Portfolio />
        <TestimonialSlider props={AppConstants.Testimonial}/>
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
