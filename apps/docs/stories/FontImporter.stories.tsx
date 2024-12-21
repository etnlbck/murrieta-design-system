import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import FontImporter from '@murrieta/ui/foundation/fonts';
import type { FontImporterProps } from '@murrieta/ui/foundation/fonts'

export default {
  title: 'Design System/Utilities/FontImporter',
  component: FontImporter,
  argTypes: {
    fontUrl: {
      control: 'text',
      description: 'The URL of the custom font file.',
    },
    fontFamily: {
      control: 'text',
      description: 'The name of the font family.',
    },
    target: {
      control: 'text',
      description: 'The CSS selector where the font should be applied.',
    },
  },
} as Meta;

const Template: StoryFn = (args:FontImporterProps) => (
  <>
    <FontImporter {...args} />
    <div>
      <h1>Font Demo</h1>
      <p>
        This is a demonstration of the <strong>{args.fontFamily}</strong> font.
      </p>
      <div className="scoped-section">
        <h2>Scoped Section</h2>
        <p>
          If the <code>target</code> is set to <code>.scoped-section</code>, this section uses the custom font.
        </p>
      </div>
    </div>
  </>
);

export const GlobalFont = Template.bind({});
GlobalFont.args = {
  fontUrl: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2',
  fontFamily: 'Roboto',
  target: 'body',
};

export const ScopedFont = Template.bind({});
ScopedFont.args = {
  fontUrl: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2',
  fontFamily: 'Roboto',
  target: '.scoped-section',
};