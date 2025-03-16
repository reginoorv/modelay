function BioSection({ bio, location, isVisible = true }) {
  try {
    if (!isVisible) return null;
    
    return (
      <AnimatedSection 
        className="py-16 px-4 max-w-3xl mx-auto text-center" 
        animation="fade-in"
        data-name="bio-section"
      >
        <div className="mb-8" data-name="bio-text">
          <p className="text-xl leading-relaxed">
            {bio || `Professional model based in ${location || 'New York City'}, collaborating with top fashion brands and photographers.`}
          </p>
        </div>
      </AnimatedSection>
    );
  } catch (error) {
    console.error('BioSection component error:', error);
    reportError(error);
    return null;
  }
}
