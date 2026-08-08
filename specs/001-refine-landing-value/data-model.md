# Data Model: Refinar landing

El sitio es estático y no persiste datos; estas entidades describen el
**contenido estructurado** que viven en `index.html` como marcado
semántico (datos de presentación, editables como placeholders).

## Entity: Testimonio

Representa la cita de un cliente que alimenta el carousel.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `cita` | string | Texto del testimonio (placeholder) |
| `rol` | string | Rol de quien cita (placeholder) |
| `empresa` | string | Empresa placeholder (`TU-CLIENTE-N`) |

Reglas:
- Cada testimonio es un `<blockquote class="quote">` dentro del track del carousel.
- Mínimo 3 testimonios para que el carousel tenga sentido; se pueden agregar más duplicando la estructura.
- Todos los valores de cliente/empresa son placeholders (Principio IV).

## Entity: Solución implementada

Resultado con métrica que muestra trabajo entregado.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `categoria` | string | Etiqueta de área (placeholder) |
| `titulo` | string | Nombre del resultado |
| `metrica` | string | Métrica destacada (ej. "+40%") |
| `contexto` | string | Una línea de qué se integró / para quién |
| `destacada` | boolean | Card protagonista (ancho completo) |

Reglas:
- Al menos 1 card `destacada` por sección (la del +40% actual).
- Las cards no destacadas son placeholder de resultado+métrica.
- No exponen tecnologías de implementación (Principio I).

## Relaciones

- 1 sección **Soluciones** tiene N `Solución implementada`.
- 1 sección **Testimonios** tiene N `Testimonio`.
- No hay relaciones entre ambas entidades; coexisten como prueba social distinta (qué logramos / qué dicen de nosotros).
