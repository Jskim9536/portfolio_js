export default function PhilosophySection() {
  return (
    <section className="bg-surface-container-lowest py-32 px-10">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase">
            The Philosophy
          </h2>
          <div className="h-px w-24 bg-primary"></div>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Design is not a decorative layer. It is the architectural spine of
            communication. I believe in the power of the &ldquo;No-Line&rdquo;
            philosophy—where content creates its own boundaries and whitespace
            acts as the connective tissue.
          </p>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Every project is a curated narrative, balancing the authoritative
            weight of classic typography with the ethereal lightness of modern
            interfaces.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container h-48 rounded-xl flex items-center justify-center p-8 text-center border border-outline-variant/15">
            <p className="font-headline font-bold text-primary tracking-tight">
              INTENTIONAL ASYMMETRY
            </p>
          </div>
          <div className="bg-surface-container-high h-64 rounded-xl flex items-center justify-center p-8 text-center border border-outline-variant/15">
            <p className="font-headline font-bold text-tertiary tracking-tight">
              CINEMATIC BREATHING ROOM
            </p>
          </div>
          <div className="bg-surface-container-highest h-64 rounded-xl flex items-center justify-center p-8 text-center border border-outline-variant/15">
            <p className="font-headline font-bold text-secondary tracking-tight">
              EDITORIAL PRECISION
            </p>
          </div>
          <div className="bg-surface-container h-48 rounded-xl flex items-center justify-center p-8 text-center border border-outline-variant/15">
            <p className="font-headline font-bold text-primary-container tracking-tight">
              ATMOSPHERIC DEPTH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
