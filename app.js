const han = document.querySelector(".han")

han.addEventListener('click', e=> {
    document.querySelector(".mobile-nav").classList.add("show")
    document.querySelector(".overlay").style.display = "block"
    document.querySelector('body').classList.add("lock")
})
document.querySelector("#close-menu").addEventListener("click", e => {
    document.querySelector(".mobile-nav").classList.remove("show")
    document.querySelector(".overlay").style.display = "none"
    document.querySelector("body").classList.remove("lock")
})