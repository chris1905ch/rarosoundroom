import { motion } from 'framer-motion';
import type { MenuSide } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface AmplifierToggleProps {
    activeSide: MenuSide;
    onToggle: (side: MenuSide) => void;
}

const AmplifierToggle = ({ activeSide, onToggle }: AmplifierToggleProps) => {
    const { t } = useLanguage();

    return (
        <div className="flex justify-center mb-16">
            <div className="glass rounded-2xl p-2 flex items-center gap-2 glow-border">
                {/* Side A - Food */}
                <button
                    onClick={() => onToggle('food')}
                    className={`relative px-8 py-4 rounded-xl font-headline text-xl md:text-2xl tracking-wider transition-all duration-300 ${activeSide === 'food'
                            ? 'text-cream'
                            : 'text-sand/50 hover:text-sand/80'
                        }`}
                >
                    {activeSide === 'food' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-burnt-orange rounded-xl"
                            style={{ zIndex: -1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        <span className="text-amber-glow">●</span>
                        {t.menu.sideA}
                    </span>
                </button>

                {/* Divider */}
                <div className="w-0.5 h-12 bg-gradient-to-b from-transparent via-burnt-orange to-transparent" />

                {/* Side B - Drinks */}
                <button
                    onClick={() => onToggle('drinks')}
                    className={`relative px-8 py-4 rounded-xl font-headline text-xl md:text-2xl tracking-wider transition-all duration-300 ${activeSide === 'drinks'
                            ? 'text-cream'
                            : 'text-sand/50 hover:text-sand/80'
                        }`}
                >
                    {activeSide === 'drinks' && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-burnt-orange rounded-xl"
                            style={{ zIndex: -1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        <span className="text-amber-glow">●</span>
                        {t.menu.sideB}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default AmplifierToggle;
