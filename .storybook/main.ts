import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: [
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    experimentalNextRSC: true,
  },
}
export default config
