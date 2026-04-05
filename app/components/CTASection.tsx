export default function CTASection() {
  return (
    <section className="py-32 text-center max-w-7xl mx-auto px-8" id="contact">
      <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-[#1a2540] mb-8">
        Let&apos;s Build the Future
      </h2>
      <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto font-light">
        제품의 성장과 비즈니스 임팩트를 함께 만들어 가겠습니다.
      </p>
      <div className="flex flex-col items-center gap-6">
        <a
          className="text-2xl font-light text-[#1a2540] hover:text-primary transition-colors tracking-tight"
          href="mailto:jskim9536@gmail.com"
        >
          jskim9536@gmail.com
        </a>
        <a
          href="mailto:jskim9536@gmail.com"
          className="gradient-primary text-white px-12 py-6 rounded-2xl text-xl font-medium flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all active:scale-90"
        >
          Start a Conversation{" "}
          <span className="material-symbols-outlined">north_east</span>
        </a>
      </div>
    </section>
  );
}
