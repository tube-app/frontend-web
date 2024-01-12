import type { StorybookConfig } from "@storybook/nextjs"

export default {
  stories: [
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "msw-storybook-addon",
    "storybook-addon-module-mock",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    experimentalNextRSC: true,
  },
  docs: {
    autodocs: true,
  },
} satisfies StorybookConfig
