// This script is used to prevent flash of wrong theme
// It's injected into the head of the document
export function themeScript() {
  return `
    (function() {
      try {
        // Try to get theme from localStorage first
        let theme = localStorage.getItem('app-theme');
        
        // If not in localStorage, try to get from cookie
        if (!theme) {
          const cookies = document.cookie.split('; ');
          const themeCookie = cookies.find(c => c.startsWith('app-theme='));
          if (themeCookie) {
            theme = themeCookie.split('=')[1];
          }
        }
        
        // Apply theme or use system preference
        if (theme === 'dark' || 
            (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
            (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        // If all else fails, default to light theme
        document.documentElement.classList.remove('dark');
      }
    })();
  `
}
