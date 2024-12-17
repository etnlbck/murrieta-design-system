import type { Meta, StoryObj } from "@storybook/react";
import OffRoadIcon, {NLLogo,
  BriefcaseIcon, ChartIcon,
  ClipboardIcon, CodeIcon, HandshakeIcon,
  GraffitiIcon, PaintingIcon, CityIcon,
  WarehouseIcon, CarBuildingIcon, BuildingIcon,
  BootIcon, BackpackIcon, CampfireIcon, CompassIcon } from "@murrieta/ui/foundation/icons";

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
  render: ()=> (<OffRoadIcon size="lg"/> ),
  name: "OffRoadIcon"
};

export const NLLogoIcon: Story = {
  render: () => (<NLLogo size="xl" />),
  name: "NLLogo",
};

export const Briefcase: Story = {
  render: () => (<BriefcaseIcon />),
  name: "BriefcaseIcon",
};

export const Chart: Story = {
  render: () => <ChartIcon />,
  name: "ChartIcon",
};

export const Clipboard: Story = {
  render: () => <ClipboardIcon />,
  name: "ClipboardIcon",
};

export const Code: Story = {
		render: () => <CodeIcon />,
		name: "CodeIcon",
};

export const Handshake: Story = {
		render: () => <HandshakeIcon />,
		name: "HandshakeIcon",
};

export const Graffiti: Story = {
  render: () => <GraffitiIcon />,
  name: "GraffitiIcon"
}

export const Painting: Story = {
		render: () => <PaintingIcon />,
		name: "PaintingIcon",
};

export const City: Story = {
  render: () => <CityIcon />,
  name:"CityIcon"
}
export const Warehouse: Story = {
  render: () => <WarehouseIcon />,
  name:"WarehouseIcon"
}

export const CarBuilding: Story = {
  render: () => <CarBuildingIcon />,
  name:"CarBuildingIcon"
}
export const Building: Story = {
  render: () => <BuildingIcon />,
  name:"BuildingIcon"
}

export const Boot: Story = {
  render: () => <BootIcon />,
  name: "BootIcon",
};

export const Backpack: Story = {
  render: () => <BackpackIcon />,
  name:"BackpackIcon"
}

export const Campfire: Story = {
  render: () => <CampfireIcon />,
  name:"CampfireIcon",
};

export const Compass: Story = {
  render: () => <CompassIcon />,
  name:"CompassIcon"
}