// Datos de configuración de vehículos
const vehiculosData = [
    {tipo: "Van de carga", config: "1 eje", carroceria: "Panel cerrado", capacidad: "1"},
    // ... (todos los datos de vehículos)
];

// Estado global
let currentTipoCliente = '';
let currentOfertaId = '';
let currentOfertaData = null;

// Inicialización
function init() {
    if (!sessionStorage.getItem('ofertas')) {
        sessionStorage.setItem('ofertas', JSON.stringify([]));
    }
    showView('inicio');
    actualizarContadores();
    generarGraficos();
}

// Funciones principales
function actualizarConfiguraciones() {
    // ... implementación completa ...
}

function aceptarOferta(id) {
    // ... implementación completa ...
}

function generarFlotaDisponible(oferta) {
    // ... implementación completa ...
}

// Control de vistas
function showView(view) {
    // ... implementación completa ...
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);

// Funciones de UI
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('visible');
}

// ... (todas las demás funciones) ...
