import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";

// sections: [{ heading, body }]
const LegalPageLayout = ({ title, updated, sections, breadcrumbLabel }) => {
  return (
    <>
      <PageHero
        eyebrow={`Updated ${updated}`}
        title={title}
        breadcrumbItems={[{ label: breadcrumbLabel }]}
      />
      <section className="section-pad">
        <div className="container-app max-w-3xl flex flex-col gap-10">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.04}>
              <h2 className="font-display text-xl font-semibold text-ink mb-3">{s.heading}</h2>
              <p className="text-muted leading-relaxed text-sm sm:text-[15px]">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default LegalPageLayout;
