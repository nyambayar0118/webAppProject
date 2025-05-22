export class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          width: 100%;
        }
        footer {
          background-color: var(--main-color-4, #222);
          color: white;
          padding: 2rem 0 1rem 0;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          border-top: 2px solid var(--main-color-1, #4a90e2);
          width: 100%;
        }
        nav {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        section {
          min-width: 220px;
        }
        h3 {
          color: var(--main-color-1, #4a90e2);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        a:hover {
          color: var(--main-color-1, #4a90e2);
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          color: var(--main-color-1, #4a90e2);
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }
        @media (max-width: 700px) {
          nav {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          section {
            min-width: unset;
            width: 100%;
            text-align: center;
          }
        }
      </style>
      <footer>
        <nav>
          <section>
            <h3>Холбоо барих</h3>
            <ul>
              <li><a href="tel:+97695573778">Утас: (+976) 95573778</a></li>
              <li><a href="mailto:nyambayar2014@gmail.com">И-мэйл: nyambayar2014@gmail.com</a></li>
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            </ul>
          </section>
          <section>
            <h3>Хаяг</h3>
            <ul>
              <li>Улаанбаатар хот, Сүхбаатар дүүрэг, Оюутны гудамж 14/3, МУИС-ийн 7,8-р байр</li>
            </ul>
          </section>
          <section>
            <h3>Тусламж</h3>
            <ul>
              <li><a href="#">Түгээмэл асуултууд</a></li>
              <li><a href="#">Хүргэлтийн нөхцөл</a></li>
              <li><a href="#">Буцаалт, солилцоо</a></li>
            </ul>
          </section>
        </nav>
        <div class="footer-bottom">
          &copy; ${new Date().getFullYear()} Big Bang MN. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </footer>
      `;
  }
}

customElements.define("footer-component", FooterComponent);