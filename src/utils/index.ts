type StencilCustomElement = CustomElementConstructor & {
  /**
   * tag associated with the component.
   * Though this property is not documentated, it is added
   * by the function proxyCustomElement, in @stencil/core/internal/client
   */
  is: string;
};

export function useCustomElement(constructor: StencilCustomElement): void {
  const componentName = constructor.name;
  if (!customElements.get(componentName)) {
    customElements.define(constructor.is, constructor);
  }
}
