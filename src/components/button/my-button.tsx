import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  /**
   * The size of the button
   */
  @Prop() size?: 'big' | 'regular' | 'small' = 'regular';

  /**
   * The width of the button
   */
  @Prop() width?: 'wide' | 'medium' | 'narrow' = 'medium';

  /**
   * the background color when type is "contained", the foreground color when type is "outlined"
   */
  @Prop() color?: 'primary' | 'secondary' = 'primary';

  /**
   * the type of the button
   */
  @Prop() type?: 'contained' | 'outlined' = 'contained';

  /**
   * indicating disabled button
   */
  @Prop() disabled?: boolean;

  render() {
    const className = [`type-${this.type}`, `color-${this.color}`, `size-${this.size}`, `width-${this.width}`].join(' ');
    return (
      <button disabled={this.disabled} class={className}>
        <slot />
      </button>
    );
  }
}
