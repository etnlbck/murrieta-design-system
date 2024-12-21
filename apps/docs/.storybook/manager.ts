import {addons} from '@storybook/manager-api'
import {themes} from '@storybook/theming'
import {create} from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Murrieta Design System',
    brandUrl: 'https://murrieta.natelubeck.com/',
    brandImage: './MurrietaDesignSystem_Logo.svg',
    colorPrimary: "#4a5455",
    colorSecondary: "#798a8b",
    appBg: "#f0f0f0",
    appBorderColor: "#ccc",
    appBorderRadius: 0,
    textColor: "#333",
    barTextColor: "#666",
    barSelectedColor: "pink",
  })
})