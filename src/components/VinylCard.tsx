import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc3 } from 'lucide-react';
import type { MenuItem } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface VinylCardProps {
    item: MenuItem;
    index: number;
}

const VinylCard = ({ item, index }: VinylCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { language } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="perspective"
        >
            <motion.div
                className="relative vinyl-sleeve cursor-pointer p-6 min-h-[180px]"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {/* Vinyl Record - slides out on hover */}
                <motion.div
                    className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20"
                    animate={{
                        x: isHovered ? 24 : 0,
                        rotate: isHovered ? 15 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <div className="relative w-full h-full">
                        <Disc3 className="w-full h-full text-burnt-orange/40" strokeWidth={1} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="w-4 h-4 rounded-full bg-warm-charcoal border-2 border-burnt-orange"
                                animate={{ rotate: isHovered ? 360 : 0 }}
                                transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: 'linear' }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Card Content */}
                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="font-headline text-2xl md:text-3xl text-cream pr-24">
                            {item.name[language]}
                        </h3>
                    </div>

                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-mono text-2xl text-burnt-orange font-bold">
                            ${item.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-sand/60 font-mono uppercase tracking-widest">
                            {item.category}
                        </span>
                    </div>

                    {/* Short preview */}
                    {!isExpanded && (
                        <motion.p
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-sand/80 text-sm font-body line-clamp-2"
                        >
                            {item.description[language]}
                        </motion.p>
                    )}

                    {/* Expanded details */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 border-t border-burnt-orange/30 mt-4">
                                    <p className="text-sand font-body leading-relaxed">
                                        {item.description[language]}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="h-px flex-1 bg-gradient-to-r from-burnt-orange/50 to-transparent" />
                                        <span className="text-xs text-burnt-orange font-mono uppercase tracking-widest">
                                            {language === 'en' ? 'Tap to close' : 'Toca para cerrar'}
                                        </span>
                                        <div className="h-px flex-1 bg-gradient-to-l from-burnt-orange/50 to-transparent" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hover glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    animate={{
                        boxShadow: isHovered
                            ? '0 0 30px rgba(192, 86, 33, 0.4), inset 0 0 20px rgba(192, 86, 33, 0.1)'
                            : '0 0 0px rgba(192, 86, 33, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
};

export default VinylCard;
