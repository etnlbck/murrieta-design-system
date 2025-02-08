import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxField from '@murrieta/ui/atoms/CheckboxField';

export default {
  title: 'Design System/Atoms/CheckboxField',
  component: CheckboxField,
} as ComponentMeta<typeof CheckboxField>;

const Template: ComponentStory<typeof CheckboxField> = (args) => <CheckboxField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox Label',
  name: 'checkbox',
  checked: true,
};