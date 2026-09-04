import Hero from "../components/sections/Hero";
import Statistics from "../components/sections/Statistics";
import ServicesPreview from "../components/sections/ServicesPreview";
import AboutPreview from "../components/sections/AboutPreview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ClientsMarquee from "../components/sections/ClientsMarquee";
import CTA from "../components/sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <ClientsMarquee />
      <CTA />
    </>
  );
};

export default Home;
