import AnimateIn from "./AnimateIn";

const approaches = [
  { num: "01", title: "Zero-to-One Execution",     desc: "무에서 유를 만드는 비즈니스 기획 및 런칭 역량" },
  { num: "02", title: "Data-Driven Decision",      desc: "지표 분석을 통한 정교한 의사결정 및 솔루션 도출" },
  { num: "03", title: "Lean & Hypothesis Testing", desc: "빠른 가설 검증과 피드백 루프를 통한 프로덕트 최적화" },
  { num: "04", title: "Growth Strategy",           desc: "비즈니스 임팩트를 극대화하는 성장 엔진 설계" },
];

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1a2540] mb-4 md:mb-8">
              The Approach
            </h2>
          </AnimateIn>
        </div>
        <div className="col-span-12 md:col-span-8">
          <AnimateIn delay={0.1}>
            <p className="text-base md:text-xl leading-relaxed text-on-surface-variant mb-8 md:mb-12 font-light">
              창업가 마인드셋을 바탕으로 문제를 정의하고,
              린 사이클을 통해 빠른 실행으로 비즈니스 성장을 이끕니다.
              3년간 93회 문제 정의, 15회 가설 검증 실험을 통해 체화한 실행
              중심형 PM/PO입니다.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {approaches.map((item, i) => (
              <AnimateIn key={item.num} delay={0.1 + i * 0.1}>
                <div className="bg-surface-container-lowest p-5 md:p-6 rounded-xl border border-outline-variant/10 shadow-sm h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <span className="text-primary font-medium mb-2 block text-sm">{item.num}</span>
                  <h3 className="font-medium text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
