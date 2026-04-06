import { motion } from "framer-motion";
import teralisBox from "@/assets/teralis-box2.jpg";

const ingredients = ["Glucosamine", "Chondroïtine", "MSM", "Collagène", "Flavonoïdes", "Gingembre"];

const ArticulationsSection = () => (
  <section id="articulations" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 relative"
        >
          <img
            src={teralisBox}
            alt="Teralis Articulations"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-primary/15"
          />
          <motion.div
            className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1 comprimé/jour
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <span className="text-sm font-semibold text-teralis-accent uppercase tracking-wider">
            Premier produit de notre gamme
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
            Teralis Articulations
          </h2>
          <p className="text-lg text-foreground/70 mb-3">
            1 seul comprimé par jour pour 24h de liberté.
          </p>
          <p className="text-muted-foreground mb-8">
            Agit sur la douleur immédiate et la structure articulaire à long terme.
          </p>

          <h3 className="font-heading font-semibold text-foreground mb-4">Formule 6-en-1</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {ingredients.map((ing, i) => (
              <motion.span
                key={ing}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="chip-ingredient"
              >
                {ing}
              </motion.span>
            ))}
          </div>

          <a href="#contact" className="btn-primary inline-block animate-pulse-glow">
            Voir la fiche technique complète
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ArticulationsSection;
