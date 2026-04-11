import { motion } from "framer-motion";
import { Stethoscope, PackageCheck, FileText, FlaskConical, Factory, ShieldCheck, Truck } from "lucide-react";
import teralisPharmacy from "@/assets/teralis-pharmacy.jpg";

const benefits = [
  { icon: Stethoscope, title: "Valeur médicale élevée", desc: "Produit de fond pour les articulations et tendons." },
  { icon: PackageCheck, title: "Zéro rupture", desc: "Distribution sécurisée via Laborex Cameroun." },
  { icon: FileText, title: "Support Scientifique", desc: "Fiches techniques et matériel marketing pour vos équipes." },
];

const timeline = [
  { icon: FlaskConical, title: "R&D à Paris", desc: "Formulation avec des experts internationaux." },
  { icon: Factory, title: "Production en UE", desc: "Fabrication sous contrôle qualité strict en Europe." },
  { icon: ShieldCheck, title: "Certification", desc: "Chaque lot est analysé avant sa libération." },
  { icon: Truck, title: "Distribution", desc: "Partenaires fiables garantissant la traçabilité." },
];

const B2BSection = () => (
  <section id="b2b" className="relative overflow-hidden bg-background">
    {/* Top skewed edge */}
    <div className="absolute top-0 left-0 right-0 h-48 bg-background z-10"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
    />

    <div className="bg-muted/30 pt-52 pb-20 relative">

      <div className="container mx-auto relative z-[5]">
        {/* B2B benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Partenariat Médical et Officinal
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 items-start bg-card rounded-2xl p-5 border border-border/50 shadow-sm"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.img
            src={teralisPharmacy}
            alt="Teralis en pharmacie"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-xl shadow-primary/10 w-full max-h-[420px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            De Paris à votre pharmacie
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card rounded-2xl p-6 border border-border/50 text-center card-hover"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {i + 1}
              </div>
              <t.icon className="w-8 h-8 text-teralis-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default B2BSection;
