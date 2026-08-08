# Implementation Plan: Refinar landing — enfoque en valor y resultados

**Branch**: `001-refine-landing-value` | **Date**: 2026-08-08 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-refine-landing-value/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Reformular la landing de la empresa para que venda resultados de negocio en
lugar de tecnología: eliminar la sección "Stack tecnológico", transformar
"Casos de uso" en "Soluciones implementadas" con métricas (card +40%
destacada), convertir los testimonios en un carousel full-width con
desvanecido lateral y autoplay (con pausa al hover y respeto a
`prefers-reduced-motion`), corregir la alineación de FAQ y CTA final,
compactar el formulario de contacto, hacer legible el CTA del nav y
simplificar el hero a dos llamados a la acción. Todo en vanilla
HTML/CSS/JS, sin dependencias, manteniendo el sistema visual existente
(accent teal, dark hero, tipografía Sora/Inter).

## Technical Context

**Language/Version**: HTML5 + CSS3 + JavaScript (ES2020, vanilla, sin build)

**Primary Dependencies**: Ninguna. CSS `scroll-snap`, `mask-image` y
`IntersectionObserver` son nativos del navegador.

**Storage**: N/A (sitio estático; no persiste datos)

**Testing**: Verificación manual en navegador (`open index.html`) + `node --check script.js`. No hay suite de tests en el repo y no se agrega una.

**Target Platform**: Navegadores modernos (desktop + mobile). Fallback básico sin JS.

**Project Type**: Sitio estático (landing page)

**Performance Goals**: Sin librerías ni requests extra; el carousel usa CSS nativo (sin `transform` por frame en JS).

**Constraints**: `prefers-reduced-motion` respetado; sin JS el contenido sigue siendo visible; contenido placeholder intacto.

**Scale/Scope**: Una página, ~15 secciones. Cambios sobre 3 archivos existentes.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Verdict | Justificación |
|------|---------|---------------|
| I. Resultados, no tecnología | ✅ | La feature elimina la sección de stack y orienta las secciones a resultados/métricas |
| II. Vanilla sin frameworks | ✅ | Carousel con scroll-snap/mask nativos; sin dependencias nuevas |
| III. Accesibilidad | ✅ | Autoplay respeta reduced-motion; carousel navegable manualmente |
| IV. Placeholders | ✅ | Contenido nuevo sigue en formato placeholder editable |
| V. Simplicidad/YAGNI | ✅ | Se reusan estilos existentes; difs cortos; sin secciones nuevas |

## Project Structure

### Documentation (this feature)

```text
specs/001-refine-landing-value/
├── spec.md              # Especificación de la feature
├── plan.md              # Este archivo
├── research.md          # Fase 0: decisiones de diseño
├── data-model.md        # Fase 1: entidades (testimonios, soluciones)
├── quickstart.md        # Fase 1: guía de validación manual
├── contracts/           # Fase 1: no aplica (sin interfaces externas)
└── tasks.md             # Fase 2: (/speckit.tasks)
```

### Source Code (repository root)

```text
empresa-site/
├── index.html           # Secciones: eliminar stack, renombrar casos→soluciones, carousel testimonios, FAQ/CTA centrados, hero 2 CTAs, nav sin link stack
├── style.css            # Estilos: carousel, fade lateral, centrados, form compacto, CTA nav visible, estado activo de cards
├── script.js            # Lógica: carousel (scroll-snap + autoplay + pausa hover), observer para cards activas
├── favicon.svg
├── og-image.svg
└── specs/001-refine-landing-value/  # Artefactos de la feature
```

**Structure Decision**: Se mantiene la estructura actual del sitio (landing
de una sola página, 3 archivos de código). No se crean archivos nuevos de
código; la feature se implementa modificando los existentes. Los artefactos
de proceso viven en `specs/001-refine-landing-value/`.

## Complexity Tracking

> No hay violaciones de constitución que justificar. La tabla se omite.

## Phase 0: Research

Ver `research.md` — decisiones: enfoque del carousel (CSS scroll-snap +
mask-image, sin librería), manejo de autoplay con pausa, layout de
"Soluciones implementadas" con card protagonista, espaciado del form.

## Phase 1: Design

Ver `data-model.md` — entidades Testimonio y Solución implementada (estado
del contenido). `contracts/` no aplica (sin interfaces externas).
`quickstart.md` — guía de validación manual end-to-end.
