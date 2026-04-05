import AnimateIn from "./AnimateIn";

const careers = [
  {
    period: "2026.01 ~ Now",
    company: "에바 (Evar)",
    role: "서비스 기획 (PM/PO)",
    desc: "전기차 충전 솔루션 서비스 기획 및 프로덕트 매니징",
    isActive: true,
  },
  {
    period: "2025.01 ~ 2026.01",
    company: "주식회사 수집 (SOOJIB)",
    role: "사업개발 및 운영 리드",
    desc: "글로벌 커머스 확장 및 신규 비즈니스 프로세스 설계",
    isActive: false,
  },
  {
    period: "2024.01 ~ 2024.09",
    company: "마카롱팩토리 (MYCLE)",
    role: "프로덕트 오너(PO) 팀 리드",
    desc: "파트너 서비스 고도화 및 데이터 기반 그로스 실험 주도",
    isActive: false,
  },
  {
    period: "2020.08 ~ 2021.07",
    company: "현대자동차 (Hyundai Motor Company)",
    role: "연구원",
    desc: "차세대 인포테인먼트 시스템 개발 및 플랫폼 관리",
    isActive: false,
  },
];

export default function CareerTimeline() {
  return (
    <section className="py-16 md:py-24 border-t border-outline-variant/10 max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1a2540] mb-6 md:mb-8">
              Career Timeline
            </h2>
          </AnimateIn>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="space-y-8 md:space-y-12">
            {careers.map((item, index) => (
              <AnimateIn key={item.company} delay={index * 0.1} direction="left">
                <div
                  className={`relative pl-6 md:pl-8 ${
                    index < careers.length - 1
                      ? "before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-[-32px] md:before:bottom-[-48px] before:w-[1px] before:bg-outline-variant/30"
                      : ""
                  }`}
                >
                  <div
                    className={`absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full ${
                      item.isActive ? "bg-primary" : "bg-outline-variant"
                    }`}
                  />
                  <span className="text-xs md:text-sm font-medium text-secondary mb-1 block">
                    {item.period}
                  </span>
                  <h4 className="text-base md:text-xl font-medium mb-1 text-[#1a2540]">{item.company}</h4>
                  <p className="text-sm text-on-surface-variant font-medium mb-1">{item.role}</p>
                  <p className="text-xs md:text-sm text-outline font-light">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
