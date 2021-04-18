import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from '../my-button';

const setup = async (props: any) => {
  return newSpecPage({
    components: [MyButton],
    template: () => {
      return (
        <my-button
          size={props.size}
          width={props.width}
          color={props.color}
          type={props.type}
          disabled={props.disabled}
          loading={props.loading}
          loading-text={props.loadingText}
        ></my-button>
      );
    },
  });
};

describe('MyButton', () => {
  it('should build', () => {
    const component = new MyButton();
    expect(component).toBeTruthy();
  });

  it('renders correcly', async () => {
    const page = await setup({});
    expect(page.root.shadowRoot.querySelector('button')).not.toBeNull();
  });

  test('it applies the correct size', async () => {
    const page = await setup({ size: 'big' });
    expect(page.root.shadowRoot.querySelector('button.size-big')).not.toBeNull();
  });

  test('it applies the correct width', async () => {
    const page = await setup({ width: 'wide' });
    expect(page.root.shadowRoot.querySelector('button.width-wide')).not.toBeNull();
  });

  test('it applies the correct color', async () => {
    const page = await setup({ color: 'secondary' });
    expect(page.root.shadowRoot.querySelector('button.color-secondary')).not.toBeNull();
  });

  test('it applies the correct type', async () => {
    const page = await setup({ type: 'outlined' });
    expect(page.root.shadowRoot.querySelector('button.type-outlined')).not.toBeNull();
  });

  describe('when loading is set to true', () => {
    test('it should show the spinner and loading text', async () => {
      const page = await setup({ loadingText: 'loading', loading: true });
      expect(page.root.shadowRoot.querySelector('my-spinner')).not.toBeNull();
      expect(page.root.shadowRoot.querySelector('.content').innerText).toBe('loading');
    });
  });
});
