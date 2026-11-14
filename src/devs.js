import { siteHeader } from "./site-header.js";
import "./style.css";
import "./exploration.css";
import "./devs.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="world-shell exploration devs-page">
    <div class="devs-atmosphere" aria-hidden="true"><span></span><span></span></div>
    ${siteHeader("devs")}
    <div class="devs-content">
      <section class="devs-hero" aria-labelledby="devs-title">
        <div class="devs-intro">
          <span class="eyebrow">THE PEOPLE BEHIND THE PLANET</span>
          <h1 id="devs-title">Built with curiosity.<br /><em>Made to explore.</em></h1>
          <p>Earth Explorer is an independent interactive project by Ethan Rogers, bringing together planetary imagery and hands-on web graphics.</p>
          <a class="devs-home-link" href="/">Return to Earth <span aria-hidden="true">↗</span></a>
        </div>
        <aside class="devs-profile" aria-label="Project creator">
          <div class="devs-profile-top"><span>LEAD DEVELOPER</span><span class="devs-status"><i></i> INDEPENDENT PROJECT</span></div>
          <div class="devs-monogram" aria-hidden="true">ER</div>
          <h2>Ethan Rogers</h2>
          <p>Creator of Earth Explorer</p>
          <a href="https://x.com/ethanplusai" target="_blank" rel="noopener noreferrer">Follow the project <span aria-hidden="true">↗</span></a>
           <div class="devs-profile-top"><span>PROJECT MANAGER</span><span class="devs-status"><i></i> INDEPENDENT PROJECT</span></div>

          <div class="devs-monogram" aria-hidden="true">ER</div>
          <h2>Ethan Rogers</h2>
          <p>Creator of Earth Explorer</p>
          <a href="https://x.com/ethanplusai" target="_blank" rel="noopener noreferrer">Follow the project <span aria-hidden="true">↗</span></a>
        
         <div class="devs-profile-top"><span>DATA ANALYST</span><span class="devs-status"><i></i> INDEPENDENT PROJECT</span></div>
          <div class="devs-monogram" aria-hidden="true">ER</div>
          <h2>Ethan Rogers</h2>
          <p>Creator of Earth Explorer</p>
          <a href="https://x.com/ethanplusai" target="_blank" rel="noopener noreferrer">Follow the project <span aria-hidden="true">↗</span></a>
        
        </aside>
      </section>

      <section class="devs-section" aria-labelledby="devs-build-title">
        <div class="devs-section-heading">
          <span class="eyebrow">A LITTLE ABOUT THE BUILD</span>
          <h2 id="devs-build-title">Science, code, and a view from space.</h2>
        </div>
        <div class="devs-tools">
          <article class="devs-tool-card"><span class="devs-card-index">01 / RENDERING</span><h3>Three.js</h3><p>Interactive 3D scenes let you rotate the globe, change the view, and explore locations directly.</p></article>
          <article class="devs-tool-card"><span class="devs-card-index">02 / EXPERIENCE</span><h3>Web technology</h3><p>A lightweight browser experience designed to work across desktop and mobile screens.</p></article>
          <article class="devs-tool-card"><span class="devs-card-index">03 / IMAGERY</span><h3>NASA-derived data</h3><p>Planetary maps and visual references are credited in the project sources and repository.</p></article>
        </div>
      </section>

      <section class="devs-footer-card" aria-label="Project links">
        <div><span class="eyebrow">KEEP EXPLORING</span><h2>Curiosity has no edge.</h2><p>Explore the globe or take a closer look at how the project is put together.</p></div>
        <div class="devs-footer-links"><a href="/">Explore Earth <span aria-hidden="true">↗</span></a><a href="https://github.com/ethanplusai/earth-moon-solar" target="_blank" rel="noopener noreferrer">Project repository <span aria-hidden="true">↗</span></a></div>
      </section>
      <footer class="devs-footer"><span>EARTH EXPLORER</span><span>Made for the curious.</span></footer>
    </div>
    <dialog class="ex-dialog">
      <button class="ex-close" aria-label="Close sources">✕</button>
      <h2>Sources and credits.</h2>
      <p>Earth surface, relief, water, and cloud maps use NASA-derived imagery. Night imagery and other visual assets are credited with source links and terms in the project repository.</p>
      <p><a href="https://github.com/ethanplusai/earth-moon-solar/blob/main/CREDITS.md" target="_blank" rel="noopener noreferrer">View project credits ↗</a></p>
    </dialog>
  </main>
`;

document.querySelector("#nav-science").onclick = () =>
  document.querySelector(".ex-dialog").showModal();
document.querySelector(".ex-dialog .ex-close").onclick = () =>
  document.querySelector(".ex-dialog").close();
