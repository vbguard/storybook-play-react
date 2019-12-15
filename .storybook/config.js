import { configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

configure(require.context('../src', true, /\.stories\.js$/), module);

