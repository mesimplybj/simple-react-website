import About from '../components/Front/About/About'
import Header from '../components/Front/Header/Header'
import HeroSection from '../components/Front/HeroSection/HeroSection'
import Services from '../components/Front/Services/Services'
import Counter from '../components/Front/Counter/Counter'
import Portfolio from '../components/Front/Portfolio/Portfolio'
import TestimonialSlider from '../components/Front/TestimonialSlider/TestimonialSlider'
import Blog from '../components/Front/Blog/Blog'
import Contact from '../components/Front/Contact/Contact'
import Footer from '../components/Front/Footer/Footer'
function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main id="main">
        <About />
        <Services/>
        <Counter />
        <Portfolio />
        <TestimonialSlider />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
