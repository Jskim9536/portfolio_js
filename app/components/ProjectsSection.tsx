import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8" id="work">
      <h2 className="text-4xl font-medium tracking-tight text-[#1a2540] mb-12">
        Selected Works
      </h2>
      <div className="grid grid-cols-12 gap-6">
        {/* Project 1 - MYCLE Partner Growth */}
        <div className="col-span-12 md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 card-hover-effect">
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="text-2xl font-medium mb-2 text-[#1a2540]">
                  MYCLE — Partner Growth &amp; Funnel Optimization
                </h3>
                <p className="text-on-surface-variant mb-4 font-light">
                  마카롱팩토리 입점 퍼널 개선 및 파트너 네트워크 확장
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">PO</span>
                  <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Growth</span>
                  <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">UX</span>
                </div>
              </div>
              <span className="text-sm font-medium text-secondary">2024</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-surface-container-low p-4 rounded-lg">
                <p className="text-[10px] font-medium text-primary mb-1 uppercase">Growth</p>
                <p className="text-2xl font-light-custom text-[#1a2540]">+70%</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <p className="text-[10px] font-medium text-primary mb-1 uppercase">Conversion</p>
                <p className="text-2xl font-light-custom text-[#1a2540]">+361%</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <p className="text-[10px] font-medium text-primary mb-1 uppercase">Revenue</p>
                <p className="text-2xl font-light-custom text-[#1a2540]">+50%</p>
              </div>
            </div>
            <div className="mt-auto overflow-hidden rounded-lg aspect-video relative">
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0uizBOvQ1CK6wz9ZeuwmzwcAtTM3HVP2bd4aq_5k_6SOW6nRsiLD7aQTbHsstzNkP7x7pL0oFgA2fHCqjM-kETYo_WZMSbSqG-u1aNWpBx8WymQcPZ07rrBbg5b2hz6hCz4WokRiT-ZPaIE5IAtrKb_Ylvc-IMndsvHMcKVf1NFi5YRjgMGLEOWGekvmDI-gfyDEjUBIs0DjN_1DsB2F8frXMU17KEtBLdN4aMQecbY9VC521vCXsAYcRgw_PYYMuMO-GVlHJ-VgIw"
                alt="Dashboard visualization"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Project 2 - MYCLE Quality System */}
        <div className="col-span-12 md:col-span-4 group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 card-hover-effect relative">
          <div className="p-8 h-full flex flex-col">
            <span className="text-xs font-medium text-secondary mb-2">2024</span>
            <h3 className="text-xl font-medium mb-4 text-[#1a2540]">
              MYCLE — Quality System (PQI) &amp; VoC Reduction
            </h3>
            <p className="text-sm text-on-surface-variant mb-6 font-light">
              운영 효율화를 위한 품질 지표 설계 및 앱 개선
            </p>
            <div className="flex flex-col gap-3 mb-6">
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

        {/* Project 3 - SOOJIB Global */}
        <div className="col-span-12 md:col-span-4 group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 card-hover-effect relative">
          <div className="p-8 h-full flex flex-col">
            <span className="text-xs font-medium text-secondary mb-2">2025</span>
            <h3 className="text-xl font-medium mb-4 text-[#1a2540]">
              SOOJIB — Global Market Expansion
            </h3>
            <p className="text-sm text-on-surface-variant mb-6 font-light">
              영미권 6개국 확장 및 물류 프로세스 최적화
            </p>
            <div className="gradient-primary text-white p-4 rounded-lg mb-6">
              <p className="text-[10px] font-medium uppercase opacity-80">Revenue</p>
              <p className="text-2xl font-light-custom">3x Growth</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Global</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-medium uppercase">Ops</span>
            </div>
          </div>
        </div>

        {/* Project 4 - SOOJIB Zero-to-One */}
        <div className="col-span-12 md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/10 card-hover-effect">
          <div className="p-8 flex flex-col h-full md:flex-row gap-8">
            <div className="md:w-1/2">
              <span className="text-xs font-medium text-secondary mb-2 block">2025</span>
              <h3 className="text-2xl font-medium mb-4 text-[#1a2540]">
                SOOJIB — Zero-to-One New Business
              </h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed font-light">
                EU 뷰티 인증 대행 및 K-POP OST 공급망 신사업 런칭. 시장
                조사부터 물류 구축까지 엔드투엔드 주도.
              </p>
              <div className="space-y-2 mb-6">
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
            <div className="md:w-1/2 aspect-square bg-[#111111] rounded-lg overflow-hidden relative p-8">
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0uhEosKvxY4smSuF3Spp7O9dldkwhV3RUzMDt9d-n8F78ZLpHFCiIRL_ZGOFcxNc_wgP0OpWRhFIBzSVz4fm5uF4kTJ_R4Bl3jiDXo9tKp65wwJ2MAlPU-J_PWjrRWQPSQ4fZ5Hp1qQn2pcwaIJ2IL6cnDqKWzcgXHcHd0VJClQZOy921mMZU71FUjGYbaXcmekwy1Awn-iRL5Sz2rGVD6qNIO9CzzlVGSqMtr1nDuESifNxKTlyUsl295UNcUXfuPNQQr8RMkJCzQ"
                alt="Business Logo"
                fill
                className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Award - L'Oreal */}
        <div className="col-span-12 relative group overflow-hidden rounded-xl bg-[#1a2540] text-white">
          <div className="p-12 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-6">
              <span className="text-primary-fixed-dim font-medium tracking-widest text-xs uppercase mb-4 block">
                AWARD WINNING PROJECT
              </span>
              <h3 className="text-4xl font-medium mb-4">
                L&apos;Oreal BigBang Digital Sector Winner
              </h3>
              <span className="text-secondary-fixed text-sm font-light mb-4 block">2025</span>
              <p className="text-surface-variant/80 text-lg mb-8 leading-relaxed font-light">
                Beauty Tech &amp; AI 오픈 이노베이션 프로그램 우승. 딥러닝
                기반 디지털 솔루션 기획 및 기술 확장성 검증.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border border-surface-variant/20 rounded-full text-xs font-medium">Innovation</span>
                <span className="px-4 py-2 border border-surface-variant/20 rounded-full text-xs font-medium">AI/Digital</span>
                <span className="px-4 py-2 border border-surface-variant/20 rounded-full text-xs font-medium">B2B Strategy</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujZkSk_bSSszd0n7JbBSghKnrFLLy47TkmFCgYGZnI_FrJzlS049y0PscBJkLw7_Jsx9O7EM_HLQDJv0FfV7oNyIXermB40PDz8LPXoPJf6RX-kFrDKz7Yt37PzD1ESdXHySxf7WFDHGMkUduMLrluu83a_ltt2eoA4AtCJgdFWuyhYyEVUgE9qrJh6Ip1t-rTMzbRv5jj62JqYPNOUfkI6dfjr1rstiGguw0C2NudhIYk4bWwN9cfNBAuRFEPOTyKPH93gYHvpcw"
                  alt="L'Oreal Award Ceremony"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Award - Hyundai */}
        <div className="col-span-12 relative group overflow-hidden rounded-xl bg-[#1a2540] text-white">
          <div className="p-12 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-6 md:order-2">
              <span className="text-primary-fixed-dim font-medium tracking-widest text-xs uppercase mb-4 block">
                AWARD WINNING PROJECT
              </span>
              <h3 className="text-4xl font-medium mb-4">
                Hyundai Motor Group Hack-A-Road 1st Place
              </h3>
              <span className="text-secondary-fixed text-sm font-light mb-4 block">2017</span>
              <p className="text-surface-variant/80 text-lg mb-8 leading-relaxed font-light">
                현대자동차그룹 해커톤 &apos;해커로드 2017&apos; 대상 수상.
                차세대 자율주행 커넥티드카 UX 및 서비스 컨셉 제안.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border border-surface-variant/20 rounded-full text-xs font-medium">Grand Prize</span>
                <span className="px-4 py-2 border border-surface-variant/20 rounded-full text-xs font-medium">Mobility</span>
                <span className="px-4 py-2 border border-surface-variant/20 rounded-full text-xs font-medium">UX Concept</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:order-1 relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhvYcR-4QtOXN1ZZNNzqR-XwqFU4FNxakEfr_7jzKxA7Fkmr0cJwARO30w3vSZM1yxF1NaHIOmO99l0SIQzZQQemMfcmJjU2EbHZC9vw1Vi4izVu3KDBNH_2B5DrUvPVCSV9n0yQd3iaWG4VHSmIciJOgObDFgaIVfT-Xtb0gylpZcm9Z-JJVXKlueJAIJpggqY61Zrc2iBgw0alQAgUFig_HLugeOOmdKkoMlQdXNM_foButQss1o9DE775huYZ8hJsBHbBI-pQw"
                  alt="Hyundai Hackathon Award"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
