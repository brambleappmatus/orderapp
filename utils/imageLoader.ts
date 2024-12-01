export const handleImageError = (setError: (value: boolean) => void) => {
  setError(true);
};

export const imageLoader = ({ src }: { src: string }) => {
  return src;
};