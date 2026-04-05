export default function SkillsSection() {
  return (
    <section className="py-24 border-t border-outline-variant/10 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-medium mb-8 text-[#1a2540]">
            Technical Stack &amp; Core
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-medium text-secondary uppercase mb-3 tracking-widest">
                Tools &amp; Tech
              </p>
              <div className="flex flex-wrap gap-2">
                {["SQL", "Python", "GA4", "Figma", "Notion"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-surface-container-high rounded-full text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-medium text-secondary uppercase mb-3 tracking-widest">
                Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {["Agile/Sprint", "Lean Startup", "Data-Driven"].map((comp) => (
                  <span
                    key={comp}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-8 text-[#1a2540]">
            Education &amp; Honors
          </h3>
          <div className="space-y-4">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <h4 className="font-medium mb-1 text-[#1a2540]">
                L&apos;Oreal BigBang Digital Winner
              </h4>
              <p className="text-xs text-on-surface-variant font-light">
                Beauty Tech &amp; AI Sector Champion (2025)
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <h4 className="font-medium mb-1 text-[#1a2540]">
                Hyundai Hackathon 1st Place
              </h4>
              <p className="text-xs text-on-surface-variant font-light">
                Autonomous Driving UX Concept (2017)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
