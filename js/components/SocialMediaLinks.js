function SocialMediaLinks({ socialLinks }) {
  try {
    // Default social links if none provided
    const defaultLinks = [
      { platform: 'instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram' },
      { platform: 'twitter', url: 'https://twitter.com', icon: 'fa-brands fa-twitter' },
      { platform: 'tiktok', url: 'https://tiktok.com', icon: 'fa-brands fa-tiktok' },
      { platform: 'youtube', url: 'https://youtube.com', icon: 'fa-brands fa-youtube' },
      { platform: 'onlyfans', url: 'https://onlyfans.com', icon: 'fa-solid fa-heart' },
    ];
    
    const links = socialLinks || defaultLinks;
    
    return (
      <AnimatedSection 
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900" 
        animation="fade-in"
        data-name="social-links-section"
      >
        <div className="max-w-4xl mx-auto" data-name="social-links-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-name="social-links-heading">
            Connect With Me
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" data-name="social-links-grid">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`social-icon ${link.platform} flex flex-col items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl text-gray-800 dark:text-gray-200`}
                data-name={`social-link-${link.platform}`}
              >
                <i className={`${link.icon} text-4xl mb-3`} data-name={`social-icon-${link.platform}`}></i>
                <span className="text-sm font-medium capitalize" data-name={`social-name-${link.platform}`}>
                  {link.platform}
                </span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  } catch (error) {
    console.error('SocialMediaLinks component error:', error);
    reportError(error);
    return null;
  }
}
