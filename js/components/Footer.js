function Footer() {
  try {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer 
        className="py-8 px-4 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-300"
        data-name="footer"
      >
        <div className="max-w-4xl mx-auto" data-name="footer-container">
          <p data-name="copyright">
            &copy; {currentYear} Model Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
    return null;
  }
}
