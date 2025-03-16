function HeroSection({ modelName, tagline, imageUrl }) {
  try {
    return (
      <section className="hero-container relative w-full" data-name="hero-section">
        <div className="absolute inset-0 hero-overlay z-10" data-name="hero-overlay"></div>
        
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"} 
          alt={`${modelName} - Professional Model`} 
          className="hero-image" 
          data-name="hero-image"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4" data-name="hero-content">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 model-name" data-name="model-name">
            {modelName || "Alexandra Davis"}
          </h1>
          
          <p className="text-xl md:text-2xl font-light tracking-wider model-tagline" data-name="model-tagline">
            {tagline || "Fashion | Lifestyle | Creative"}
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    reportError(error);
    return (
      <section className="min-h-screen flex items-center justify-center" data-name="hero-section-fallback">
        <h1 className="text-4xl">Model Portfolio</h1>
      </section>
    );
  }
}
