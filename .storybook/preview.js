import { configure, setCustomElements } from '@storybook/web-components';
import customElements from './custom-elements.json';

setCustomElements(customElements);

// force full reload to not reregister web components
const req = require.context('../src', true, /\.src\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
