import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import FAQAccordion from "../../components/common/FAQAccordion";
import Reveal from "../../components/common/Reveal";
import CTA from "../../components/sections/CTA";
import { generalFaqs } from "../../data/generalFaqs";

const FAQs = () => {
  const [query, setQuery] = useState("");

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return generalFaqs;
    const q = query.toLowerCase();
    return generalFaqs
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Answers to what we're asked most."
        description="Can't find what you need? Reach out on our Contact page."
        breadcrumbItems={[{ label: "Resources", path: "/blog" }, { label: "FAQs" }]}
      />

      <section className="section-pad">
        <div className="container-app max-w-3xl">
          <div className="relative mb-12">
            <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full rounded-full bg-card border border-line pl-12 pr-4 py-3.5 text-sm text-ink placeholder:text-muted/70 focus:border-accent/50 outline-none"
            />
          </div>

          {filteredGroups.length === 0 ? (
            <p className="text-muted text-sm text-center">No matching questions found.</p>
          ) : (
            <div className="flex flex-col gap-12">
              {filteredGroups.map((group) => (
                <Reveal key={group.category}>
                  <h2 className="font-display text-xl font-semibold text-ink mb-5">{group.category}</h2>
                  <FAQAccordion items={group.items} defaultOpen={-1} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
};

export default FAQs;
