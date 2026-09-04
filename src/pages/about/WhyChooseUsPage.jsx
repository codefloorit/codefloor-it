import PageHero from "../../components/common/PageHero";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Statistics from "../../components/sections/Statistics";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import CTA from "../../components/sections/CTA";

const WhyChooseUsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Six reasons founders stop shopping around."
        description="We don't win clients on the pitch — we keep them on the delivery."
        breadcrumbItems={[{ label: "About", path: "/about" }, { label: "Why Choose Us" }]}
      />
      <div className="section-pad !pb-0">
        <WhyChooseUs compact />
      </div>
      <Statistics />
      <TestimonialsSection />
      <CTA />
    </>
  );
};

export default WhyChooseUsPage;
