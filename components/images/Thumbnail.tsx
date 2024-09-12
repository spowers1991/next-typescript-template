import React from 'react';

interface ThumbnailProps {
  image: Image;  
  width: number;
  height: number;
}

interface Image {
  originalSrc: string;
  altText: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image, width, height }) => {
  return (
    <img
      src={image.originalSrc}
      alt={image.altText}
      width={width}
      height={height}
      className="w-full object-cover"
    />
  );
};

export default Thumbnail;
