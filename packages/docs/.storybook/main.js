/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.mdx", "../src/docs/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/react",
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }

    return config;
  }
};
export default config;