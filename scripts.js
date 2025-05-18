// Versión mínima de prueba (solo para verificar que carga)
console.log('El archivo JavaScript se cargó correctamente');

// Añade esto para ver algo en pantalla
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('app').innerHTML = `
        <h2>Funcionalidad JavaScript</h2>
        <p>El sistema está funcionando correctamente</p>
        <button onclick="alert('¡Funciona!')">Probar</button>
    `;
});