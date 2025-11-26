import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AestheticMap = () => {
    const { t } = useLanguage();
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=23+av+Norte+Calle+Oriente+Local+7+Santa+Ana+El+Salvador`;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep-brown via-warm-charcoal to-deep-brown" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-headline text-5xl md:text-7xl text-cream mb-4">
                        {t.location.title}
                    </h2>
                    <p className="font-body text-sand/70 text-lg">
                        {t.location.subtitle}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden glow-border h-[400px] lg:h-[500px]"
                    >
                        {/* Styled iframe map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d-89.56!3d13.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU5JzI0LjAiTiA4OcKwMzMnMzYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="RaroSoundRoom Location"
                        />
                        <div className="absolute inset-0 bg-burnt-orange/10 mix-blend-multiply pointer-events-none" />
                    </motion.div>

                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass rounded-2xl p-8 md:p-12 space-y-8"
                    >
                        {/* Address */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-burnt-orange/20 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-burnt-orange" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-headline text-2xl text-cream mb-2">{t.location.locationLabel}</h3>
                                <p className="font-body text-sand/80 leading-relaxed">
                                    {t.location.address}
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-burnt-orange/20 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-burnt-orange" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-headline text-2xl text-cream mb-2">{t.location.hoursLabel}</h3>
                                <div className="font-body text-sand/80 space-y-1">
                                    <p className="font-mono text-sm">
                                        <span className="text-burnt-orange">{t.location.hours.tueThur}</span> • {t.location.hours.tueThurTime}
                                    </p>
                                    <p className="font-mono text-sm">
                                        <span className="text-burnt-orange">{t.location.hours.friSat}</span> • {t.location.hours.friSatTime}
                                    </p>
                                    <p className="font-mono text-sm text-sand/50">
                                        {t.location.hours.sunMon} • {t.location.hours.closed}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full flex items-center justify-center gap-3 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                            <span>{t.location.directions}</span>
                        </motion.a>

                        {/* Additional Info */}
                        <div className="pt-6 border-t border-burnt-orange/20 text-center">
                            <p className="font-mono text-xs text-sand/50 uppercase tracking-widest">
                                {t.location.follow}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-burnt-orange animate-pulse" />
                <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-amber-glow animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
        </section>
    );
};

export default AestheticMap;
