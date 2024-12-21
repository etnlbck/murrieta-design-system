import React from 'react';
import "@murrieta/ui/foundation/fonts.css";

export default {
  title: 'Design System/Foundation/Fonts',
  parameters: {
    layout: 'fullscreen',
  },
};

const sampleText = "The quick brown fox jumps over the lazy dog.";

const fonts = [
    {
        name: "Inter", 
        styles:[
            { label:'Regular', weight: 'normal'},
            { label: 'Italic', fontStyle:"italic"},
            { label: "Bold (400)", weight:400},
        ]
    },
    {
        name: "Bebas Neue", 
        styles:[
            { label:'Regular', weight: 'normal'},
            { label: 'Italic', fontStyle:"italic"},
            { label: "Bold (400)", weight:400},
        ]
    },
  {
    name: 'Rockwell Std',
    styles: [
      { label: 'ExtraLight (200)', weight: 200 },
      { label: 'Light (300)', weight: 300 },
      { label: 'Regular (400)', weight: 400 },
      { label: 'Bold (700)', weight: 700 },
      { label: 'Italic', weight: 'normal', fontStyle: "italic"},
    ],
  },
  {
    name: 'Urban Jungle',
    styles: [
      { weight: 'normal' }
    ],
  },
  // Add more fonts as needed
];

export const MultiFontDisplay = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Multi-Font Showcase</h1>
    {fonts.map((font) => (
      <div key={font.name} style={{ marginBottom: '2rem' }}>
        <h2 style={{fontFamily: font.name}}>{font.name}</h2>
        {font.styles.map((style) => (
          <div key={style.weight} style={{ marginBottom: '1rem' }}>
            {style.label && <h3>{style.label}</h3>}
            <p style={{ fontFamily: `${font.name}, sans-serif`, fontWeight: `${style.weight}`, fontSize: '1.25rem', fontStyle: `${style?.fontStyle}` }}>
              {sampleText}
            </p>
          </div>
        ))}
      </div>
    ))}
  </div>
);