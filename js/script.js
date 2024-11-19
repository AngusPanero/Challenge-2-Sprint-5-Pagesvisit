let contador = parseInt(localStorage.getItem("contador"));
contador++
localStorage.setItem("contador", `${contador}`)
const boton = document.getElementById("btnReestablecer");

console.log(localStorage.getItem("contador"))

