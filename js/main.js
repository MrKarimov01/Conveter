window.addEventListener("DOMContentLoaded",()=>{
    const loader = document.querySelector(".loader");
    setTimeout(()=>{
        loader.classList.add("remove");
    },3000);
})