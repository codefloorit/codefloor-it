import PageHero from "../../components/common/PageHero";
import CaseStudyCard from "../../components/cards/CaseStudyCard";
import CTA from "../../components/sections/CTA";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real projects. Real numbers. No fluff."
        description="A look at how we've helped businesses across retail, SaaS, wellness, and logistics grow."
        breadcrumbItems={[{ label: "Resources", path: "/blog" }, { label: "Case Studies" }]}
      />

      <section className="section-pad">
        <div className="container-app grid md:grid-cols-2 gap-6 sm:gap-7">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      <CTA
        eyebrow="Your project could be next"
        title="Let's build something worth writing about."
      />
    </>
  );
};

export default CaseStudies;
