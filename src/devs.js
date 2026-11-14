import { siteHeader } from "./site-header.js";
import "./style.css";
import "./exploration.css";
import "./devs.css";

const app = document.querySelector("#app");

const team = [
    { name: "Jacken James B. Bongao", role: "Lead Developer", initials: "JB" },
    { name: "Angelito Nicholas Jr.", role: "Data Analyst", initials: "AN" },
    { name: "Matt David Abing", role: "", initials: "MA" },
    { name: "Roxas", role: "UI & UX Designer", initials: "R" },
    { name: "Oclarit", role: "Presenter", initials: "O" },
];

const memberCard = ({ name, role, initials }) => `
  <div class="devs-member">
    <div class="devs-profile-top"><span>${(role || "Role coming soon").toUpperCase()}</span><span class="devs-status"><i></i> JS DEVS</span></div>
    <div class="devs-monogram" aria-hidden="true">${initials}</div>
    <h2>${name}</h2>
    <p>${role || "Team member"}</p>
  </div>
`;

app.innerHTML = `
  <main class="world-shell exploration devs-page">
    <div class="devs-atmosphere" aria-hidden="true"><span></span><span></span></div>
    ${siteHeader("devs")}
    <div class="devs-content">
      <section class="devs-hero" aria-labelledby="devs-title">
        <div class="devs-intro">
          
          <h1 id="devs-title">Built with curiosity.<br /><em>Made to explore.</em></h1>
          <p>Earth Explorer is an interactive project by the JS Devs team, bringing together planetary imagery and hands-on web graphics.</p>

        </div>

        <aside class="devs-profile devs-team" aria-label="JS Devs team">
          ${team.map(memberCard).join("")}
        </aside>
      </section>

      <section class="devs-section" aria-labelledby="devs-build-title">
        <div class="devs-section-heading">
          <span class="eyebrow">A LITTLE ABOUT THE BUILD</span>
          <h2 id="devs-build-title">Science, code, and a view from space.</h2>
        </div>
     
      </section>

      <section class="devs-footer-card" aria-label="Project links">
        <div><h2>Curiosity has no edge.</h2><p>Explore the globe or take a closer look at how the project is put together.</p></div>
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
