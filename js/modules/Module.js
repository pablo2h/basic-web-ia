export default class Module {
    constructor(id, title, content, imageUrl, position, connections) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.position = position;
        this.connections = connections;
        this.element = null;
    }

    /**
     * Crea el elemento DOM del módulo y lo inserta en el contenedor
     */
    createElement() {
        const moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module', 'shadow');
        moduleDiv.id = this.id;

        // Contenido del módulo
        moduleDiv.innerHTML = `
            <h3>${this.title}</h3>
            <img src="${this.imageUrl}" alt="${this.title}">
            <p>${this.content}</p>
        `;

        this.element = moduleDiv;
        document.getElementById('modulesContainer').insertBefore(moduleDiv, document.getElementById('sentinel'));
    }

    /**
     * Muestra el módulo con animación
     */
    show() {
        // Añadir la clase 'visible' para activar la animación
        setTimeout(() => {
            this.element.classList.add('visible');
        }, 100); // Pequeño retardo para la transición
    }

    /**
     * Oculta el módulo con animación
     */
    hide() {
        this.element.classList.remove('visible');
    }
}