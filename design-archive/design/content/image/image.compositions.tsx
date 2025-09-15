import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Image } from './image.js';

export const BasicResponsiveImage = () => {
  return (
    <PhilipGizzieTheme>
      <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', backgroundColor: 'var(--colors-surface-secondary)' }}>
        <Image
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxzb2Z0d2FybSUyMGRldmVsb3BtZW50JTIwYWJzdHJhY3R8ZW58MXwwfHxibHVlfDE3NTc4NDc0OTR8MA&ixlib=rb-4.1.0"
          alt="Code on a dark screen with the quote 'Talk is cheap. Show me the code.' by Linus Torvalds"
        />
      </div>
    </PhilipGizzieTheme>
  );
};

export const ImageGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw0fHxzb2Z0d2FybSUyMGRldmVsb3BtZW50JTIwYWJzdHJhY3R8ZW58MXwwfHxibHVlfDE3NTc4NDc0OTR8MA&ixlib=rb-4.1.0",
      alt: "Code on a laptop screen"
    },
    {
      src: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxzb2Z0d2FybSUyMGRldmVsb3BtZW50JTIwYWJzdHJhY3R8ZW58MXwwfHxibHVlfDE3NTc4NDc0OTR8MA&ixlib-rb-4.1.0",
      alt: "Abstract 3D rendering of colorful objects"
    },
    {
      src: "https://images.unsplash.com/photo-1497409988347-cbfaac2f0b12?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxzb2Z0d2FybSUyMGRldmVsb3BtZW50JTIwYWJzdHJhY3R8ZW58MXwwfHxibHVlfDE3NTc4NDc0OTR8MA&ixlib-rb-4.1.0",
      alt: "Business plan on a whiteboard"
    },
    {
      src: "https://images.unsplash.com/photo-1613203713329-b2e39e14c266?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxMHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudCUyMGFic3RyYWN0fGVufDF8MHx8Ymx1ZXwxNzU3ODQ3NDk0fDA&ixlib=rb-4.1.0",
      alt: "Coffee and coding setup with a laptop"
    }
  ];

  return (
    <PhilipGizzieTheme>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', padding: '24px' }}>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </PhilipGizzieTheme>
  );
};