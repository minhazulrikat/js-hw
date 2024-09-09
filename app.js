let body = document.querySelector("body");
let nav = document.querySelector('nav');
let counter = document.querySelector(".counter");
let para = document.querySelector(".para");
let srl = 0;

window.addEventListener("scroll", () => {
    let th = body.clientHeight;
    let windowHeight = window.innerHeight;
    let sh = th - windowHeight;
    let scrollPercentage = Math.round((100 / sh) * window.scrollY);

    if (srl > window.scrollY) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
    srl = window.scrollY;

    counter.style.background = `conic-gradient(#8967B3, #8967B3 ${scrollPercentage}%,#E6D9A2 ${scrollPercentage}% )`;
    para.innerHTML=scrollPercentage;
})