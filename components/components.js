function SectionHeader({ overline, title, description }) {
    return (
        <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black">{overline}</p>
            <h2 className="text-4xl font-semibold text-black">{title}</h2>
            {description ? <p className="max-w-2xl text-black">{description}</p> : null}
        </div>
    );
}

function Card({ title, description, action, href, badge, meta, icon }) {
    return (
        <article className="rounded-[32px] border border-black bg-transparent p-8 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 flex flex-col h-full">
            <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-semibold text-black flex items-center gap-2">
                    {icon && <span dangerouslySetInnerHTML={{__html: icon}}></span>}
                    {title}
                </h3>
                <p className="text-black">{description}</p>
            </div>
            <div className="mt-8">
                <a href={href} className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-4 py-2 text-sm font-semibold text-black transition hover:bg-black/5">
                    {action || "Abrir"}
                </a>
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
