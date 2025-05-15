class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <layout-wrapper>
        <section class="products">
          <h2>Өндөр үнэлгээтэй</h2>
          <top-rated-products></top-rated-products>
        </section>
        <section class="products">
          <h2>Шинээр нэмэгдсэн</h2>
          <latest-products></latest-products>
        </section>
        <nav class="products">
          <h2>Ангилал</h2>
          <category-component></category-component>
        </nav>
      </layout-wrapper>
    `;
  }
}
customElements.define('home-page', HomePage);
