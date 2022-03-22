var sub = document.querySelector("input")
var num = document.querySelector("em")
var b1 = document.querySelector("button#b1")
var b2 = document.querySelector("button#b2")
var b3 = document.querySelector("button#b3")
var b4 = document.querySelector("button#b4")
var b5 = document.querySelector("button#b5")

function validar() {
  var tela1 = document.querySelector(".init")
  var tela2 = document.querySelector(".thank")
  tela1.style = "opacity: 0;"
  tela2.style = "opacity: 1;"
}

sub.addEventListener("click", validar)
b1.addEventListener("click", function() {num.innerText = "1"})
b2.addEventListener("click", function() {num.innerText = "2"})
b3.addEventListener("click", function() {num.innerText = "3"})
b4.addEventListener("click", function() {num.innerText = "4"})
b5.addEventListener("click", function() {num.innerText = "5"})
