(function(){"use strict";const o=document.querySelector(".theme-toggle"),i=document.documentElement;function a(e){i.setAttribute("data-theme",e),localStorage.setItem("theme",e),typeof mermaid!="undefined"&&mermaid.initialize({theme:e==="dark"?"dark":"default"})}o&&o.addEventListener("click",()=>{const e=i.getAttribute("data-theme"),t=e==="dark"?"light":"dark";a(t)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{localStorage.getItem("theme")||a(e.matches?"dark":"light")});const t=document.querySelector(".language-switcher");if(t){const e=t.querySelector(".lang-toggle");e&&e.addEventListener("click",e=>{e.stopPropagation(),t.classList.toggle("is-open")}),document.addEventListener("click",e=>{t.contains(e.target)||t.classList.remove("is-open")})}const e=document.querySelector(".mobile-menu-toggle"),n=document.querySelector(".header-nav");e&&n&&(e.addEventListener("click",()=>{e.classList.toggle("is-active"),n.classList.toggle("is-open")}),document.addEventListener("click",t=>{!e.contains(t.target)&&!n.contains(t.target)&&(e.classList.remove("is-active"),n.classList.remove("is-open"))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&(e.classList.remove("is-active"),n.classList.remove("is-open"))}));const s=document.querySelector(".back-to-top");if(s){function r(){window.scrollY>300?s.classList.add("is-visible"):s.classList.remove("is-visible")}let e=!1;window.addEventListener("scroll",()=>{e||(window.requestAnimationFrame(()=>{r(),e=!1}),e=!0)}),s.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}if("loading"in HTMLImageElement.prototype){const e=document.querySelectorAll('img[loading="lazy"]');e.forEach(e=>{e.dataset.src&&(e.src=e.dataset.src)})}else{const e=document.querySelectorAll('img[loading="lazy"]'),t=(e,t)=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;n.dataset.src&&(n.src=n.dataset.src),n.removeAttribute("loading"),t.unobserve(n)}})};if("IntersectionObserver"in window){const n=new IntersectionObserver(t,{rootMargin:"100px"});e.forEach(e=>n.observe(e))}else e.forEach(e=>{e.dataset.src&&(e.src=e.dataset.src)})}function c(){const e=document.querySelectorAll("pre code");e.forEach(e=>{const s=e.parentElement,n=document.createElement("div");n.className="code-block-wrapper",n.style.position="relative",s.parentNode.insertBefore(n,s),n.appendChild(s);const t=document.createElement("button");t.className="copy-code-btn",t.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `,t.style.cssText=`
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 4px 8px;
        background: var(--color-bg-alt);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s;
      `,n.appendChild(t),n.addEventListener("mouseenter",()=>{t.style.opacity="1"}),n.addEventListener("mouseleave",()=>{t.style.opacity="0"}),t.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(e.textContent),t.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          `,setTimeout(()=>{t.innerHTML=`
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            `},2e3)}catch(e){console.error("Failed to copy:",e)}})})}function l(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){const t=this.getAttribute("href");if(t==="#")return;const n=document.querySelector(t);n&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,null,t))})})}document.addEventListener("DOMContentLoaded",()=>{c(),l()})})()