import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";
import teralisBox from "@/assets/teralis-hero.png";

const slides = [
  {
    image: heroBg1,
    position: "center",
    title: (
      <>
        Les produits de qualité européenne, pour votre{" "}
        <span className="text-blue-300">santé</span>
      </>
    ),
    subtitle:
      "Teralis est une marque de santé haute performance. Fabriqués selon les standards européens les plus stricts, Teralis répond aux besoins spécifiques des familles africaines.",
  },
  {
    image: heroBg2,
    position: "right",
    title: (
      <>
        Soulagez efficacement vos{" "}
        <span className="text-blue-300">douleurs articulaires</span>
      </>
    ),
    subtitle:
      "Retrouvez confort, mobilité et sérénité grâce à une solution adaptée à vos besoins quotidiens.",
  },
  {
    image: heroBg4,
    position: "center",
    title: (
      <>
        Retrouvez le plaisir de{" "}
        <span className="text-blue-300">bouger librement</span>
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

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-foreground"
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
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.position || "center" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="container mx-auto px-5 md:px-12 pt-28 pb-24 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">

          {/* ── LEFT: text ── */}
          <div className="flex-1 max-w-xl w-full">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
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
                className="text-base md:text-lg text-white/80 mb-10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {slides[current].subtitle}
              </motion.p>
            </AnimatePresence>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
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
                Devenir partenaire
              </a>
            </motion.div>

            {/* Navigation arrows + indicators */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={goPrev}
                aria-label="Slide précédent"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-white/25 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Aller au slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === current
                        ? "w-8 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                aria-label="Slide suivant"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/25 text-white hover:bg-white/25 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ── RIGHT: 3D product box ── */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
              style={{ width: "clamp(220px, 35vw, 480px)" }}
            >
              {/* Glow behind the box */}
              <div
                className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(30,80,200,0.45) 0%, transparent 70%)",
                  transform: "scale(1.2) translateY(10%)",
                }}
              />
              <motion.img
                src={teralisBox}
                alt="Teralis Articulations"
                className="relative w-full h-auto drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ filter: "drop-shadow(0 24px 48px rgba(10,30,100,0.55))" }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;