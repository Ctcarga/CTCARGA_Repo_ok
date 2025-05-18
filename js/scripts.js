// Datos de vehículos
const vehiculosData = [
    {tipo: "Van de carga", config: "1 eje", carroceria: "Panel cerrado", capacidad: "1"},
    // ... (todos los datos de vehículos)
];

// Variables globales
let currentTipoCliente = '';
let currentOfertaId = '';
let currentOfertaData = null;

// Funciones principales
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('visible');
}

function hideSidebar() {
    document.getElementById('sidebar').classList.remove('visible');
}

function showView(view) {
    // Implementación de navegación entre vistas
}

function crearOferta(tipoCliente) {
    // Lógica para crear oferta
}

function submitForm() {
    // Lógica para enviar formulario
}

// [Todas las demás funciones del archivo original]

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('ofertas')) {
        sessionStorage.setItem('ofertas', JSON.stringify([]));
    }
    showView('inicio');
    actualizarContadores();
    generarGraficos();
});
