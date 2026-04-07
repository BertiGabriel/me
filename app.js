function App() {
    return (
        <div className="min-h-screen px-6 py-8 md:px-10 lg:px-16">
            <header className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">Gabriel Berti</span>
                    <Navigation />
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
