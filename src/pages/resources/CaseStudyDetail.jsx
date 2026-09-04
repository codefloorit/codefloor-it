import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AlertTriangle, Lightbulb, Cpu, TrendingUp } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";
import CaseStudyCard from "../../components/cards/CaseStudyCard";
import CTA from "../../components/sections/CTA";
import { caseStudies, getCaseStudyBySlug } from "../../data/caseStudies";

const blocks = [
  { key: "problem", icon: AlertTriangle, title: "The Problem" },
  { key: "solution", icon: Lightbulb, title: "The Solution" },
];

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  useEffect(() => {
    if (study) document.title = `${study.title} | Codefloor Case Studies`;
  }, [study]);

  if (!study) return <Navigate to="/case-studies" replace />;

  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        breadcrumbItems={[{ label: "Case Studies", path: "/case-studies" }, { label: study.client }]}
      />

      {/* Metrics strip */}
      <section className="pt-14">
        <div className="container-app grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {study.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} direction="zoom" className="text-center surface-card p-6">
              <p className="font-mono text-xl sm:text-2xl font-semibold text-gradient">{m.value}</p>
              <p className="text-xs text-muted mt-1.5 leading-snug">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-pad">
        <div className="container-app grid lg:grid-cols-2 gap-10">
          {blocks.map((block, i) => (
            <Reveal key={block.key} direction={i === 0 ? "left" : "right"}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5">
                <block.icon size={20} />
              </span>
              <h2 className="text-2xl font-semibold text-ink mb-4">{block.title}</h2>
              <p className="text-muted leading-relaxed">{study[block.key]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology used */}
      <section className="section-pad bg-secondary/40 border-y border-line">
        <div className="container-app">
          <SectionTitle eyebrow="Technology Used" title="What powered this project" />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {study.technology.map((tech) => (
              <span key={tech} className="glass px-5 py-2.5 rounded-full text-sm font-mono text-accent">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="section-pad">
        <div className="container-app max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 mx-auto">
              <TrendingUp size={22} />
            </span>
            <h2 className="text-2xl font-semibold text-ink mb-4">The Result</h2>
            <p className="text-muted leading-relaxed text-lg">{study.result}</p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-secondary/40 border-y border-line">
          <div className="container-app">
            <SectionTitle eyebrow="More Case Studies" title="Other projects worth a look" />
            <div className="grid md:grid-cols-2 gap-6 sm:gap-7 mt-12">
              {related.map((s, i) => (
                <CaseStudyCard key={s.slug} study={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
};

export default CaseStudyDetail;
