# Research: Refinar landing — enfoque en valor y resultados

Resoluciones de los puntos de diseño de la feature. Formato: Decisión /
Rationale / Alternativas consideradas.

## 1. Carousel de testimonios full-width

**Decisión**: CSS `scroll-snap` (`scroll-snap-type: x mandatory` + `scroll-snap-align: center`) sobre un contenedor con `overflow-x: auto`, cards de ancho fijo, y desvanecido lateral con `mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent)` aplicado al track. La card activa se detecta con `IntersectionObserver` (ratio) para acentuar su opacidad/escala.

**Rationale**: Es la técnica nativa más liviana: cero JS para el desplazamiento (scroll/touch ya funciona), cero librerías, perfila el fade en bordes sin JS. El `IntersectionObserver` solo ajusta el estado visual de la card central (más opaca, escala 1) vs las laterales (translúcidas, escala ~0.96). Respeta `prefers-reduced-motion` desactivando autoplay y transiciones.

**Alternativas consideradas**:
- Librería JS de carousel (Swiper/Embla): rechazada — contradice el principio II (vanilla sin frameworks) y agrega ~30-50KB para algo que CSS resuelve.
- Transform translateX por JS con requestAnimationFrame: rechazada — reimplementa scroll nativo y pierde touch/swipe gratis.

## 2. Autoplay con pausa

**Decisión**: Un `setInterval` (pausa ~4s) que hace `scrollBy` al siguiente slide usando `scrollIntoView({ behavior: reduced-motion ? 'auto' : 'smooth' })` sobre el índice siguiente en bucle. Se pausa en `mouseenter`/`touchstart` y se reanuda en `mouseleave`. Se cancela por completo si `matchMedia('(prefers-reduced-motion: reduce)').matches`.

**Rationale**: Mínima lógica de estado (un índice + un timer). No compite con el gesto manual porque si el usuario desplazó, el observer realinea el índice al slide visible; el `setInterval` solo avanza desde ahí.

**Alternativas consideradas**:
- CSS `scroll-behavior` + `animation` sobre la posición: no existe un mecanismo CSS estándar de autoscroll; requiere JS igual.

## 3. "Soluciones implementadas" con card protagonista

**Decisión**: La sección reemplaza las 4 cards de "casos de uso genéricos" por cards orientadas a resultado+métrica (placeholder): cada una con categoría, resultado con métrica destacada y una línea de contexto. La card "+40% de eficiencia operativa" pasa a ser la protagonista: span de ancho completo arriba (col 1 / -1), con fondo acentuado (borde/bg teal suave) para que domine visualmente.

**Rationale**: La card de resultado es la única que hoy vende (el usuario lo confirmó: "me gustaba eso del +40%"). Darle protagonismo convierte la sección en prueba de resultado, no catálogo.

**Alternativas consideradas**:
- Dejar 4 cards iguales solo renombrando el título: rechazada — el usuario ya marcó que las cards genéricas "no convencen".

## 4. Eliminación de la sección Stack

**Decisión**: Se quita la sección completa (`#stack`, `.stack-cloud`, `.chip`) del HTML y CSS, y el link del nav. No se reemplaza por nada en la landing.

**Rationale**: Principio I: el stack es ruido para el cliente. No hay lugar en la landing donde las tecnologías agreguen decisión de compra.

## 5. Layout: FAQ y CTA centrados

**Decisión**: `.faq-list` recibe `margin: 0 auto` (ya tiene `max-width: 760px`). El `.hero-cta` reusado en la banda CTA final recibe `justify-content: center` a través de un selector específico de `.cta-inner .hero-cta`.

**Rationale**: Son los dos fixes de alineación reportados; la causa raíz es distinta en cada uno (margen auto faltante en FAQ; flex sin centrado en CTA).

## 6. Formulario compacto

**Decisión**: Reducir el aire vertical: `form label { margin: 16px 0 4px }` (desde 20/6), `.error { min-height: 1.1em; margin-top: 2px }`, y quitar el margen del primer label para equilibrar el inicio.

**Rationale**: El exceso de espaciado venía de la suma label+error; compactarlo deja un form cómodo sin aire muerto.

## 7. CTA del nav legible

**Decisión**: Aumentar presencia del botón "Contáctanos" del nav: `padding: 10px 22px`, `font-size: .95rem`, `font-weight: 600`, y reforzar el gradiente de acento con texto oscuro `#04121a` ya contrasta sobre teal claro; se agrega `box-shadow` suave para separarlo del fondo oscuro del header.

**Rationale**: El problema era tamaño/aislamiento, no contraste de color. Más padding + sombra lo despegan del fondo oscuro.

## 8. Hero con dos CTAs

**Decisión**: Quitar el botón "Ver servicios" (`.btn-ghost` hacia `#servicios`); quedan "Hablemos de tu proyecto" (primario) y "Agendar reunión" (ghost).

**Rationale**: Menos opciones = menos fricción en el punto de entrada. El nav ya provee acceso a las secciones.

## Conclusión

No quedan NEEDS CLARIFICATION. Todas las decisiones son compatibles con la
constitución (vanilla, accesible, placeholders, sin stack). Se procede a
Fase 1 (data-model, quickstart).
