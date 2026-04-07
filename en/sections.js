const courseHighlights = [
    {
        title: "Product Management and Innovation",
        description:
            "Practical experience in leading product teams, developing strategies and implementing scalable solutions in companies like Amazon and Mercado Livre.",
        cta: "Learn more",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
    {
        title: "Entrepreneurship and Startups",
        description:
            "As co-founder of Contera IO, I share insights on building digital products, validating ideas and growing businesses.",
        cta: "Discover the journey",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
    {
        title: "Automation and Generative AI",
        description:
            "Leadership in automation projects using AI and LLMs, saving millions of hours of manual effort at Amazon.",
        cta: "See the results",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
];

const blogPosts = [
    {
        title: "Leadership in Product Management",
        description:
            "How to lead product teams in complex environments, defining strategies and metrics for success in companies like Amazon and Mercado Livre.",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
    {
        title: "Digital Entrepreneurship",
        description:
            "Journey as a startup co-founder, from idea validation to sustainable growth in the Brazilian market.",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
    {
        title: "Automation with Generative AI",
        description:
            "How to implement AI and LLM solutions to automate processes and generate value at scale, saving millions of hours.",
        href: "https://www.linkedin.com/in/bertigabriel",
    },
];

const channels = [
    {
        title: "@BertiGabriel",
        description: "Connect professionally and follow my journey in product innovation and technological leadership.",
        badge: "Professional profile",
        href: "https://www.linkedin.com/in/bertigabriel",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="black"/></svg>',
    },
    {
        title: "@BertiGabriel",
        description: "Personal projects and open source contributions related to development and innovation.",
        badge: "Code and projects",
        href: "https://github.com/BertiGabriel",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="black"/></svg>',
    },
    {
        title: "@BertiGabriel",
        description: "Follow me for discussions on technology, product, and entrepreneurship.",
        badge: "Social media",
        href: "https://x.com/BertiGabriel",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="black"/></svg>',
    },
    {
        title: "me@bertigabriel.me",
        description: "Send a message for discussions about collaborations or opportunities.",
        badge: "Direct contact",
        href: "mailto:me@bertigabriel.me",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="black"/></svg>',
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
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div className="space-y-8">
                    <p className="max-w-xl rounded-full border border-black bg-transparent px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black">
                        Leadership and Product Innovation
                    </p>
                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-black md:text-6xl">
                        Experiences in product management, entrepreneurship and digital transformation.
                    </h1>
                    <p className="max-w-2xl text-lg text-black">
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

                <div className="grid gap-5 rounded-[32px] border border-black bg-transparent p-8 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.18)]">
                    <div className="flex items-center justify-center rounded-full bg-transparent p-4">
                        <img src="../assets/profile.png" alt="Photo of Gabriel Berti" className="h-80 w-80 rounded-full object-cover" />
                    </div>
                    <div className="rounded-[28px] border border-black bg-transparent p-6">
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
                    <Card key={channel.title} title={channel.title} description={channel.description} href={channel.href} badge={channel.badge} icon={channel.icon} />
                ))}
            </div>
        </section>
    );
}

function NewsletterSection() {
    return (
        <section id="newsletter" className="mx-auto mt-24 max-w-6xl rounded-[32px] border border-black bg-transparent p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black">Let's talk</p>
                    <h2 className="text-4xl font-semibold text-black">Interested in collaboration or opportunities?</h2>
                    <p className="max-w-2xl text-black">
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
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/bertigabriel" className="text-slate-600 hover:text-slate-950">
                            <span dangerouslySetInnerHTML={{__html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/></svg>'}}></span>
                        </a>
                        <a href="https://github.com/BertiGabriel" className="text-slate-600 hover:text-slate-950">
                            <span dangerouslySetInnerHTML={{__html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor"/></svg>'}}></span>
                        </a>
                        <a href="https://x.com/BertiGabriel" className="text-slate-600 hover:text-slate-950">
                            <span dangerouslySetInnerHTML={{__html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>'}}></span>
                        </a>
                        <a href="https://wa.me/5511915954848" className="text-slate-600 hover:text-slate-950">
                            <span dangerouslySetInnerHTML={{__html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/></svg>'}}></span>
                        </a>
                        <a href="mailto:me@bertigabriel.me" className="text-slate-600 hover:text-slate-950">
                            <span dangerouslySetInnerHTML={{__html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>'}}></span>
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-sm text-slate-500">© 2026 Gabriel Berti. All rights reserved.</p>
        </footer>
    );
}
