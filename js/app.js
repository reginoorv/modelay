function App() {
  try {
    // Model data - would typically come from an API or CMS
    const modelData = {
      name: "Alexandra Davis",
      tagline: "Fashion | Lifestyle | Creative",
      bio: "Professional model based in New York City, collaborating with top fashion brands and photographers worldwide.",
      heroImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      contactEmail: "contact@alexandradavis.com",
      location: "New York City",
      socialLinks: [
        { platform: 'instagram', url: 'https://instagram.com/alexandramodel', icon: 'fa-brands fa-instagram' },
        { platform: 'twitter', url: 'https://twitter.com/alexandramodel', icon: 'fa-brands fa-twitter' },
        { platform: 'tiktok', url: 'https://tiktok.com/@alexandramodel', icon: 'fa-brands fa-tiktok' },
        { platform: 'youtube', url: 'https://youtube.com/alexandramodel', icon: 'fa-brands fa-youtube' },
        { platform: 'onlyfans', url: 'https://onlyfans.com/alexandramodel', icon: 'fa-solid fa-heart' }
      ],
      portfolioImages: [
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
        },
        {
          url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
          caption: "Luxury Brand Campaign"
        }
      ],
      testimonials: [
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
      ]
    };

    // State to control which sections are visible
    const [showBio, setShowBio] = React.useState(true);

    // Scroll to contact function
    const scrollToContact = () => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div className="model-portfolio" data-name="model-portfolio-app">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Hero Section */}
        <HeroSection 
          modelName={modelData.name} 
          tagline={modelData.tagline} 
          imageUrl={modelData.heroImage}
        />
        
        {/* Bio Section - Optional */}
        <BioSection 
          bio={modelData.bio} 
          location={modelData.location}
          isVisible={showBio}
        />
        
        {/* Social Media Links */}
        <SocialMediaLinks socialLinks={modelData.socialLinks} />
        
        {/* Gallery Section */}
        <Gallery images={modelData.portfolioImages} />
        
        {/* Testimonials */}
        <TestimonialSlider testimonials={modelData.testimonials} />
        
        {/* Contact CTA */}
        <div id="contact-section" data-name="contact-section-anchor">
          <ContactCTA 
            contactText="Want to work together?" 
            buttonText="Contact Me"
            contactLink={`mailto:${modelData.contactEmail}`}
          />
        </div>
        
        {/* Floating Contact Button */}
        <button 
          onClick={scrollToContact}
          className="floating-contact fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center"
          aria-label="Contact me"
          data-name="floating-contact-button"
        >
          <i className="fas fa-envelope text-xl" data-name="contact-icon"></i>
        </button>
        
        {/* Footer */}
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
    return (
      <div className="error-state p-8 text-center" data-name="error-state">
        <h1 className="text-2xl mb-4">Something went wrong</h1>
        <p>Please try refreshing the page</p>
      </div>
    );
  }
}

// Initialize the app
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
} catch (error) {
  console.error('Application initialization error:', error);
  reportError(error);
  document.getElementById('root').innerHTML = `
    <div class="p-8 text-center">
      <h1 class="text-2xl mb-4">Failed to load application</h1>
      <p>Please try refreshing the page</p>
    </div>
  `;
}
