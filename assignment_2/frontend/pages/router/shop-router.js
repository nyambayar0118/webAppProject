class ShopRouter extends HTMLElement {
  constructor() {
    super();
    this.routes = [];
    this.BASE_PATH = "/assignment_2/frontend/pages";
  }

  addRoute(route) {
    const paramNames = [];
    const pattern = route.path.replace(/:([^/]+)/g, (_, key) => {
      paramNames.push(key);
      return "([^/]+)";
    });

    const regex = new RegExp(`^${pattern}$`);
    this.routes.push({ ...route, regex, paramNames });
  }

  navigate(path) {
    let fullPath = path;

    if (!fullPath.startsWith(this.BASE_PATH)) {
      if (!fullPath.startsWith("/")) fullPath = "/" + fullPath;
      fullPath = this.BASE_PATH + fullPath;
    }
    history.pushState({}, "", fullPath);
    this.updateUI(fullPath);
  }

  matchRoute(path) {
    for (const route of this.routes) {
      const match = path.match(route.regex);
      if (match) {
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = match[i + 1];
        });
        return { component: route.component, attr: route.attr, params };
      }
    }
    return null;
  }

  updateUI(path) {
    let cleanPath = path;

    if (cleanPath.endsWith("index.html")) {
      cleanPath = cleanPath.replace(/index\.html$/, "");
    }

    if (cleanPath.startsWith(this.BASE_PATH)) {
      cleanPath = cleanPath.slice(this.BASE_PATH.length) || "/";
    }
    if (!cleanPath || cleanPath === "") cleanPath = "/";
    if (!cleanPath.startsWith("/")) cleanPath = "/" + cleanPath;
    if (cleanPath.length > 1 && cleanPath.endsWith("/"))
      cleanPath = cleanPath.slice(0, -1);

    console.log("Final Cleaned Path:", cleanPath);

    const matched = this.matchRoute(cleanPath);
    if (!matched) {
      document.querySelector(
        "#main-content"
      ).innerHTML = `<p>Page not found.</p>`;
      return;
    }

    const attrs = matched.attr ? `${matched.attr}` : "";
    const paramAttrs = Object.entries(matched.params)
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ");

    import(`../components/${matched.component}.js`)
      .then(() => {
        document.querySelector(
          "#main-content"
        ).innerHTML = `<${matched.component} ${attrs} ${paramAttrs}></${matched.component}>`;
      })
      .catch((err) => {
        console.error("Failed to import component:", err);
        document.querySelector(
          "#main-content"
        ).innerHTML = `<p>Component failed to load.</p>`;
      });
  }

  connectedCallback() {
    // Register routes from <shop-route> elements
    const routeElements = this.querySelectorAll("shop-route");
    routeElements.forEach((routeEl) => {
      this.addRoute({
        path: routeEl.getAttribute("path"),
        component: routeEl.getAttribute("component"),
        attr: Array.from(routeEl.attributes)
          .filter((attr) => !["path", "component"].includes(attr.name))
          .map((attr) => `${attr.name}="${attr.value}"`)
          .join(" "),
      });
    });

    window.addEventListener("popstate", () => {
      this.updateUI(document.location.pathname);
    });
    this.updateUI(document.location.pathname);
  }
}

customElements.define('shop-router', ShopRouter);