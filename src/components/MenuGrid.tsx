import { motion, AnimatePresence } from 'framer-motion';
import type { MenuCategory } from '../data/menuData';
import VinylCard from './VinylCard';

interface MenuGridProps {
    categories: MenuCategory[];
    activeSide: 'food' | 'drinks';
}

const MenuGrid = ({ categories, activeSide }: MenuGridProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeSide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
            >
                {categories.map((category, categoryIndex) => (
                    <div key={category.title}>
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                            className="mb-8"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-1 w-12 bg-gradient-to-r from-burnt-orange to-amber-glow rounded-full" />
                                <h2 className="font-headline text-5xl md:text-6xl text-cream tracking-tight">
                                    {category.title}
                                </h2>
                                <div className="h-1 flex-1 bg-gradient-to-r from-amber-glow/50 to-transparent rounded-full" />
                            </div>
                            {category.subtitle && (
                                <p className="font-mono text-sm text-sand/70 uppercase tracking-widest ml-16">
                                    {category.subtitle}
                                </p>
                            )}
                        </motion.div>

                        {/* Menu Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {category.items.map((item, itemIndex) => (
                                <VinylCard
                                    key={item.name}
                                    item={item}
                                    index={itemIndex}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default MenuGrid;
