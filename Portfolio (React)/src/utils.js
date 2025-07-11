export const getStoredTheme = () => {
  const stored = localStorage.getItem('dark');
  return stored ? JSON.parse(stored) : window.matchMedia('(prefers-color-scheme: dark)').matches;
};