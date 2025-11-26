import { useState } from 'react';
import Hero from './components/Hero';
import AmplifierToggle from './components/AmplifierToggle';
import MenuGrid from './components/MenuGrid';
import Story from './components/Story';
import AestheticMap from './components/AestheticMap';
import LanguageToggle from './components/LanguageToggle';
import type { MenuSide } from './data/menuData';
import { foodMenu, drinksMenu } from './data/menuData';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [activeSide, setActiveSide] = useState<MenuSide>('food');
  const { t } = useLanguage();

  const currentMenu = activeSide === 'food' ? foodMenu : drinksMenu;

  return (
    <div className="min-h-screen">
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Hero Section */}
      <Hero />

      {/* Menu Section */}
      <section id="menu" className="relative py-24">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-6xl md:text-8xl text-cream mb-4">
              {t.menu.title}
            </h2>
            <p className="font-body text-sand/70 text-lg">
              {t.menu.subtitle}
            </p>
          </div>

          {/* Toggle Switch */}
          <AmplifierToggle activeSide={activeSide} onToggle={setActiveSide} />

          {/* Menu Grid */}
          <MenuGrid categories={currentMenu} activeSide={activeSide} />
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-burnt-orange/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-amber-glow/5 rounded-full blur-[100px] -z-10" />
      </section>

      {/* Story Section */}
      <Story />

      {/* Location Section */}
      <AestheticMap />

      {/* Footer */}
      <footer className="relative py-12 border-t border-burnt-orange/20">
        <div className="section-container">
          <div className="text-center space-y-4">
            <h3 className="font-headline text-3xl text-cream">
              RaroSoundRoom
            </h3>
            <p className="font-mono text-sm text-sand/60 uppercase tracking-widest">
              {t.footer.tagline}
            </p>
            <div className="flex items-center justify-center gap-6 pt-4">
              <a
                href="#menu"
                className="text-sand/70 hover:text-burnt-orange transition-colors text-sm"
              >
                {t.footer.menu}
              </a>
              <span className="w-1 h-1 rounded-full bg-burnt-orange" />
              <a
                href="#location"
                className="text-sand/70 hover:text-burnt-orange transition-colors text-sm"
              >
                {t.footer.location}
              </a>
              <span className="w-1 h-1 rounded-full bg-burnt-orange" />
              <span className="text-sand/50 text-sm">
                © 2025 RaroSoundRoom
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
