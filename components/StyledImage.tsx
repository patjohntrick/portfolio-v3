type StyledImageProps = {
  imagePath: string;
  imageAlt: string;
};

export const StyledImage = ({ imagePath, imageAlt }: StyledImageProps) => {
  return (
    <img
      src={imagePath}
      alt={imageAlt}
      className="w-full h-full object-cover rounded-xl"
    />
  );
};
