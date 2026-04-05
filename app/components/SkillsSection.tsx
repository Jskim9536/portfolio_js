import AnimateIn from "./AnimateIn";

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-outline-variant/10 max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <AnimateIn>
          <div>
            <h3 className="text-xl md:text-2xl font-medium mb-6 md:mb-8 text-[#1a2540]">
              Technical Stack &amp; Core
            </h3>
            <div className="space-y-5 md:space-y-6">
              <div>
                <p className="text-[10px] font-medium text-secondary uppercase mb-3 tracking-widest">
                  Tools &amp; Tech
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Python", "GA4", "Figma", "Notion"].map((tool, i) => (
                    <AnimateIn key={tool} delay={i * 0.05}>
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-surface-container-high rounded-full text-xs font-medium">
                        {tool}
                      </span>
                    </AnimateIn>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-medium text-secondary uppercase mb-3 tracking-widest">
                  Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Agile/Sprint", "Lean Startup", "Data-Driven"].map((comp, i) => (
                    <AnimateIn key={comp} delay={0.2 + i * 0.07}>
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                        {comp}
                      </span>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <div>
            <h3 className="text-xl md:text-2xl font-medium mb-6 md:mb-8 text-[#1a2540]">
              Education &amp; Honors
            </h3>
            <div className="space-y-3 md:space-y-4">
              <AnimateIn delay={0.2}>
                <div className="bg-surface-container-low p-4 md:p-6 rounded-xl border border-outline-variant/10">
                  <h4 className="font-medium mb-1 text-[#1a2540] text-sm md:text-base">
                    L&apos;Oreal BigBang Digital Winner
                  </h4>
                  <p className="text-xs text-on-surface-variant font-light">
                    Beauty Tech &amp; AI Sector Champion (2025)
                  </p>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="bg-surface-container-low p-4 md:p-6 rounded-xl border border-outline-variant/10">
                  <h4 className="font-medium mb-1 text-[#1a2540] text-sm md:text-base">
                    Hyundai Hackathon 1st Place
                  </h4>
                  <p className="text-xs text-on-surface-variant font-light">
                    Autonomous Driving UX Concept (2017)
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
