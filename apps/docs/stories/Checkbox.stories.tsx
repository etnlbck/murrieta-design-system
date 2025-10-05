import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@murrieta/ui/atoms/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Accept Terms",
    name: "terms",
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "The text displayed next to the checkbox.",
    },
    name: {
      control: { type: "text" },
      description: "The `name` attribute for the checkbox input.",
    },
    value: {
      control: { type: "text" },
      description: "The `value` attribute for the checkbox input.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Subscribe to Newsletter",
    name: "subscribe",
    value: "yes",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "I agree to the privacy policy",
    name: "privacy",
    value: "agree",
  },
};