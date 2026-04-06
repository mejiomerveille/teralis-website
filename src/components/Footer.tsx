const Footer = () => (
  <footer className="bg-foreground py-12 px-4">
    <div className="container mx-auto text-center">
      <span className="text-2xl font-heading font-bold text-primary-foreground">Teralis</span>
      <p className="text-primary-foreground/50 text-sm mt-2">
        par Laboratoire Glentera
      </p>
      <div className="flex justify-center gap-6 mt-6 text-sm text-primary-foreground/40">
        <a href="#hero" className="hover:text-primary-foreground/70 transition-colors">Accueil</a>
        <a href="#produits" className="hover:text-primary-foreground/70 transition-colors">Produits</a>
        <a href="#b2b" className="hover:text-primary-foreground/70 transition-colors">Partenaires</a>
        <a href="#contact" className="hover:text-primary-foreground/70 transition-colors">Contact</a>
      </div>
      <p className="text-primary-foreground/30 text-xs mt-8">
        © {new Date().getFullYear()} Teralis — Glentera. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
