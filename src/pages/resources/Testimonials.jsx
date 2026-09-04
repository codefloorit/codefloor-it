import PageHero from "../../components/common/PageHero";
import TestimonialCard from "../../components/cards/TestimonialCard";
import Reveal from "../../components/common/Reveal";
import Statistics from "../../components/sections/Statistics";
import CTA from "../../components/sections/CTA";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What clients say after working with us."
        description="Real feedback from founders and operators across retail, logistics, wellness, and technology."
        breadcrumbItems={[{ label: "Resources", path: "/blog" }, { label: "Testimonials" }]}
      />

      <section className="section-pad">
        <div className="container-app grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <Statistics />
      <CTA
        eyebrow="Add your story"
        title="Ready to become our next success story?"
      />
    </>
  );
};

export default Testimonials;
