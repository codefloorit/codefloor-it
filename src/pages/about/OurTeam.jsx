import { useState } from "react";
import PageHero from "../../components/common/PageHero";
import TeamCard from "../../components/cards/TeamCard";
import CTA from "../../components/sections/CTA";
import { teamData, teamDepartments } from "../../data/teamData";

const OurTeam = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? teamData : teamData.filter((m) => m.dept === filter);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind every project and every filing."
        description="Developers, designers, chartered accountants, and marketers — working as one team, not five vendors."
        breadcrumbItems={[{ label: "About", path: "/about" }, { label: "Our Team" }]}
      />

      <section className="section-pad">
        <div className="container-app">
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {teamDepartments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  filter === dept
                    ? "bg-accent-gradient text-primary border-transparent shadow-glow"
                    : "border-line text-muted hover:text-ink hover:border-accent/30"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filtered.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Join the team"
        title="We're always looking for sharp people."
        description="Whether you're a developer, designer, or chartered accountant — we'd love to hear from you."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="View Careers"
        secondaryTo="/contact"
      />
    </>
  );
};

export default OurTeam;
