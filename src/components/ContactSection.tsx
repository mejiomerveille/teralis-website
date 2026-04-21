import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactSection = () => {
  const [form, setForm] = useState({ nom: "", profession: "", ville: "", message: "" });
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.3"],
  });

  const containerWidth = useTransform(scrollYProgress, [0, 1], ["100%", isMobile ? "100%" : "90%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", isMobile ? "0px" : "32px"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.profession || !form.ville.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Votre demande a bien été envoyée !");
    setForm({ nom: "", profession: "", ville: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 flex justify-center bg-white">
      <motion.div
        style={{ width: containerWidth, borderRadius }}
        className="relative overflow-hidden"
      >
        <div
          className="relative px-3 md:px-8 py-20 md:py-28 bg-white"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-blue-700 mb-4">
                Faites le choix de l'excellence européenne.
              </h2>
              <p className="text-blue-500 text-lg">Rejoignez le mouvement Teralis.</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-blue-50 backdrop-blur-xl rounded-xl md:rounded-3xl p-5 md:p-10 border border-blue-100 space-y-4 mx-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom *"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl border border-blue-200 bg-white text-blue-800 placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  maxLength={100}
                />
                <select
                  value={form.profession}
                  onChange={(e) => setForm({ ...form, profession: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl border border-blue-200 bg-white text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 appearance-none"
                >
                  <option value="" className="text-blue-300">Profession *</option>
                  <option value="pharmacien" className="text-blue-800">Pharmacien</option>
                  <option value="medecin" className="text-blue-800">Médecin</option>
                  <option value="patient" className="text-blue-800">Patient</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Ville *"
                value={form.ville}
                onChange={(e) => setForm({ ...form, ville: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl border border-blue-200 bg-white text-blue-800 placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                maxLength={100}
              />
              <textarea
                placeholder="Votre message..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl border border-blue-200 bg-white text-blue-800 placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 resize-none"
                maxLength={1000}
              />
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg inline-flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Envoyer ma demande
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;