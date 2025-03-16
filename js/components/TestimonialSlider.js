function TestimonialSlider({ testimonials }) {
  try {
    const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
    
    // Default testimonials if none provided
    const defaultTestimonials = [
      {
        text: "Working with Alexandra was an absolute pleasure. Her professionalism and ability to embody different concepts made our campaign a huge success.",
        author: "Jane Smith",
        position: "Creative Director, Fashion Brand"
      },
      {
        text: "One of the most versatile models I've had the pleasure to photograph. Alexandra brings energy and creativity to every shoot.",
        author: "Michael Johnson",
        position: "Fashion Photographer"
      },
      {
        text: "Alexandra's unique look and personality perfectly captured the essence of our brand. She's our go-to model for all major campaigns.",
        author: "Emily Williams",
        position: "Marketing Director, Luxury Brand"
      }
    ];
    
    const testimonialList = testimonials || defaultTestimonials;
    
    // Auto testimonial change
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonialList.length);
      }, 7000);
      
      return () => clearInterval(interval);
    }, [testimonialList.length]);
    
    return (
      <AnimatedSection 
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900" 
        animation="fade-in"
        data-name="testimonials-section"
      >
        <div className="max-w-4xl mx-auto" data-name="testimonials-container">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12" 
            data-name="testimonials-heading"
          >
            Client Testimonials
          </h2>
          
          <div className="relative" data-name="testimonials-slider">
            {testimonialList.map((testimonial, index) => (
              <div 
                key={index}
                className={`testimonial-card bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 absolute top-0 translate-y-8'
                }`}
                style={{ display: index === currentTestimonial ? 'block' : 'none' }}
                data-name={`testimonial-${index}`}
              >
                <div className="mb-6 text-gray-600 dark:text-gray-300" data-name={`testimonial-text-${index}`}>
                  <i className="fas fa-quote-left text-3xl opacity-20 mr-2" data-name={`quote-icon-${index}`}></i>
                  <p className="text-lg italic">{testimonial.text}</p>
                </div>
                
                <div className="flex items-center" data-name={`testimonial-author-${index}`}>
                  <div>
                    <p className="font-bold" data-name={`author-name-${index}`}>{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400" data-name={`author-position-${index}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-8 gap-2" data-name="testimonial-indicators">
              {testimonialList.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  data-name={`testimonial-indicator-${index}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  } catch (error) {
    console.error('TestimonialSlider component error:', error);
    reportError(error);
    return null;
  }
}
