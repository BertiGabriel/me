function LanguageToggle() {
    const path = window.location.pathname;
    const isEnglish = path.includes("/en-us/");
    const href = isEnglish ? "../pt-br/" : "../en-us/";
    const label = isEnglish ? "Português" : "English";

    return (
        <div className="flex items-center gap-3 text-sm">
            <a href={href} className="font-semibold text-black transition hover:text-black">
                {label}
            </a>
        </div>
    );
}

function Logo() {
    return (
        <a href="./" className="inline-flex items-center gap-3" aria-label="Gabriel Berti">
            <img src="../assets/logo.svg" alt="Gabriel Berti logo" className="h-10 w-auto" />
        </a>
    );
}

function App() {
    return (
        <div className="min-h-screen px-6 py-8 md:px-10 lg:px-16">
            <header className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <Logo />
                    <Navigation />
                    <LanguageToggle />
                </div>
            </header>

            <HeroSection />
            <CoursesSection />
            <ArticlesSection />
            <NewsletterSection />
            <FooterSection />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
