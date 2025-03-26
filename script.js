function descargarGif() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        const link = document.createElement('a');
        link.href = 'invitacion.gif'; // Reemplaza con la URL de tu .gif
        link.download = `Invitacion_${nombre}.gif`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
}

// Crear estrellas animadas
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.body.appendChild(star);
}