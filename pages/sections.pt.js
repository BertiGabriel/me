const courseHighlights = [
    {
        title: "Inovação em Produtos",
        description:
            "Experiência prática em liderança de equipes de produto, desenvolvimento de estratégias e implementação de soluções escaláveis em empresas como Amazon e Mercado Livre.",
        cta: "Saiba mais",
        href: "#",
    },
    {
        title: "Empreendedorismo e Startups",
        description:
            "Como co-fundador da Contera IO, compartilho insights sobre construção de produtos digitais, validação de ideias e crescimento de negócios.",
        cta: "Conheça a jornada",
        href: "#",
    },
    {
        title: "Automação e IA Generativa",
        description:
            "Liderança em projetos de automação utilizando IA e LLMs, economizando milhões de horas de esforço manual na Amazon.",
        cta: "Veja os resultados",
        href: "#",
    },
];

const blogPosts = [
    {
        title: "Liderança em Inovação em Produtos",
        description:
            "Como liderar equipes de produto em ambientes complexos, definindo estratégias e métricas para sucesso em empresas como Amazon e Mercado Livre.",
        meta: "Experiência prática",
        href: "#",
    },
    {
        title: "Empreendedorismo Digital",
        description:
            "Jornada como co-fundador de startup, desde a validação de ideias até o crescimento sustentável no mercado brasileiro.",
        meta: "Caso de sucesso",
        href: "#",
    },
    {
        title: "Automação com IA Generativa",
        description:
            "Como implementar soluções de IA e LLMs para automatizar processos e gerar valor em escala, economizando milhões de horas.",
        meta: "Tecnologia aplicada",
        href: "#",
    },
];

const channels = [
    {
        title: "LinkedIn",
        description: "Conecte-se profissionalmente e acompanhe minha trajetória em inovação em produtos e liderança tecnológica.",
        badge: "Perfil profissional",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
    {
        title: "GitHub",
        description: "Projetos pessoais e contribuições open source relacionados a desenvolvimento e inovação.",
        badge: "Código e projetos",
        href: "https://github.com/BertiGabriel",
    },
];

function Navigation() {
    return (
        <nav className="flex flex-wrap gap-4 text-sm text-black">
            <a href="#courses" className="hover:text-black">Experiências</a>
            <a href="#articles" className="hover:text-black">Insights</a>
            <a href="#channels" className="hover:text-black">Conecte-se</a>
            <a href="#newsletter" className="hover:text-black">Contato</a>
        </nav>
    );
}

function HeroSection() {
    return (
        <section className="mx-auto mt-16 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="space-y-8">
                    <p className="max-w-xl rounded-full border border-black bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black">
                        Liderança e Inovação em Produto
                    </p>
                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
                        Experiências em inovação em produtos, empreendedorismo e transformação digital.
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600">
                        Mais de 20 anos de experiência liderando equipes e projetos em empresas como Amazon, Mercado Livre e startups, focando em inovação e resultados escaláveis.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a href="https://www.linkedin.com/in/bertigabriel" className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5 hover:text-black">
                            Conecte-se no LinkedIn
                        </a>
                        <a href="mailto:me@bertigabriel.me" className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5 hover:text-black">
                            Entre em contato
                        </a>
                    </div>
                </div>

                <div className="grid gap-5 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-2xl shadow-slate-900/5 glass-panel">
                    <div className="flex items-center justify-center rounded-full bg-white p-4 shadow-inner shadow-slate-200/70">
                        <img src="../assets/profile.png" alt="Foto de Gabriel Berti" className="h-80 w-80 rounded-full object-cover" />
                    </div>
                    <div className="rounded-[28px] bg-white p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-black">Destaques</p>
                        <div className="mt-6 grid gap-4 text-left text-black sm:grid-cols-2">
                            <StatsCard value="20+" label="Anos de experiência" />
                            <StatsCard value="Director" label="Cargo atual" />
                            <StatsCard value="Amazon" label="Experiência internacional" />
                            <StatsCard value="Startup" label="Empreendedor" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CoursesSection() {
    return (
        <section id="courses" className="mx-auto mt-24 max-w-6xl">
            <SectionHeader overline="Experiências e Cases" title="Liderança em Produto e Inovação" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {courseHighlights.map((item) => (
                    <Card key={item.title} title={item.title} description={item.description} action={item.cta} href={item.href} />
                ))}
            </div>
        </section>
    );
}

function ArticlesSection() {
    return (
        <section id="articles" className="mx-auto mt-24 max-w-6xl">
            <SectionHeader
                overline="Insights e Reflexões"
                title="Pensamentos sobre liderança, produto e empreendedorismo."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {blogPosts.map((item) => (
                    <Card key={item.title} title={item.title} description={item.description} href={item.href} meta={item.meta} />
                ))}
            </div>
        </section>
    );
}

function ChannelsSection() {
    return (
        <section id="channels" className="mx-auto mt-24 max-w-6xl">
            <SectionHeader
                overline="Conecte-se"
                title="Perfil profissional e projetos no GitHub."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {channels.map((channel) => (
                    <Card key={channel.title} title={channel.title} description={channel.description} href={channel.href} badge={channel.badge} />
                ))}
            </div>
        </section>
    );
}

function NewsletterSection() {
    return (
        <section id="newsletter" className="mx-auto mt-24 max-w-6xl rounded-[32px] border border-slate-200 bg-slate-50 p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Vamos conversar</p>
                    <h2 className="text-4xl font-semibold text-slate-950">Interessado em colaboração ou oportunidades?</h2>
                    <p className="max-w-2xl text-slate-600">
                        Entre em contato para discutir projetos de produto, liderança ou empreendedorismo.
                    </p>
                </div>
                <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
                    <input type="email" placeholder="Seu melhor e-mail" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-sky-400" />
                    <button type="submit" className="inline-flex items-center justify-center rounded-2xl border border-black bg-transparent px-6 py-4 text-sm font-semibold text-black transition hover:bg-black/5 hover:text-black">
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </section>
    );
}

function FooterSection() {
    return (
        <footer className="mx-auto mt-24 max-w-6xl border-t border-slate-200 pt-10 text-slate-500">
            <div className="grid gap-10 md:grid-cols-4">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Gabriel Berti</p>
                    <p className="mt-4 text-slate-600">Director com experiência em inovação em produtos, liderança de equipes e empreendedorismo digital.</p>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Experiência</p>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">Amazon</a>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">Mercado Livre</a>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">Contera IO</a>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Especialidades</p>
                    <span className="block text-slate-600">Inovação em Produtos</span>
                    <span className="block text-slate-600">Liderança de Equipes</span>
                    <span className="block text-slate-600">Empreendedorismo</span>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Conecte-se</p>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">LinkedIn</a>
                    <a href="https://github.com/BertiGabriel" className="block text-slate-600 hover:text-slate-950">GitHub</a>
                    <span className="block text-slate-600">@BertiGabriel</span>
                    <a href="mailto:me@bertigabriel.me" className="block text-slate-600 hover:text-slate-950">me@bertigabriel.me</a>
                </div>
            </div>
            <p className="mt-10 text-sm text-slate-500">© 2026 Gabriel Berti. Todos os direitos reservados.</p>
        </footer>
    );
}
