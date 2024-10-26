const textoCambiador = document.querySelector("#inicio > main > div:nth-child(3) > span:nth-child(2)");

function getRandomColor() {
    const letters = '0123456789ABCDEF'; 
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



setInterval(() => {
    textoCambiador.style.color = getRandomColor();
}, 1000);

const descripcion = document.getElementById("descripcion");
const titulo = document.getElementById("titulo");
const numero = document.getElementById("numero"); 

const opciones = document.querySelectorAll("#proyectos > section > aside > section > div");

function actualizarContenido(opcion) {
    numero.textContent = opcion;

    if (opcion === "01") {
        titulo.textContent = "Cálculo de notas";
        descripcion.textContent = "Desarrollo de una aplicación web interactiva para gestionar y calcular notas académicas, con la funcionalidad de exportar resultados en PDF. El proyecto se centra en brindar una interfaz intuitiva y eficiente para simplificar la evaluación académica.";
        link.textContent = "Ir al proyecto";
        link.href = "https://e-sepulveda-l.github.io/Calculo-de-notas/";
        link.style.pointerEvents = "auto";
    } else {
        titulo.textContent = "Próximamente";
        descripcion.textContent = "Este proyecto esta en proceso.";
        link.textContent = "En proceso";
        link.href = "#";
        link.style.pointerEvents = "none"; 
    }
}

opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        const opcionTexto = opcion.textContent.trim();
        actualizarContenido(opcionTexto);
    });
});