document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = form.nombre.value.trim();
        const motivo = form.motivo.value.trim();
        const correo = form.correo.value.trim();

        if (!nombre || !motivo || !correo) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("El correo electrónico no es válido.");
            return;
        }

        alert(`Gracias por contactarme, ${nombre}. ¡Te responderé pronto!`);
        form.reset();
    });
});
