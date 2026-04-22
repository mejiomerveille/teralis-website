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
    <section
      id="contact"
      ref={sectionRef}
      className="flex justify-center"
      style={{ backgroundColor: "#1E50C8" }}
    >
      <motion.div
        style={{ width: containerWidth, borderRadius }}
        className="relative overflow-hidden"
      >
        <div className="relative px-4 md:px-8 py-20 md:py-28" style={{ backgroundColor: "#1E50C8" }}>

          {/* Blob décoratif haut droite */}
          <div
            className="absolute top-12 right-12 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          {/* Blob décoratif bas gauche */}
          <div
            className="absolute bottom-10 left-10 w-36 h-36 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div className="container mx-auto max-w-2xl relative z-10">

            {/* Carte blanche */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white relative overflow-hidden"
              style={{ borderRadius: "28px", padding: isMobile ? "2rem 1.25rem" : "2.5rem 2.5rem 2rem" }}
            >
              {/* Blobs internes décoratifs */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "#E0F7FA", opacity: 0.7 }}
              />
              <div
                className="absolute -bottom-12 -left-8 w-36 h-36 rounded-full pointer-events-none"
                style={{ background: "#FFF8E1", opacity: 0.6 }}
              />

              {/* Titre */}
              <div className="relative z-10 text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Faites le choix de la Qualité européenne.
                </h2>
                <p className="text-gray-500 text-base">Rejoignez le mouvement Teralis.</p>
              </div>

              {/* Formulaire */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                onSubmit={handleSubmit}
                className="relative z-10 space-y-4"
              >
                {/* Nom + Profession */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Nom *</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      maxLength={100}
                      className="w-full px-4 py-2.5 rounded-xl border text-gray-800 placeholder:text-gray-300 focus:outline-none transition-all duration-200"
                      style={{
                        border: "1.5px solid #E0E0E0",
                        fontSize: "14px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1E50C8";
                        e.target.style.boxShadow = "0 0 0 3px rgba(30,80,200,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E0E0E0";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Profession *</label>
                    <select
                      value={form.profession}
                      onChange={(e) => setForm({ ...form, profession: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-gray-800 focus:outline-none transition-all duration-200 appearance-none"
                      style={{
                        border: "1.5px solid #E0E0E0",
                        fontSize: "14px",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230AAECC' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        paddingRight: "36px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1E50C8";
                        e.target.style.boxShadow = "0 0 0 3px rgba(30,80,200,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E0E0E0";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Pharmacien</option>
                      <option value="medecin">Médecin</option>
                      <option value="patient">Patient</option>
                      <option value="autres">Autres</option>
                    </select>
                  </div>
                </div>

                {/* Ville */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Ville *</label>
                  <input
                    type="text"
                    placeholder="Votre ville"
                    value={form.ville}
                    onChange={(e) => setForm({ ...form, ville: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-2.5 rounded-xl text-gray-800 placeholder:text-gray-300 focus:outline-none transition-all duration-200"
                    style={{ border: "1.5px solid #E0E0E0", fontSize: "14px" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1E50C8";
                      e.target.style.boxShadow = "0 0 0 3px rgba(30,80,200,0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E0E0E0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    placeholder="Votre message..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    className="w-full px-4 py-2.5 rounded-xl text-gray-800 placeholder:text-gray-300 focus:outline-none transition-all duration-200 resize-none"
                    style={{ border: "1.5px solid #E0E0E0", fontSize: "14px" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1E50C8";
                      e.target.style.boxShadow = "0 0 0 3px rgba(30,80,200,0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E0E0E0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-base inline-flex items-center justify-center gap-3 transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #43C85A, #2EA84A)" }}
                >
                  <Send className="w-4 h-4" />
                  Envoyer ma demande →
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;