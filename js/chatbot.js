class Chatbot {
    constructor() {
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.lang = 'es-ES';
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        this.init();
    }

    init() {
        const chatButton = document.getElementById('chatButton');
        chatButton.addEventListener('click', () => this.startListening());
    }

    startListening() {
        this.recognition.start();
        console.log('Escuchando...');
    }

    handleResult(event) {
        const speechResult = event.results[0][0].transcript;
        console.log('Resultado:', speechResult);
        this.respond(speechResult);
    }

    respond(input) {
        let response = '';

        if (input.includes('Ayuda.')) {
            response = 'Claro, ¿en qué módulo necesitas ayuda?';
        } else if (input.includes('ruta de aprendizaje')) {
            response = 'Puedes comenzar seleccionando una categoría en la pantalla principal.';
        } else {
            response = 'Lo siento, no te he entendido. ¿Puedes repetirlo?';
        }

        this.speak(response);
    }

    speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
    }

    bindEvents() {
        this.recognition.addEventListener('result', (event) => this.handleResult(event));
        this.recognition.addEventListener('speechend', () => this.recognition.stop());
        this.recognition.addEventListener('error', (event) => console.error('Error:', event.error));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
    chatbot.bindEvents();
});