import type { Meta, StoryObj } from "@storybook/react";
import OffRoadIcon from "@murrieta/ui/foundation/icons";

const meta: Meta<typeof OffRoadIcon> = {
  component: OffRoadIcon,
};

export default meta;

type Story = StoryObj<typeof OffRoadIcon>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: ()=> (<OffRoadIcon /> ),
  name: "OffRoadIcon"
};
