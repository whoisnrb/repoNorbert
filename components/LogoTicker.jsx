export default function LogoTicker({ content }) {
  const { title, items } = content;

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">{title}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-lg font-medium text-slate-200 opacity-80">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl transition hover:border-cyan-400/60 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
