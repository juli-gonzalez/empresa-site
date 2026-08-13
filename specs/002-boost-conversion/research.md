# Research: Boost conversión — claridad, confianza y acabado premium

Resoluciones de los puntos de diseño de la feature. Formato: Decisión /
Rationale / Alternativas consideradas. Parte de la base pulida en 001.

## 1. Hero: propuesta de valor en una frase + CTA dominante

**Decisión**: Reescribir el `h1` actual ("Integramos la tecnología que tu empresa necesita.") por una frase directa que apunte a resultado de negocio, manteniendo la voz de integradora. Propuesta: **"Tu proyecto de tecnología, resuelto por un solo equipo."** — y subheading que ataca el dolor del decisor B2B (coordinar proveedores). El CTA primario "Hablemos de tu proyecto" gana dominancia: `font-size` mayor, padding mayor y reforzar el glow/sombra del botón. Se quita el `hero-meta` (los 3 checks) del hero si compite con el mensaje, o se mantiene comprimido debajo según se vea en validación visual.

**Rationale**: El hero actual describe qué hace la empresa; la versión nueva dice qué gana el cliente y por qué elegirnos (un solo equipo). El CTA dominante reduce la competencia visual. Mantener 2 CTAs (FR-003) sin agregar el tercero.

**Alternativas consideradas**:
- Mantener el h1 actual solo afinando el CTA: rechazado — el mensaje descriptivo es la debilidad principal.
- Hero con imagen/prototipo visual: rechazado — agrega complejidad y rompe la identidad limpia actual; la landing es de texto + glow.
- CTA primario de "calendario" y secundario de "contacto": rechazado — el formulario de contacto es el destino principal; calendario queda como secundario.

## 2. Copywriting orientado a beneficios en todas las secciones

**Decisión**: Reescribir el copy de cada sección con el mismo patrón persuasivo: beneficio en el título/subtítulo, lenguaje en segunda persona ("tu negocio", "tu operación"), frases cortas, eliminar adjetivos vacíos y afirmaciones no verificables. Tabla de reescritura en tasks (antes → después). Tono: directo, confiable, sin jerga.

**Rationale**: Consistencia de voz en toda la página refuerza la marca; beneficios > features para el decisor. El copy se reescribe en español (producto final hispanohablante).

**Alternativas consideradas**: Reescritura solo de títulos de sección: rechazado — el cuerpo también lleva el mensaje persuasivo.

## 3. Señales de confianza: garantía + contexto en stats

**Decisión**: (a) Agregar garantía de reducción de riesgo en el CTA final y cerca del formulario: "Reunión de descubrimiento gratuita, sin compromiso" y "Te respondemos en menos de 24 horas" (placeholder editable). (b) Dar contexto a las stats: cada número gana una línea corta de soporte (ej. "Proyectos entregados" + "en software, seguridad e IA"). (c) Reforzar testimonios: cada uno ya tiene resultado; se verifica que el copy lo destaque.

**Rationale**: La confianza se refuerza en los puntos de conversión (SC-004). El contexto en stats las hace creíbles en vez de decorativas.

**Alternativas consideradas**: Agregar badges de certificaciones/garantías falsas: rechazado — inventar credenciales contradice el principio de placeholders (no inventar datos reales).

## 4. Jerarquía y espaciado consistente

**Decisión**: Estandarizar el ritmo vertical: padding de sección consistente (88px ya es uniforme en `.section`; se audita y ajusta donde haya outliers), gap uniforme entre título/subtítulo/contenido, y alineación de encabezados. Reducir ruido: se evalúa quitar los bullets pulsing del hero (`hero-bus`) o atenuarlos, y eliminar glows redundantes si compiten.

**Rationale**: El acabado premium viene de la consistencia del espaciado. Menos elementos decorativos = más foco en el mensaje.

**Alternativas consideradas**: Rediseño de la paleta o tipografía: rechazado — la identidad visual es non-negotiable (FR-017).

## 5. Mobile first

**Decisión**: Auditar el viewport móvil (375px y 360px): CTAs full-width en hero y CTA band cuando sea necesario, área táctil ≥ 44px, tipografía legible sin zoom, carousel swipe funcional, sin overflow. Ajustes puntuales en media queries existentes; no reescribir el layout.

**Rationale**: La mayoría del tráfico es móvil; los fixes son puntuales sobre la base que ya funciona.

**Alternativas consideradas**: Diseño móvil separado: rechazado — la landing ya es responsive; solo necesita pulido.

## 6. Sin cambios estructurales de arquitectura

**Decisión**: No se agregan secciones, archivos ni dependencias. Todo el trabajo vive en `index.html`, `style.css`, `script.js`.

**Rationale**: Constitución II y V. Esta feature es refinamiento de contenido y estilo, no arquitectura.

**Alternativas consideradas**: Agregar sección "proceso" nueva o FAQ extendida: rechazado — no aporta a conversión y viola YAGNI.

## Conclusión

No quedan NEEDS CLARIFICATION. Todas las decisiones son compatibles con la
constitución (vanilla, accesible, placeholders, sin stack). Se procede a
Fase 1 (data-model, quickstart).
