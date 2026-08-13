# Quickstart: Validación de "Boost conversión — claridad, confianza y acabado premium"

Guía de validación manual end-to-end. El sitio es estático; se valida en
navegador abriendo `index.html` localmente.

## Prerequisitos

- Navegador moderno (Chrome, Safari, Firefox, Edge) en desktop y modo móvil (375px).
- Repo en worktree `~/wt/empresa-site/refine-landing-v2`, rama `refine-landing-v2`.

## Setup

```bash
cd /Users/juligonzalez/wt/empresa-site/refine-landing-v2
open index.html
```

No hay build ni instalación de dependencias.

## Validación por historia de usuario

### US1 — Hero comunica valor y guía al siguiente paso

1. Cargar la página.
   - **Esperado**: el hero dice en una frase qué ofrece la empresa y por qué conviene, sin ambigüedad técnica.
2. Mirar los CTAs del hero.
   - **Esperado**: un CTA primario visualmente dominante ("Hablemos de tu proyecto") y un secundario ("Agendar reunión"); exactamente dos.
3. Escanear el hero.
   - **Esperado**: sin ruido que compita con el mensaje (sin elementos redundantes que distraigan).

### US2 — Copywriting vende beneficios, no descripciones

1. Leer cada sección (servicios, modelos, soluciones, enfoque, método, testimonios, FAQ).
   - **Esperado**: los textos comunican beneficios/resultados, son escaneables (frases cortas) y usan segunda persona.
2. Buscar menciones técnicas (desplazar por toda la página).
   - **Esperado**: 0 menciones a tecnologías, lenguajes o frameworks.
3. Comparar largo de textos vs. versión anterior (rama master).
   - **Esperado**: igual o más cortos, con tono persuasivo.

### US3 — Señales de confianza reforzadas

1. CTA final y formulario.
   - **Esperado**: existe una garantía o reducción de riesgo explícita (reunión de descubrimiento gratuita, respuesta <24h) en al menos 2 de 3 puntos: hero, CTA final, formulario.
2. Stats.
   - **Esperado**: cada número tiene una línea de contexto que lo hace creíble.
3. Soluciones y testimonios.
   - **Esperado**: cada pieza comunica un resultado medible o beneficio concreto.

### US4 — Layout respira: jerarquía, espaciado, consistencia

1. Scroll completo en desktop.
   - **Esperado**: ritmo vertical consistente entre secciones, alineación impecable, sin ruido visual.
2. Comparar botones, colores y tipografías en toda la página.
   - **Esperado**: consistencia visual completa (misma familia de CTA, mismas variables de color/tipografía).

### US5 — Mobile first

1. Viewport 375px (devtools) y 360px.
   - **Esperado**: sin scroll horizontal ni desbordes.
2. CTAs en móvil.
   - **Esperado**: área táctil cómoda (≥44px), visibles sin scroll extra.
3. Menú móvil.
   - **Esperado**: navegable, botón claro, links fáciles de tocar.
4. Formulario en móvil.
   - **Esperado**: campos cómodos y envío funcional.

## Edge cases

- **Reducir movimiento** (prefers-reduced-motion): activar en el sistema y recargar — no hay animaciones que rompan; carousel sin autoplay.
- **Sin JS**: desactivar JS en devtools — las secciones siguen visibles y los CTAs funcionales (anclas y mailto).
- **Placeholders**: todos los datos reales siguen como `TU-*` editables; no hay datos inventados.
- **Hero**: el mensaje no menciona tecnología (constitución I).

## Verificación técnica

```bash
node --check script.js
```

Esperado: sin errores de sintaxis.

## Contract de referencia

- Entidades y reglas de contenido: `data-model.md`.
- No hay interfaces externas (contracts/ no aplica).

## Definición de hecho

- Todas las validaciones de US1–US5 y edge cases pasan en desktop y móvil.
- `node --check script.js` sin errores.
- Contenido nuevo en formato placeholder (Principio IV).
- Sin dependencias nuevas ni build (Principio II).
- Solo se modificaron `index.html`, `style.css`, `script.js`.
