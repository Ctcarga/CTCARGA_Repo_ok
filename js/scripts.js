// Variables globales
let currentView = 'inicio';
let currentTipoCliente = '';
let currentOfertaId = '';

// Funciones principales
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function showView(viewName) {
    currentView = viewName;
    document.getElementById('main-content').innerHTML = '';
    
    switch(viewName) {
        case 'inicio':
            document.getElementById('main-content').innerHTML = `
                <div class="view">
                    <h1>Bienvenido a CTCarga</h1>
                    <p>Seleccione una opción del menú</p>
                </div>
            `;
            break;
            
        case 'ofertas':
            document.getElementById('main-content').innerHTML = `
                <div class="view">
                    <h2>Gestión de Ofertas</h2>
                    <button onclick="crearOferta('standard')">Nueva Oferta Standard</button>
                    <button onclick="crearOferta('premium')">Nueva Oferta Premium</button>
                    <div id="ofertas-container"></div>
                </div>
            `;
            break;
            
        case 'configuracion':
            document.getElementById('main-content').innerHTML = `
                <div class="view">
                    <h2>Configuración</h2>
                    <p>Ajustes del sistema</p>
                </div>
            `;
            break;
    }
}

function crearOferta(tipoCliente) {
    currentTipoCliente = tipoCliente;
    currentOfertaId = 'oferta-' + Date.now();
    
    alert(`Nueva oferta ${tipoCliente} creada: ${currentOfertaId}`);
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('ofertas')) {
        sessionStorage.setItem('ofertas', JSON.stringify([]));
    }
    showView('inicio');
});
