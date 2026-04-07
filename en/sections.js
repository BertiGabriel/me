const courseHighlights = [
    {
        title: "Product Management and Innovation",
        description:
            "Practical experience in leading product teams, developing strategies and implementing scalable solutions in companies like Amazon and Mercado Livre.",
        cta: "Learn more",
        href: "#",
    },
    {
        title: "Entrepreneurship and Startups",
        description:
            "As co-founder of Contera IO, I share insights on building digital products, validating ideas and growing businesses.",
        cta: "Discover the journey",
        href: "#",
    },
    {
        title: "Automation and Generative AI",
        description:
            "Leadership in automation projects using AI and LLMs, saving millions of hours of manual effort at Amazon.",
        cta: "See the results",
        href: "#",
    },
];

const blogPosts = [
    {
        title: "Leadership in Product Management",
        description:
            "How to lead product teams in complex environments, defining strategies and metrics for success in companies like Amazon and Mercado Livre.",
        meta: "Practical experience",
        href: "#",
    },
    {
        title: "Digital Entrepreneurship",
        description:
            "Journey as a startup co-founder, from idea validation to sustainable growth in the Brazilian market.",
        meta: "Success case",
        href: "#",
    },
    {
        title: "Automation with Generative AI",
        description:
            "How to implement AI and LLM solutions to automate processes and generate value at scale, saving millions of hours.",
        meta: "Applied technology",
        href: "#",
    },
];

const channels = [
    {
        title: "LinkedIn",
        description: "Connect professionally and follow my journey in product management and technological leadership.",
        badge: "Professional profile",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
    {
        title: "GitHub",
        description: "Personal projects and open source contributions related to development and innovation.",
        badge: "Code and projects",
        href: "https://github.com/BertiGabriel",
    },
];

function Navigation() {
    return (
        <nav className="flex flex-wrap gap-4 text-sm text-black">
            <a href="#courses" className="hover:text-black">Experiences</a>
            <a href="#articles" className="hover:text-black">Insights</a>
            <a href="#channels" className="hover:text-black">Connect</a>
            <a href="#newsletter" className="hover:text-black">Contact</a>
        </nav>
    );
}

function HeroSection() {
    return (
        <section className="mx-auto mt-16 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="space-y-8">
                    <p className="max-w-xl rounded-full border border-black bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black">
                        Leadership and Product Innovation
                    </p>
                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
                        Experiences in product management, entrepreneurship and digital transformation.
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600">
                        Over 20 years of experience leading teams and projects in companies like Amazon, Mercado Livre and startups, focusing on innovation and scalable results.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a href="https://www.linkedin.com/in/bertigabriel" className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5 hover:text-black">
                            Connect on LinkedIn
                        </a>
                        <a href="mailto:me@bertigabriel.me" className="inline-flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5 hover:text-black">
                            Get in touch
                        </a>
                    </div>
                </div>

                <div className="grid gap-5 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-2xl shadow-slate-900/5 glass-panel">
                    <div className="rounded-[28px] bg-white p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-black">Highlights</p>
                        <div className="mt-6 grid gap-4 text-left text-black sm:grid-cols-2">
                            <StatsCard value="20+" label="Years of experience" />
                            <StatsCard value="Director" label="Current role" />
                            <StatsCard value="Amazon" label="International experience" />
                            <StatsCard value="Startup" label="Entrepreneur" />
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
            <SectionHeader overline="Experiences and Cases" title="Leadership in Product and Innovation" />
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
                overline="Insights and Reflections"
                title="Thoughts on leadership, product and entrepreneurship."
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
                overline="Connect"
                title="Professional profile and projects on GitHub."
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
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Let's talk</p>
                    <h2 className="text-4xl font-semibold text-slate-950">Interested in collaboration or opportunities?</h2>
                    <p className="max-w-2xl text-slate-600">
                        Get in touch to discuss product projects, leadership or entrepreneurship.
                    </p>
                </div>
                <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
                    <input type="email" placeholder="Your best email" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-sky-400" />
                    <button type="submit" className="inline-flex items-center justify-center rounded-2xl border border-black bg-transparent px-6 py-4 text-sm font-semibold text-black transition hover:bg-black/5 hover:text-black">
                        Send message
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
                    <p className="mt-4 text-slate-600">Director with experience in product management, team leadership and digital entrepreneurship.</p>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Experience</p>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">Amazon</a>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">Mercado Livre</a>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">Contera IO</a>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Specialties</p>
                    <span className="block text-slate-600">Product Management</span>
                    <span className="block text-slate-600">Team Leadership</span>
                    <span className="block text-slate-600">Entrepreneurship</span>
                </div>
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Connect</p>
                    <a href="https://www.linkedin.com/in/bertigabriel" className="block text-slate-600 hover:text-slate-950">LinkedIn</a>
                    <a href="https://github.com/BertiGabriel" className="block text-slate-600 hover:text-slate-950">GitHub</a>
                    <span className="block text-slate-600">@BertiGabriel</span>
                    <a href="mailto:me@bertigabriel.me" className="block text-slate-600 hover:text-slate-950">me@bertigabriel.me</a>
                </div>
            </div>
            <p className="mt-10 text-sm text-slate-500">© 2026 Gabriel Berti. All rights reserved.</p>
        </footer>
    );
}
