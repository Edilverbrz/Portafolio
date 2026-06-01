⚡ CyberSpotlight (Tu Portafolio Tech)

"Los PDFs no compilan. Tu portafolio sí debería."

CyberSpotlight es una landing page modular e interactiva diseñada específicamente para estudiantes de desarrollo de software, diseñadores UI/UX junior y profesionales en transición hacia el sector IT. Su objetivo es resolver el problema de los currículums estáticos en PDF que no reflejan el talento técnico real de los candidatos.

🚀 Características Principales

Demostración Interactiva en Tiempo Real: Los reclutadores y usuarios pueden previsualizar tres estilos diferentes de portafolio (Neo-Minimalista, Cyberpunk Neon y Tech Executive) y ver cómo cambia la estética y la terminal simulada al instante.

Arquitectura de Componentes Modulares: Estructura limpia y desacoplada construida sobre React y Vite.

Diseño Responsivo Sin Dependencias: CSS puro hecho a mano para un rendimiento ultrarrápido y compatibilidad móvil absoluta.

Simulador de Consola/Terminal: Integra un bloque dinámico para emular la escritura de código según la estética seleccionada.

📂 Estructura de Carpetas

La arquitectura del proyecto sigue las mejores prácticas de organización modular:

src/
├── data/
│   └── landingData.js             # Datos estáticos del sitio (features, plantillas, testimonios)
├── components/
│   ├── Header.jsx                 # Barra de navegación sticky
│   ├── Hero.jsx                   # Sección principal con browser-mockup interactivo
│   ├── ProblemSection.jsx         # Sección informativa sobre las limitaciones del PDF
│   ├── FeatureCard.jsx            # Tarjeta de características (Componente reutilizable)
│   ├── FeaturesSection.jsx        # Grid de características renderizadas dinámicamente
│   ├── InteractiveSelector.jsx    # Catálogo de plantillas y simulador interactivo
│   ├── TestimonialsSection.jsx    # Sección de pruebas sociales
│   ├── RegistrationModal.jsx      # Modal de reserva de usuario y selección de estilo
│   └── Footer.jsx                 # Pie de página semántico
├── App.css                        # Estilos globales y responsivos (Mobile-First)
├── App.jsx                        # Orquestador del estado global
└── main.jsx                       # Punto de entrada de Vite para React


🛠️ Instalación y Uso Local

Para ejecutar este proyecto en tu entorno local, asegúrate de tener instalado Node.js y sigue estos pasos:

Clona el repositorio o crea una carpeta local.

Inicializa el proyecto con Vite (si estás partiendo de cero):

npm create vite@latest cyber-spotlight -- --template react


Instala todas las dependencias del sistema:

npm install


Coloca los archivos de este repositorio en tu carpeta src/.

Inicia el servidor de desarrollo local:

npm run dev


Abre tu navegador en: http://localhost:5173/

📝 Licencia

Este proyecto fue co-creado como una solución educativa para el sector tech. Siéntete libre de clonarlo, mejorarlo y adaptarlo para tu propia marca personal. 🚀