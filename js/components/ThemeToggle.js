function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme();
    
    return (
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        data-name="theme-toggle-button"
      >
        {theme === 'light' ? (
          <i className="fas fa-moon" data-name="moon-icon"></i>
        ) : (
          <i className="fas fa-sun" data-name="sun-icon"></i>
        )}
      </button>
    );
  } catch (error) {
    console.error('ThemeToggle component error:', error);
    reportError(error);
    return null;
  }
}
