import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";

const products = [
  { name: "Teralis Articulations", target: "Confort, Mobilité, Tendons", status: "Disponible via Laborex", available: true },
  { name: "Teralis Magnesium B6", target: "Stress, Fatigue et Crampes", status: "Lancement prévu 2027", available: false },
  { name: "Teralis Melatonine", target: "Sommeil & Sérénité", status: "Lancement prévu 2027", available: false },
  { name: "Teralis Vitamines", target: "Énergie, Appétit et Vitalité", status: "Lancement prévu 2027", available: false },
];

const ProductsSection = () => (
  <section id="produits" className="section-padding bg-muted/30">
    <div className="container mx-auto px-5 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Nos Solutions de Santé
        </h2>
        <div className="w-20 h-1 bg-teralis-accent mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="hidden md:grid grid-cols-3 gap-4 mb-4 px-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          <span>Produit</span>
          <span>Cible</span>
          <span>Statut</span>
        </div>
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-xl mb-3 border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
              p.available ? "bg-card border-primary/20" : "bg-card border-border/50"
            }`}
          >
            <span className="font-heading font-semibold text-foreground">{p.name}</span>
            <span className="text-muted-foreground text-sm">{p.target}</span>
            <span className="flex items-center gap-2 text-sm">
              {p.available ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium" style={{ color: "hsl(145 63% 42%)" }}>{p.status}</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-teralis-accent" />
                  <span className="text-muted-foreground">{p.status}</span>
                </>
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
