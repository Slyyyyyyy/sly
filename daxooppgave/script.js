const body = document.querySelector("body")

let cooldown = false

let aaobserver= new ResizeObserver(() => {
    if (window.innerWidth < window.innerHeight && !cooldown) {
        cooldown = true
        console.log("Jeg er høy ")
    } else if (window.innerWidth > window.innerHeight && cooldown) {
        cooldown = false
        console.log("jeg ligger lavt")
    }
})

aaobserver.observer(body);