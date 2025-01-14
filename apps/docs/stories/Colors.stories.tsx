import React from 'react';
import '@murrieta/ui/foundation/variables.css'; // Ensure CSS variables are loaded

export default {
  title: 'Design System/Foundation/Color Palette',
  parameters: {
    layout: 'fullscreen',
  },
};

const colors = [
  { name: '--color-primary', label: 'Primary' },
  { name: '--color-secondary', label: 'Secondary' },
  { name: '--color-success', label: 'Success' },
  { name: '--color-danger', label: 'Danger' },
  { name: '--color-warning', label: 'Warning' },
  { name: '--color-info', label: 'Info' },
  { name: '--color-light', label: 'Light' },
  { name: '--color-dark', label: 'Dark' },
];

export const ColorPalette = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Color Palette</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colors.map((color) => (
        <div
          key={color.name}
          style={{
            width: '150px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: `var(${color.name})`,
              height: '100px',
            }}
          />
          <div style={{ padding: '0.5rem' }}>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>{color.label}</p>
            <p style={{ margin: '0', fontSize: '0.875rem', color: '#555' }}>{color.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);