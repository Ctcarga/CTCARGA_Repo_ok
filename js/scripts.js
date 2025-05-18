// Variables globales
let currentTipoCliente = '';
let currentOfertaId = '';

// Funciones de navegación
function showView(viewName) {
    // Oculta todas las vistas
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });
    
    // Muestra la vista seleccionada
    document.getElementById(`${viewName}-view`).style.display = 'block';
    
    // Actualiza el menú activo
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Marca como activo el ítem correspondiente
    if (viewName === 'inicio') {
        document.querySelectorAll('.menu-item')[0].classList.add('active');
    } else if (viewName === 'ofertas') {
        document.querySelectorAll('.menu-item')[1].classList.add('active');
    }
}

function crearOferta(tipoCliente) {
    currentTipoCliente = tipoCliente;
    currentOfertaId = 'oferta-' + Date.now();
    alert(`Creando nueva oferta ${tipoCliente} (ID: ${currentOfertaId})`);
    
    // Guardar en sessionStorage
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas') || '[]');
    ofertas.push({
        id: currentOfertaId,
        tipo: tipoCliente,
        fecha: new Date().toISOString()
    });
    sessionStorage.setItem('ofertas', JSON.stringify(ofertas));
    
    actualizarListaOfertas();
}

function actualizarListaOfertas() {
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas') || '[]');
    const container = document.getElementById('ofertas-container');
    
    container.innerHTML = '';
    
    if (ofertas.length === 0) {
        container.innerHTML = '<p>No hay ofertas creadas</p>';
        return;
    }
    
    ofertas.forEach(oferta => {
        const div = document.createElement('div');
        div.style.padding = '10px';
        div.style.margin = '10px 0';
        div.style.background = '#f5f5f5';
        div.style.borderRadius = '4px';
        div.innerHTML = `
            <p><strong>ID:</strong> ${oferta.id}</p>
            <p><strong>Tipo:</strong> ${oferta.tipo}</p>
            <p><strong>Fecha:</strong> ${new Date(oferta.fecha).toLocaleString()}</p>
        `;
        container.appendChild(div);
    });
}

// Funciones del sidebar móvil
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('ofertas')) {
        sessionStorage.setItem('ofertas', JSON.stringify([]));
    }
    
    // Configurar eventos
    document.getElementById('ofertas-view').addEventListener('click', function() {
        actualizarListaOfertas();
    });
});
