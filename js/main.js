import ModuleManager from './modules/ModuleManager.js';

// Inicialización de Three.js en starsCanvas
function initializeStars() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: document.getElementById('starsCanvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Agregar estrellas
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 6000;
    const positions = [];

    for (let i = 0; i < starCount; i++) {
        positions.push(
            THREE.MathUtils.randFloatSpread(2000),
            THREE.MathUtils.randFloatSpread(2000),
            THREE.MathUtils.randFloatSpread(2000)
        );
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 1000;

    function animateStars() {
        requestAnimationFrame(animateStars);
        starField.rotation.x += 0.0005;
        starField.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animateStars();
}

// Función para dibujar conexiones entre módulos en connectionCanvas
function drawConnections(moduleManager) {
    const canvas = document.getElementById('connectionCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#00FFFF'; // Color cyan para las líneas
    ctx.lineWidth = 2;

    moduleManager.modules.forEach(module => {
        module.connections.forEach(connectionId => {
            const connectedModule = moduleManager.getModuleById(connectionId);
            if (connectedModule && connectedModule.element && module.element) {
                const moduleRect = module.element.getBoundingClientRect();
                const connectedRect = connectedModule.element.getBoundingClientRect();

                const startX = moduleRect.left + moduleRect.width / 2;
                const startY = moduleRect.top + moduleRect.height / 2;
                const endX = connectedRect.left + connectedRect.width / 2;
                const endY = connectedRect.top + connectedRect.height / 2;

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
        });
    });
}

// Obtiene el punto central de un elemento DOM
function getModuleCenter(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

// Cargar módulos iniciales
function loadModules(moduleManager, count, category) {
    for (let i = 0; i < count; i++) {
        const moduleData = moduleManager.getNextModule(category);
        if (moduleData) {
            const module = moduleManager.createModule(moduleData);
            module.show();
        } else {
            break; // No hay más módulos para cargar
        }
    }

    drawConnections(moduleManager);
}

// Manejar cambios de ruta y cargar los módulos correspondientes
function handleRouteChange(moduleManager) {
    const route = getCurrentRoute();
    moduleManager.reset(route);

    // Limpiar módulos actuales
    const modulesContainer = document.getElementById('modulesContainer');
    modulesContainer.innerHTML = '<div id="sentinel"></div>';

    // Cargar los primeros 5 módulos de la nueva categoría
    loadModules(moduleManager, 5, route);

    // Actualizar las conexiones
    drawConnections(moduleManager);
}

// Obtener la ruta actual desde el hash de la URL
function getCurrentRoute() {
    return window.location.hash.replace('#', '') || 'history';
}


// Configura los eventos de la barra de navegación
function setupNavbar(moduleManager) {
    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const route = link.getAttribute('data-route');
            window.location.hash = route;
            handleRouteChange(moduleManager);
        });
    });
}

// Inicializa la observación para el scroll infinito
function initializeInfiniteScroll(moduleManager) {
    const sentinel = document.getElementById('sentinel');

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            loadModules(moduleManager, 5, getCurrentRoute());
        }
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    });

    observer.observe(sentinel);
}

window.addEventListener('resize', () => {
    const moduleManager = new ModuleManager(); // Asegúrate de que esta instancia es correcta
    drawConnections(moduleManager);
});

document.addEventListener('DOMContentLoaded', () => {
    initializeStars();

    const moduleManager = new ModuleManager();
    setupNavbar(moduleManager);
    handleRouteChange(moduleManager);
    initializeInfiniteScroll(moduleManager);
});