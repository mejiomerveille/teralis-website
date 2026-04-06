import { motion } from "framer-motion";
import teralisHero from "@/assets/teralis-hero.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(var(--teralis-dark)) 0%, hsl(var(--teralis-primary)) 50%, hsl(var(--teralis-dark)) 100%)" }}
    >
      {/* Animated wave SVGs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave 1 - large, subtle */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "60%" }}
        >
          <motion.path
            d="M0,200 C360,100 720,350 1440,180 L1440,400 L0,400 Z"
            fill="hsl(var(--teralis-accent) / 0.15)"
            animate={{
              d: [
                "M0,200 C360,100 720,350 1440,180 L1440,400 L0,400 Z",
                "M0,250 C360,150 720,300 1440,220 L1440,400 L0,400 Z",
                "M0,200 C360,100 720,350 1440,180 L1440,400 L0,400 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Wave 2 - mid, brighter */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "50%" }}
        >
          <motion.path
            d="M0,280 C480,180 960,350 1440,250 L1440,400 L0,400 Z"
            fill="hsl(var(--teralis-secondary) / 0.12)"
            animate={{
              d: [
                "M0,280 C480,180 960,350 1440,250 L1440,400 L0,400 Z",
                "M0,300 C480,220 960,280 1440,300 L1440,400 L0,400 Z",
                "M0,280 C480,180 960,350 1440,250 L1440,400 L0,400 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>

        {/* Wave 3 - top flowing wave */}
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "45%" }}
        >
          <motion.path
            d="M0,150 C300,50 600,250 900,120 C1200,0 1350,180 1440,100 L1440,0 L0,0 Z"
            fill="hsl(var(--teralis-light) / 0.08)"
            animate={{
              d: [
                "M0,150 C300,50 600,250 900,120 C1200,0 1350,180 1440,100 L1440,0 L0,0 Z",
                "M0,120 C300,100 600,180 900,80 C1200,50 1350,150 1440,130 L1440,0 L0,0 Z",
                "M0,150 C300,50 600,250 900,120 C1200,0 1350,180 1440,100 L1440,0 L0,0 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>

        {/* Glow spot */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teralis-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            Santé & Bien-être
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-5">
            Les produits de qualité européenne,{" "}
            <span className="text-teralis-accent">pour votre santé.</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-lg mx-auto lg:mx-0 mb-3">
            Teralis est une marque de santé haute performance.
          </p>
          <p className="text-sm md:text-base text-primary-foreground/60 max-w-lg mx-auto lg:mx-0 mb-8">
            Fabriqués selon les standards européens les plus stricts, Teralis répond aux besoins
            spécifiques des familles africaines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#produits"
              className="px-8 py-3 rounded-full font-semibold text-center transition-all duration-300 hover:scale-105 bg-teralis-accent text-primary-foreground hover:shadow-lg hover:shadow-teralis-accent/30"
            >
              Découvrir nos solutions
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-center transition-all duration-300 hover:scale-105 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-white/10"
            >
              Devenir pharmacien partenaire
            </a>
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-teralis-accent/20 rounded-full blur-[80px]" />
          </div>
          <motion.img
            src={teralisHero}
            alt="Teralis Articulations"
            className="w-64 md:w-80 lg:w-96 relative z-10 drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
