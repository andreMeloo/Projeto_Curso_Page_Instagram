let time = 3500,
    currentImageIndex = 0,
    num = 1,
    images = document
                .querySelectorAll(".photos img")
    max = images.length;



function nextImage1() {

    images[currentImageIndex].classList.remove("ajuste-photo")
    

    currentImageIndex++
    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("ajuste-photo")
    
}

function nextImage2() {

    images[num].classList.remove("muda-photo")

    num++
    if (num >= max) {
        num = 0
    }

    images[num].classList.add("muda-photo")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage1()
        nextImage2()
    }, time)
}

window.addEventListener("load", start)