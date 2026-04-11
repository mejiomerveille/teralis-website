import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";
import teralisBox from "@/assets/teralis-box-articulations.png";
import futureProducts from "@/assets/teralis-future-products.png";

const slides = [
  { image: heroBg1 },
  { image: heroBg2 },
  { image: heroBg3 },
  { image: heroBg4 },
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
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-background"
    >
      {/* Background carousel – two layers for crossfade (no white flash) */}
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
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      ))}

      {/* Split content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Santé & Bien-être
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              L'excellence européenne au service de votre{" "}
              <span className="gradient-text">santé</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/80 max-w-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Teralis est une marque de santé haute performance, pensée pour les familles africaines.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#produits" className="btn-primary">
                Découvrir nos solutions
              </a>
              <a href="#contact" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                Devenir partenaire
              </a>
            </motion.div>
          </div>

          {/* Right: Product visual – real box + blurred future products */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Future products behind (blurred) */}
            <img
              src={futureProducts}
              alt="Futurs produits Teralis – Vitalité, Digestion, Immunité"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[500px] md:w-[600px] lg:w-[600px] opacity-50 blur-[1.5px] scale-125"
              loading="lazy"
              width={1200}
              height={600}
            />
            {/* Main box */}
            <motion.img
              src={teralisBox}
              alt="Teralis Articulations"
              className="relative z-10 w-[250px] md:w-[320px] lg:w-[380px] drop-shadow-2xl"
              width={500}
              height={600}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
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
                ? "w-8 bg-primary"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
