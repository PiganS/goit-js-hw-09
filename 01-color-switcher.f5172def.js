const t={bodyRef:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{t.bodyRef.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.btnStop.addEventListener("click",n),t.btnStart.disabled=!0,t.btnStop.disabled=!1}));let e=null;function n(){clearInterval(e),t.btnStart.disabled=!1,t.btnStop.disabled=!0,t.btnStop.removeEventListener("click",n)}t.btnStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.f5172def.js.map