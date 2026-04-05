const approaches = [
  {
    num: "01",
    title: "Zero-to-One Execution",
    desc: "무(無)에서 유(有)를 만드는 비즈니스 기획 및 런칭 역량",
  },
  {
    num: "02",
    title: "Data-Driven Decision",
    desc: "지표 분석을 통한 정교한 의사결정 및 솔루션 도출",
  },
  {
    num: "03",
    title: "Lean & Hypothesis Testing",
    desc: "빠른 가설 검증과 피드백 루프를 통한 프로덕트 최적화",
  },
  {
    num: "04",
    title: "Growth Strategy",
    desc: "비즈니스 임팩트를 극대화하는 성장 엔진 설계",
  },
];

export default function PhilosophySection() {
  return (
    <section
      className="py-24 bg-surface-container-low"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-4xl font-medium tracking-tight text-[#1a2540] mb-8">
            The Approach
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-xl leading-relaxed text-on-surface-variant mb-12 font-light">
            창업가 마인드셋(Founder&apos;s Mindset)을 바탕으로 문제를 정의하고,
            린(Lean) 사이클을 통해 빠른 실행으로 비즈니스 성장을 이끕니다.
            3년간 93회 문제 정의, 15회 가설 검증 실험을 통해 체화한 실행
            중심형 PM/PO입니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {approaches.map((item) => (
              <div
                key={item.num}
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm"
              >
                <span className="text-primary font-medium mb-2 block">{item.num}</span>
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
