# Feature Specification: Boost conversión — claridad, confianza y acabado premium

**Feature Branch**: `002-boost-conversion`

**Created**: 2026-08-13

**Status**: Draft

**Input**: User description: "Actúa como un diseñador web senior + copywriter de conversión + UX strategist. Analiza la landing y mejórala sin destruir su identidad visual actual. No hagas un rediseño radical: conserva la esencia, pero eleva el resultado final para que se vea más profesional, más moderno y más convincente. Objetivo principal: aumentar claridad, confianza y conversión. Revisa y optimiza especialmente: hero con mensaje más directo, propuesta de valor clara y CTA principal muy visible; jerarquía visual destacando lo importante primero y reduciendo ruido; copywriting simplificado, persuasivo y orientado a beneficios; CTAs consistentes, claras y repetidas estratégicamente; señales de credibilidad, prueba social, garantías, datos y elementos de seguridad; espaciado, alineación y ritmo visual; mobile first; consistencia visual de colores, botones, tipografía e intención. Entrega una versión mejorada con foco en claridad, conversión, confianza y acabado visual de alto nivel. Esta iteración parte de la base ya pulida en la feature 001 (hero con 2 CTAs, carousel de testimonios, 'Soluciones implementadas' con métricas, FAQ y CTA centrados)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - El hero comunica valor en una frase y guía al siguiente paso (Priority: P1)

Un visitante llega a la página y en los primeros segundos entiende qué ofrece la empresa y por qué le conviene: un mensaje directo que apunta a un resultado del negocio (no a una descripción de servicios), un subtítulo que refuerza el beneficio y un CTA primario muy visible que invita a la acción concreta.

**Why this priority**: Es el punto de entrada de máxima palanca. La decisión de seguir o abandonar se juega en el hero; un mensaje claro y un CTA visible suben directamente la conversión.

**Independent Test**: Puede probarse cargando la página y evaluando el mensaje del hero (claridad de propuesta de valor), la visibilidad del CTA primario y la presencia de exactamente dos CTAs.

**Acceptance Scenarios**:

1. **Given** un visitante carga la página, **When** ve el hero, **Then** entiende en una frase qué ofrece la empresa y para qué le sirve, sin ambigüedad técnica.
2. **Given** el hero, **When** el visitante lo escanea, **Then** hay un único CTA primario visualmente dominante ("Hablemos de tu proyecto" o equivalente) y un CTA secundario de menor compromiso ("Agendar reunión").
3. **Given** el hero, **When** el visitante lo lee, **Then** no aparece información redundante ni ruido (badges decorativos, items duplicados) que compita con el mensaje principal.

---

### User Story 2 - El copywriting vende beneficios y resultados, no descripciones (Priority: P1)

Un visitante recorre la landing y cada sección le dice qué gana: beneficios claros, escaneables, con voz activa y orientados a resultado. Los textos son más cortos y persuasivos que los actuales, sin perder la esencia de la empresa.

**Why this priority**: El contenido es el que convence al decisor B2B. Simplificar y orientar a beneficios multiplica la claridad del mensaje y el impacto de cada sección.

**Independent Test**: Puede probarse leyendo cada sección y verificando que los textos describen resultados/beneficios, son escaneables y no exponen tecnología.

**Acceptance Scenarios**:

1. **Given** cada sección de la landing, **When** el visitante la lee, **Then** el texto principal comunica un beneficio o resultado concreto para su negocio.
2. **Given** los textos de la landing, **When** se comparan con los anteriores, **Then** son igual o más cortos, directos y con tono persuasivo consistente.
3. **Given** la página completa, **When** se escanea, **Then** no aparecen términos tecnológicos, lenguajes ni frameworks (constitución: resultados, no tecnología).

---

### User Story 3 - Las señales de confianza están reforzadas y repetidas estratégicamente (Priority: P2)

Un visitante escéptico encuentra argumentos de credibilidad en los momentos de duda: estadísticas con contexto, una garantía explícita (reunión de descubrimiento gratuita, respuesta en menos de 24h), prueba social con testimonios que muestran resultados medibles y un formulario con fricción mínima.

**Why this priority**: La confianza es el mayor bloqueador en compras B2B de servicios. Reforzarla cerca de los CTAs y del formulario reduce la deserción en el momento de decisión.

**Independent Test**: Puede probarse recorriendo la página y verificando que existen señales de confianza en los puntos de conversión (hero, sección de soluciones, CTA final, formulario).

**Acceptance Scenarios**:

1. **Given** la sección de soluciones y testimonios, **When** el visitante los lee, **Then** cada pieza de prueba social comunica un resultado medible o un beneficio concreto.
2. **Given** el CTA final y el formulario, **When** el visitante está por convertir, **Then** ve una garantía o reducción de riesgo explícita (reunión gratuita, respuesta rápida).
3. **Given** el formulario de contacto, **When** el visitante lo completa, **Then** la fricción es mínima (campos esenciales, sin pasos innecesarios) y el mensaje refuerza el próximo paso.

---

### User Story 4 - El layout respira: jerarquía, espaciado y consistencia visual (Priority: P2)

Un visitante percibe una landing ordenada y premium: jerarquía clara (lo importante primero), ritmo vertical consistente entre secciones, alineación impecable y una identidad visual coherente (colores, botones, tipografía) en toda la página.

**Why this priority**: El acabado visual transmite profesionalismo y se traduce en confianza. Una composición ordenada reduce la carga cognitiva y enfoca al usuario en la conversión.

**Independent Test**: Puede probarse recorriendo la página en desktop y móvil verificando espaciado, alineación y coherencia visual entre secciones.

**Acceptance Scenarios**:

1. **Given** la landing completa, **When** el visitante hace scroll, **Then** el ritmo vertical entre secciones es consistente y las secciones "respiran" (márgenes equilibrados).
2. **Given** cada sección, **When** el visitante la examina, **Then** los elementos están alineados y la jerarquía destaca lo más importante primero.
3. **Given** la página en desktop y móvil, **When** se comparan los componentes, **Then** botones, colores, tipografías y espaciados son consistentes en toda la página.

---

### User Story 5 - Mobile first: todo se ve y funciona limpio en celular (Priority: P2)

Un visitante en smartphone ve una landing impecable: tipografía legible, CTAs grandes y fáciles de tocar, menú que funciona bien, sin scroll horizontal ni elementos desbordados.

**Why this priority**: La mayoría del tráfico inicial es móvil. Una experiencia móvil rota destruye la conversión sin importar cuán buena sea la versión desktop.

**Independent Test**: Puede probarse en viewport móvil verificando legibilidad, tamaño de CTAs, menú y ausencia de overflow.

**Acceptance Scenarios**:

1. **Given** un smartphone, **When** el visitante carga la página, **Then** no hay scroll horizontal ni elementos desbordados.
2. **Given** un smartphone, **When** el visitante ve los CTAs, **Then** son grandes, con área táctil cómoda y visibles sin scroll extra.
3. **Given** un smartphone, **When** el visitante usa el menú, **Then** es navegable, el botón del menú es claro y los links son fáciles de tocar.
4. **Given** un smartphone, **When** el visitante completa el formulario, **Then** los campos son cómodos de completar y el envío funciona.

---

### Edge Cases

- Usuarios con `prefers-reduced-motion: reduce`: ninguna animación nueva debe romper la experiencia; se mantiene la compatibilidad existente.
- Sin JavaScript: la página debe seguir siendo navegable y los CTAs funcionales (anclas y mailto).
- Contenido placeholder: todos los datos reales siguen siendo `TU-*` editables; no se inventan datos reales.
- Pantallas muy chicas (360px y menos): los CTAs y textos no deben desbordar; el hero debe seguir legible.
- Solo se modifican los archivos existentes (index.html, style.css, script.js); no se agregan archivos ni dependencias.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El hero debe tener una propuesta de valor en una frase, directa y orientada a resultado de negocio.
- **FR-002**: El subtítulo del hero debe reforzar el beneficio principal sin nombrar tecnologías.
- **FR-003**: El hero debe mantener exactamente dos CTAs: uno primario dominante y uno secundario de menor compromiso.
- **FR-004**: El CTA primario del hero debe ser visualmente más dominante que el actual (mayor contraste, tamaño o tratamiento).
- **FR-005**: Todos los textos de la landing deben reescribirse con tono persuasivo, directo, en segunda persona y orientado a beneficios, manteniendo el idioma español del producto.
- **FR-006**: Los textos deben ser escaneables: frases cortas, sin párrafos largos, destacando el beneficio.
- **FR-007**: No debe aparecer ninguna mención a tecnologías, lenguajes o frameworks en toda la página.
- **FR-008**: La sección de soluciones debe reforzar señales de credibilidad: cada caso comunica un resultado medible y el conjunto transmite prueba de trabajo real.
- **FR-009**: Los testimonios deben reforzar la prueba social con resultado concreto (manteniendo placeholders editables).
- **FR-010**: Debe existir una garantía o reducción de riesgo explícita en los puntos de conversión (ej. "reunión de descubrimiento gratuita", "respuesta en menos de 24h").
- **FR-011**: El formulario de contacto debe tener fricción mínima y mensaje orientado al siguiente paso.
- **FR-012**: La jerarquía visual debe destacar lo más importante primero en cada sección, reduciendo ruido visual (badges decorativos, elementos redundantes).
- **FR-013**: El espaciado vertical entre secciones debe ser consistente y equilibrado (ritmo visual uniforme).
- **FR-014**: Los componentes compartidos (botones, colores, tipografías, espaciados) deben ser visualmente coherentes en toda la página.
- **FR-015**: En viewport móvil no debe haber scroll horizontal ni elementos desbordados.
- **FR-016**: En viewport móvil los CTAs deben tener área táctil cómoda y ser visibles sin scroll extra.
- **FR-017**: La identidad visual actual (azul noche `#0F1B2D`, acento amarillo `#F5A91E`, Space Grotesk/Inter) debe conservarse; solo se refina, no se reemplaza.
- **FR-018**: No se deben agregar secciones nuevas de contenido; solo optimizar las existentes.
- **FR-019**: Se debe conservar la compatibilidad con `prefers-reduced-motion`.
- **FR-020**: El funcionamiento actual sin JavaScript y con `mailto:` debe mantenerse.

### Key Entities

- **CTA**: Llamado a la acción con texto, estilo (primario/secundario) y destino (ancla o calendario placeholder).
- **Señal de confianza**: Elemento de credibilidad (métrica, garantía, testimonio, dato) con texto editable placeholder.
- **Sección**: Bloque de contenido de la landing con jerarquía (título, subtítulo, contenido) y espaciado consistente.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un revisor lee el hero en menos de 5 segundos y puede decir qué ofrece la empresa y qué acción dar, sin ambigüedad.
- **SC-002**: Recorriendo la landing completa, se encuentran 0 menciones a tecnologías, lenguajes o frameworks.
- **SC-003**: Todos los textos principales de la página son igual o más cortos que los actuales y orientados a beneficios (verificable por comparación).
- **SC-004**: Existen señales de confianza (garantía/reducción de riesgo) en al menos 2 de los 3 puntos de conversión: hero, CTA final, formulario.
- **SC-005**: Cada caso de "Soluciones implementadas" y cada testimonio comunica un resultado medible o beneficio concreto.
- **SC-006**: En viewport móvil (375px) no hay scroll horizontal, los CTAs tienen área táctil ≥ 44px y el menú es navegable.
- **SC-007**: El espaciado y alineación entre secciones es consistente y sin ruido visual (verificable por inspección visual en desktop y móvil).
- **SC-008**: La identidad visual (colores, tipografías) se mantiene coherente en toda la página.

## Assumptions

- Esta iteración parte de la base pulida en la feature 001; no se rediseña desde cero.
- El contenido de la página se mantiene en español (producto final para usuarios hispanohablantes); solo se reescribe el copy.
- Todos los datos reales (empresa, clientes, testimonios, métricas, calendario, WhatsApp) siguen siendo placeholders `TU-*` editables.
- Solo se modifican `index.html`, `style.css` y `script.js`. No se agregan archivos, librerías ni dependencias.
- El formulario conserva el mecanismo `mailto:` provisional; el envío real queda fuera de alcance.
- No se agregan secciones nuevas de contenido; se optimizan las existentes.
- Se conserva la compatibilidad con `prefers-reduced-motion` y la accesibilidad ya presente.
