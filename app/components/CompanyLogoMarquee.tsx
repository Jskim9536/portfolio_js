"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

const companies = [
  {
    name: "Hyundai Motor Company",
    logo: "/img/hyundai_logo.png",
    width: 210,
    height: 28,
  },
  {
    name: "MYCLE",
    logo: "/img/macarong_factory_logo.png",
    width: 156,
    height: 35,
  },
  {
    name: "SOOJIB",
    logo: "/img/soojib_logo.png",
    width: 180,
    height: 34,
  },
  {
    name: "L'Oreal",
    logo: "/img/loreal_logo.png",
    width: 168,
    height: 30,
  },
];

function LogoTrack() {
  return (
    <>
      {companies.map((company) => (
        <div
          key={company.name}
          className="flex shrink-0 items-center justify-center px-5 md:px-14"
        >
          <Image
            src={company.logo}
            alt={company.name}
            width={company.width}
            height={company.height}
            className="h-auto max-h-6 w-auto object-contain opacity-100 md:max-h-10"
          />
        </div>
      ))}
    </>
  );
}

export default function CompanyLogoMarquee() {
  return (
    <section className="py-16 md:py-24 border-t border-outline-variant/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimateIn>
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-secondary md:text-xs">
              Companies I&apos;ve Worked With
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <div className="relative overflow-hidden py-3 md:py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa] to-transparent md:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f8f9fa] via-[#f8f9fa] to-transparent md:w-28" />

            <div className="logo-marquee">
              <div className="logo-marquee__track">
                <LogoTrack />
                <LogoTrack />
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
