const courseHighlights = [
    {
        title: "Estruturas de Dados e Algoritmos + LeetCode",
        description:
            "Curso completo com 68 aulas, explicações visuais e desenhos na tela para dominar os fundamentos exigidos em entrevistas técnicas.",
        cta: "Assista a primeira aula grátis",
        href: "https://pay.hub.la/L8wi9vio7WPnWbmF8ZIO?coupon=SITEGALEGO",
    },
    {
        title: "Roadmap pro seu próximo emprego",
        description:
            "Tudo o que você precisa saber para encontrar vagas no Brasil e no exterior, melhorar o LinkedIn e ser aprovado em entrevistas.",
        cta: "Saiba mais",
        href: "https://pay.hub.la/hrZKmxeXzeLN8AvObjVJ?coupon=SITEGALEGO",
    },
    {
        title: "Workshop: 10 LeetCodes para Entrevistas",
        description:
            "Aprenda a resolver os 10 problemas mais cobrados em entrevistas técnicas com explicações detalhadas e estratégias de resolução.",
        cta: "Saiba mais",
        href: "https://pay.hub.la/RGfq0dk8iqDeL5IC5yog?coupon=SITEGALEGO2",
    },
    {
        title: "Workshop: System Design para Entrevistas",
        description:
            "Domine os fundamentos de System Design e aprenda a projetar sistemas escaláveis para grandes empresas.",
        cta: "Saiba mais",
        href: "https://pay.hub.la/ASHOugkp5yQfI4pdLNHx?coupon=SITEGALEGO",
    },
];

const blogPosts = [
    {
        title: "Começar Te Dá o Framework Para Pensar em Como Começar",
        description:
            "Por que você precisa começar antes de pedir conselhos, e como experiência gera conversas significativas.",
        meta: "5 min de leitura",
        href: "https://www.augustogalego.com/blog/starting-things",
    },
    {
        title: "Notação Big O",
        description:
            "Guia completo para entender complexidade de tempo, espaço e como analisar algoritmos com segurança.",
        meta: "8 min de leitura",
        href: "https://www.augustogalego.com/blog/big-o",
    },
    {
        title: "Balanceadores de Carga",
        description:
            "Um guia sobre balanceadores de carga, algoritmos e como eles garantem escalabilidade em sistemas distribuídos.",
        meta: "7 min de leitura",
        href: "https://www.augustogalego.com/blog/load-balancer",
    },
];

const channels = [
    {
        title: "@GutoGalego",
        description: "Canal principal com foco em algoritmos, LeetCode e carreira em tech.",
        badge: "131K+ Inscritos",
        href: "https://www.youtube.com/@GutoGalego",
    },
    {
        title: "@GutoMonólogos",
        description: "Canal secundário com monólogos, reflexões pessoais e dicas de produtividade.",
        badge: "Crescendo",
        href: "https://www.youtube.com/@GutoMonologos",
    },
];

function Navigation() {
    return (
        <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
            <a href="#courses" className="hover:text-slate-950">Cursos</a>
            <a href="#articles" className="hover:text-slate-950">Artigos</a>
            <a href="#channels" className="hover:text-slate-950">Canais</a>
            <a href="#newsletter" className="hover:text-slate-950">Newsletter</a>
        </nav>
    );
}

function HeroSection() {
    return (
        <section className="mx-auto mt-16 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="space-y-8">
                    <p className="max-w-xl rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                        Aprenda com quem chegou lá
                    </p>
                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
                        Conteúdo prático para dominar algoritmos, entrevistas e carreira em tech.
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600">
                        Cursos, workshops e artigos inspirados no estilo de ensino que combina explicações visuais, estudo de casos e foco em resultados reais.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a href="https://pay.hub.la/L8wi9vio7WPnWbmF8ZIO?coupon=SITEGALEGO" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                            Ver curso principal
                        </a>
                        <a href="https://www.youtube.com/@GutoGalego" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-slate-200 hover:text-slate-950">
                            Assistir YouTube
                        </a>
                    </div>
                </div>

                <div className="grid gap-5 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-2xl shadow-slate-900/5 glass-panel">
                    <div className="rounded-[28px] bg-white p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Destaques</p>
                        <div className="mt-6 grid gap-4 text-left text-slate-700 sm:grid-cols-2">
                            <StatsCard value="131K+" label="Inscritos YouTube" />
                            <StatsCard value="68" label="Aulas no curso" />
                            <StatsCard value="10+" label="Anos de experiência" />
                            <StatsCard value="3" label="Países trabalhados" />
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
            <SectionHeader overline="Cursos e workshops" title="Aprenda com quem chegou lá" />
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
                overline="Artigos populares"
                title="Conteúdo profundo para revisar conceitos e ampliar seu raciocínio técnico."
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
                overline="Dois canais, uma missão"
                title="Conteúdo técnico no canal principal e reflexões no canal secundário."
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
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Receba insights direto na sua caixa</p>
                    <h2 className="text-4xl font-semibold text-slate-950">Junte-se a +2000 devs e receba conteúdo exclusivo toda semana.</h2>
                    <p className="max-w-2xl text-slate-600">
                        Emails semanais com dicas de algoritmos, carreira internacional, system design e produtividade.
                    </p>
                </div>
                <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
                    <input type="email" placeholder="Seu melhor e-mail" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-sky-400" />
                    <button type="submit" className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                        Quero Receber Insights
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
                    <p className="mt-4 text-slate-600">Conteúdo técnico para quem quer crescer em entrevistas, carreira e engenharia de software.</p>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Links</p>
                    <a href="https://www.augustogalego.com/blog" className="block text-slate-600 hover:text-slate-950">Blog</a>
                    <a href="https://www.augustogalego.com/about" className="block text-slate-600 hover:text-slate-950">Sobre</a>
                    <a href="https://www.augustogalego.com/contact" className="block text-slate-600 hover:text-slate-950">Contato</a>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Aprendizado</p>
                    <a href="https://www.augustogalego.com/courses" className="block text-slate-600 hover:text-slate-950">Cursos</a>
                    <a href="https://www.augustogalego.com/blog?category=Algoritmos" className="block text-slate-600 hover:text-slate-950">Algoritmos</a>
                    <a href="https://www.augustogalego.com/blog?category=System%20Design" className="block text-slate-600 hover:text-slate-950">System Design</a>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Comunidade</p>
                    <a href="https://www.youtube.com/@GutoGalego" className="block text-slate-600 hover:text-slate-950">YouTube</a>
                    <a href="https://github.com/gutogalego" className="block text-slate-600 hover:text-slate-950">GitHub</a>
                    <a href="https://www.linkedin.com/in/augusto-galego-60a0b1160/" className="block text-slate-600 hover:text-slate-950">LinkedIn</a>
                    <span className="block text-slate-600">@BertiGabriel</span>
                    <a href="mailto:me@bertigabriel.me" className="block text-slate-600 hover:text-slate-950">me@bertigabriel.me</a>
                </div>
            </div>
            <p className="mt-10 text-sm text-slate-500">© 2026 Gabriel Berti. Todos os direitos reservados.</p>
        </footer>
    );
}
