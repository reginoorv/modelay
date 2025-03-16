function useTheme() {
  try {
    const [theme, setTheme] = React.useState(() => {
      // Check if user has a saved preference
      const savedTheme = localStorage.getItem('theme');
      
      // Check if user prefers dark mode
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Return saved preference or system preference
      return savedTheme || (prefersDarkMode ? 'dark' : 'light');
    });

    React.useEffect(() => {
      // Update body class when theme changes
      document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
      
      // Save preference to localStorage
      localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return { theme, toggleTheme };
  } catch (error) {
    console.error('Theme utility error:', error);
    reportError(error);
    return { theme: 'light', toggleTheme: () => {} };
  }
}
