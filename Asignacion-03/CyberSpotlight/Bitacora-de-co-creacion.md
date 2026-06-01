📓 Bitácora de Co-creación con IA

Esta bitácora documenta el proceso iterativo, los desafíos resueltos y los hitos técnicos alcanzados durante el desarrollo de la landing page de CyberSpotlight.

📋 Hitos del Proyecto

Sesión 1: Conceptualización y Diseño de Arquitectura

Hito: Definición del buyer persona (desarrolladores y diseñadores junior frustrados con el formato PDF) y el estilo visual (minimalista, fondos blancos, acentos negros/grises).

Hito: Diseño de la experiencia interactiva de usuario. Se definió que el CTA principal fuera la selección del diseño del portafolio antes de abrir el formulario de registro.

Sesión 2: Codificación de la Estructura Modular

Hito: Creación del componente reutilizable FeatureCard alimentado por props.

Hito: Separación de los datos del contenido (FEATURES_DATA, TEMPLATES_DATA) en un archivo independiente (landingData.js) para evitar que los archivos de React crecieran innecesariamente.

Hito: Programación de la lógica de estados dinámicos en App.jsx para cambiar las propiedades de estilo (background, color, font-family, border-radius) en tiempo real en la vista previa del portafolio.

Sesión 3: Sesión de Debugging Técnico (Resolución de Errores)

Este fue el núcleo del aprendizaje práctico del proyecto. Pasamos de una plantilla por defecto de Vite a compilar el código modular superando varios obstáculos del sistema de archivos local:

El misterio de los archivos no guardados (Círculos blancos en VS Code): Aprendimos que el autoguardado o el guardado explícito (Ctrl + S) es crucial para que el compilador rápido (HMR) de Vite detecte las actualizaciones en caliente.

El "Typo" de la carpeta: Se corrigió un error ortográfico en el explorador de archivos (componets -> components). Esto nos recordó que JavaScript y Vite son sumamente estrictos con las rutas relativas.

Estilos heredados superpuestos: Se identificó que el archivo index.css que crea Vite por defecto chocaba estéticamente con nuestro diseño de App.css. La solución fue limpiar el archivo index.css por completo.

Archivo faltante de componente (FeatureCard.jsx): El compilador de Vite arrojó un error crítico de resolución de importación. Identificamos que faltaba crear físicamente el archivo FeatureCard.jsx en la carpeta /components, lo cual se resolvió creando el componente modular correspondiente.

💡 Lecciones Aprendidas

La Terminal es tu mejor amiga: Leer los logs de error de Vite (la pantalla roja del navegador y los mensajes amarillos de la consola) te dice exactamente la línea, el archivo y el carácter que están fallando.

Separación de Responsabilidades (SOC): Dividir el código en microcomponentes hace que encontrar errores sea diez veces más fácil que tener un archivo gigante de 1000 líneas.

Importancia del Case-Sensitivity: En sistemas operativos como Linux o entornos de producción como Vercel, importar ./components/header (con minúscula) cuando el archivo es Header.jsx romperá la compilación. Siempre hay que respetar la nomenclatura CamelCase.