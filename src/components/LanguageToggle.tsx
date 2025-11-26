import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 glass glow-border rounded-full p-4 flex items-center gap-2 hover:bg-burnt-orange/20 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <Languages className="w-5 h-5 text-burnt-orange group-hover:text-amber-glow transition-colors" />
            <span className="font-headline text-lg text-cream uppercase tracking-wider">
                {language === 'en' ? 'ES' : 'EN'}
            </span>
        </motion.button>
    );
};

export default LanguageToggle;
