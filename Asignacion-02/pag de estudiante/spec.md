`spec.md`

```markdown
# Especificaciones Técnicas del Proyecto (Spec)

## 1. Stack Tecnológico de Desarrollo
* **Entorno de Ejecución:** Node.js
* **Herramienta de Construcción (Bundler):** Vite v8.0.14
* **Librería Core:** React v19
* **Framework de Diseño:** Tailwind CSS v4.x (Compilador Nativo)

## 2. Dependencias de Desarrollo Estrictas (`devDependencies`)
El archivo `package.json` debe asegurar la presencia y sincronización de las siguientes herramientas de procesamiento:
* `@tailwindcss/vite`: Plugin de integración directa para el empaquetado.
* `tailwindcss`: Motor de diseño y procesamiento de utilidades.

## 3. Arquitectura del Archivo de Configuración de Vite
El archivo `vite.config.js` queda definido bajo la siguiente especificación técnica obligatoria para admitir el procesamiento de estilos:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})