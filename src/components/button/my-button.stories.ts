import { html } from 'lit-html';

export default {
  title: 'Buttons/MyButton - CSF',
  component: 'my-button',
  argTypes: {
    type: { control: { type: 'select', options: ['contained', 'outlined'] } },
    size: { control: { type: 'select', options: ['big', 'regular', 'small'] } },
    width: { control: { type: 'select', options: ['wide', 'medium', 'narrow'] } },
    color: { control: { type: 'select', options: ['primary', 'secondary'] } },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Button = args =>
  html` <my-button disabled="${args.disabled}" type="${args.type}" size="${args.size}" width="${args.width}" color="${args.color}"> ${args.text}</my-button>`;

Button.args = {
  text: 'Test button',
  type: 'contained',
  size: 'regular',
  width: 'medium',
  color: 'primary',
  disabled: false,
};
