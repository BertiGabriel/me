function LanguageToggle() {
    const path = window.location.pathname;
    const isEnglish = path.includes("/en-us/");
    const href = isEnglish ? "../pt-br/" : "../en-us/";
    const label = isEnglish ? "Português" : "English";

    return (
        <div className="flex items-center gap-3 text-sm">
            <a href={href} className="font-semibold transition hover:opacity-70">
                {label}
            </a>
        </div>
    );
}

function Logo() {
    return (
        <a href="./" className="inline-flex items-center gap-3" aria-label="Gabriel Berti - Home">
            <img src="../assets/logo.svg" alt="Gabriel Berti logo" className="h-10 w-auto" />
        </a>
    );
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function App() {
    React.useEffect(() => {
        initializeTheme();
    }, []);

    return (
        <div className="min-h-screen px-6 py-8 md:px-10 lg:px-16">
            <a href="#main-content" className="skip-to-content">Skip to main content</a>
            <header className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <Logo />
                    <Navigation />
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                </div>
            </header>

            <main id="main-content">
                <HeroSection />
                <CoursesSection />
                <ArticlesSection />
                <TestimonialsSection />
                <NewsletterSection />
            </main>
            <FooterSection />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
