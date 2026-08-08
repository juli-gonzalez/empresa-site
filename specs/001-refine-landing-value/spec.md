# Feature Specification: Refinar landing — enfoque en valor y resultados

**Feature Branch**: `001-refine-landing-value`

**Created**: 2026-08-08

**Status**: Draft

**Input**: User description: "Reformular la landing de la empresa para que venda resultados de negocio, no tecnología: eliminar la sección Stack, transformar 'Casos de uso' en 'Soluciones implementadas' orientada a resultados con métricas, convertir testimonios en carousel full-width con autoplay, corregir problemas de layout (FAQ y CTA centrados, form compacto, CTA del nav visible) y simplificar el hero."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - La landing vende resultados de negocio, no tecnología (Priority: P1)

Un visitante (cliente potencial) llega a la landing y entiende en segundos qué resultados puede esperar de la empresa: soluciones concretas con métricas y testimonios de clientes reales. No hay sección que muestre lenguajes de programación ni tecnologías internas, que no aportan valor al decisor de compra.

**Why this priority**: Es el cambio de mayor impacto comercial. Una landing B2B convierte cuando habla de resultados, no de herramientas. Eliminar el ruido tecnológico es la base del resto de los cambios.

**Independent Test**: Puede probarse recorriendo la landing y verificando que (1) no existe ninguna sección de tecnologías/lenguajes, y (2) toda sección que describe trabajo de la empresa presenta resultados o métricas concretas.

**Acceptance Scenarios**:

1. **Given** un visitante recorre la landing, **When** hace scroll completo, **Then** no ve ningún nombre de tecnología, lenguaje o framework en ninguna sección.
2. **Given** la sección antes llamada "Casos de uso", **When** el visitante la lee, **Then** se titula "Soluciones implementadas" y cada elemento comunica un resultado medible, no una categoría de servicio.

---

### User Story 2 - Los testimonios se presentan como carousel atractivo (Priority: P2)

Un visitante ve los testimonios de clientes como cards que se deslizan horizontalmente ocupando todo el ancho, con las cards de los costados atenuadas/translúcidas mientras pasan, y autoplay lento que se pausa al pasar el mouse.

**Why this priority**: Mejora la percepción visual y la confianza sin cambiar el contenido. Es el segundo mayor impacto en conversión visual.

**Independent Test**: Puede probarse cargando la sección y verificando el desplazamiento horizontal, el efecto de desvanecido lateral y el autoplay con pausa al hover.

**Acceptance Scenarios**:

1. **Given** la sección de testimonios, **When** el usuario interactúa (scroll/touch o autoplay), **Then** las cards se desplazan horizontalmente a lo ancho de la página.
2. **Given** el carousel en movimiento, **When** una card está en los bordes, **Then** se ve translúcida/atenuada en comparación con la card central.
3. **Given** el carousel con autoplay activo, **When** el usuario posa el cursor sobre la sección, **Then** el avance automático se pausa.
4. **Given** un usuario con preferencia de movimiento reducida, **When** ve la sección, **Then** no hay autoplay ni animaciones automáticas.

---

### User Story 3 - El layout se corrige: FAQ y CTAs centrados, form compacto, CTA del nav visible (Priority: P3)

Un visitante ve una landing visualmente ordenada: la FAQ centrada en su sección, los botones del CTA final centrados, el formulario de contacto con espaciado cómodo (no excesivo) entre campos, y el botón "Contáctanos" del menú superior claramente legible.

**Why this priority**: Son correcciones de pulido visual que consolidan la impresión profesional del sitio. Dependen de los cambios estructurales de las historias anteriores.

**Independent Test**: Puede probarse recorriendo cada sección y verificando la alineación y el espaciado.

**Acceptance Scenarios**:

1. **Given** la sección FAQ, **When** el visitante la ve en desktop, **Then** el acordeón está centrado horizontalmente dentro de su sección.
2. **Given** la banda de CTA final, **When** el visitante la ve, **Then** los botones están centrados horizontalmente.
3. **Given** el formulario de contacto, **When** el visitante lo completa, **Then** hay un espaciado consistente y cómodo entre campos (sin exceso de aire vertical).
4. **Given** el menú superior, **When** el visitante lo ve, **Then** el botón "Contáctanos" es claramente legible sobre el fondo oscuro.

---

### User Story 4 - El hero se simplifica (Priority: P3)

Un visitante ve un hero con dos llamados a la acción claros (contactar y agendar reunión), sin botones redundantes.

**Why this priority**: Reduce la fricción de decisión en el punto de entrada más importante de la página.

**Independent Test**: Puede probarse cargando la página y verificando la cantidad y foco de los botones del hero.

**Acceptance Scenarios**:

1. **Given** el hero de la landing, **When** el visitante lo ve, **Then** hay exactamente dos llamados a la acción: "Hablemos de tu proyecto" y "Agendar reunión".
2. **Given** el botón secundario "Ver servicios", **When** el visitante lo busca, **Then** ya no existe en el hero.

---

### Edge Cases

- Pantallas móviles: el carousel de testimonios debe seguir siendo desplazable por swipe y las cards deben ocupar un ancho razonable sin desbordar.
- Usuarios con `prefers-reduced-motion: reduce`: no se ejecuta autoplay ni animaciones de desplazamiento automático.
- Carga con muchos testimonios: el carousel debe mantener buen rendimiento sin dependencias externas.
- Sin JavaScript disponible: la landing debe seguir siendo navegable (las secciones se muestran, aunque sin autoplay del carousel).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: La landing NO debe mostrar ninguna sección dedicada a tecnologías, lenguajes de programación o frameworks (se elimina "Stack tecnológico").
- **FR-002**: La sección "Casos de uso" debe renombrarse a "Soluciones implementadas".
- **FR-003**: Las cards de "Soluciones implementadas" deben comunicar resultados o métricas concretas (placeholder), no categorías de servicio.
- **FR-004**: Una card destacada de resultado (la actual "+40% de eficiencia operativa") debe tener protagonismo visual en la sección.
- **FR-005**: La sección de testimonios debe ser un carousel que ocupe todo el ancho de la página.
- **FR-006**: Las cards del carousel fuera del centro deben verse atenuadas/translúcidas (fade en los bordes).
- **FR-007**: El carousel debe tener desplazamiento manual (scroll/touch) con encaje por card (snap).
- **FR-008**: El carousel debe tener autoplay lento, que se pausa al pasar el cursor y al priorizarse la reducción de movimiento.
- **FR-009**: La sección FAQ debe estar centrada horizontalmente en su sección.
- **FR-010**: Los botones del CTA final deben estar centrados horizontalmente.
- **FR-011**: El formulario de contacto debe tener espaciado vertical consistente y compacto entre campos.
- **FR-012**: El botón "Contáctanos" del menú superior debe ser claramente legible sobre el fondo oscuro.
- **FR-013**: El hero debe mostrar exactamente dos llamados a la acción: "Hablemos de tu proyecto" y "Agendar reunión".
- **FR-014**: El nav debe eliminar el enlace a la sección eliminada (Stack).
- **FR-015**: Todo el contenido nuevo (testimonios, soluciones, clientes) debe permanecer como placeholder editable.
- **FR-016**: Los elementos del acordeón FAQ no deben tener animación de entrada al hacer scroll (se quita el efecto `reveal` de los `details`).

### Key Entities

- **Testimonio**: Cita de un cliente con atribución (rol y empresa placeholder). Campo opcional: avatar.
- **Solución implementada**: Resultado con métrica asociada y categoría. Campo: título, métrica, descripción, cliente placeholder.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Recorriendo la landing completa, un revisor encuentra 0 menciones a tecnologías/lenguajes/frameworks.
- **SC-002**: La sección de soluciones se titula "Soluciones implementadas" y todas sus cards incluyen una métrica o resultado explícito.
- **SC-003**: El carousel de testimonios se desplaza horizontalmente por interacción manual y autoplay, con cards laterales atenuadas, en desktop y móvil.
- **SC-004**: El autoplay del carousel se pausa al hover y no existe cuando el sistema tiene reducción de movimiento activada.
- **SC-005**: La FAQ y los botones del CTA final se ven centrados; el formulario tiene espaciado compacto; el CTA del nav es legible. Verificable por inspección visual.
- **SC-006**: El hero presenta exactamente dos llamados a la acción.

## Assumptions

- Los testimonios, clientes y resultados siguen siendo placeholders editables (no se piden datos reales en esta iteración).
- El carousel se implementa sin librerías externas (CSS scroll-snap + técnica nativa del navegador), consistente con el stack actual de la landing (HTML/CSS/JS vanilla).
- El formulario de contacto conserva su mecanismo de envío actual (mailto provisional); el envío real queda fuera de alcance.
- No se agregan secciones nuevas de contenido; solo se transforman y corrigen las existentes.
- La feature "casos de uso interactivo" (sección no-landing que guía al usuario a pensar su solución) queda descartada de esta iteración y se anota para una feature futura.
- Se mantiene la compatibilidad con `prefers-reduced-motion` ya presente en el sitio.
