// Datos de vehículos desde el CSV (convertido a JSON)
const vehiculosData = [
    {tipo: "Van de carga", config: "1 eje", carroceria: "Panel cerrado", capacidad: "1"},
    {tipo: "Van de carga", config: "1 eje", carroceria: "Panel refrigerado", capacidad: "1"},
    {tipo: "Camión liviano (tipo Turbo)", config: "1 eje", carroceria: "Furgón cerrado", capacidad: "3,5"},
    {tipo: "Camión liviano (tipo Turbo)", config: "1 eje", carroceria: "Estacas", capacidad: "3,5"},
    {tipo: "Camión liviano (tipo Turbo)", config: "1 eje", carroceria: "Refrigerado", capacidad: "3,5"},
    {tipo: "Camión rígido", config: "2 ejes", carroceria: "Furgón cerrado", capacidad: "7"},
    {tipo: "Camión rígido", config: "2 ejes", carroceria: "Estacas", capacidad: "7"},
    {tipo: "Camión rígido", config: "2 ejes", carroceria: "Plataforma", capacidad: "7"},
    {tipo: "Camión rígido", config: "2 ejes", carroceria: "Volco (volquete)", capacidad: "7"},
    {tipo: "Camión rígido", config: "2 ejes", carroceria: "Tanque (cisterna)", capacidad: "7"},
    {tipo: "Camión rígido", config: "2 ejes", carroceria: "Refrigerado", capacidad: "7"},
    {tipo: "Camión rígido", config: "3 ejes", carroceria: "Furgón cerrado", capacidad: "12"},
    {tipo: "Camión rígido", config: "3 ejes", carroceria: "Estacas", capacidad: "12"},
    {tipo: "Camión rígido", config: "3 ejes", carroceria: "Plataforma", capacidad: "12"},
    {tipo: "Camión rígido", config: "3 ejes", carroceria: "Volco (volquete)", capacidad: "12"},
    {tipo: "Camión rígido", config: "3 ejes", carroceria: "Tanque (cisterna)", capacidad: "12"},
    {tipo: "Camión rígido", config: "3 ejes", carroceria: "Refrigerado", capacidad: "12"},
    {tipo: "Remolque", config: "R2", carroceria: "Furgón cerrado", capacidad: "18"},
    {tipo: "Remolque", config: "R2", carroceria: "Plataforma", capacidad: "18"},
    {tipo: "Remolque", config: "R2", carroceria: "Tanque (cisterna)", capacidad: "18"},
    {tipo: "Remolque", config: "R2", carroceria: "Refrigerado", capacidad: "18"},
    {tipo: "Tractocamión", config: "2S1", carroceria: "Furgón cerrado", capacidad: "20"},
    {tipo: "Tractocamión", config: "2S1", carroceria: "Plataforma", capacidad: "20"},
    {tipo: "Tractocamión", config: "2S1", carroceria: "Tanque (cisterna)", capacidad: "20"},
    {tipo: "Tractocamión", config: "2S1", carroceria: "Refrigerado", capacidad: "20"},
    {tipo: "Semirremolque", config: "S1", carroceria: "Furgón cerrado", capacidad: "20"},
    {tipo: "Semirremolque", config: "S1", carroceria: "Plataforma", capacidad: "20"},
    {tipo: "Semirremolque", config: "S1", carroceria: "Tanque (cisterna)", capacidad: "20"},
    {tipo: "Semirremolque", config: "S1", carroceria: "Refrigerado", capacidad: "20"},
    {tipo: "Remolque", config: "R3", carroceria: "Furgón cerrado", capacidad: "24"},
    {tipo: "Remolque", config: "R3", carroceria: "Plataforma", capacidad: "24"},
    {tipo: "Remolque", config: "R3", carroceria: "Tanque (cisterna)", capacidad: "24"},
    {tipo: "Remolque", config: "R3", carroceria: "Refrigerado", capacidad: "24"},
    {tipo: "Tractocamión", config: "2S2", carroceria: "Furgón cerrado", capacidad: "25"},
    {tipo: "Tractocamión", config: "2S2", carroceria: "Plataforma", capacidad: "25"},
    {tipo: "Tractocamión", config: "2S2", carroceria: "Tanque (cisterna)", capacidad: "25"},
    {tipo: "Tractocamión", config: "2S2", carroceria: "Refrigerado", capacidad: "25"},
    {tipo: "Semirremolque", config: "S2", carroceria: "Furgón cerrado", capacidad: "25"},
    {tipo: "Semirremolque", config: "S2", carroceria: "Plataforma", capacidad: "25"},
    {tipo: "Semirremolque", config: "S2", carroceria: "Tanque (cisterna)", capacidad: "25"},
    {tipo: "Semirremolque", config: "S2", carroceria: "Refrigerado", capacidad: "25"},
    {tipo: "Tractocamión", config: "3S2", carroceria: "Furgón cerrado", capacidad: "30"},
    {tipo: "Tractocamión", config: "3S2", carroceria: "Plataforma", capacidad: "30"},
    {tipo: "Tractocamión", config: "3S2", carroceria: "Tanque (cisterna)", capacidad: "30"},
    {tipo: "Tractocamión", config: "3S2", carroceria: "Refrigerado", capacidad: "30"},
    {tipo: "Remolque", config: "R4", carroceria: "Furgón cerrado", capacidad: "30"},
    {tipo: "Remolque", config: "R4", carroceria: "Plataforma", capacidad: "30"},
    {tipo: "Remolque", config: "R4", carroceria: "Tanque (cisterna)", capacidad: "30"},
    {tipo: "Remolque", config: "R4", carroceria: "Refrigerado", capacidad: "30"},
    {tipo: "Semirremolque", config: "S3", carroceria: "Furgón cerrado", capacidad: "30"},
    {tipo: "Semirremolque", config: "S3", carroceria: "Plataforma", capacidad: "30"},
    {tipo: "Semirremolque", config: "S3", carroceria: "Tanque (cisterna)", capacidad: "30"},
    {tipo: "Semirremolque", config: "S3", carroceria: "Refrigerado", capacidad: "30"},
    {tipo: "Tractocamión", config: "3S3", carroceria: "Furgón cerrado", capacidad: "34"},
    {tipo: "Tractocamión", config: "3S3", carroceria: "Plataforma", capacidad: "34"},
    {tipo: "Tractocamión", config: "3S3", carroceria: "Tanque (cisterna)", capacidad: "34"},
    {tipo: "Tractocamión", config: "3S3", carroceria: "Refrigerado", capacidad: "34"}
];

// Variables globales
let currentTipoCliente = '';
let currentOfertaId = '';
let currentOfertaData = null;

// Inicializar ofertas si no existen
if (!sessionStorage.getItem('ofertas')) {
    sessionStorage.setItem('ofertas', JSON.stringify([]));
}

// Actualizar contadores al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la vista de inicio por defecto
    showView('inicio');
    actualizarContadores();
    generarGraficos();
});

// Generar gráficos estadísticos
function generarGraficos() {
    // Gráfico de estados (simulado)
    const estadosData = [
        { label: 'Finalizadas', value: 24, color: 'var(--success)' },
        { label: 'En Proceso', value: 5, color: 'var(--accent)' },
        { label: 'Activas', value: 8, color: 'var(--warning)' }
    ];
    
    const graficoEstados = document.getElementById('graficoEstados');
    graficoEstados.innerHTML = '';
    
    const maxEstado = Math.max(...estadosData.map(item => item.value));
    
    estadosData.forEach(item => {
        const barra = document.createElement('div');
        barra.className = 'barra';
        barra.style.height = `${(item.value / maxEstado) * 100}%`;
        barra.style.background = item.color;
        
        const barraLabel = document.createElement('div');
        barraLabel.className = 'barra-label';
        barraLabel.textContent = item.label.substring(0, 3);
        
        const barraValue = document.createElement('div');
        barraValue.className = 'barra-value';
        barraValue.textContent = item.value;
        
        barra.appendChild(barraValue);
        barra.appendChild(barraLabel);
        graficoEstados.appendChild(barra);
    });
    
    // Gráfico de evolución mensual (simulado)
    const semanas = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
    const mesActual = [12, 18, 22, 24];
    const mesAnterior = [10, 15, 18, 20];
    
    const graficoEvolucion = document.getElementById('graficoEvolucion');
    graficoEvolucion.innerHTML = '';
    
    const maxEvolucion = Math.max(...mesActual, ...mesAnterior);
    
    semanas.forEach((semana, index) => {
        // Barra mes actual
        const barraActual = document.createElement('div');
        barraActual.className = 'barra';
        barraActual.style.height = `${(mesActual[index] / maxEvolucion) * 100}%`;
        barraActual.style.background = 'var(--accent)';
        barraActual.style.marginRight = '2px';
        
        const barraActualValue = document.createElement('div');
        barraActualValue.className = 'barra-value';
        barraActualValue.textContent = mesActual[index];
        
        const barraActualLabel = document.createElement('div');
        barraActualLabel.className = 'barra-label';
        barraActualLabel.textContent = semana;
        
        barraActual.appendChild(barraActualValue);
        barraActual.appendChild(barraActualLabel);
        
        // Barra mes anterior
        const barraAnterior = document.createElement('div');
        barraAnterior.className = 'barra';
        barraAnterior.style.height = `${(mesAnterior[index] / maxEvolucion) * 100}%`;
        barraAnterior.style.background = '#ddd';
        barraAnterior.style.width = '20px';
        
        const barraAnteriorValue = document.createElement('div');
        barraAnteriorValue.className = 'barra-value';
        barraAnteriorValue.textContent = mesAnterior[index];
        
        barraAnterior.appendChild(barraAnteriorValue);
        
        // Contenedor de barras para esta semana
        const semanaContainer = document.createElement('div');
        semanaContainer.style.display = 'flex';
        semanaContainer.style.alignItems = 'flex-end';
        semanaContainer.style.height = '100%';
        
        semanaContainer.appendChild(barraAnterior);
        semanaContainer.appendChild(barraActual);
        graficoEvolucion.appendChild(semanaContainer);
    });
}

// Funciones para los filtros agrupados
function actualizarConfiguraciones() {
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    const configSelect = document.getElementById('configuracion');
    
    configSelect.innerHTML = '<option value="">Seleccione configuración</option>';
    configSelect.disabled = !tipoVehiculo;
    
    if (tipoVehiculo) {
        const configsUnicas = [...new Set(
            vehiculosData
                .filter(v => v.tipo === tipoVehiculo)
                .map(v => v.config)
        )];
        
        configsUnicas.forEach(config => {
            const option = document.createElement('option');
            option.value = config;
            option.textContent = config;
            configSelect.appendChild(option);
        });
    }
    
    // Resetear dependientes
    document.getElementById('carroceria').innerHTML = '<option value="">Primero seleccione Configuración</option>';
    document.getElementById('carroceria').disabled = true;
    document.getElementById('capacidad').innerHTML = '<option value="">Primero seleccione Carrocería</option>';
    document.getElementById('capacidad').disabled = true;
}

function actualizarCarrocerias() {
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    const config = document.getElementById('configuracion').value;
    const carroceriaSelect = document.getElementById('carroceria');
    
    carroceriaSelect.innerHTML = '<option value="">Seleccione carrocería</option>';
    carroceriaSelect.disabled = !config;
    
    if (tipoVehiculo && config) {
        const carroceriasUnicas = [...new Set(
            vehiculosData
                .filter(v => v.tipo === tipoVehiculo && v.config === config)
                .map(v => v.carroceria)
        )];
        
        carroceriasUnicas.forEach(carroceria => {
            const option = document.createElement('option');
            option.value = carroceria;
            option.textContent = carroceria;
            carroceriaSelect.appendChild(option);
        });
    }
    
    // Resetear capacidad
    document.getElementById('capacidad').innerHTML = '<option value="">Primero seleccione Carrocería</option>';
    document.getElementById('capacidad').disabled = true;
}

function actualizarCapacidad() {
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    const config = document.getElementById('configuracion').value;
    const carroceria = document.getElementById('carroceria').value;
    const capacidadSelect = document.getElementById('capacidad');
    
    capacidadSelect.innerHTML = '<option value="">Seleccione capacidad</option>';
    capacidadSelect.disabled = !carroceria;
    
    if (tipoVehiculo && config && carroceria) {
        const vehiculo = vehiculosData.find(v => 
            v.tipo === tipoVehiculo && 
            v.config === config && 
            v.carroceria === carroceria
        );
        
        if (vehiculo) {
            const option = document.createElement('option');
            option.value = vehiculo.capacidad;
            option.textContent = vehiculo.capacidad + ' toneladas';
            capacidadSelect.appendChild(option);
        }
    }
}

function crearOferta(tipoCliente) {
    currentTipoCliente = tipoCliente;
    
    // Configurar el formulario según el tipo de cliente
    if (tipoCliente === 'empresa') {
        document.getElementById('formTitle').textContent = 'Nueva Oferta de Carga (Empresa)';
        document.getElementById('formMainTitle').textContent = 'Nueva Oferta de Carga (Empresa)';
        
        // Forzar publicación cerrada para empresas
        document.getElementById('publicacion').value = 'cerrada';
        document.getElementById('publicacionContainer').style.display = 'none';
    } else {
        document.getElementById('formTitle').textContent = 'Nueva Oferta de Carga (Generador)';
        document.getElementById('formMainTitle').textContent = 'Nueva Oferta de Carga (Generador)';
        
        // Mostrar selector de publicación para generadores
        document.getElementById('publicacionContainer').style.display = 'block';
        document.getElementById('publicacion').value = 'publica';
    }
    
    showView('form');
}

function submitForm() {
    // Validación básica
    const form = document.getElementById('cargaForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value) {
            field.style.borderColor = 'red';
            isValid = false;
        } else {
            field.style.borderColor = '';
        }
    });
    
    // Validar formato de tiempo de cargue
    const tiempoCargue = document.getElementById('tiempoCargue').value;
    const tiempoRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    if (!tiempoRegex.test(tiempoCargue)) {
        alert('Por favor ingrese un tiempo de cargue válido en formato HH:MM:SS');
        document.getElementById('tiempoCargue').style.borderColor = 'red';
        isValid = false;
    }
    
    if (isValid) {
        // Calcular cantidad de vehículos requeridos
        const tonelaje = parseFloat(document.getElementById('tonelaje').value);
        const capacidad = parseFloat(document.getElementById('capacidad').value.replace(',', '.'));
        const vehiculosRequeridos = Math.ceil(tonelaje / capacidad);
        
        // Calcular distancia estimada (simulada)
        const distancia = Math.floor(Math.random() * 500) + 50;
        
        // Generar código único para la oferta (6 caracteres alfanuméricos)
        const codigoOferta = 'OF-' + Math.random().toString(36).substr(2, 6).toUpperCase();
        
        // Crear objeto de oferta
        const oferta = {
            id: Date.now().toString(),
            codigo: codigoOferta,
            empresa: document.getElementById('empresa').value,
            tipoCliente: currentTipoCliente,
            origen: document.getElementById('origen').value,
            destino: document.getElementById('destino').value,
            tonelaje: document.getElementById('tonelaje').value,
            fecha: document.getElementById('fecha').value,
            tiempoCargue: document.getElementById('tiempoCargue').value,
            publicacion: document.getElementById('publicacion').value,
            tipoVehiculo: document.getElementById('tipoVehiculo').value,
            configuracion: document.getElementById('configuracion').value,
            carroceria: document.getElementById('carroceria').value,
            capacidad: document.getElementById('capacidad').value,
            valor: document.getElementById('valor').value,
            vehiculosRequeridos: vehiculosRequeridos,
            distancia: distancia,
            fechaCreacion: new Date().toISOString(),
            estado: 'activa',
            tonelajeAsignado: 0,
            tonelajeDisponible: parseFloat(document.getElementById('tonelaje').value),
            tonelajePublicadoTerceros: 0
        };
        
        // Guardar oferta
        const ofertas = JSON.parse(sessionStorage.getItem('ofertas'));
        ofertas.push(oferta);
        sessionStorage.setItem('ofertas', JSON.stringify(ofertas));
        
        alert(`Oferta de carga creada exitosamente! Código: ${codigoOferta}`);
        form.reset();
        
        // Resetear selects dependientes
        document.getElementById('configuracion').innerHTML = '<option value="">Primero seleccione Tipo de Vehículo</option>';
        document.getElementById('configuracion').disabled = true;
        document.getElementById('carroceria').innerHTML = '<option value="">Primero seleccione Configuración</option>';
        document.getElementById('carroceria').disabled = true;
        document.getElementById('capacidad').innerHTML = '<option value="">Primero seleccione Carrocería</option>';
        document.getElementById('capacidad').disabled = true;
        
        // Actualizar contadores
        actualizarContadores();
        
        // Volver a gestión de carga
        showView('gestion-carga');
    } else {
        alert('Por favor complete todos los campos requeridos');
    }
}

function actualizarContadores() {
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas')) || [];
    
    // Contar ofertas totales
    const totalOfertas = ofertas.length;
    
    // Contar ofertas por tipo de cliente
    const ofertasEmpresa = ofertas.filter(o => o.tipoCliente === 'empresa').length;
    const ofertasGenerador = ofertas.filter(o => o.tipoCliente === 'generador').length;
    
    // Actualizar UI
    document.getElementById('ofertasCreadas').textContent = totalOfertas;
    document.getElementById('ofertasActivas').textContent = totalOfertas;
    document.getElementById('detalleOfertas').textContent = `${ofertasGenerador} de generadores, ${ofertasEmpresa} de empresas`;
}

function cargarOfertasActivas() {
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas')) || [];
    const ofertasActivas = ofertas.filter(o => o.estado === 'activa');
    const container = document.getElementById('ofertasList');
    
    container.innerHTML = '';
    
    if (ofertasActivas.length === 0) {
        container.innerHTML = '<p>No hay ofertas activas disponibles.</p>';
        return;
    }
    
    ofertasActivas.forEach(oferta => {
        const ofertaCard = document.createElement('div');
        ofertaCard.className = 'oferta-card';
        
        // Determinar clases de badge según tipo de cliente y publicación
        const badgeCliente = oferta.tipoCliente === 'empresa' ? 'badge-empresa' : 'badge-generador';
        const badgePublicacion = oferta.publicacion === 'publica' ? 'badge-publica' : 'badge-cerrada';
        const textoCliente = oferta.tipoCliente === 'empresa' ? 'Empresa' : 'Generador';
        const textoPublicacion = oferta.publicacion === 'publica' ? 'Pública' : 'Cerrada';
        
        // Estilo diferente para cada tipo de cliente
        const headerStyle = oferta.tipoCliente === 'empresa' ? 
            'background: rgba(52, 152, 219, 0.1); padding: 15px; border-radius: 6px;' : 
            'background: rgba(26, 188, 156, 0.1); padding: 15px; border-radius: 6px;';
        
        // Crear HTML base
        let ofertaHTML = `
            <div style="${headerStyle}">
                <div class="oferta-header">
                    <h3 class="oferta-title">${oferta.codigo} - ${oferta.empresa}</h3>
                    <div>
                        <span class="oferta-badge ${badgeCliente}" style="font-size: 14px; padding: 6px 12px;">${textoCliente}</span>
                        <span class="oferta-badge ${badgePublicacion}" style="font-size: 14px; padding: 6px 12px;">${textoPublicacion}</span>
                    </div>
                </div>
                <div style="margin-top: 10px; font-weight: 500; color: var(--primary);">
                    ${oferta.origen} → ${oferta.destino}
                </div>
            </div>
            <div class="oferta-details">
                <div class="detail-group">
                    <div class="detail-label">Tonelaje</div>
                    <div class="detail-value">${oferta.tonelaje} toneladas</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Fecha de Cargue</div>
                    <div class="detail-value">${new Date(oferta.fecha).toLocaleString()}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Tiempo estimado de cargue</div>
                    <div class="detail-value">${oferta.tiempoCargue}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Vehículos Requeridos</div>
                    <div class="detail-value">${oferta.vehiculosRequeridos} vehículos</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Distancia Estimada</div>
                    <div class="detail-value">${oferta.distancia} km</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Tipo de Vehículo</div>
                    <div class="detail-value">${oferta.tipoVehiculo} - ${oferta.carroceria}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Capacidad por Vehículo</div>
                    <div class="detail-value">${oferta.capacidad} toneladas</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">Valor Oferta</div>
                    <div class="detail-value">$${oferta.valor}</div>
                </div>
            </div>
            <div class="oferta-actions">
                <button class="btn btn-success" onclick="aceptarOferta('${oferta.id}')">Aceptar Oferta</button>
        `;
        
        // Solo mostrar botón de rechazo si es oferta de generador
        if (oferta.tipoCliente === 'generador') {
            ofertaHTML += `<button class="btn btn-danger" onclick="rechazarOferta('${oferta.id}')">Rechazar Oferta</button>`;
        }
        
        ofertaHTML += `</div>`;
        
        ofertaCard.innerHTML = ofertaHTML;
        container.appendChild(ofertaCard);
    });
}

function aceptarOferta(id) {
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas'));
    const ofertaIndex = ofertas.findIndex(o => o.id === id);
    
    if (ofertaIndex !== -1) {
        currentOfertaId = id;
        currentOfertaData = ofertas[ofertaIndex];
        
        // Mostrar información de la oferta en el modal
        document.getElementById('infoOfertaAsignacion').innerHTML = `
            <p><strong>Código:</strong> ${currentOfertaData.codigo}</p>
            <p><strong>Origen:</strong> ${currentOfertaData.origen}</p>
            <p><strong>Destino:</strong> ${currentOfertaData.destino}</p>
            <p><strong>Tonelaje:</strong> ${currentOfertaData.tonelaje} toneladas</p>
            <p><strong>Vehículos requeridos:</strong> ${currentOfertaData.vehiculosRequeridos}</p>
            <p><strong>Tipo de vehículo:</strong> ${currentOfertaData.tipoVehiculo}</p>
            <p><strong>Configuración:</strong> ${currentOfertaData.configuracion}</p>
            <p><strong>Carrocería:</strong> ${currentOfertaData.carroceria}</p>
            <p><strong>Capacidad:</strong> ${currentOfertaData.capacidad}</p>
        `;
        
        // Simular búsqueda de flota disponible (filtrada por configuración solicitada)
        setTimeout(() => {
            const flotaDisponible = generarFlotaDisponible(currentOfertaData);
            mostrarFlotaDisponible(flotaDisponible, currentOfertaData);
            
            // Si la opción es asignar toda la flota automáticamente, marcamos todos los checkboxes
            if (document.querySelector('input[name="asignacionOption"][value="total"]').checked) {
                document.querySelectorAll('.asignar-vehiculo').forEach(checkbox => {
                    checkbox.checked = true;
                });
            }
        }, 500);
        
        // Mostrar modal de asignación
        document.getElementById('asignacionModal').style.display = 'flex';
    }
}

// Función para generar flota disponible simulada (FILTRADA por configuración de oferta)
function generarFlotaDisponible(oferta) {
    // En una implementación real, esto vendría de una API con filtro por GPS y configuración
    const flota = [];
    
    // Generar entre 3 y 8 vehículos disponibles que coincidan con la oferta
    const cantidad = Math.floor(Math.random() * 6) + 3;
    
    for (let i = 0; i < cantidad; i++) {
        const distancia = (Math.random() * 10).toFixed(2); // Menos de 10 km
        
        flota.push({
            id: `VH-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            tipo: oferta.tipoVehiculo,
            configuracion: oferta.configuracion,
            carroceria: oferta.carroceria,
            capacidad: oferta.capacidad.replace(',', '.'),
            distancia: distancia,
            conductor: `Conductor ${i+1}`,
            telefono: `+57 3${Math.floor(Math.random() * 100000000)}`,
            asignado: false,
            ubicacionActual: `Ubicación simulada ${i+1}`,
            estado: 'Disponible'
        });
    }
    
    return flota;
}

// Función para mostrar flota disponible en el modal (CON SCROLL)
function mostrarFlotaDisponible(flota, oferta) {
    const container = document.getElementById('flotaDisponibleContainer');
    container.innerHTML = '';
    
    if (flota.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p>No hay vehículos disponibles que coincidan con los requerimientos:</p>
                <p><strong>Tipo:</strong> ${oferta.tipoVehiculo}</p>
                <p><strong>Configuración:</strong> ${oferta.configuracion}</p>
                <p><strong>Carrocería:</strong> ${oferta.carroceria}</p>
                <p><strong>Capacidad:</strong> ${oferta.capacidad}</p>
            </div>
        `;
        return;
    }
    
    const table = document.createElement('table');
    table.style.width = '100%';
    
    // Cabecera de la tabla
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Configuración</th>
            <th>Carrocería</th>
            <th>Capacidad (ton)</th>
            <th>Distancia (km)</th>
            <th>Conductor</th>
            <th>Asignar</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    
    flota.forEach(vehiculo => {
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--border)';
        
        row.innerHTML = `
            <td style="padding: 10px;">${vehiculo.id}</td>
            <td style="padding: 10px;">${vehiculo.tipo}</td>
            <td style="padding: 10px;">${vehiculo.configuracion}</td>
            <td style="padding: 10px;">${vehiculo.carroceria}</td>
            <td style="padding: 10px;">${vehiculo.capacidad}</td>
            <td style="padding: 10px;">${vehiculo.distancia}</td>
            <td style="padding: 10px;">${vehiculo.conductor}</td>
            <td style="padding: 10px;">
                <input type="checkbox" class="asignar-vehiculo" data-id="${vehiculo.id}" 
                    ${vehiculo.asignado ? 'checked' : ''}>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
}

// Función para confirmar asignación
function confirmarAsignacion() {
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas'));
    const ofertaIndex = ofertas.findIndex(o => o.id === currentOfertaId);
    
    if (ofertaIndex !== -1) {
        const asignacionOption = document.querySelector('input[name="asignacionOption"]:checked').value;
        const publicarTerceros = document.getElementById('publicarTerceros').checked;
        
        // Calcular tonelaje asignado a flota propia
        const vehiculosAsignados = asignacionOption === 'ninguna' ? 0 : 
            asignacionOption === 'total' ? 
                document.querySelectorAll('.asignar-vehiculo').length : 
                Array.from(document.querySelectorAll('.asignar-vehiculo:checked')).length;
        
        const capacidadVehiculo = parseFloat(currentOfertaData.capacidad.replace(',', '.'));
        const tonelajeAsignado = vehiculosAsignados * capacidadVehiculo;
        const tonelajePendiente = parseFloat(currentOfertaData.tonelaje) - tonelajeAsignado;
        
        // Actualizar estado de la oferta
        ofertas[ofertaIndex].estado = 'asignacion_parcial';
        ofertas[ofertaIndex].tonelajeAsignado = tonelajeAsignado;
        ofertas[ofertaIndex].tonelajeDisponible = tonelajePendiente;
        ofertas[ofertaIndex].vehiculosAsignados = vehiculosAsignados;
        ofertas[ofertaIndex].publicarTerceros = publicarTerceros;
        
        sessionStorage.setItem('ofertas', JSON.stringify(ofertas));
        
        // Mostrar mensaje de confirmación mejorado
        const tipoAsignacion = asignacionOption === 'total' ? 
            `Completa (${vehiculosAsignados}/${vehiculosAsignados} vehículos propios asignados)` : 
            asignacionOption === 'parcial' ? 
                `Parcial (${vehiculosAsignados} vehículos propios asignados)` :
                `Sin asignación de flota propia`;
        
        const mensaje = `
            <div class="confirmacion-item">
                <strong>Tipo de asignación:</strong> 
                <span>${tipoAsignacion}</span>
            </div>
            <div class="confirmacion-item">
                <strong>Tonelaje asignado a flota propia:</strong> 
                <span>${tonelajeAsignado} ton</span>
            </div>
            <div class="confirmacion-item">
                <strong>Tonelaje pendiente por asignar:</strong> 
                <span>${tonelajePendiente} ton</span>
            </div>
            <div class="confirmacion-item">
                <strong>Publicación a terceros:</strong> 
                <span>${publicarTerceros ? 'Activada' : 'Desactivada'}</span>
            </div>
            ${publicarTerceros ? `
            <div style="margin-top: 20px; padding: 15px; background: rgba(26, 188, 156, 0.1); border-radius: 6px;">
                <p>El sistema continuará monitoreando nuevos vehículos propios que entren al área de cobertura para asignarlos automáticamente.</p>
                ${tonelajePendiente > 0 ? `<p>La carga restante (${tonelajePendiente} ton) será publicada a terceros.</p>` : ''}
            </div>
            ` : ''}
        `;
        
        document.getElementById('confirmacionBody').innerHTML = mensaje;
        document.getElementById('confirmacionModal').style.display = 'flex';
        
        // Ocultar modal de asignación
        cancelarAsignacion();
    }
}

function continuarPublicacionTerceros() {
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas'));
    const ofertaIndex = ofertas.findIndex(o => o.id === currentOfertaId);
    
    if (ofertaIndex !== -1 && ofertas[ofertaIndex].publicarTerceros && ofertas[ofertaIndex].tonelajeDisponible > 0) {
        // Llenar formulario para terceros con datos de la oferta
        document.getElementById('tercerosCodigo').value = currentOfertaData.codigo;
        document.getElementById('tercerosEmpresa').value = currentOfertaData.empresa;
        document.getElementById('tercerosRuta').value = `${currentOfertaData.origen} → ${currentOfertaData.destino}`;
        document.getElementById('tercerosTonelaje').value = `${currentOfertaData.tonelajeDisponible} toneladas`;
        document.getElementById('tercerosVehiculo').value = `${currentOfertaData.tipoVehiculo} - ${currentOfertaData.carroceria}`;
        document.getElementById('tercerosFecha').value = new Date(currentOfertaData.fecha).toLocaleString();
        
        // Mostrar vista de formulario para terceros
        document.getElementById('confirmacionModal').style.display = 'none';
        showView('form-terceros');
    } else {
        cerrarConfirmacion();
        cargarOfertasActivas();
        actualizarContadores();
    }
}

function publicarATerceros() {
    const valorTercero = document.getElementById('tercerosValor').value;
    const observaciones = document.getElementById('tercerosObservaciones').value;
    
    if (!valorTercero) {
        alert('Por favor ingrese el valor a pagar por tonelada');
        return;
    }
    
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas'));
    const ofertaIndex = ofertas.findIndex(o => o.id === currentOfertaId);
    
    if (ofertaIndex !== -1) {
        ofertas[ofertaIndex].valorTerceros = valorTercero;
        ofertas[ofertaIndex].observacionesTerceros = observaciones;
        ofertas[ofertaIndex].estado = 'publicada_terceros';
        ofertas[ofertaIndex].fechaPublicacionTerceros = new Date().toISOString();
        ofertas[ofertaIndex].tonelajePublicadoTerceros = ofertas[ofertaIndex].tonelajeDisponible;
        ofertas[ofertaIndex].tonelajeDisponible = 0;
        
        sessionStorage.setItem('ofertas', JSON.stringify(ofertas));
        
        alert(`Carga publicada exitosamente a terceros con valor de $${valorTercero} por tonelada`);
        
        // Volver a gestión de carga
        showView('gestion-carga');
        cargarOfertasActivas();
        actualizarContadores();
    }
}

function cerrarConfirmacion() {
    document.getElementById('confirmacionModal').style.display = 'none';
    cargarOfertasActivas();
    actualizarContadores();
}

function cancelarAsignacion() {
    document.getElementById('asignacionModal').style.display = 'none';
    currentOfertaId = '';
    currentOfertaData = null;
}

function rechazarOferta(id) {
    currentOfertaId = id;
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas'));
    const oferta = ofertas.find(o => o.id === id);
    
    if (oferta && oferta.publicacion === 'cerrada') {
        // Mostrar modal para ingresar motivo de rechazo
        document.getElementById('rechazoModal').style.display = 'flex';
    } else {
        // Rechazo simple para ofertas públicas
        const ofertaIndex = ofertas.findIndex(o => o.id === id);
        
        if (ofertaIndex !== -1) {
            ofertas[ofertaIndex].estado = 'rechazada';
            sessionStorage.setItem('ofertas', JSON.stringify(ofertas));
            alert('Oferta rechazada');
            cargarOfertasActivas();
            actualizarContadores();
        }
    }
}

function confirmarRechazo() {
    const motivo = document.getElementById('motivoRechazo').value;
    
    if (!motivo) {
        alert('Por favor ingrese el motivo del rechazo');
        return;
    }
    
    const ofertas = JSON.parse(sessionStorage.getItem('ofertas'));
    const ofertaIndex = ofertas.findIndex(o => o.id === currentOfertaId);
    
    if (ofertaIndex !== -1) {
        ofertas[ofertaIndex].estado = 'rechazada';
        ofertas[ofertaIndex].motivoRechazo = motivo;
        sessionStorage.setItem('ofertas', JSON.stringify(ofertas));
        
        // Simular envío de notificación y correo con más detalle
        const oferta = ofertas[ofertaIndex];
        const mensajeNotificacion = `
            Oferta ${oferta.codigo} rechazada:
            - Empresa: ${oferta.empresa}
            - Ruta: ${oferta.origen} → ${oferta.destino}
            - Tonelaje: ${oferta.tonelaje} ton
            - Motivo: ${motivo}
        `;
        
        console.log(`Notificación enviada a generador:\n${mensajeNotificacion}`);
        console.log(`Correo enviado a ${oferta.empresa} con motivo de rechazo`);
        
        alert('Oferta rechazada. Se ha notificado al generador por la aplicación y por correo electrónico.');
        
        // Cerrar modal y actualizar vista
        cancelarRechazo();
        cargarOfertasActivas();
        actualizarContadores();
    }
}

function cancelarRechazo() {
    document.getElementById('rechazoModal').style.display = 'none';
    document.getElementById('motivoRechazo').value = '';
    currentOfertaId = '';
}

// Control del sidebar en móviles
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('visible');
}

function hideSidebar() {
    document.getElementById('sidebar').classList.remove('visible');
}

// Navegación entre vistas
function showView(view) {
    // Ocultar todas las vistas primero
    document.getElementById('inicioView').style.display = 'none';
    document.getElementById('gestionCargaView').style.display = 'none';
    document.getElementById('formView').style.display = 'none';
    document.getElementById('ofertasActivasView').style.display = 'none';
    document.getElementById('formTercerosView').style.display = 'none';
    
    // Mostrar la vista seleccionada
    if (view === 'inicio') {
        document.getElementById('inicioView').style.display = 'block';
        // Quitar activo de todos los items del menú
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        // Generar gráficos cada vez que se muestra la vista de inicio
        generarGraficos();
    } 
    else if (view === 'gestion-carga') {
        document.getElementById('gestionCargaView').style.display = 'block';
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.menu-item')[0].classList.add('active');
        actualizarContadores();
    } 
    else if (view === 'form') {
        document.getElementById('formView').style.display = 'block';
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.menu-item')[0].classList.add('active');
    } 
    else if (view === 'ofertas-activas') {
        document.getElementById('ofertasActivasView').style.display = 'block';
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.menu-item')[0].classList.add('active');
        cargarOfertasActivas();
    }
    else if (view === 'form-terceros') {
        document.getElementById('formTercerosView').style.display = 'block';
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.menu-item')[0].classList.add('active');
    }
    
    // Ocultar sidebar en móviles después de seleccionar
    if (window.innerWidth <= 992) {
        hideSidebar();
    }
}

// Cerrar sidebar al hacer clic fuera en móviles
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth <= 992 && 
        !sidebar.contains(event.target) && 
        event.target !== menuBtn) {
        hideSidebar();
    }
});
