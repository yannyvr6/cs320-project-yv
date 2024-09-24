(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="/quinoa/quarkus.svg",a="/quinoa/vite.svg";function c(i){let o=0;const r=s=>{o=s,i.innerHTML=`count is ${o}`};i.addEventListener("click",()=>r(o+1)),r(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://docs.quarkiverse.io/quarkus-quinoa/dev/web-frameworks.html" target="_blank">
      <img src="${u}" class="logo vanilla" alt="Quarkus logo" />
    </a>
    <h1>Hello Quinoa!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Quinoa is a Quarkus extension which eases the development, the build and serving of single page apps or web components (built with npm : React, Angular, Vue, Lit, Svelte, Astro, SolidJS …) alongside Quarkus. It is possible to use it with a Quarkus backend in a single project.
    </p>
  </div>
`;c(document.querySelector("#counter"));
