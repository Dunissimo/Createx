export const useUrl = (url: string) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
};
