# Quickstart: Validación de "Refinar landing — enfoque en valor y resultados"

Guía de validación manual end-to-end. El sitio es estático; se valida en
navegador abriendo `index.html` localmente.

## Prerequisitos

- Navegador moderno (Chrome, Safari, Firefox, Edge) en desktop y modo móvil.
- Repo en `empresa-site/`, rama `001-refine-landing-value`.

## Setup

```bash
cd /Users/juligonzalez/Development/projects/empresa-site
open index.html
```

No hay build ni instalación de dependencias.

## Validación por historia de usuario

### US1 — La landing vende resultados, no tecnología

1. Scroll completo de la página.
   - **Esperado**: en ninguna sección aparece nombre de tecnología/lenguaje/framework (eliminada la sección Stack y su link del nav).
2. Abrir la sección antes llamada "Casos de uso".
   - **Esperado**: se titula "Soluciones implementadas" y cada card comunica un resultado/métrica, no una categoría de servicio.

### US2 — Carousel de testimonios

1. Ir a la sección de testimonios (desktop).
   - **Esperado**: las cards se desplazan horizontalmente a lo ancho de la página; la card central se ve nítida y las laterales translúcidas/atenuadas.
2. Hacer scroll/touch horizontal.
   - **Esperado**: el carousel "encaja" por card (snap).
3. No tocar nada ~4 segundos.
   - **Esperado**: avanza automáticamente al siguiente slide.
4. Pasar el cursor sobre el carousel.
   - **Esperado**: el autoplay se pausa; al sacarlo, se reanuda.
5. Activar "reducir movimiento" en el sistema y recargar.
   - **Esperado**: no hay autoplay ni animación de avance.

### US3 — Layout corregido

1. Sección FAQ (desktop).
   - **Esperado**: el acordeón está centrado horizontalmente en su sección.
2. Banda de CTA final.
   - **Esperado**: los botones están centrados.
3. Formulario de contacto.
   - **Esperado**: espaciado cómodo y compacto entre campos (sin exceso de aire vertical).
4. Menú superior.
   - **Esperado**: el botón "Contáctanos" es claramente legible sobre el fondo oscuro.

### US4 — Hero simplificado

1. Hero.
   - **Esperado**: exactamente dos CTAs: "Hablemos de tu proyecto" y "Agendar reunión".
   - **Esperado**: el botón "Ver servicios" ya no existe.

## Edge cases

- **Móvil**: el carousel responde a swipe y las cards mantienen ancho razonable (sin desborde horizontal de página).
- **Sin JS** (desactivar JS en devtools): las secciones siguen visibles y navegables; el carousel muestra las cards sin desplazamiento automático.

## Verificación técnica

```bash
node --check script.js
```

Esperado: sin errores de sintaxis.

## Contract de referencia

- Entidades y reglas de contenido: `data-model.md`.
- No hay interfaces externas (contracts/ no aplica).

## Definición de hecho

- Todas las validaciones de US1–US4 y edge cases pasan en desktop y móvil.
- `node --check script.js` sin errores.
- Contenido nuevo en formato placeholder (Principio IV).
- Sin dependencias nuevas ni build (Principio II).
