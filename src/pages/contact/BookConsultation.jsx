import PageHero from "../../components/common/PageHero";
import ConsultationForm from "../../components/forms/ConsultationForm";
import Reveal from "../../components/common/Reveal";
import { Clock, Video, Users } from "lucide-react";

const highlights = [
  { icon: Clock, text: "20-minute free consultation" },
  { icon: Video, text: "Video, phone, or in-person" },
  { icon: Users, text: "Speak directly with a specialist" },
];

const BookConsultation = () => {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Talk it through before you commit to anything."
        description="A free, no-pressure conversation to understand your needs and recommend the right path."
        breadcrumbItems={[{ label: "Contact", path: "/contact" }, { label: "Book Consultation" }]}
      />

      <section className="section-pad">
        <div className="container-app grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14">
          <Reveal direction="left">
            <div className="surface-card p-7 sticky top-24">
              <h3 className="font-display font-semibold text-ink mb-4">Why book a call</h3>
              <ul className="flex flex-col gap-4">
                {highlights.map((h) => (
                  <li key={h.text} className="flex items-center gap-3 text-sm text-ink/85">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <h.icon size={16} />
                    </span>
                    {h.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default BookConsultation;
