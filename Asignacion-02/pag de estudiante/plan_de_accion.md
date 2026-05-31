###  `plan_de_accion.md`

```markdown
# Plan de Acción y Despliegue en GitHub

Este documento detalla el procedimiento estándar para asegurar el control de versiones del portafolio y garantizar que el código se suba de forma limpia y funcional al repositorio remoto.

## Fase 1: Control de Calidad Local (Checklist Pre-Commit)
1. [ ] Ejecutar `npm run dev` y verificar que la terminal levante en verde sin errores `Internal Server Error`.
2. [ ] Validar en el navegador (`http://localhost:5173/`) que la foto personal se renderice correctamente.
3. [ ] Confirmar que el panel "Problems" de VS Code se mantenga en 0.

## Fase 2: Preparación del Repositorio Git
Abre tu terminal en VS Code y ejecuta los siguientes comandos en orden para preparar los archivos modificados:

```bash
# 1. Verificar el estado actual de los archivos editados
git status

# 2. Agregar todos los cambios al área de preparación (staging)
git add .

# 3. Crear el punto de control (Commit) detallando la migración técnica
git commit -m "Feat: configurar Tailwind v4 nativo con Vite y actualizar foto de perfil"