/** @type { import('@storybook/react-vite').StorybookConfig } */

module.exports = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/react-vite",

  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  // features: {
  //   storyStoreV7: true
  // },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }

    return config
  }
}