import React from 'react';
import type {Meta, StoryFn} from '@storybook/react';
import './ColorPalette.css';
import cssVariables from "@murrieta/ui/foundation/colors"
import "@murrieta/ui/foundation/variables.css";

// const cssVariables = {
//   light: `
//     --primary-bg: #BCC5C5;
//     --secondary-bg: #798A8B;
//     --primary-text: #4A5455;
//     --secondary-text: #798A8B;
//     --link-text: #3A75BA;
//     --highlight: #F1C84B;
//     --warning-error: #E22029;
//     --success: #7CC258;
//     --ag-yellow: #F1C84B;
//     --ag-magenta: #BC4377;
//     --ag-red: #E22029;
//     --ag-blue: #3A75BA;
//     --ag-green: #7CC258;
//   `,
//   dark: `
//     --primary-bg: #798A8B;
//     --secondary-bg: #DEE2E2;
//     --primary-text: #DEE2E2;
//     --secondary-text: #BCC5C5;
//     --link-text: #4CA8D6;
//     --highlight: #FAD84C;
//     --warning-error: #E7807E;
//     --success: #B4D99B;
//     --ag-yellow: #FAD84C;
//     --ag-magenta: #F1A7B4;
//     --ag-red: #E7807E;
//     --ag-blue: #4CA8D6;
//     --ag-green: #B4D99B;
//   `,
// };

// Parse CSS variables and group by theme
const parseCSSVariables = (css: string) => {
  return css
    .split(';')
    .filter((line) => line.trim())
    .map((line) => {
      const [key, value] = line.split(':');
      return { name: key.trim(), value: value.trim() };
    });
};

const ColorPalette = ({ theme }: { theme: 'light' | 'dark' }) => {
  const colors = parseCSSVariables(cssVariables[theme]);

  return (
    <div>
      <h3>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h3>
      <div className="color-grid">
        {colors.map(({ name, value }) => (
          <div className="color-swatch" key={name}>
            <div
              className="color-block"
              style={{ backgroundColor: value }}
              title={value}
            />
            <p className="color-name">{name}</p>
            <p className="color-value">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Design System/Foundation/Colors',
  component: ColorPalette,
} satisfies Meta<typeof ColorPalette>;

export const LightMode: StoryFn = () => <ColorPalette theme="light" />;
LightMode.storyName = 'Light Mode';

export const DarkMode: StoryFn = () => <ColorPalette theme="dark" />;
DarkMode.storyName = 'Dark Mode';