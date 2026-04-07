function SectionHeader({ overline, title, description }) {
    return (
        <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">{overline}</p>
            <h2 className="text-4xl font-semibold text-slate-950">{title}</h2>
            {description ? <p className="max-w-2xl text-slate-600">{description}</p> : null}
        </div>
    );
}

function Card({ title, description, action, href, badge, meta }) {
    return (
        <article className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 glass-card">
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <p className="text-slate-600">{description}</p>
            </div>
            <div className="mt-8 flex items-center justify-between gap-3">
                <a href={href} className="text-sky-500 font-semibold hover:text-sky-700">
                    {action || "Abrir"}
                </a>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700">{badge || meta || ""}</span>
            </div>
        </article>
    );
}

function StatsCard({ value, label }) {
    return (
        <div className="rounded-3xl bg-slate-100 p-5">
            <p className="text-3xl font-semibold text-slate-950">{value}</p>
            <p className="text-sm text-slate-500">{label}</p>
        </div>
    );
}
