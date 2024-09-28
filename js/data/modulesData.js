export const modulesData = [
    // Historia de la IA
    {
        id: 'first-computer',
        title: 'Primera Computadora',
        content: 'La creación de la primera computadora digital electrónica marcó el inicio de la era de la computación moderna.',
        imageUrl: 'assets/images/first-computer.jpg',
        position: { x: '50%', y: '10%' },
        connections: ['turing-test'],
        category: 'history'
    },
    {
        id: 'turing-test',
        title: 'Test de Turing',
        content: 'Alan Turing propuso el Test de Turing como una medida para determinar si una máquina puede exhibir comportamiento inteligente indistinguible del humano.',
        imageUrl: 'assets/images/turing-test.jpg',
        position: { x: '50%', y: '30%' },
        connections: ['expert-systems'],
        category: 'history'
    },
    {
        id: 'expert-systems',
        title: 'Sistemas Expertos',
        content: 'En los años 70, los sistemas expertos como MYCIN demostraron la capacidad de las máquinas para tomar decisiones basadas en conocimiento especializado.',
        imageUrl: 'assets/images/expert-systems.jpg',
        position: { x: '50%', y: '50%' },
        connections: ['deep-blue'],
        category: 'history'
    },
    {
        id: 'deep-blue',
        title: 'Deep Blue vs Kasparov',
        content: 'En 1997, Deep Blue de IBM venció al campeón mundial de ajedrez Garry Kasparov, demostrando el poder de las máquinas en tareas complejas.',
        imageUrl: 'assets/images/deep-blue.jpg',
        position: { x: '50%', y: '70%' },
        connections: ['siri'],
        category: 'history'
    },
    // Educación
    {
        id: 'siri',
        title: 'Siri: Asistente Virtual',
        content: 'Lanzada en 2011, Siri de Apple introdujo a millones de usuarios a los asistentes virtuales impulsados por IA.',
        imageUrl: 'assets/images/siri.jpg',
        position: { x: '50%', y: '90%' },
        connections: ['alpha-go'],
        category: 'education'
    },
    {
        id: 'alpha-go',
        title: 'AlphaGo vs Lee Sedol',
        content: 'En 2016, AlphaGo de DeepMind derrotó al campeón mundial de Go Lee Sedol, un hito en el aprendizaje profundo y las redes neuronales.',
        imageUrl: 'assets/images/alpha-go.jpg',
        position: { x: '50%', y: '110%' },
        connections: ['gpt'],
        category: 'education'
    },
    // Diseño
    {
        id: 'gpt',
        title: 'GPT: Modelos de Lenguaje',
        content: 'Los modelos de lenguaje GPT han transformado la manera en que interactuamos con las máquinas, permitiendo conversaciones más naturales y contextuales.',
        imageUrl: 'assets/images/gpt.jpg',
        position: { x: '50%', y: '130%' },
        connections: ['chatgpt'],
        category: 'design'
    },
    // Programación
    {
        id: 'chatgpt',
        title: 'ChatGPT',
        content: 'Desarrollado por OpenAI, ChatGPT es un avanzado modelo de lenguaje que puede generar texto coherente, responder preguntas y mantener conversaciones fluidas con los usuarios.',
        imageUrl: 'assets/images/chatgpt.jpg',
        position: { x: '50%', y: '150%' },
        connections: [],
        category: 'programming'
    },
    {
        id: 'machine-learning',
        title: 'Aprendizaje Automático',
        content: 'El aprendizaje automático, una subdisciplina de la IA, permite a las máquinas aprender de los datos y mejorar con la experiencia sin ser programadas explícitamente.',
        imageUrl: 'assets/images/machine-learning.jpg',
        position: { x: '50%', y: '170%' },
        connections: [],
        category: 'programming'
    },
    {
        id: 'neural-networks',
        title: 'Redes Neuronales',
        content: 'Las redes neuronales imitan el funcionamiento del cerebro humano para procesar información y reconocer patrones complejos.',
        imageUrl: 'assets/images/neural-networks.jpg',
        position: { x: '50%', y: '190%' },
        connections: [],
        category: 'programming'
    },
    // Explicación del Proyecto
    {
        id: 'project-info',
        title: 'Explicación del Proyecto',
        content: 'Este proyecto tiene como objetivo presentar de manera interactiva la historia de la inteligencia artificial, dividida en diferentes categorías: Historia, Educación, Diseño y Programación. A través de módulos conectados, los usuarios pueden explorar los hitos más importantes y entender cómo ha evolucionado la IA a lo largo del tiempo.',
        imageUrl: 'assets/images/project-info.jpg',
        position: { x: '50%', y: '210%' },
        connections: [],
        category: 'project-info'
    },
    {
        id: 'tutor-virtual',
        title: 'Tutores Virtuales con IA',
        content: 'Los tutores virtuales impulsados por IA brindan apoyo personalizado a los estudiantes, adaptándose a sus ritmos y estilos de aprendizaje.',
        imageUrl: 'assets/images/tutor-virtual.jpg',
        position: { x: '50%', y: '230%' },
        connections: ['adaptive-learning'],
        category: 'education'
    },
    {
        id: 'sistemas-adaptativos',
        title: 'Sistemas Adaptativos de Aprendizaje',
        content: 'Estos sistemas utilizan algoritmos de IA para ajustar el contenido educativo según las necesidades individuales de cada estudiante.',
        imageUrl: 'assets/images/adaptive-learning.jpg',
        position: { x: '50%', y: '250%' },
        connections: ['analytics-educativos'],
        category: 'education'
    },
    {
        id: 'analytics-educativos',
        title: 'Analytics Educativos',
        content: 'La analítica educativa basada en IA permite a las instituciones monitorear el rendimiento académico y detectar áreas que requieren mejora.',
        imageUrl: 'assets/images/education-analytics.jpg',
        position: { x: '50%', y: '270%' },
        connections: ['contenidos-personalizados'],
        category: 'education'
    },
    {
        id: 'contenidos-personalizados',
        title: 'Contenidos Personalizados',
        content: 'La IA posibilita la creación de contenidos educativos personalizados que se adaptan a las fortalezas y debilidades de cada estudiante.',
        imageUrl: 'assets/images/personalized-content.jpg',
        position: { x: '50%', y: '290%' },
        connections: ['realidad-aumentada'],
        category: 'education'
    },
    {
        id: 'realidad-aumentada',
        title: 'Realidad Aumentada en la Educación',
        content: 'La integración de la realidad aumentada con IA en materiales educativos enriquece la experiencia de aprendizaje mediante simulaciones interactivas.',
        imageUrl: 'assets/images/augmented-reality.jpg',
        position: { x: '50%', y: '310%' },
        connections: ['gamificacion'],
        category: 'education'
    },
    {
        id: 'gamificacion',
        title: 'Gamificación del Aprendizaje',
        content: 'La IA facilita la gamificación en la educación, haciendo que el aprendizaje sea más atractivo y motivador para los estudiantes.',
        imageUrl: 'assets/images/gamification.jpg',
        position: { x: '50%', y: '330%' },
        connections: ['educacion-remota'],
        category: 'education'
    },
    {
        id: 'educacion-remota',
        title: 'Educación Remota Potenciada por IA',
        content: 'La IA mejora la educación remota mediante plataformas que ofrecen experiencias de aprendizaje interactivas y personalizadas.',
        imageUrl: 'assets/images/remote-education.jpg',
        position: { x: '50%', y: '350%' },
        connections: ['asistentes-virtuales'],
        category: 'education'
    },
    {
        id: 'asistentes-virtuales',
        title: 'Asistentes Virtuales en el Aula',
        content: 'Los asistentes virtuales respaldados por IA ayudan a los docentes gestionando tareas administrativas y proporcionando recursos educativos adicionales.',
        imageUrl: 'assets/images/virtual-assistants.jpg',
        position: { x: '50%', y: '370%' },
        connections: ['evaluacion-automatizada'],
        category: 'education'
    },
    {
        id: 'evaluacion-automatizada',
        title: 'Evaluación Automatizada',
        content: 'La IA permite realizar evaluaciones automatizadas que proporcionan retroalimentación instantánea y precisa sobre el desempeño de los estudiantes.',
        imageUrl: 'assets/images/automated-assessment.jpg',
        position: { x: '50%', y: '390%' },
        connections: ['colaboracion-inteligente'],
        category: 'education'
    },
    {
        id: 'colaboracion-inteligente',
        title: 'Colaboración Inteligente',
        content: 'Herramientas de colaboración impulsadas por IA facilitan el trabajo en equipo entre estudiantes, optimizando la comunicación y la gestión de proyectos.',
        imageUrl: 'assets/images/intelligent-collaboration.jpg',
        position: { x: '50%', y: '410%' },
        connections: [],
        category: 'education'
    },
    // Diseño
    {
        id: 'ui-ux',
        title: 'Diseño UI/UX',
        content: 'El diseño UI/UX enfoca en crear interfaces intuitivas y experiencias de usuario optimizadas, esenciales para aplicaciones modernas.',
        imageUrl: 'assets/images/ui-ux.jpg',
        position: { x: '50%', y: '430%' },
        connections: ['responsive-design'],
        category: 'design'
    },
    {
        id: 'responsive-design',
        title: 'Diseño Responsivo',
        content: 'El diseño responsivo asegura que las aplicaciones y sitios web se adapten a diferentes tamaños de pantalla y dispositivos.',
        imageUrl: 'assets/images/responsive-design.jpg',
        position: { x: '50%', y: '450%' },
        connections: ['prototipado'],
        category: 'design'
    },
    {
        id: 'prototipado',
        title: 'Prototipado Rápido',
        content: 'El prototipado rápido permite crear versiones preliminares de productos para probar ideas y recibir retroalimentación temprana.',
        imageUrl: 'assets/images/prototyping.jpg',
        position: { x: '50%', y: '470%' },
        connections: ['design-thinking'],
        category: 'design'
    },
    {
        id: 'design-thinking',
        title: 'Design Thinking',
        content: 'El Design Thinking es una metodología centrada en el usuario para resolver problemas de manera creativa e innovadora.',
        imageUrl: 'assets/images/design-thinking.jpg',
        position: { x: '50%', y: '490%' },
        connections: ['wireframing'],
        category: 'design'
    },
    {
        id: 'wireframing',
        title: 'Wireframing',
        content: 'El wireframing es una técnica para esbozar la estructura básica de una interfaz antes de agregar detalles de diseño.',
        imageUrl: 'assets/images/wireframing.jpg',
        position: { x: '50%', y: '510%' },
        connections: ['branding'],
        category: 'design'
    },
    {
        id: 'branding',
        title: 'Branding Digital',
        content: 'El branding digital se enfoca en crear una identidad de marca coherente y atractiva a través de plataformas digitales.',
        imageUrl: 'assets/images/branding.jpg',
        position: { x: '50%', y: '530%' },
        connections: ['user-testing'],
        category: 'design'
    },
    {
        id: 'user-testing',
        title: 'Pruebas de Usuario',
        content: 'Las pruebas de usuario son esenciales para evaluar la usabilidad y efectividad de un diseño desde la perspectiva del usuario final.',
        imageUrl: 'assets/images/user-testing.jpg',
        position: { x: '50%', y: '550%' },
        connections: ['animation-design'],
        category: 'design'
    },
    {
        id: 'animation-design',
        title: 'Animación en Diseño',
        content: 'La animación en diseño agrega dinamismo y mejora la interacción, haciendo que las interfaces sean más atractivas y funcionales.',
        imageUrl: 'assets/images/animation-design.jpg',
        position: { x: '50%', y: '570%' },
        connections: ['accessibility-design'],
        category: 'design'
    },
    {
        id: 'accessibility-design',
        title: 'Diseño Accesible',
        content: 'El diseño accesible asegura que las aplicaciones y sitios web sean utilizables por personas con diversas capacidades y necesidades.',
        imageUrl: 'assets/images/accessibility-design.jpg',
        position: { x: '50%', y: '590%' },
        connections: ['responsive-design'], // Ejemplo de conexión
        category: 'design'
    },
    {
        id: 'collaboration-tools',
        title: 'Herramientas de Colaboración',
        content: 'Las herramientas de colaboración facilitan el trabajo en equipo, permitiendo que diseñadores compartan y co-editen proyectos de manera eficiente.',
        imageUrl: 'assets/images/collaboration-tools.jpg',
        position: { x: '50%', y: '610%' },
        connections: [],
        category: 'design'
    },

    // Programación
    {
        id: 'frontend-frameworks',
        title: 'Frameworks Frontend',
        content: 'Frameworks como React, Angular y Vue.js facilitan el desarrollo de interfaces de usuario dinámicas y responsivas.',
        imageUrl: 'assets/images/frontend-frameworks.jpg',
        position: { x: '50%', y: '630%' },
        connections: ['backend-integration'],
        category: 'programming'
    },
    {
        id: 'backend-integration',
        title: 'Integración Backend',
        content: 'La integración backend permite que las aplicaciones frontend se comuniquen eficientemente con el servidor y la base de datos.',
        imageUrl: 'assets/images/backend-integration.jpg',
        position: { x: '50%', y: '650%' },
        connections: ['api-development'],
        category: 'programming'
    },
    {
        id: 'api-development',
        title: 'Desarrollo de APIs',
        content: 'El desarrollo de APIs es crucial para permitir la comunicación entre diferentes servicios y aplicaciones, facilitando la escalabilidad.',
        imageUrl: 'assets/images/api-development.jpg',
        position: { x: '50%', y: '670%' },
        connections: ['authentication'],
        category: 'programming'
    },
    {
        id: 'authentication',
        title: 'Autenticación y Seguridad',
        content: 'Implementar sistemas de autenticación robustos asegura que solo usuarios autorizados puedan acceder a ciertos recursos y funcionalidades.',
        imageUrl: 'assets/images/authentication.jpg',
        position: { x: '50%', y: '690%' },
        connections: ['database-management'],
        category: 'programming'
    },
    {
        id: 'database-management',
        title: 'Gestión de Bases de Datos',
        content: 'La gestión eficiente de bases de datos es esencial para almacenar, recuperar y manejar grandes volúmenes de datos de manera segura y rápida.',
        imageUrl: 'assets/images/database-management.jpg',
        position: { x: '50%', y: '710%' },
        connections: ['devops'],
        category: 'programming'
    },
    {
        id: 'devops',
        title: 'DevOps y Automatización',
        content: 'DevOps integra el desarrollo y las operaciones para mejorar la eficiencia, permitiendo despliegues continuos y automatización de tareas.',
        imageUrl: 'assets/images/devops.jpg',
        position: { x: '50%', y: '730%' },
        connections: ['cloud-computing'],
        category: 'programming'
    },
    {
        id: 'cloud-computing',
        title: 'Computación en la Nube',
        content: 'La computación en la nube ofrece recursos escalables y flexibles para el desarrollo y despliegue de aplicaciones, reduciendo costos y mejorando la accesibilidad.',
        imageUrl: 'assets/images/cloud-computing.jpg',
        position: { x: '50%', y: '750%' },
        connections: ['microservices'],
        category: 'programming'
    },
    {
        id: 'microservices',
        title: 'Microservicios',
        content: 'La arquitectura de microservicios divide las aplicaciones en servicios pequeños e independientes, facilitando el mantenimiento y la escalabilidad.',
        imageUrl: 'assets/images/microservices.jpg',
        position: { x: '50%', y: '770%' },
        connections: ['ci-cd'],
        category: 'programming'
    },
    {
        id: 'ci-cd',
        title: 'CI/CD (Integración Continua y Despliegue Continuo)',
        content: 'CI/CD automatiza las etapas de desarrollo, prueba y despliegue, acelerando el ciclo de vida de las aplicaciones y mejorando la calidad del código.',
        imageUrl: 'assets/images/ci-cd.jpg',
        position: { x: '50%', y: '790%' },
        connections: ['version-control'],
        category: 'programming'
    },
    {
        id: 'version-control',
        title: 'Control de Versiones',
        content: 'Herramientas de control de versiones como Git permiten gestionar y rastrear cambios en el código, facilitando la colaboración entre desarrolladores.',
        imageUrl: 'assets/images/version-control.jpg',
        position: { x: '50%', y: '810%' },
        connections: [],
        category: 'programming'
    },

    // Explicación del Proyecto
    {
        id: 'project-info',
        title: 'Explicación del Proyecto',
        content: 'Este proyecto tiene como objetivo presentar de manera interactiva la historia de la inteligencia artificial, dividida en diferentes categorías: Historia, Educación, Diseño y Programación. A través de módulos conectados, los usuarios pueden explorar los hitos más importantes y entender cómo ha evolucionado la IA a lo largo del tiempo.',
        imageUrl: 'assets/images/project-info.jpg',
        position: { x: '50%', y: '210%' },
        connections: [],
        category: 'project-info'
    },
    // Puedes agregar más módulos aquí según sea necesario
];