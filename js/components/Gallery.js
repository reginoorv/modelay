function Gallery({ images }) {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    // Default images if none provided
    const defaultImages = [
      {
        url: "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        caption: "Summer Collection 2023"
      },
      {
        url: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        caption: "Fashion Week Paris"
      },
      {
        url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        caption: "Editorial for Vogue"
      }
    ];
    
    const galleryImages = images || defaultImages;
    
    // Auto slide change
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % galleryImages.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }, [galleryImages.length]);
    
    const nextSlide = () => {
      setCurrentSlide(prev => (prev + 1) % galleryImages.length);
    };
    
    const prevSlide = () => {
      setCurrentSlide(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    
    return (
      <AnimatedSection 
        className="py-16 px-4" 
        animation="fade-in"
        data-name="gallery-section"
      >
        <div className="max-w-5xl mx-auto" data-name="gallery-container">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12" 
            data-name="gallery-heading"
          >
            Portfolio Highlights
          </h2>
          
          <div className="gallery-container relative h-[500px] rounded-lg overflow-hidden shadow-xl" data-name="gallery-slider">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`gallery-slide absolute inset-0 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                data-name={`gallery-slide-${index}`}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover"
                  data-name={`gallery-image-${index}`}
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white"
                  data-name={`gallery-caption-${index}`}
                >
                  <p className="text-xl font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
              data-name="gallery-prev-button"
            >
              <i className="fas fa-chevron-left" data-name="prev-icon"></i>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Next slide"
              data-name="gallery-next-button"
            >
              <i className="fas fa-chevron-right" data-name="next-icon"></i>
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2" data-name="gallery-indicators">
              {galleryImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                  data-name={`gallery-indicator-${index}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    reportError(error);
    return null;
  }
}
