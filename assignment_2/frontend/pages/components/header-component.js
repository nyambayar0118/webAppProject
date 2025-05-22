import { getCartCount } from "./api.js";

export class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["sticky"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "sticky" && oldValue !== newValue) {
      this.render();
    }
  }

  updateCartCount(newCount) {
    const counterElement = this.shadowRoot.querySelector(".counter");
    if (counterElement) {
      counterElement.textContent = newCount;
    }
  }

  async connectedCallback() {
    await this.render();
  }

  async render() {
    const isSticky = this.getAttribute("sticky") === "true";
    const stickyStyle = isSticky ? `position: sticky; top: 0; z-index: 100;` : "";
    try {
      const cartCount = await getCartCount();

      this.shadowRoot.innerHTML = `
      <style>
      svg {
    width: 1.7rem;
    height: 1.7rem;
}
      .logo {
    max-height: 2rem;
}
    .search-bar-wrapper {
    border: 2px solid var(--main-color-3);
    border-radius: 24px;
    max-height: 1.7rem;
    justify-self: center;
    align-self: center;
    overflow: hidden;
    }
    .search-bar-wrapper button {
        padding: 0.3rem;
        margin: 0;
        border: none;
        height: 100%;
        transition: background-color 0.3s;
    }

    .search-bar-wrapper input {
        padding: 0.5rem;
        height: 100%;
        margin: 0;
        border: none;
        max-height: 100%;
        font-weight: 600;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.1rem;

    }
        .main-text {
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.1rem;
    text-decoration: none;
    text-align: center;
    color: white;
    transition: color 0.3s;
}

    .main-text:hover {
        color: var(--text-color-light-darken);
    }
        .category-wrapper>a {
    padding: 0 1rem;
    border-left: 1px solid var(--main-color-1);
    border-right: 1px solid var(--main-color-1);
}

.basket {
    display: flex;
    position: relative;
    }

    .basket>svg {
        background-color: var(--main-color-1);
        padding: 0.2rem;
        border-radius: 50%;
        margin: 0 0.2rem;
    }

    .basket>p {
        position: absolute;
        background-color: red;
        border-radius: 50%;
        width: 1rem;
        color: white;
        font-weight: 600;
        font-size: 0.8rem;
        top: -20px;
        right: -2px;
        text-align: center;
        padding: 0.1rem;
    }
        .hover-darken {
            
        transition: background-color 0.3s;
        }
        .hover-darken:hover {
            background-color: var(--main-color-1-darken);
        }
            .button-text {
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.1rem;
    text-decoration: none;
    text-align: center;
    color: var(--main-color-4);
}

.header-button {
    background-color: var(--main-color-1);
    padding: 0.5rem;
    border-radius: 12px;
    margin: 0.2rem 0.5rem;
}
header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    background-color: var(--main-color-4);
    padding: 0.5rem 0;

    & a {
        max-height: 100%;
    }
}

header>div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
}

/* Hide category list on small screens */
@media (max-width: 1000px), (max-width: 1024px) and (orientation: landscape) {
  .category-wrapper {
    display: none !important;
  }
  header {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  header > div {
    justify-content: center;
    flex-wrap: wrap;
  }
  .search-bar-wrapper {
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0;
    max-width: 100%;
    box-sizing: border-box;
    min-width: 0;
    display: flex;
    align-items: center; 
  }
  .search-bar-wrapper input {
    flex: 1 1 0;
    min-width: 0;
    box-sizing: border-box;
    width: auto;
  }
  .search-bar-wrapper button {
    flex: 0 0 48px;
    min-width: 40px;
    box-sizing: border-box;
    width: auto; /* Override previous width */
    height: 100%;
  }
}
      </style>
      <header style="${stickyStyle}">
        <div>
            <a href="index.html">
                <img class="logo" src="../pictures/site elements/logo2.webp" alt="logo">
            </a>
        </div>

        <div class="search-bar-wrapper">
            <input type="text" placeholder="Бүтээгдэхүүн хайх">
            <button>🔍</button>
        </div>

        <div class="category-wrapper">
            <a class="main-text" href="#">Цахилгаан бараа</a>
            <a class="main-text" href="#">Хувцас</a>
            <a class="main-text" href="#">Хүүхэд</a>
            <a class="main-text" href="#">Гоёлын чимэглэл</a>
            <a class="main-text" href="#">Гоо сайхан</a>
            <a class="main-text" href="#">Бусад</a>
        </div>

        <div>
            <a class="basket" href="#">
                <svg class = "hover-darken" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-35.27 -35.27 423.27 423.27" xml:space="preserve" stroke="#000000" stroke-width="9.876328">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <g>
                                    <path
                                        d="M245.879,1.526c-5.6-2.8-12-1.6-16.8,2.4s-6.8,10-5.2,16c4,16.4,5.6,33.6,4.4,51.6c-5.2,84-72.8,151.2-156.8,156.4 c-17.2,1.2-34.4-0.4-51.6-4c-6-1.6-12,0.4-16,5.6c-4,4.8-4.8,11.2-2.4,16.8c30.4,65.2,95.2,106.4,167.2,106.4c3.2,0,6.8,0,10-0.4 c92.4-4.8,168.4-81.2,173.6-173.6C356.679,103.126,315.079,33.526,245.879,1.526z M336.279,177.926c-4.4,84.4-74,154-158.4,158.4 c-69.2,3.6-132.8-34.4-161.6-96.8c18.8,4.4,37.6,5.6,56.4,4.4c92-6,166-79.6,172-171.6c1.2-19.6-0.4-38.4-4.8-56.4 C302.279,45.126,340.279,108.726,336.279,177.926z">
                                    </path>
                                    <path
                                        d="M242.679,277.526c-3.6,2.4-4.4,7.6-2,11.2c1.6,2.4,4,3.6,6.8,3.6c1.6,0,3.2-0.4,4.4-1.2c30.8-21.6,52.8-52.8,60.8-89.2 c0.8-4.4-1.6-8.8-6-9.6c-4.4-0.8-8.4,1.6-9.6,6C289.879,230.726,270.679,258.726,242.679,277.526z">
                                    </path>
                                    <path
                                        d="M213.479,292.726c-2.4,0.8-4.4,1.6-7.2,2.4c-4.4,1.2-6.8,5.6-5.6,10c1.2,3.6,4.4,6,7.6,6c0.8,0,1.6,0,2.4-0.4 c3.6-0.8,6-2,8.8-3.2c4-1.6,6-6.4,4.4-10.4C222.279,292.726,217.479,290.726,213.479,292.726z">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            <a class="basket" href="#">
                <svg class="hover-darken basket-button" width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M20 10H18M20 10H21M4 10H3M4 10H6M6 10H18M6 10L9 4M18 10L15 4M9 13V16M12 13V16M15 13V16"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="counter">${cartCount}</p>
            </a>
            <a class="hover-darken header-button button-text" href="./login.html">
                Log in
            </a>
            <a class="hover-darken header-button button-text" href="./signup.html">
                Sign up
            </a>
        </div>

    </header>
        `;

      const basketButton = this.shadowRoot.querySelector(".basket-button");
      basketButton.addEventListener("click", (e) => {
        e.preventDefault();
        const cartModal = document.querySelector("layout-wrapper").shadowRoot.querySelector("cart-modal");
    
        if (cartModal) {
          const isVisible = cartModal.style.display === "block";
          cartModal.style.display = isVisible ? "none" : "block";
        }
      });

      window.addEventListener("product-save-toggled", async () => {
        const newCartCount = await getCartCount();
        this.updateCartCount(newCartCount);
      });
    } catch (error) {
      console.error("Error in HeaderComponent:", error);
    }
  }
}

customElements.define("header-component", HeaderComponent);
