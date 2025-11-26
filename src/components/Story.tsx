import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Story = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t } = useLanguage();

    return (
        <section className="relative py-32 overflow-hidden" ref={ref}>
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-burnt-orange/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-glow/10 rounded-full blur-[100px]" />
            </div>

            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Decorative top line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-1 w-32 bg-gradient-to-r from-burnt-orange to-amber-glow rounded-full mb-12 mx-auto"
                    />

                    {/* Quote marks */}
                    <div className="relative">
                        <span className="absolute -top-4 -left-4 md:-left-12 text-8xl text-burnt-orange/30 font-headline leading-none">
                            "
                        </span>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="font-body text-2xl md:text-3xl lg:text-4xl text-sand leading-relaxed text-center italic px-4 md:px-12"
                        >
                            {t.story.text}
                        </motion.p>

                        <span className="absolute -bottom-8 -right-4 md:-right-12 text-8xl text-burnt-orange/30 font-headline leading-none">
                            "
                        </span>
                    </div>

                    {/* Decorative bottom line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="h-1 w-32 bg-gradient-to-r from-amber-glow to-burnt-orange rounded-full mt-12 mx-auto"
                    />

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-center mt-8 font-mono text-sm text-sand/60 uppercase tracking-[0.3em]"
                    >
                        {t.story.subtitle}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
