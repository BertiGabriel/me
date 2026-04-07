function LanguageToggle() {
    const path = window.location.pathname;
    const isEnglish = path.includes("/en/");
    const href = isEnglish ? "../pt/" : "../en/";
    const label = isEnglish ? "Português" : "English";

    return (
        <div className="flex items-center gap-3 text-sm">
            <a href={href} className="font-semibold text-black transition hover:text-black">
                {label}
            </a>
        </div>
    );
}

function App() {
    return (
        <div className="min-h-screen px-6 py-8 md:px-10 lg:px-16">
            <header className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black">Gabriel Berti</span>
                    <Navigation />
                    <LanguageToggle />
                </div>
            </header>

            <HeroSection />
            <CoursesSection />
            <ArticlesSection />
            <ChannelsSection />
            <NewsletterSection />
            <FooterSection />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
