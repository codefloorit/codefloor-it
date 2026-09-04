import PageHero from "../../components/common/PageHero";
import SupportForm from "../../components/forms/SupportForm";
import Reveal from "../../components/common/Reveal";
import { siteConfig } from "../../data/siteConfig";
import { Mail, Phone } from "lucide-react";

const Support = () => {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Need help with something urgent?"
        description="Submit a ticket and our team will respond based on the priority you select."
        breadcrumbItems={[{ label: "Contact", path: "/contact" }, { label: "Support" }]}
      />

      <section className="section-pad">
        <div className="container-app grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14">
          <Reveal direction="left">
            <div className="surface-card p-7 sticky top-24">
              <h3 className="font-display font-semibold text-ink mb-4">Prefer a direct line?</h3>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${siteConfig.supportEmail}`} className="flex items-center gap-3 text-sm text-ink/85 hover:text-accent transition-colors">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Mail size={15} />
                  </span>
                  {siteConfig.supportEmail}
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm text-ink/85 hover:text-accent transition-colors">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Phone size={15} />
                  </span>
                  {siteConfig.phone}
                </a>
              </div>
              <p className="text-xs text-muted mt-6 leading-relaxed">
                Urgent priority tickets are typically acknowledged within 2 hours during business hours.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <SupportForm />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Support;
