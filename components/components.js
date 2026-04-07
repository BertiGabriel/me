function SectionHeader({ overline, title, description }) {
    return (
        <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black">{overline}</p>
            <h2 className="text-4xl font-semibold text-black">{title}</h2>
            {description ? <p className="max-w-2xl text-black">{description}</p> : null}
        </div>
    );
}

function Card({ title, description, action, href, badge, meta }) {
    return (
        <article className="rounded-[32px] border border-black bg-transparent p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 glass-card">
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black">{title}</h3>
                <p className="text-black">{description}</p>
            </div>
            <div className="mt-8 flex items-center justify-between gap-3">
                <a href={href} className="text-black font-semibold hover:text-slate-700">
                    {action || "Abrir"}
                </a>
                <span className="rounded-full border border-black bg-transparent px-3 py-1 text-sm text-black">{badge || meta || ""}</span>
            </div>
        </article>
    );
}

function StatsCard({ value, label }) {
    return (
        <div className="rounded-3xl border border-black bg-transparent p-5">
            <p className="text-3xl font-semibold text-black">{value}</p>
            <p className="text-sm text-black">{label}</p>
        </div>
    );
}
