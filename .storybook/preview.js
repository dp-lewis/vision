import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom theme configurations */
import { afrTheme, smhTheme } from '../src/themes';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  `;
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },

  decorators: [withThemeFromJSXProvider({
    themes: {
      afr: afrTheme,
      smh: smhTheme,
    },
    defaultTheme: 'smh',
    Provider: ThemeProvider,
    GlobalStyles,
    })]
};



export default preview;