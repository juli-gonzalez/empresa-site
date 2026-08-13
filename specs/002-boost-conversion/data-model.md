# Data Model: Boost conversión

El sitio es estático y no persiste datos; estas entidades describen el
**contenido estructurado** que vive en `index.html` como marcado semántico.
Esta feature no agrega entidades nuevas: refina el contenido de las
existentes y suma una señal de confianza.

## Entity: CTA

Llamado a la acción con texto, jerarquía y destino.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `texto` | string | Texto del botón (ej. "Hablemos de tu proyecto") |
| `estilo` | enum | `primario` (acento, dominante) o `secundario` (ghost) |
| `destino` | string | Ancla (`#contacto`) o URL placeholder de calendario (`TU-CALENDAR`) |

Reglas:
- El hero tiene exactamente 2 CTAs (1 primario + 1 secundario).
- El CTA primario debe ser visualmente dominante sobre el secundario.
- Los CTAs se repiten estratégicamente: nav, hero, soluciones, CTA band, formulario.
- Los destinos son anclas internas o placeholders editables (no inventar).

## Entity: Señal de confianza

Elemento que reduce el riesgo percibido y apoya la conversión.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `tipo` | enum | `garantia` (reunión gratuita / sin compromiso), `velocidad` (respuesta <24h), `metrica` (stat con contexto), `testimonio` |
| `texto` | string | Mensaje editable placeholder |
| `ubicacion` | enum | hero / soluciones / cta-final / formulario |

Reglas:
- Al menos 1 `garantia` o `velocidad` en los puntos de conversión (CTA final, formulario).
- Las métricas del bloque de stats se apoyan con una línea de contexto.
- No se inventan datos reales; todo es placeholder editable (Principio IV).

## Entity: Sección

Bloque de contenido con jerarquía y espaciado consistente.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `titulo` | string | Título orientado a beneficio |
| `subtitulo` | string | Línea que refuerza el beneficio |
| `contenido` | markup | Cards, listas, acordeones o testimonios |
| `ritmo` | css | Padding/gap uniforme según el sistema de la página |

Reglas:
- Ritmo vertical uniforme entre secciones (auditar outliers del padding 88px).
- Jerarquía: lo más importante primero dentro de cada sección.

## Relaciones

- 1 sección tiene 1..N CTAs y 0..N Señales de confianza.
- La sección **Testimonios** y **Soluciones** actúan como prueba social (qué logramos / qué dicen de nosotros).
- No hay persistencia; el contenido es estático editable.
