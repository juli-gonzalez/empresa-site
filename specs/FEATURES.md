# Features — registry

Una fila por feature que pasó por Spec Kit (tiene carpeta `specs/NNN-nombre/`).
Se actualiza en cada paso del flujo — no es una foto, es el estado real.

**Estados**: draft → specified → clarified → planned → tasked → implementing → done

| ID | Feature | Estado | Implementó | Aprobado | Estimado (h) | Horas reales | Notas |
|----|---------|--------|------------|----------|---------------|---------------|-------|
| 001 | [Refinar landing — enfoque en valor y resultados](001-refine-landing-value/spec.md) | implementing — tareas T001-T021 ejecutadas, polish T022-T026 en curso | opencode | no | — | — | |
| 002 | [Boost conversión — claridad, confianza y acabado premium](002-boost-conversion/spec.md) | implementing — 30/30 tareas ejecutadas, pendiente validación visual | opencode | no | — | — | Iteración sobre base 001 |

## Cómo se llena

- **Estado**: se actualiza en cada comando de Spec Kit (`/speckit-specify` → `specified`, `/speckit-plan` → `planned`, etc.).
- **Aprobado**: solo "sí" cuando una persona *distinta* de "Implementó" revisó el resultado contra el spec y lo confirmó. Nunca auto-aprobación.
- **Estimado (h)**: se completa al correr `/speckit-tasks` (esfuerzo planeado).
- **Horas reales**: se completa al cerrar la feature.
