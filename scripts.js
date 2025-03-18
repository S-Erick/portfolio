const textoCambiador = document.querySelector("#inicio > main > div:nth-child(3) > span:nth-child(2)");

const colores = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#DA70D6"];
let indice = 0;

function cambiarColor() {
    textoCambiador.style.color = colores[indice]; 
    indice = (indice + 1) % colores.length;
}
setInterval(cambiarColor, 1000);

const opciones = document.querySelectorAll("#proyectos > section > aside > section > div");

const proyectos = {
    "01": {
        titulo: "Cálculo de notas",
        descripcion: "Desarrollo de una aplicación web interactiva para gestionar y calcular notas académicas, con la funcionalidad de exportar resultados en PDF. El proyecto se centra en brindar una interfaz intuitiva y eficiente para simplificar la evaluación académica.",
        linkTexto: "Ir al proyecto",
        linkHref: "https://s-erick.github.io/Calculo-de-notas/",
        activo: true,
        imagen: "img/calculo-de-notas.png"
    },
    "02": {
        titulo: "Servicios de fotografia",
        descripcion: "Diseño y desarrollo de una página web para servicios de fotografía, enfocada en ofrecer una experiencia visual atractiva y funcional. El proyecto incluye una presentación de portafolio, información sobre los servicios y una interfaz intuitiva para facilitar la interacción con los clientes.",
        linkTexto: "Ir al proyecto",
        linkHref: "https://s-erick.github.io/sprint-1-2-3/index.html",
        activo: false,
        imagen: "img/photography-services.png"
    },
    "03": {
        titulo: "Task manager",
        descripcion: "Desarrollo de una aplicación web interactiva para la gestión de tareas, permitiendo a los usuarios organizar, priorizar y realizar un seguimiento eficiente de sus pendientes. La interfaz intuitiva facilita la creación, edición y eliminación de tareas, optimizando la productividad y el flujo de trabajo.",
        linkTexto: "Ir al proyecto",
        linkHref: "https://s-erick.github.io/task-manager/",
        activo: false,
        imagen: "img/task-manager.png"
    },
    "04": {
        titulo: "Próximamente",
        descripcion: "Este proyecto está en proceso.",
        linkTexto: "En proceso",
        linkHref: "#",
        activo: false,
        imagen: "img/proximamente.png"
    }
};

function actualizarContenido(opcion) {
    const proyecto = proyectos[opcion];
    document.getElementById("numero").textContent = opcion;
    document.getElementById("titulo").textContent = proyecto.titulo;
    document.getElementById("descripcion").textContent = proyecto.descripcion;
    const link = document.getElementById("link");
    link.textContent = proyecto.linkTexto;
    link.href = proyecto.linkHref;
}

window.onload = () => {
    opciones.forEach((opcion, index) => {
        const proyectoClave = Object.keys(proyectos)[index];
        if (proyectoClave) {
            opcion.style.backgroundImage = `url(${proyectos[proyectoClave].imagen})`;
        }
    });
    actualizarContenido(option);
};

opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        actualizarContenido(opcion.textContent.trim());
    });
});
