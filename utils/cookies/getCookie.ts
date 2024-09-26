export const getCookie = (name: string): string | null => {
    const cookieValue = document.cookie.split('; ').reduce((r, c) => {
      const [key, ...v] = c.split('=');
      return key === name ? decodeURIComponent(v.join('=')) : r;
    }, '');
    return cookieValue || null;
  };
  