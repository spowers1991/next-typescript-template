import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  size: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

const Heading = ({ children, size, className = '' }: HeadingProps) => {
  switch (size) {
    case 'h1':
      return (
        <h1
          className={`text-[#555] text-2xl sm:text-2xl md:text-2xl xl:text-4xl uppercase font-bold z-20 mb-[2.5rem] md:mb-[3.5rem] leading-[1.1] md:leading-[1] tracking-[-0.25px] [&_u]:text-[#434bed] [&_u]:underline ${className}`}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`text-[#555] text-3xl sm:text-4xl md:text-5xl xl:text-6xl uppercase font-bold z-20 mb-[2.5rem] md:mb-[3.5rem] leading-[1.1] md:leading-[1] tracking-[-0.25px] [&_u]:text-[#434bed] [&_u]:underline ${className}`}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`text-[#555] text-xl sm:text-xl md:text-xl uppercase font-bold z-20 leading-[1.1] md:leading-[1] [&_u]:text-[#434bed] [&_u]:underline tracking-[-0.25px] ${className}`}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={`text-[#555] text-sm sm:text-sm md:text-xl uppercase font-bold z-20 leading-[1.1] md:leading-[1] [&_u]:text-[#434bed] [&_u]:underline tracking-[-0.15px] ${className}`}
        >
          {children}
        </h4>
      );
    default:
      return null;
  }
};

export default Heading;
