let couleurRouge = document.getElementById("color_red")
let couleurVert = document.getElementById("color_green")
let couleurBleu = document.getElementById("color_blue")
let couleurJaune = document.getElementById("color_yellow")
let product = document.getElementById("img_product")
let S = document.getElementById("size_S")
let M = document.getElementById("size_M")
let L = document.getElementById("size_L")
let XL = document.getElementById("size_XL")
let selectedSize = document.getElementById("size_selected")


couleurRouge.addEventListener('click', () => {
    product.src = "img/sacrouge.jpg"
    console.log("test")
})

couleurVert.addEventListener('click', () => {
    product.src = "img/sacvert.jpg"
    console.log("test")
})

couleurBleu.addEventListener('click', () => {
    product.src = "img/sacbleu.jpg"
    console.log("test")
})

couleurJaune.addEventListener('click', () => {
    product.src = "img/sacjaune.jpg"
    console.log("test")
})

S.addEventListener('click', () => {
    selectedSize.innerText = "Taille Sélectionnée : S"
})

M.addEventListener('click', () => {
    selectedSize.innerText = "Taille Sélectionnée : M"
})

L.addEventListener('click', () => {
    selectedSize.innerText = "Taille Sélectionnée : L"
})

XL.addEventListener('click', () => {
    selectedSize.innerText = "Taille Sélectionnée : XL"
})

