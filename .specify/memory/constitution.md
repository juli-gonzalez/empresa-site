<!--
  Sync Impact Report
  Version change: n/a (initial ratification) → 1.0.0
  Modified principles: none (initial)
  Added: Principles I-V, Section: Stack & Dependencies, Section: Development Workflow
  Removed: none
  Templates requiring updates: plan ✅ (Constitution Check gate), spec ✅, tasks ✅
  Follow-up TODOs: none deferred
-->
# Empresa-Site Constitution

## Core Principles

### I. Resultados de negocio, no tecnología (NON-NEGOTIABLE)

El sitio público vende resultados al cliente: métricas, soluciones
implementadas y confianza. El contenido NO debe exponer tecnologías,
lenguajes, frameworks ni detalles de implementación interna. Cualquier
mención de stack es ruido para el decisor de compra.

### II. Landing estática, sin frameworks (NON-NEGOTIABLE)

El sitio es HTML/CSS/JS vanilla: cero dependencias, cero build, cero
runtime. No se agrega ninguna librería externa salvo que exista una razón
de producto verificable. Si un cambio requiere una dependencia, el plan
debe justificarlo explícitamente.

### III. Accesibilidad y movimiento reducido

Todo efecto de motion (animaciones, carousel, autoplay) debe respetar
`prefers-reduced-motion` y no bloquear la navegación ni el contenido si
JavaScript no está disponible. Contraste legible en todo estado.

### IV. Placeholders explícitos

Todo dato real de la empresa (nombre, dominio, testimonios, clientes,
métricas, contacto, redes) se marca como placeholder editable
(`TU-EMPRESA`, `TU-CLIENTE-1`, etc.) para reemplazo global posterior. No
inventar datos reales.

### V. Simplicidad y YAGNI

El código más corto que funciona es el correcto. Se reusa lo existente
antes de reimplementar. No se agregan secciones, abstracciones ni features
especulativas. El detalle de cada atajo consciente se marca con un
comentario `ponytail:` que nombre el techo y el camino de upgrade.

## Stack & Dependencies

- Archivos: `index.html`, `style.css`, `script.js`, `favicon.svg`, `og-image.svg`.
- Sin fuentes locales: Google Fonts (Sora + Inter) vía `<link>`, con fallback `system-ui`.
- Sin backend en esta iteración: el formulario usa `mailto:` provisional (marcado `ponytail:`); el envío real (SMTP/servicio) se define en deploy con dominio.
- Feature "casos de uso interactivo" (sección no-landing que guía al usuario) queda fuera del sitio público; se planifica como feature futura separada.

## Development Workflow

- Toda feature o cambio de comportamiento pasa por Spec Kit: `/speckit-specify` → `/speckit-plan` → `/speckit-tasks` → `/speckit-implement`. Ver `specs/FEATURES.md` para estado por feature.
- El spec se escribe sin detalles de implementación (WHAT/WHY, no HOW).
- Se respeta el estilo existente de los archivos; difs cortos; no reformatear código ajeno al cambio.
- Verificación: `node --check script.js` + inspección visual en navegador (abrir `index.html`). No hay suite de tests; no se inventa una.

## Governance

- La constitución se enmienda por PR que documente, apruebe y describa la migración.
- Cada feature actualiza su fila en `specs/FEATURES.md` (estado, horas reales). La aprobación la da una persona distinta de quien implementa — nunca auto-aprobación.
- Si un cambio contradice un principio NON-NEGOTIABLE, requiere enmienda de constitución antes de implementarse.

**Version**: 1.0.0 | **Ratified**: 2026-08-08 | **Last Amended**: 2026-08-08
