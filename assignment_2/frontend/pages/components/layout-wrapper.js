export class LayoutWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.shadowRoot.innerHTML = `
    
    <header-component sticky="true"></header-component>
        <slot></slot>
        <cart-modal style="display: none;"></cart-modal>
        <footer-component></footer-component>
      `;
  }
}

customElements.define("layout-wrapper", LayoutWrapper);
