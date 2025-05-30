export class Category extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    async connectedCallback() {
      this.shadowRoot.innerHTML = `
      <style>
        
        .category-group {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
.category-group article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 200px;
}
.category-group div {
    background-color: var(--main-color-1);
    border-radius: 75px;
    border: 0px solid var(--main-color-4);
    width: 80%;
    height: 75%;
    fill: var(--main-color-4);
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .category-group div>svg {
        width: 60%;
        height: 60%;
    }

    .category-group div:hover {
        border: 4px solid var(--main-color-4);
        transition: border 0.3s;
    }

.category-group p {
    height: 25%;
    font-weight: bold;
    letter-spacing: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--main-text-color);
    font-size: 1.2rem;
}

      
      
      
      </style>
          <div class="category-group">
                <article>
                    <div>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect x="0" fill="none" width="24" height="24"></rect>
                                <g>
                                    <path
                                        d="M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zM9 11h6c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p>Бүх бараа</p>
                </article>
                <article>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                            width="70" height="70">
                            <path
                                d="M2,15c0,.55,.45,1,1,1H11c.55,0,1,.45,1,1s-.45,1-1,1H3c-1.65,0-3-1.35-3-3,0-1.3,.84-2.4,2-2.82V5C2,2.24,4.24,0,7,0h10c2.76,0,5,2.24,5,5v1c0,.55-.45,1-1,1s-1-.45-1-1v-1c0-1.65-1.35-3-3-3H7c-1.65,0-3,1.35-3,3v7h4.5c.27,0,.52,.11,.71,.29l.71,.71h1.09c.55,0,1,.45,1,1s-.45,1-1,1h-1.5c-.27,0-.52-.11-.71-.29l-.71-.71H3c-.55,0-1,.45-1,1Zm22-2v7c0,2.21-1.79,4-4,4h-2c-2.21,0-4-1.79-4-4v-7c0-2.21,1.79-4,4-4h2c2.21,0,4,1.79,4,4Zm-2,0c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v7c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-7Z" />
                        </svg>
                    </div>
                    <p>Цахилгаан бараа</p>
                </article>
                <article>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="m20.814,1.195c-1.477-.793-3.032-1.195-4.624-1.195H7.81c-1.592,0-3.148.402-4.625,1.195C1.221,2.25,0,4.335,0,6.636v11.364c0,1.654,1.346,3,3,3h1.424c.774,1.763,2.531,3,4.576,3h6c2.045,0,3.802-1.237,4.576-3h1.424c1.654,0,3-1.346,3-3V6.636c0-2.301-1.221-4.386-3.186-5.44Zm-5.921.805c-.456,1.194-1.588,2-2.894,2s-2.438-.806-2.893-2h5.787Zm7.106,16c0,.551-.448,1-1,1h-1V7c0-.552-.447-1-1-1s-1,.448-1,1v12c0,1.654-1.346,3-3,3h-6c-1.654,0-3-1.346-3-3V7c0-.552-.448-1-1-1s-1,.448-1,1v12h-1c-.551,0-1-.449-1-1V6.636c0-1.563.817-2.973,2.131-3.679.937-.503,1.908-.801,2.897-.907.544,2.326,2.588,3.95,4.972,3.95s4.427-1.624,4.972-3.95c.988.106,1.96.404,2.898.907,1.314.706,2.131,2.116,2.131,3.679v11.364Z" />
                        </svg>
                    </div>
                    <p>Хувцас</p>
                </article>
                <article>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                            width="70" height="70">
                            <path
                                d="M15,0a1.959,1.959,0,0,0-2,2V9H5.468L4.229,7.512C3.48,6.459.292,4.933,0,7A1,1,0,0,0,1,8a2.2,2.2,0,0,1,1.692.792L4,10.362V11a5.006,5.006,0,0,0,5,5h2.865l-2.6,3.12a2.5,2.5,0,1,0,1.5,1.323L14,16.562l3.234,3.881a2.5,2.5,0,1,0,1.5-1.323L16.135,16H19a5.006,5.006,0,0,0,5-5V10C24,.114,15.09,0,15,0Zm6.961,9H15l0-7A7.083,7.083,0,0,1,21.961,9ZM19,14H9a3,3,0,0,1-3-3H22A3,3,0,0,1,19,14Z" />
                        </svg>
                    </div>
                    <p>Хүүхэд</p>
                </article>
                <article>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                            width="70" height="70">
                            <path
                                d="M23.147,9.471,22.36,8.4A5.885,5.885,0,0,0,17.632,6H6.383A5.892,5.892,0,0,0,1.721,8.309L.9,9.383a4.418,4.418,0,0,0,.548,5.937l7.99,7.707a3.82,3.82,0,0,0,2.55.969,3.9,3.9,0,0,0,2.6-1l7.936-7.633A4.39,4.39,0,0,0,23.147,9.471Zm-2.4.107.787,1.074a2.388,2.388,0,0,1,.208.348H16.951a6.616,6.616,0,0,0-.372-1.4L15.939,8h1.693A3.878,3.878,0,0,1,20.747,9.578ZM11.99,20.088l-2.769-6.27A4.642,4.642,0,0,1,8.995,13h5.952a4.354,4.354,0,0,1-.176.647ZM9.1,11a4.652,4.652,0,0,1,.157-.529L10.241,8h3.544l.937,2.343a4.8,4.8,0,0,1,.2.657ZM3.311,9.521A3.884,3.884,0,0,1,6.383,8h1.7L7.4,9.729A6.57,6.57,0,0,0,7.033,11H2.245a2.322,2.322,0,0,1,.247-.4Zm-.5,4.333a2.374,2.374,0,0,1-.6-.854H6.983a6.874,6.874,0,0,0,.387,1.576l2.827,6.4Zm10.96,7.16L16.625,14.4a6.573,6.573,0,0,0,.344-1.4H21.8a2.5,2.5,0,0,1-.633.9Z" />
                            <path d="M12,4a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,12,4Z" />
                            <path
                                d="M16.553,3.9A1,1,0,0,0,17.9,3.447l1-2a1,1,0,1,0-1.79-.894l-1,2A1,1,0,0,0,16.553,3.9Z" />
                            <path d="M6.105,3.447A1,1,0,0,0,7.9,2.553l-1-2a1,1,0,1,0-1.79.894Z" />
                        </svg>
                    </div>
                    <p>Гоёл чимэглэл</p>
                </article>
                <article>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="70" viewBox="0 0 24 24"
                            width="70" data-name="Layer 1">
                            <path
                                d="m17 13.184v-3.184a1 1 0 0 0 -1-1v-6.586a2.412 2.412 0 0 0 -3.492-2.157l-2.622 1.31a3.4 3.4 0 0 0 -1.886 3.053v4.38a1 1 0 0 0 -1 1v3.184a3 3 0 0 0 -2 2.816v3a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-3a3 3 0 0 0 -2-2.816zm-8-.184v-2h6v2zm1-8.38a1.407 1.407 0 0 1 .781-1.264l2.619-1.31a.411.411 0 0 1 .6.368v6.586h-4zm7 14.38a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3-3v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z" />
                        </svg>
                    </div>
                    <p>Гоо сайхан</p>
                </article>
                <article>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path
                                d="M3.899,8.983c-1.784,.012-2.899,1.213-2.899,3,0,1.89,1.09,3.022,2.913,3.034,1.811-.012,2.867-1.105,2.9-3.033-.031-1.838-1.142-2.988-2.914-3Z" />
                            <path
                                d="M11.993,8.983c-1.784,.012-2.899,1.213-2.899,3,0,1.89,1.09,3.022,2.913,3.034,1.811-.012,2.867-1.105,2.9-3.033-.031-1.838-1.142-2.988-2.914-3Z" />
                            <path
                                d="M20.086,8.983c-1.784,.012-2.899,1.213-2.899,3,0,1.89,1.09,3.022,2.913,3.034,1.811-.012,2.867-1.105,2.9-3.033-.031-1.838-1.142-2.988-2.914-3Z" />
                        </svg>
                    </div>
                    <p>Бусад</p>
                </article>
            </div>
        `;
    }
  }
  
  customElements.define("category-component", Category);
  