// repetição das imagens

let time = 3500,
    currentImageIndex1 = 0,
    currentImageIndex2 = 1,
    images = document
                .querySelectorAll(".photos img")
    max = images.length;



function nextImage1() {

    images[currentImageIndex1].classList.remove("ajuste-photo")
    

    currentImageIndex1++
    if (currentImageIndex1 >= max) {
        currentImageIndex1 = 0
    }

    images[currentImageIndex1].classList.add("ajuste-photo")
    
}

function nextImage2() {

    images[currentImageIndex2].classList.remove("muda-photo")

    currentImageIndex2++
    if (currentImageIndex2 >= max) {
        currentImageIndex2 = 0
    }

    images[currentImageIndex2].classList.add("muda-photo")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage1()
        nextImage2()
    }, time)
}

window.addEventListener("load", start)


// Interação com o label

let ajs_label = document.querySelectorAll(".ajuste-label")


window.addEventListener('click', function (event) {
    for (let i = 0; i < 2; i++) {
        if (ajs_label[i].contains(event.target)) {
            ajs_label[i].classList.add("acende-borda-label") 

        } else {
            ajs_label[i].classList.remove("acende-borda-label")
        }
    }
    
});

// Label Senha









// escrever a esolha do select

function inicioSpan() {
    let span = document.querySelectorAll(".nome-idioma span")

    span[0].innerHTML = "Português (Brasil)"
}

window.addEventListener("load", inicioSpan())

function selected() {
    let textOption = (document.querySelector(".selacao-idioma"));

    let span = document.querySelectorAll(".nome-idioma span")

    span[0].innerHTML = textOption.options[textOption.selectedIndex].text
}















