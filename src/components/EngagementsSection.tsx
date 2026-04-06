import { motion } from "framer-motion";
import { Shield, Factory, Pill, HeartPulse } from "lucide-react";

const engagements = [
  {
    icon: Shield,
    title: "Conception Française",
    desc: "Des formules élaborées par des experts pharmaciens pour une efficacité maximale.",
  },
  {
    icon: Factory,
    title: "Fabrication Européenne",
    desc: "Une traçabilité totale et le respect des normes internationales.",
  },
  {
    icon: Pill,
    title: "Posologie optimale",
    desc: 'Des comprimés "High Density" pour réduire le nombre de prises quotidiennes sans sacrifier le dosage.',
  },
  {
    icon: HeartPulse,
    title: "Santé accessible",
    desc: "Des solutions premium adaptées aux besoins des familles africaines.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const EngagementsSection = () => (
  <section id="engagements" className="section-padding bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Nos engagements
        </h2>
        <div className="w-20 h-1 bg-teralis-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {engagements.map((e, i) => (
          <motion.div
            key={e.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, rotateX: 3 }}
            className="bg-card rounded-2xl p-8 shadow-lg shadow-primary/5 border border-border/50 card-hover text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <e.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{e.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementsSection;
