// Datos de vehículos
const vehiculosData = [ /* ... datos del CSV ... */ ];

// Variables globales
let currentTipoCliente = '';
let currentOfertaId = '';

// Funciones principales
function actualizarConfiguraciones() { /* ... */ }
function crearOferta(tipoCliente) { /* ... */ }
function submitForm() { /* ... */ }
// ... (todas las funciones restantes) ...

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('ofertas')) {
        sessionStorage.setItem('ofertas', JSON.stringify([]));
    }
    showView('inicio');
    actualizarContadores();
    generarGraficos();
});