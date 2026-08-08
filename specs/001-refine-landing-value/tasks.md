---

description: "Task list for feature: Refinar landing — enfoque en valor y resultados"
---

# Tasks: Refinar landing — enfoque en valor y resultados

**Input**: Design documents from `/specs/001-refine-landing-value/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: No se generan tareas de test (no fue solicitado en la spec; la verificación es manual vía quickstart.md).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Sitio estático: archivos en raíz (`index.html`, `style.css`, `script.js`).

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verificación base del proyecto y del estado previo a los cambios

- [X] T001 Verificar estado del repo: `git status` limpio en `empresa-site/`, rama `main`, sin cambios sin commitear
- [X] T002 [P] Verificar `node --check script.js` sin errores antes de tocar código

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base que las historias necesitan: eliminar la sección Stack (ruido tecnológico) y liberar el nav de su enlace. Aplica el Principio I de la constitución.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T003 Eliminar la sección `<section id="stack">` completa en `index.html`
- [X] T004 Eliminar el link del nav `<li><a href="#stack">Stack</a></li>` en `index.html`
- [X] T005 Eliminar los estilos de la sección Stack (`.stack-cloud`, `.chip`, `.chip:hover`) en `style.css`

**Checkpoint**: La landing no muestra ninguna tecnología/lenguaje; el nav apunta solo a secciones existentes.

---

## Phase 3: User Story 1 - La landing vende resultados, no tecnología (Priority: P1) 🎯 MVP

**Goal**: Transformar "Casos de uso" en "Soluciones implementadas" orientada a resultados con métricas, con la card +40% como protagonista.

**Independent Test**: Recorriendo la landing no hay menciones a tecnología; la sección se titula "Soluciones implementadas" y cada card comunica un resultado/métrica.

### Implementation for User Story 1

- [X] T006 [US1] Reemplazar la sección `#casos` completa en `index.html`: título "Soluciones implementadas", sub: "Proyectos que ya funcionan para nuestros clientes" y cards con estructura resultado+métrica placeholder (categoria, titulo, metrica, contexto)
- [X] T007 [US1] Marcar la card "+40% de eficiencia operativa" como protagonista (clase `case-featured`, ancho completo) en `index.html`
- [X] T008 [P] [US1] Actualizar el label del link del nav `<li><a href="#casos">Casos de uso</a></li>` → "Soluciones" en `index.html`
- [X] T009 [US1] Agregar estilos para la card destacada `.case-featured` (fondo/borde teal suave, ancho completo) y estilos de métrica en `.case-metric` en `style.css`

**Checkpoint**: US1 funcional: sección renombrada con resultados y card +40% protagonista, sin ruido tecnológico en toda la página.

---

## Phase 4: User Story 2 - Los testimonios se presentan como carousel atractivo (Priority: P2)

**Goal**: Convertir la sección de testimonios en carousel full-width con cards laterales translúcidas, scroll-snap, autoplay con pausa al hover y respeto a `prefers-reduced-motion`.

**Independent Test**: Las cards se deslizan horizontalmente a lo ancho de la página, los bordes se ven atenuados, el autoplay avanza y se pausa al hover.

### Implementation for User Story 2

- [X] T010 [US2] Reestructurar la sección `#testimonios` en `index.html`: contenedor `.carousel` con track `.carousel-track`, cada testimonio como `.carousel-slide` (quitar la grilla `.grid`)
- [X] T011 [P] [US2] Agregar estilos del carousel en `style.css`: `.carousel` con `overflow-x: auto` + `scroll-snap-type: x mandatory`, `.carousel-slide` con `scroll-snap-align: center` y ancho fijo, y `mask-image` de gradiente lateral sobre el track
- [X] T012 [US2] Implementar en `script.js`: `IntersectionObserver` para detectar el slide activo y aplicar clase `.active` (opacidad 1, escala 1; los laterales translúcidos vía CSS)
- [X] T013 [US2] Implementar autoplay en `script.js`: `setInterval` ~4s que avanza al siguiente slide con `scrollIntoView({ behavior: smooth })`, en bucle; cancelar si `prefers-reduced-motion: reduce`
- [X] T014 [US2] Implementar pausa del autoplay en `script.js` en `mouseenter`/`touchstart` y reanudación en `mouseleave`
- [X] T015 [US2] Agregar estilos de estado `.carousel-slide.active` y `.carousel-slide:not(.active)` (atenuado) en `style.css`

**Checkpoint**: US2 funcional: carousel full-width con fade lateral, snap, autoplay con pausa y reduced-motion.

---

## Phase 5: User Story 3 - El layout se corrige (Priority: P3)

**Goal**: FAQ y CTA final centrados, formulario compacto, CTA del nav legible.

**Independent Test**: Verificación visual: FAQ centrada, botones del CTA final centrados, form con espaciado cómodo, CTA del nav legible sobre fondo oscuro.

### Implementation for User Story 3

- [X] T016 [US3] Centrar la FAQ: agregar `margin: 0 auto` a `.faq-list` en `style.css`
- [X] T017 [US3] Quitar la clase `reveal` de los `<details>` de la FAQ en `index.html` (la animación entraba raro en el acordeón)
- [X] T018 [US3] Centrar botones del CTA final: regla `.cta-inner .hero-cta { justify-content: center; }` en `style.css`
- [X] T019 [US3] Compactar el form: reducir `form label { margin: 16px 0 4px }` y `.error { min-height: 1.1em; margin-top: 2px }` en `style.css`
- [X] T020 [US3] Hacer legible el CTA del nav: aumentar `padding`/`font-size` de `.nav-links .btn-primary` y agregar `box-shadow` de separación en `style.css`

**Checkpoint**: US3 completo: layout corregido visualmente en las 4 áreas.

---

## Phase 6: User Story 4 - El hero se simplifica (Priority: P3)

**Goal**: Dos llamados a la acción en el hero, sin redundancia.

**Independent Test**: El hero muestra exactamente dos CTAs: "Hablemos de tu proyecto" y "Agendar reunión".

### Implementation for User Story 4

- [X] T021 [US4] Eliminar el botón `<a href="#servicios" class="btn btn-ghost">Ver servicios</a>` del hero en `index.html`

**Checkpoint**: US4 completo: hero con dos CTAs claros.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Verificación final end-to-end y consistencia.

- [X] T022 Correr `node --check script.js` y verificar que no haya errores de sintaxis
- [X] T023 Abrir `index.html` en navegador (desktop + modo móvil) y ejecutar todas las validaciones de `quickstart.md` (US1-US4 + edge cases)
- [X] T024 Verificar que no se agregaron dependencias nuevas ni archivos de código (Principio II y V)
- [X] T025 Confirmar que todo el contenido nuevo queda en formato placeholder editable (Principio IV)
- [X] T026 Actualizar `specs/FEATURES.md` con la fila de esta feature (estado, notas) — crear el archivo si no existe

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2. No dependencies on other stories.
- **User Story 2 (P2)**: Can start after Phase 2. Independiente de US1 (edita `script.js` + sección testimonios).
- **User Story 3 (P3)**: Can start after Phase 2. Independiente (edita `style.css`/`index.html` en áreas no tocadas por US1/US2).
- **User Story 4 (P3)**: Can start after Phase 2. Independiente (solo `index.html`, hero).

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- US2 (T010-T015) y US3 (T016-T020) tocan `script.js`/`style.css` en áreas distintas pero el mismo archivo — ejecutar secuencialmente para evitar conflictos de edición
- T008 y T006-T007 editan `index.html`: T008 puede correr junto a T006-T007 si se editan regiones distintas, pero por seguridad se ejecuta dentro de US1 en orden

---

## Parallel Example: User Story 2

```bash
# T011 y T012-T015 son independientes de archivo salvo que T012-T015 (script.js)
# dependen de que el track exista (T010 en index.html):
# 1. T010 (index.html) → luego T011 (style.css) y T012-T015 (script.js) en paralelo
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (renombrar sección + resultados + eliminar stack)
4. **STOP and VALIDATE**: Recorrer la landing en navegador (US1 + edge cases de quickstart)

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready (sin stack, nav limpio)
2. Add User Story 1 → Test independently → MVP
3. Add User Story 2 → Test independently (carousel)
4. Add User Story 3 → Test independently (layout)
5. Add User Story 4 → Test independently (hero)
6. Polish: quickstart completo + FEATURES.md

---

## Notes

- No hay tareas de test (no solicitado); la verificación es la guía manual `quickstart.md`.
- Un solo agente ejecuta las tareas secuencialmente; los [P] marcan ediciones a archivos distintos que podrían paralelizarse con más agentes.
- Commit tras cada historia lógica (o grupo de tareas) — ver AGENTS.md global.
