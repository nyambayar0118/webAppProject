export class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
      this.shadowRoot.innerHTML = `
      <style>

      </style>
         <footer>
    <nav>
        <section>
                <h3>Холбоо барих</h3>
                <ul>
                    <li><a href="tel:+976 95573778">Утас: (+976) 95573778</a></li>
                    <li><a href="mailto: nyambayar2014@gmail.com">И-мэйл: nyambayar2014@gmail.com</a></li>
                    <li><a href="facebook.com">Facebook</a> </li>
                </ul>
            </section>

            <section>
                <h3>Хаяг</h3>
                <ul>
                    <li>Улаанбаатар хот, Сүхбаатар дүүрэг, Оюутны гудамж 14/3, МУИС-ийн 7,8-р байр</li>
                </ul>
            </section>

    </nav>
</footer>
        `;

    }
  }

customElements.define("footer-component", FooterComponent);
