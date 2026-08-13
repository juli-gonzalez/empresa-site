# Tasks: Boost conversión — claridad, confianza y acabado premium

**Input**: Design documents from `/specs/002-boost-conversion/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: No se incluyen tareas de test automatizado: no fueron pedidas en el spec. La validación es manual vía `quickstart.md` + `node --check script.js`.

**Organization**: Tasks grouped by user story. Casi todas tocan los mismos archivos (`index.html` y `style.css`), por lo que se ejecutan en orden; solo se marcan `[P]` las que tocan archivos distintos o zonas independientes.

## Format: `[ID] [P?] [Story] Description`

## Path Conventions

- Repositorio raíz: `index.html`, `style.css`, `script.js` (proyecto flat, sin `src/`).

---

## Phase 1: Setup (Documentación)

**Purpose**: Docs de la feature ya generados por `/speckit.plan`

- [x] T001 Documentación de la feature creada: plan.md, research.md, data-model.md, quickstart.md

---

## Phase 2: Foundational (Base de copy y CTA)

**Purpose**: Definir el patrón de copy persuasivo y la familia de CTA sobre la que se construyen las US. No bloquea ediciones por archivo, pero establece las decisiones de research.md.

**Checkpoint**: Research aprobada — el patrón de voz y CTA queda fijado antes de reescribir secciones.

---

## Phase 3: User Story 1 - Hero comunica valor y guía al siguiente paso (Priority: P1) 🎯 MVP

**Goal**: Hero con propuesta de valor en una frase, subheading de beneficio y CTA primario dominante.

**Independent Test**: Cargar la página y evaluar claridad del mensaje, dominio del CTA primario y presencia de exactamente 2 CTAs.

### Implementation for User Story 1

- [X] T002 [US1] Reescribir `h1` del hero en `index.html` por propuesta de valor directa orientada a resultado de negocio (ej. "Tu proyecto de tecnología, resuelto por un solo equipo.")
- [X] T003 [US1] Reescribir el subheading del hero (`p.hero-sub`) para atacar el dolor del decisor B2B (coordinar proveedores) reforzando el beneficio, sin nombrar tecnologías
- [X] T004 [US1] Revisar `ul.hero-bus`: atenuar o eliminar si compite con el mensaje; mantener si aporta sin ruido (decisión de research #1)
- [X] T005 [US1] En `style.css`, reforzar el CTA primario del hero para que sea visualmente dominante (mayor padding/fuente y/o glow más intenso en `.btn-primary` del hero)
- [X] T006 [US1] Verificar que el hero mantiene exactamente 2 CTAs ("Hablemos de tu proyecto" y "Agendar reunión") en `index.html`

**Checkpoint**: Hero claro, CTA dominante, 2 CTAs. Validar en desktop y móvil.

---

## Phase 4: User Story 2 - Copywriting vende beneficios, no descripciones (Priority: P1)

**Goal**: Todos los textos reescritos con tono persuasivo, escaneable, orientado a beneficios y en segunda persona.

**Independent Test**: Leer cada sección y verificar que comunica beneficios, es escaneable y no expone tecnología.

### Implementation for User Story 2

- [X] T007 [US2] Reescribir subtítulos y textos de la sección **Servicios** en `index.html` (cards: Software a medida, Vigilancia, Ingeniería, Agentes IA) orientados a beneficio
- [X] T008 [US2] Reescribir textos de **Modelos de trabajo** (`#modelos`, cards de pricing) con enfoque en beneficio y menor jerga
- [X] T009 [US2] Pulir textos de **Soluciones implementadas** (`#casos`): cada card comunica resultado/contexto de forma más directa
- [X] T010 [US2] Reescribir sección **Por qué una integradora** (`#enfoque`) y su checklist con beneficios en segunda persona
- [X] T011 [US2] Reescribir **Método** (`#metodo`, 4 pasos) con lenguaje de resultado, manteniendo estructura
- [X] T012 [US2] Pulir **Testimonios**: el copy de cada cita destaca el resultado medible (mantener placeholders `TU-CLIENTE-N`)
- [X] T013 [US2] Reescribir **FAQ** (`#faq`, 5 preguntas): respuestas más cortas, directas y orientadas a resolver objeciones de compra
- [X] T014 [US2] Auditar `index.html` completo: 0 menciones a tecnologías/lenguajes/frameworks (constitución I)

**Checkpoint**: Copy reescrito y auditado en toda la página.

---

## Phase 5: User Story 3 - Señales de confianza reforzadas (Priority: P2)

**Goal**: Garantía/reducción de riesgo en puntos de conversión, stats con contexto y prueba social con resultados.

**Independent Test**: Recorrer la página y verificar señales de confianza en hero, CTA final y formulario.

### Implementation for User Story 3

- [X] T015 [US3] Agregar señal de garantía en el CTA final (`cta-band`) en `index.html` (ej. "Reunión de descubrimiento gratuita, sin compromiso") como placeholder editable
- [X] T016 [US3] Agregar señal de velocidad en el formulario (`#contacto`) en `index.html` (ej. "Te respondemos en menos de 24 horas") como placeholder editable
- [X] T017 [US3] Añadir línea de contexto a cada stat en `#stats` (`index.html`): soporte corto que haga creíble cada métrica (placeholder editable)
- [X] T018 [US3] Estilizar las nuevas señales de confianza en `style.css` (clase `.trust` o similar, consistente con el sistema visual existente)
- [X] T019 [US3] Verificar que soluciones y testimonios comunican resultados medibles; ajustar copy si alguna pieza queda descriptiva

**Checkpoint**: Confianza reforzada en los puntos de conversión.

---

## Phase 6: User Story 4 - Layout respira: jerarquía, espaciado, consistencia (Priority: P2)

**Goal**: Ritmo vertical consistente, jerarquía clara y coherencia visual en toda la página.

**Independent Test**: Scroll completo en desktop y comparación de componentes entre secciones.

### Implementation for User Story 4

- [X] T020 [US4] Auditar y unificar el padding vertical de secciones en `style.css` (outliers respecto a los 88px base de `.section`)
- [X] T021 [US4] Unificar el gap y la alineación título/subtítulo/contenido entre secciones en `style.css`
- [X] T022 [US4] Reducir ruido visual: revisar glows decorativos, bullets pulsing y elementos redundantes que compitan con el mensaje
- [X] T023 [US4] Verificar consistencia de botones (misma familia `.btn`), colores (variables `:root`) y tipografías en toda la página

**Checkpoint**: Composición ordenada y premium en desktop.

---

## Phase 7: User Story 5 - Mobile first (Priority: P2)

**Goal**: Sin overflow horizontal, CTAs táctiles, menú y formulario cómodos en celular.

**Independent Test**: Viewport 375px y 360px — scroll, CTAs, menú, formulario.

### Implementation for User Story 5

- [X] T024 [US5] Verificar y corregir ausencia de overflow horizontal en viewport 375px/360px en `style.css`
- [X] T025 [US5] Ajustar CTAs en móvil: área táctil ≥44px y visibles sin scroll extra (media queries existentes de `style.css`)
- [X] T026 [US5] Verificar menú móvil (`.nav-toggle` / `.nav-links.open`) y formulario en móvil; corregir si algo desborda o queda incómodo

**Checkpoint**: Experiencia móvil limpia.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Verificación final y definición de hecho.

- [X] T027 [P] Correr `node --check script.js` — sin errores de sintaxis
- [X] T028 Validar `quickstart.md`: recorrer US1–US5 + edge cases en desktop y móvil
- [X] T029 Verificar que solo se modificaron `index.html`, `style.css`, `script.js` (sin archivos nuevos)
- [X] T030 Actualizar `specs/FEATURES.md`: feature 002 a estado `implementing`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — completado por `/speckit.plan`
- **User Stories (Phase 3+)**: Sin bloqueante de infraestructura (landing estática); se ejecutan en orden de prioridad. T007–T014 (US2) tocan todo `index.html`, por lo que conviene antes de T020–T023 (US4, que ajusta layout sobre el copy final).
- **Polish (Final Phase)**: Depende de todas las user stories.

### User Story Dependencies

- **US1 (P1)**: Independiente.
- **US2 (P1)**: Independiente en contenido, pero su copy final es base para la auditoría de US4.
- **US3 (P2)**: Puede implementarse tras US2 (los nuevos elementos de confianza conviven con el copy final).
- **US4 (P2)**: Sobre el resultado de US2 (layout sobre contenido reescrito).
- **US5 (P2)**: Independiente; se verifica al final sobre el layout de US4.

### Parallel Opportunities

- Los cambios de `index.html` (copy) y `style.css` (estilo) de la misma US pueden ir en paralelo si no se pisan las mismas zonas.
- US1 y US5 comparten `style.css` (hero y media queries) — evitar conflicto editando zonas distintas.
- Documentación y verificación (T027–T030) son paralelas entre sí.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. US1 (T002–T006) completo → validar hero en navegador → demo.

### Incremental Delivery

1. US1 → hero claro con CTA dominante (MVP).
2. US2 → copy persuasivo en toda la página.
3. US3 → confianza en puntos de conversión.
4. US4 → layout premium consistente.
5. US5 → mobile pulido.
6. Polish → verificación final.

---

## Notes

- [P] tasks = different files/no dependency; en este proyecto casi todo toca `index.html`/`style.css`, se respeta el orden salvo los marcados.
- Los textos del copy son en español (producto final hispanohablante).
- Todos los datos reales siguen como placeholders `TU-*` (Principio IV).
- No se agregan secciones, archivos ni dependencias (Principios II y V).
