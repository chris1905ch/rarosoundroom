import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background Waves */}
            <div className="absolute inset-0 -z-10">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-burnt-orange to-transparent opacity-30"
                        style={{
                            bottom: `${20 + i * 15}%`,
                        }}
                        animate={{
                            x: ['-100%', '100%'],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            {/* Radial Gradient Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-burnt-orange/20 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="section-container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.h1
                        className="font-headline text-7xl md:text-9xl lg:text-[12rem] text-cream mb-6 tracking-tight leading-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        {t.hero.title}
                    </motion.h1>

                    <motion.div
                        className="relative inline-block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <p className="font-body text-xl md:text-3xl text-sand font-light tracking-wide">
                            {t.hero.subtitle}
                        </p>
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-burnt-orange to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    <div className="w-6 h-10 border-2 border-burnt-orange rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-burnt-orange rounded-full"
                            animate={{ y: [0, 16, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
