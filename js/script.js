let contadorVisitas = parseInt(localStorage.getItem("contadorVisitas")) || 0; // el parseInt me devuelve en numero el string que me da el resultado de localStorage || 0 empezando desde cero
contadorVisitas++
localStorage.setItem("contadorVisitas", `${contadorVisitas}`)

const visitasNumero = document.getElementById("contadorVisitas") // Muestro el Número en el navegador
visitasNumero.innerHTML = `<p>${contadorVisitas}</p>`

const boton = document.getElementById("btnReestablecer");

boton.addEventListener("click", () => {
    contadorVisitas = 0; // Reseteo a 0 y luego reasigno mi contador para que se sobreescriba
    localStorage.setItem("contadorVisitas", contadorVisitas.toString());
    visitasNumero.innerHTML = `<p>${contadorVisitas}</p>`;
});

