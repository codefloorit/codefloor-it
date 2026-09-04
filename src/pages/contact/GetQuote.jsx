import PageHero from "../../components/common/PageHero";
import QuoteForm from "../../components/forms/QuoteForm";
import Reveal from "../../components/common/Reveal";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "Response within 24 hours",
  "No-obligation, transparent pricing",
  "Scoped by an actual specialist, not a bot",
];

const GetQuote = () => {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Tell us what you need — get a real quote, fast."
        description="Fill in the details below and we'll send a tailored proposal within 24 hours."
        breadcrumbItems={[{ label: "Contact", path: "/contact" }, { label: "Get a Quote" }]}
      />

      <section className="section-pad">
        <div className="container-app grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14">
          <Reveal direction="left">
            <div className="surface-card p-7 sticky top-24">
              <h3 className="font-display font-semibold text-ink mb-4">What to expect</h3>
              <ul className="flex flex-col gap-3.5">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink/85">
                    <CheckCircle2 size={17} className="text-accent flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default GetQuote;
