import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "NEON ARCHIVE",
    category: "Brand Identity",
    year: "2024",
    colSpan: "md:col-span-8",
    aspectClass: "aspect-video",
    frameClass: "asymmetric-frame-br",
    showArrow: true,
    offsetClass: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaLGG-9m2M6gImPyyqmT0U2b3VJpEBfUib9Eps_GPIx9A0Ibjlyn1XS5EyFrfvh9cjPBWf8eFTtUn0obgAjKDeofLlluYeWgVfJWgNscjJ2RhAmpOexv_7PP7TRQQRzifVqlK0RSy_v5-To_AT3Dg-RlYuPymKBwVmAxa6Sr9KBz59_alnDfeYnbNI1tcZL9e2CNDpe7lfnBN4dCqS4_H6vFynYU7KFa9JMX5Dthtwu1WOfuaGKIlBaXONXX_EX_bwTQKdiVQzi-8",
    alt: "Close-up of minimalist high-tech electronic components with soft purple neon lighting",
  },
  {
    id: 2,
    title: "ETHOS MAG",
    category: "Editorial",
    year: "2023",
    colSpan: "md:col-span-4",
    aspectClass: "aspect-[3/4]",
    frameClass: "asymmetric-frame-tl",
    showArrow: false,
    offsetClass: "pt-20",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQhdLvIiNN1_eheFH3Zbbsd0d4Mp8jtS7h_2sQ4LflFgOVheo3fLaZxQtF2s_1HKogidD1TjcTLDtgF4Jv_VeIFkGnba4ALd4Ivc0Fa2UCCbPU_lLUMlXaTQSrcO53yAcgI_4teWJT0fDpAtXAQTYbE9Ecphpw69-hYB9SEgU0XcL2UQ0Z7TIINf2mMmQh3fDUJwcRYda-bXRJao5EXc2E3FKAVaX6_xbVaTGrJL6yVgBbvZsmW28X_qwvBH27VieQgopmU3B9U-o",
    alt: "Minimalist editorial layout of a fashion magazine with bold black serif typography",
  },
  {
    id: 3,
    title: "GLASS CORE",
    category: "Web Experience",
    year: "2024",
    colSpan: "md:col-span-5",
    aspectClass: "aspect-square",
    frameClass: "asymmetric-frame-tr",
    showArrow: false,
    offsetClass: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqanhAWLuTHqixOuK7-cWFNkjoRuQvT5NUVrHPb3q7h2eaQ-WQ-9JmTQQxMZvZJ-T-0OT94ruV6qSZCjqcWTOFsUUVPUQRAPW1QzK-759YTNowFH3TQ0G3auzCr1jx7Cdu7xn2UPYM1Rtl8aG_tUQh0Gmf6dm07qB1IDsyjfrCf0_Qjm8hywetUEh5pwYOecIIESdky3zqlp9LgXxkFJ-mQ2_Joo7Pn01pna_gizmxSl1xFVzrqpzmCfAmBYTzNYL2AZYITJwRHlY",
    alt: "Sleek glass-like geometric sculptures floating in a dark studio space with soft lavender ambient light",
  },
  {
    id: 4,
    title: "VELVET FLOW",
    category: "Digital Art",
    year: "2023",
    colSpan: "md:col-span-7",
    aspectClass: "aspect-[16/10]",
    frameClass: "asymmetric-frame-br",
    showArrow: true,
    offsetClass: "md:mt-[-80px]",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD6ewgDuU4bovpiGykJDbyYkgUQl_KBGBE_0WBIC2idrFR9qG-g-RjQa6Mb2SuJ1j3t_1GMMGRr_PU8lrY6BOtrgNBQsbVYMtACUbjn_I6Yi9MoZ8ybBHMWbP1TcFCF7No_IhqA1Lf9o4WP1gI2fbk1tl6zoLFvhLNuoScJlRmEIIpswhhy7mbhYyFrP5CNYMKVuV8KzZRdY167ElixDysxv0Y695cvaibXvQRJb9E1Q29gnHgJMgXSruzMdz0FhVKDQ6o237a6fU",
    alt: "Macro photo of liquid paint swirled in deep purple and silver tones creating a tactile marble texture",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-32 px-10 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-end mb-20">
        <h2 className="font-headline text-5xl font-black tracking-tighter uppercase">
          Selected <br /> Works
        </h2>
        <div className="font-label text-xs tracking-widest text-on-surface-variant uppercase pb-2">
          01 — 04
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.colSpan} ${project.offsetClass} group cursor-pointer`}
          >
            <div
              className={`relative ${project.aspectClass} overflow-hidden ${project.frameClass} bg-surface-container`}
            >
              <Image
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={project.src}
                alt={project.alt}
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className={`mt-6 ${project.showArrow ? "flex justify-between items-start" : ""}`}>
              <div>
                <h3 className="font-headline text-2xl font-bold tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">
                  {project.category} — {project.year}
                </p>
              </div>
              {project.showArrow && (
                <span className="material-symbols-outlined text-primary text-3xl">
                  arrow_outward
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
