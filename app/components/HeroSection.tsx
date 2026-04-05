import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10 pt-32 pb-20 max-w-[1440px] mx-auto">
      <div className="max-w-5xl">
        <span className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-6 block">
          Editorial Architect / 2024 Collection
        </span>
        <h1 className="font-headline text-7xl md:text-[120px] leading-[0.9] font-black tracking-tighter mb-12 italic">
          CRAFTING <br />
          <span className="text-primary-container">DIGITAL</span> <br />
          POETRY.
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
          A minimalist approach to high-end digital experiences, focusing on
          intent, space, and the narrative that lives between the pixels.
        </p>
      </div>
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <div className="w-64 h-96 bg-surface-container-highest asymmetric-frame-tl overflow-hidden">
          <Image
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1sQdXf7z9V2oQhLlwQjBV-WX060DzMFAx3cK40H6QZnG9H0tgJ3E6036oylUq_ru769n-QsjyQ-MiaDdcU2wcydPutAHPlpPA4YxMLLId66ku-7BAVL2XPcesQd4OLRAnhcU1WlOnX0HOYq1kcq61xJOy1pQRd6sWzZIRiK6NTAmZkNhLnikrYsxYaF00P3CPYVeN_c3ybIqybZLBolsIg3Tq9G6mv8B3IUATiJVKdG0BHDh_L1w8bSzdNHmgm7NN8zuUiR7wOzU"
            alt="Abstract 3D render of flowing silk-like purple metallic surfaces"
            width={256}
            height={384}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
