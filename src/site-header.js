import { mobileLayout } from "./mobile-layout.js";
import "./site-header.css";
import { arrowUpRight } from "./ui-icons.js";
const links = [
  ["planet", "/", "Earth"],
  ["about", "#about", "About"],
  ["resources", "#resources", "Resources"],
  ["devs", "/devs.html", "Devs"],
];
const creator = `<a class="creator-link" href="https://x.com/ethanplusai" target="_blank" rel="noopener noreferrer"><strong></strong></a>`;
export function siteHeader(current) {
  queueMicrotask(() => {
    mobileLayout(current);
    const menu = document.querySelector("#mobile-navigation"),
      toggle = document.querySelector("#menu-toggle");
    toggle.onclick = () => {
      menu.showModal();
      toggle.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.close();
    };
    menu.addEventListener("cancel", () =>
      toggle.setAttribute("aria-expanded", "false"),
    );
    menu.querySelector("button").onclick = close;
    menu.addEventListener("close", () =>
      toggle.setAttribute("aria-expanded", "false"),
    );
    menu.addEventListener("click", (e) => {
      if (e.target === menu) close();
    });
    menu.querySelector("#mobile-menu-sources").onclick = () => {
      close();
      document.querySelector("#nav-science").click();
    };
    menu
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", close));
  });
  const items = links
    .map(
      ([id, href, label]) =>
        `<a href="${href}"${id === current ? ' aria-current="page"' : ""}>${label}</a>`,
    )
    .join("");
  return `<header class="site-header global-header"><a class="wordmark" href="/" aria-label="Earth home">Terra Sync<span class="wordmark-period">.</span></a><nav class="desktop-navigation" aria-label="Primary navigation">${items}</nav><div class="header-actions"><div class="desktop-creator">${creator}</div><button id="nav-science" class="header-sources">Sources ${arrowUpRight}</button><button id="menu-toggle" aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded="false">Explore <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h14M3 13h14"/></svg></button></div></header><dialog id="mobile-navigation" aria-label="Explore Earth"><div class="mobile-menu-heading"><span>EXPLORE EARTH</span><button aria-label="Close navigation">?</button></div><nav aria-label="Earth page">${items}</nav><div class="mobile-menu-footer"><button id="mobile-menu-sources" aria-haspopup="dialog">Sources ${arrowUpRight}</button></div></dialog>`;
}
