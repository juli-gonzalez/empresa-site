# Implementation Plan: Boost conversión — claridad, confianza y acabado premium

**Branch**: `002-boost-conversion` | **Date**: 2026-08-13 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-boost-conversion/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Iteración de conversión sobre la landing ya pulida en la feature 001. No se rediseña: se conserva la identidad visual (azul noche `#0F1B2D`, acento amarillo `#F5A91E`, Space Grotesk/Inter) y la estructura de secciones existente. Se optimizan: hero (propuesta de valor en una frase + CTA primario dominante), copywriting orientado a beneficios, señales de confianza (garantía de reunión gratuita, respuesta <24h), jerarquía/espaciado consistente y mobile first. Solo se tocan `index.html`, `style.css`, `script.js`.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6 (vanilla, sin build)

**Primary Dependencies**: Ninguna. Google Fonts (Space Grotesk, Inter, JetBrains Mono) vía `<link>` ya existente.

**Storage**: N/A (landing estática; sin backend)

**Testing**: `node --check script.js` + inspección visual en navegador (desktop y viewport móvil 375px). Sin suite de tests; no se inventa una (constitución).

**Target Platform**: Navegadores modernos desktop y móvil; sin JS funcional parcial (anclas, mailto).

**Project Type**: Landing page estática

**Performance Goals**: Sin degradación notable; cero dependencias nuevas; mantener carga ligera.

**Constraints**: HTML/CSS/JS vanilla; no exponer tecnologías; respetar `prefers-reduced-motion`; accesibilidad; placeholders `TU-*` editables; solo modificar los 3 archivos existentes; difs cortos.

**Scale/Scope**: 1 landing page, ~10 secciones, copy reescrito + refinamiento CSS + micro-ajustes JS.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| # | Principio | Estado | Justificación |
|---|-----------|--------|---------------|
| I | Resultados de negocio, no tecnología | ✅ PASS | Todos los textos reescritos venden beneficios/resultados; 0 menciones de stack. |
| II | Landing estática, sin frameworks | ✅ PASS | Solo vanilla; cero dependencias nuevas. |
| III | Accesibilidad y movimiento reducido | ✅ PASS | Se mantiene `prefers-reduced-motion`; sin animaciones nuevas que rompan. |
| IV | Placeholders explícitos | ✅ PASS | Todo dato real sigue como `TU-*` editable. |
| V | Simplicidad y YAGNI | ✅ PASS | Sin secciones nuevas; solo optimización del contenido y estilo existente. |

**Constitution Check Result**: ✅ PASS — sin violaciones. No requiere Complexity Tracking.

## Project Structure

### Documentation (this feature)

```text
specs/002-boost-conversion/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
index.html   # única página (HTML semántico; copy reescrito; hero, secciones, CTA, contacto)
style.css    # sistema de estilos existente (variables, botones, secciones, carousel, form, mobile)
script.js    # IIFE: nav toggle, year, reveal, counters, carousel, form validation
favicon.svg  # sin cambios
og-image.svg # sin cambios
```

**Structure Decision**: Se mantiene la estructura flat existente del proyecto. Solo se editan los 3 archivos del sitio. No se crean archivos nuevos (la feature es refinamiento de contenido y estilo, no arquitectura).

## Complexity Tracking

> No aplica: la Constitution Check pasó sin violaciones.
