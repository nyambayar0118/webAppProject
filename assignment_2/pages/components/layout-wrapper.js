export class LayoutWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.shadowRoot.innerHTML = `
        <header-component></header-component>
        <slot></slot>
      `;
  }
}

customElements.define("layout-wrapper", LayoutWrapper);
