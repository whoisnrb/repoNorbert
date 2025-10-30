export default function Footer({ content }) {
  const { columns, bottom } = content;

  return (
    <footer className="px-6 pb-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
        <div className="grid gap-10 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs uppercase tracking-[0.4em] text-cyan-200">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">{bottom}</div>
      </div>
    </footer>
  );
}
