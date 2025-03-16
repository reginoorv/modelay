function useIntersectionObserver(options = {}) {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        ...options
      });

      const currentElement = elementRef.current;
      
      if (currentElement) {
        observer.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [options.threshold, options.rootMargin]);

    return { elementRef, isVisible };
  } catch (error) {
    console.error('Animation utility error:', error);
    reportError(error);
    return { elementRef: React.useRef(null), isVisible: true };
  }
}

function AnimatedSection({ children, className = '', animation = 'fade-in', threshold = 0.1 }) {
  try {
    const { elementRef, isVisible } = useIntersectionObserver({ threshold });
    
    return (
      <div 
        ref={elementRef} 
        className={`${className} ${isVisible ? animation : 'opacity-0'}`}
        data-name="animated-section"
      >
        {children}
      </div>
    );
  } catch (error) {
    console.error('AnimatedSection error:', error);
    reportError(error);
    return <div className={className} data-name="animated-section-fallback">{children}</div>;
  }
}
