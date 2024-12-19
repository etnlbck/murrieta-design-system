
import type React from 'react';
import { useEffect } from 'react';

export type FontImporterProps = {
  fontUrl: string;
  fontFamily: string;
  target?: string; // Defaults to applying globally
}

const FontImporter: React.FC<FontImporterProps> = ({ fontUrl, fontFamily, target = 'body' }: FontImporterProps) => {
  useEffect(() => {
    // Inject the @font-face rule dynamically
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @font-face {
        font-family: '${fontFamily}';
        src: url('${fontUrl}') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
      ${target} {
        font-family: '${fontFamily}', sans-serif;
      }
    `;

    document.head.appendChild(styleElement);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [fontUrl, fontFamily, target]);

  return null; // This component doesn't render anything
};

export default FontImporter;