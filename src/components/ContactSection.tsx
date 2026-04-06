import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ nom: "", profession: "", ville: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.profession || !form.ville.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Votre demande a bien été envoyée !");
    setForm({ nom: "", profession: "", ville: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border/50 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300";

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-dark)" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teralis-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teralis-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Faites le choix de l'excellence européenne.
          </h2>
          <p className="text-primary-foreground/70 text-lg">Rejoignez le mouvement Teralis.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl space-y-5"
        >
          <input
            type="text"
            placeholder="Nom *"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className={inputClass}
            maxLength={100}
          />
          <select
            value={form.profession}
            onChange={(e) => setForm({ ...form, profession: e.target.value })}
            className={inputClass}
          >
            <option value="">Profession *</option>
            <option value="pharmacien">Pharmacien</option>
            <option value="medecin">Médecin</option>
            <option value="patient">Patient</option>
          </select>
          <input
            type="text"
            placeholder="Ville *"
            value={form.ville}
            onChange={(e) => setForm({ ...form, ville: e.target.value })}
            className={inputClass}
            maxLength={100}
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass}
            maxLength={1000}
          />
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            Envoyer ma demande
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
