import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Pourquoi choisir Teralis plutôt qu'une marque locale ou importée ?",
    a: "Teralis combine le meilleur des deux mondes : une formulation de pointe française et une logistique optimisée pour rester accessible, avec une observance simplifiée (1 cp/jour).",
  },
  {
    q: "Où sont fabriqués les produits Teralis ?",
    a: "Exclusivement en Europe, garantissant les niveaux de qualité les plus élevés au monde.",
  },
  {
    q: "Comment commander Teralis Articulations ?",
    a: "Teralis Articulations est disponible via le réseau Laborex Cameroun. Contactez votre grossiste ou remplissez le formulaire ci-dessous.",
  },
  {
    q: "Quelle est la posologie recommandée ?",
    a: "1 seul comprimé par jour suffit grâce à notre technologie High Density. Adapté aux adultes et enfants à partir de 12 ans.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Questions fréquentes
          </h2>
          <div className="w-20 h-1 bg-teralis-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-heading font-semibold text-foreground pr-4">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
