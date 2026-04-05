const stats = [
  {
    value: "+70%",
    title: "파트너 네트워크 성장",
    desc: "마카롱팩토리 입점 퍼널 개선",
  },
  {
    value: "3x",
    title: "글로벌 매출 성장",
    desc: "영국→미국/호주/캐나다 확장",
  },
  {
    value: "-90%",
    title: "운영 리소스 절감",
    desc: "물류 WMS 고도화 시스템",
  },
  {
    value: "-33.3%",
    title: "파트너 VoC 감소",
    desc: "재고·정산 앱 개선",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 border-t border-outline-variant/10 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col gap-3 p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 transition-all hover:bg-surface-container"
          >
            <div className="flex items-center gap-2">
              <span className="text-5xl font-light-custom text-on-surface tracking-tighter">
                {stat.value}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
            </div>
            <div>
              <p className="font-medium text-lg text-[#1a2540] mb-1">{stat.title}</p>
              <p className="text-sm font-light text-on-surface-variant">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
