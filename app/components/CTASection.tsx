import AnimateIn from "./AnimateIn";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 text-center max-w-7xl mx-auto px-5 md:px-8" id="contact">
      <AnimateIn>
        <p className="text-2xl md:text-4xl text-[#1a2540] mb-8 md:mb-12 max-w-xl mx-auto font-medium tracking-tight">
          제품의 성장과 비즈니스 임팩트를 함께 만들어 가겠습니다.
        </p>
      </AnimateIn>
      <AnimateIn delay={0.2}>
        <div className="flex flex-col items-center gap-5 md:gap-6">
          <a
            className="text-lg md:text-2xl font-light text-[#1a2540] hover:text-primary transition-colors tracking-tight break-all"
            href="mailto:jskim9536@gmail.com"
          >
            jskim9536@gmail.com
          </a>
          <a
            href="mailto:jskim9536@gmail.com"
            className="gradient-primary text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl text-base md:text-xl font-medium flex items-center gap-2 md:gap-3 shadow-xl hover:shadow-2xl transition-all active:scale-90"
          >
            Start a Conversation{" "}
            <span className="material-symbols-outlined">north_east</span>
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}
