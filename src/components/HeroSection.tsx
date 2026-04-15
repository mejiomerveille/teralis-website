import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";

const slides = [
  {
    image: heroBg1,
    position: 'center',
    title: (
      <>
        Les produits de qualité européenne, pour votre{" "}
        <span className="gradient-text">santé</span>
      </>
    ),
    subtitle:
      "Teralis est une marque de santé haute performance. Fabriqués selon les standards européens les plus stricts, Teralis répond aux besoins spécifiques des familles africaines.",
  },
  {
    image: heroBg2,
    position: 'right',
    title: (
      <>
        Soulagez efficacement vos{" "}
        <span className="gradient-text">douleurs articulaires</span>
      </>
    ),
    subtitle:
      "Retrouvez confort, mobilité et sérénité grâce à une solution adaptée à vos besoins quotidiens.",
  },
  {
    image: heroBg3,
    position: 'right',
    title: (
      <>
        Améliorez vos{" "}
        <span className="gradient-text">performances</span> sans douleur
      </>
    ),
    subtitle:
      "Protégez vos articulations et restez actif plus longtemps, même lors d'efforts intenses.",
  },
  {
    image: heroBg4,
    position: 'center',
    title: (
      <>
        Retrouvez le plaisir de{" "}
        <span className="gradient-text">bouger librement</span>
      </>
    ),
    subtitle:
      "Profitez chaque jour d'une meilleure mobilité et d'un bien-être durable sans contraintes.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 10000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-[85vh] flex items-center overflow-hidden bg-foreground"
    >
      {/* Background carousel */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full"
            style={{ objectPosition: slide.position || 'center' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      ))}

      {/* Centered content */}
      <div className="container mx-auto px-5 md:px-8 pt-24 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Santé & Bien-être
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#produits" className="btn-primary">
              Découvrir nos solutions
            </a>
            <a
              href="#contact"
              className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Devenir pharmacien partenaire
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;