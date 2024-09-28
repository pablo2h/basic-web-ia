import Module from './Module.js';
import { modulesData } from '../data/modulesData.js';

export default class ModuleManager {
    constructor() {
        this.modules = [];
        this.currentIndex = {};
        this.modulesByCategory = this.groupModulesByCategory();
    }

    // Agrupar módulos por categoría
    groupModulesByCategory() {
        const categories = ['history', 'education', 'design', 'programming', 'project-info'];
        const grouped = {};

        categories.forEach(category => {
            grouped[category] = modulesData.filter(module => module.category === category);
            this.currentIndex[category] = 0;
        });

        return grouped;
    }

    // Crear y retornar un módulo basado en datos
    createModule(data) {
        const module = new Module(
            data.id,
            data.title,
            data.content,
            data.imageUrl,
            data.position,
            data.connections
        );
        module.createElement();
        this.modules.push(module);
        return module;
    }

    // Obtener el siguiente módulo a cargar según la categoría
    getNextModule(category) {
        if (category && this.modulesByCategory[category]) {
            const currentCategoryModules = this.modulesByCategory[category];
            const categoryIndex = this.currentIndex[category];

            if (categoryIndex < currentCategoryModules.length) {
                const data = currentCategoryModules[categoryIndex];
                this.currentIndex[category]++;
                return data;
            }
        }

        return null; // No hay más módulos para cargar
    }

    // Método para buscar un módulo por ID
    getModuleById(id) {
        return this.modules.find(module => module.id === id);
    }

    // Resetea el índice para una nueva categoría
    reset(category) {
        if (category && this.currentIndex.hasOwnProperty(category)) {
            this.currentIndex[category] = 0;
        }
    }
}