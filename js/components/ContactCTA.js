function ContactCTA({ contactText, buttonText, contactLink }) {
  try {
    return (
      <AnimatedSection 
        className="py-20 px-4" 
        animation="fade-in"
        data-name="contact-cta-section"
      >
        <div 
          className="max-w-4xl mx-auto text-center p-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
          data-name="contact-cta-container"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6" 
            data-name="contact-cta-heading"
          >
            {contactText || "Want to work together?"}
          </h2>
          
          <a 
            href={contactLink || "mailto:contact@modelportfolio.com"} 
            className="cta-button inline-block py-4 px-8 bg-white text-indigo-600 font-bold rounded-full text-lg"
            data-name="contact-cta-button"
          >
            {buttonText || "Contact Me"}
          </a>
        </div>
      </AnimatedSection>
    );
  } catch (error) {
    console.error('ContactCTA component error:', error);
    reportError(error);
    return null;
  }
}
