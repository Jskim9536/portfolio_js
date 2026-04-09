import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-5 md:px-8" id="work">
      <AnimateIn>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1a2540] mb-8 md:mb-12">
          Selected Works
        </h2>
      </AnimateIn>
      <div className="grid grid-cols-12 gap-4 md:gap-6">

        {/* Project 1 */}
        <AnimateIn className="col-span-12 md:col-span-8" delay={0.05}>
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
            <div className="p-5 md:p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6 md:mb-12">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg md:text-2xl font-medium mb-2 text-[#1a2540]">
                    MYCLE — Partner Growth &amp; Funnel Optimization
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-3 font-light">
                    마카롱팩토리 입점 퍼널 개선 및 파트너 네트워크 확장
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">PO</span>
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Growth</span>
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">UX</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-secondary shrink-0">2024</span>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
                {[["Growth", "+70%"], ["Conversion", "+361%"], ["Revenue", "+50%"]].map(([label, val]) => (
                  <div key={label} className="bg-surface-container-low p-3 md:p-4 rounded-lg">
                    <p className="text-[10px] font-medium text-primary mb-1 uppercase">{label}</p>
                    <p className="text-xl md:text-2xl font-light-custom text-[#1a2540]">{val}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto overflow-hidden rounded-lg aspect-video relative">
                <Image
                  src="/img/mycle-partners.png"
                  alt="MYCLE partners dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Project 2 */}
        <AnimateIn className="col-span-12 md:col-span-4" delay={0.1}>
          <div className="group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative h-full">
            <div className="p-5 md:p-8 h-full flex flex-col">
              <span className="text-xs font-medium text-secondary mb-2">2024</span>
              <h3 className="text-base md:text-xl font-medium mb-3 text-[#1a2540]">
                MYCLE — Quality System (PQI) &amp; VoC Reduction
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 font-light">
                운영 효율화를 위한 품질 지표 설계 및 앱 개선
              </p>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-sm font-light">VoC Reduction</span>
                  <span className="text-sm font-medium text-primary">-33.3%</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-sm font-light">PQI Increase</span>
                  <span className="text-sm font-medium text-primary">+16%</span>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Data</span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Ops</span>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Project 3 */}
        <AnimateIn className="col-span-12 md:col-span-4" delay={0.15}>
          <div className="group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative h-full">
            <div className="p-5 md:p-8 h-full flex flex-col">
              <span className="text-xs font-medium text-secondary mb-2">2025</span>
              <h3 className="text-base md:text-xl font-medium mb-3 text-[#1a2540]">
                SOOJIB — Global Market Expansion
              </h3>
              <p className="text-sm text-on-surface-variant mb-4 font-light">
                영미권 6개국 확장 및 물류 프로세스 최적화
              </p>
              <div className="gradient-primary text-white p-4 rounded-lg mb-4">
                <p className="text-[10px] font-medium uppercase opacity-80">Revenue</p>
                <p className="text-2xl font-light-custom">3x Growth</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Global</span>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Ops</span>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Project 4 */}
        <AnimateIn className="col-span-12 md:col-span-8" delay={0.2}>
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
            <div className="p-5 md:p-8 flex flex-col h-full md:flex-row gap-6 md:gap-8">
              <div className="md:w-1/2">
                <span className="text-xs font-medium text-secondary mb-2 block">2025</span>
                <h3 className="text-lg md:text-2xl font-medium mb-3 text-[#1a2540]">
                  SOOJIB — Zero-to-One New Business
                </h3>
                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed font-light">
                  EU 뷰티 인증 대행 및 K-POP OST 공급망 신사업 런칭. 시장 조사부터 물류 구축까지 엔드투엔드 주도.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="text-sm font-medium">EU Beauty Compliance Launch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    <span className="text-sm font-medium">K-POP OST Supply Chain Setup</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Zero-to-One</span>
                  <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">New Biz</span>
                </div>
              </div>
              <div className="md:w-1/2 aspect-video md:aspect-square bg-[#111111] rounded-lg overflow-hidden relative">
                <Image
                  src="/img/soojib-public.jpg"
                  alt="SOOJIB public launch visual"
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Award - L'Oreal */}
        <AnimateIn className="col-span-12" delay={0.1}>
          <div className="relative group overflow-hidden rounded-xl bg-[#1a2540] text-white">
            <div className="p-6 md:p-12 grid grid-cols-12 gap-4 md:gap-6 items-center">
              <div className="col-span-12 md:col-span-6">
                <span className="text-primary-fixed-dim font-medium tracking-widest text-[10px] uppercase mb-3 block">
                  AWARD WINNING PROJECT
                </span>
                <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-4">
                  L&apos;Oreal BigBang Digital Sector Winner
                </h3>
                <span className="text-secondary-fixed text-sm font-light mb-3 md:mb-4 block">2025</span>
                <p className="text-surface-variant/80 text-sm md:text-lg mb-5 md:mb-8 leading-relaxed font-light">
                  Beauty Tech &amp; AI 오픈 이노베이션 프로그램 우승. 딥러닝 기반 디지털 솔루션 기획 및 기술 확장성 검증.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="px-3 md:px-4 py-1.5 md:py-2 border border-surface-variant/20 rounded-full text-xs font-medium">Innovation</span>
                  <span className="px-3 md:px-4 py-1.5 md:py-2 border border-surface-variant/20 rounded-full text-xs font-medium">AI/Digital</span>
                  <span className="px-3 md:px-4 py-1.5 md:py-2 border border-surface-variant/20 rounded-full text-xs font-medium">B2B Strategy</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl relative">
                  <Image
                    src="/img/bigbang-startup.jpg"
                    alt="L'Oreal Award Ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Award - Hyundai */}
        <AnimateIn className="col-span-12" delay={0.15}>
          <div className="relative group overflow-hidden rounded-xl bg-[#1a2540] text-white">
            <div className="p-6 md:p-12 grid grid-cols-12 gap-4 md:gap-6 items-center">
              <div className="col-span-12 md:col-span-6 md:order-2">
                <span className="text-primary-fixed-dim font-medium tracking-widest text-[10px] uppercase mb-3 block">
                  AWARD WINNING PROJECT
                </span>
                <h3 className="text-2xl md:text-4xl font-medium mb-2 md:mb-4">
                  Hyundai Motor Group Hack-A-Road 1st Place
                </h3>
                <span className="text-secondary-fixed text-sm font-light mb-3 md:mb-4 block">2017</span>
                <p className="text-surface-variant/80 text-sm md:text-lg mb-5 md:mb-8 leading-relaxed font-light">
                  현대자동차그룹 해커톤 &apos;해커로드 2017&apos; 대상 수상. 차세대 자율주행 커넥티드카 UX 및 서비스 컨셉 제안.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <span className="px-3 md:px-4 py-1.5 md:py-2 border border-surface-variant/20 rounded-full text-xs font-medium">Grand Prize</span>
                  <span className="px-3 md:px-4 py-1.5 md:py-2 border border-surface-variant/20 rounded-full text-xs font-medium">Mobility</span>
                  <span className="px-3 md:px-4 py-1.5 md:py-2 border border-surface-variant/20 rounded-full text-xs font-medium">UX Concept</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:order-1 relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl relative">
                  <Image
                    src="/img/hyundai_hack_a_road.jpg"
                    alt="Hyundai Hackathon Award"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
