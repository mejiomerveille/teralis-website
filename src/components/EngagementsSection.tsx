import { motion } from "framer-motion";
import { Shield, Factory, Pill, HeartPulse } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import engagement1 from "@/assets/engagement-1.jpg";
import engagement2 from "@/assets/engagement-2.jpg";
import engagement3 from "@/assets/engagement-3.jpg";
import engagement4 from "@/assets/engagement-4.jpg";

const engagements = [
  {
    icon: Shield,
    title: "Conception Française",
    desc: "Des formules élaborées par des experts pharmaciens pour une efficacité maximale.",
    image: engagement1,
  },
  {
    icon: Factory,
    title: "Fabrication Européenne",
    desc: "Une traçabilité totale et le respect des normes internationales.",
    image: engagement2,
  },
  {
    icon: Pill,
    title: "Posologie optimale",
    desc: 'Des comprimés "High Density" pour réduire le nombre de prises quotidiennes sans sacrifier le dosage.',
    image: engagement3,
  },
  {
    icon: HeartPulse,
    title: "Santé accessible",
    desc: "Des solutions premium adaptées aux besoins des familles africaines.",
    image: engagement4,
  },
];

const EngagementsSection = () => {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section id="engagements" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left side - title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nos engagements
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground">
              Chaque produit Teralis reflète notre engagement envers la qualité, l'innovation et l'accessibilité.
            </p>
          </motion.div>

          {/* Right side */}
          {isMobile ? (
            /* Mobile: vertical list */
            <div className="w-full flex flex-col gap-4">
              {engagements.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl overflow-hidden h-48"
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <e.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-heading font-semibold text-white">
                        {e.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Desktop: expanding cards */
            <div className="lg:w-2/3 flex gap-3 h-[420px] w-full">
              {engagements.map((e, i) => {
                const isActive = i === active;
                return (
                  <motion.div
                    key={e.title}
                    className="relative rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    animate={{ flex: isActive ? 3 : 1 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    initial={false}
                  >
                    <img
                      src={e.image}
                      alt={e.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={1000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0.7 }}
                        className="flex items-center gap-3 mb-2"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                          <e.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-primary-foreground whitespace-nowrap">
                          {e.title}
                        </h3>
                      </motion.div>
                      <motion.p
                        animate={{
                          opacity: isActive ? 1 : 0,
                          height: isActive ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-primary-foreground/80 leading-relaxed overflow-hidden"
                      >
                        {e.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EngagementsSection;
