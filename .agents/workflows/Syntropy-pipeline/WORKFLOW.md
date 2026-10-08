---
description: Pipeline de ejecución obligatoria para proyectos de desarrollo web en Syntropy Digital, integrando diseño asistido por Stitch vía MCP.
version: "2.1.0"
updated: "2026-09-21"
---

## Syntropy Digital - Web Development Master Pipeline

**Directiva del Sistema:** Eres el agente principal de Antigravity asignado a este proyecto. Debes ejecutar el desarrollo web siguiendo estrictamente las 5 fases detalladas a continuación.  
**REGLA CRÍTICA:** Está terminantemente prohibido avanzar a la siguiente fase sin antes presentar los resultados de la fase actual y recibir la confirmación explícita del usuario mediante las pausas obligatorias (`[!] PAUSA`).

---

## 🏗️ FASE 1: Estrategia y Contenido (AEO & Local SEO)

1. Solicita al usuario los siguientes datos del cliente. **Todos son obligatorios para las fases posteriores:**
   - **NAP:** Nombre legal del negocio, dirección completa y teléfono con código de país.
   - **Subtipo de negocio:** El tipo Schema.org más específico posible (ej: `Electrician`, `CafeOrCoffeeShop`, `Plumber`, `HairSalon`). Consultar el listado en https://schema.org/LocalBusiness.
   - **Coordenadas geográficas:** Latitud y longitud (mínimo 5 decimales), o dirección exacta para geocodificar.
   - **Redes sociales:** URLs de Instagram, Facebook, Google Business Profile y otras para el campo `sameAs`.
   - **Zonas de cobertura precisas** y **servicios principales**.
   - **Horarios de apertura** por día de la semana.
2. Lee la skill ubicada en `.agents/skills/local-seo-aeo-landing-page-writer/SKILL.md`.
3. Genera el copy de la landing page, estructurando la frase de extracción AEO, la jerarquía semántica (H1, H2, H3) y las preguntas frecuentes (FAQs) con entidades explícitas. Recuerda: cada respuesta FAQ debe ser **autocontenible** (sujeto + afirmación + calificador).
4. **[!] PAUSA:** Entrega el texto al usuario para que lo utilice como input en Stitch (junto a la paleta de colores y logo). Pregunta explícitamente: *"¿Aprobamos este contenido para que generes el diseño visual en Stitch?"*

---

## 🎨 FASE 2: Extracción Stitch & Refinamiento Semántico

1. Espera a que el usuario confirme que el diseño en Stitch está listo y que la conexión MCP está activa.
2. Ejecuta la skill `.agents/skills/stitch-html-extractor/SKILL.md` para extraer el HTML/CSS estático desde la plataforma.
3. Lee **ambas** guías de referencia:
   - `.agents/guides/modern-web-guide/GUIDE.md` → Criterios visuales, rendimiento (Core Web Vitals), accesibilidad WCAG, HTML/CSS moderno y UX.
   - `.agents/guides/advanced-aeo-seo/GUIDE.md` → Jerarquía HTML5 semántica, estándares GEO/AEO, contraste mínimo y reglas de parseo para bots de IA.
4. **Refinamiento Obligatorio:**
   - Limpia el código extraído.
   - Inyecta los textos comerciales aprobados en la Fase 1 reemplazando el contenido dummy.
   - Aplica las reglas estrictas de HTML5: convierte contenedores genéricos a etiquetas semánticas (`<main>`, `<details>`, `<summary>`), asegura un único `<h1>` y ajusta contrastes (mínimo 4.5:1 para texto normal, 3:1 para texto grande).
5. **[!] PAUSA:** Entrega el código UI unificado y semántico. Pregunta explícitamente: *"El código ha sido refinado semánticamente. ¿Aprobamos la interfaz para pasar a la inyección técnica?"*

---

## ⚙️ FASE 3: Inyección Técnica para IA (GEO & Indexación)

1. Lee la skill operativa `.agents/skills/geo-optimization/SKILL.md` aplicando los estándares técnicos de `.agents/guides/advanced-aeo-seo/GUIDE.md`.
2. Toma el código consolidado de la Fase 2 e inyecta los scripts JSON-LD en el `<head>`:
   - **`LocalBusiness` (subtipo específico):** Incluir `name`, `url`, `telephone`, `priceRange`, `address`, `geo` (≥5 decimales), `openingHoursSpecification`, `areaServed` y `sameAs`. Sin keyword stuffing: el campo `"name"` debe ser el nombre real del negocio, sin palabras clave extra.
   - **`FAQPage`:** Inyectar los bloques `Question` / `AcceptedAnswer` sincronizados 1:1 con el acordeón `<details>` del DOM.
   > ⚠️ **AVISO CRÍTICO — FAQPage:** Google eliminó el rich result de FAQPage en Mayo 2026. Este schema **NO** generará resultados enriquecidos en Google Search. Se inyecta **exclusivamente para AEO** (ChatGPT Search, Perplexity, Gemini). No comunicar al cliente una expectativa de rich results de Google por esta vía.
3. Genera o verifica el archivo `robots.txt`. Tener en cuenta la taxonomía correcta de bots:
   - `OAI-SearchBot` → crawler de *indexación* de ChatGPT Search. **Siempre permitir.**
   - `GPTBot` → crawler de *entrenamiento* de modelos OpenAI. Decisión del cliente.
   - `PerplexityBot` → crawler de indexación de Perplexity. **Siempre permitir.**
   - `Applebot` → indexación de Safari/Spotlight. **Siempre permitir.**
   - `Google-Extended` → **NO es un crawler**. Es un token de permiso para uso del contenido ya indexado en entrenamiento de Gemini/Vertex. Bloquear NO afecta el ranking en Google Search.
4. Genera o verifica el archivo `sitemap.xml` con referencia correcta en el `robots.txt`.
5. Genera el archivo `llms.txt` en la raíz del sitio con: nombre del negocio, descripción de 1-2 oraciones, lista de servicios con URLs, y datos de contacto (WhatsApp + teléfono + dirección).
6. Verifica que todo el contenido crítico (FAQs, H1, copy principal) esté presente en el HTML estático inicial y **no dependa de JavaScript para ser visible en el DOM**.
7. **[!] PAUSA:** Muestra un resumen de los metadatos JSON-LD inyectados y los archivos `robots.txt`, `sitemap.xml` y `llms.txt`. Pregunta explícitamente: *"¿Aprobamos la optimización técnica para pasar a la auditoría final?"*

---

## 🛡️ FASE 4: Auditoría de Calidad (QA) y Documentación

1. Ejecuta la "Checklist de Auditoría Pre-Deploy" de la Sección 5 de `.agents/guides/advanced-aeo-seo/GUIDE.md`.
2. Reporta el resultado **explícitamente** para cada ítem del checklist con estado **PASS** o **FAIL**:
   - **[PASS/FAIL] ¿Exactamente 1 `<h1>`?**
   - **[PASS/FAIL] ¿Árbol de headings secuencial (h1→h2→h3) sin saltos?**
   - **[PASS/FAIL] ¿FAQs usan `<details>`/`<summary>` nativo (sin JS toggle)?**
   - **[PASS/FAIL] ¿JSON-LD en `<head>` sin duplicación?**
   - **[PASS/FAIL] ¿Texto del FAQPage JSON-LD idéntico al contenido del DOM?**
   - **[PASS/FAIL] ¿Contraste de textos normales ≥ 4.5:1?**
   - **[PASS/FAIL] ¿Toda imagen informativa tiene `alt` descriptivo?**
   - **[PASS/FAIL] ¿Botones usan `<button>` nativo, no `<div role="button">`?**
   - **[PASS/FAIL] ¿`sitemap.xml` referenciado en `robots.txt`?**
   - **[PASS/FAIL] ¿`<link rel="canonical">` presente y correcto?**
   - **[PASS/FAIL] ¿No hay dependencias CDN externas de CSS/JS sin documentar?**
3. Documenta los cambios de la sesión actual en `CHANGELOG.md` siguiendo la directiva de `.agents/rules/changelog.md`.
4. **[!] PAUSA:** Presenta el resultado completo del checklist (todos los ítems con PASS/FAIL) y pregunta explícitamente: *"La auditoría técnica fue superada y documentada. ¿Aprobamos para proceder con la Fase 5 de empaquetado final?"*

---

## 📦 FASE 5: Empaquetado para Producción y Entorno Local

1. Verifica que el HTML final **no contenga dependencias CDN externas** de CSS o JavaScript en producción (scripts de CDN como Tailwind CDN, Bootstrap CDN, etc.). Si existen:
   - Eliminarlos del `<head>` del HTML.
   - Documentar en el `CHANGELOG.md` bajo la categoría `🐛 Correcciones & Optimizaciones` qué scripts fueron removidos y qué compilación local se requerirá (ej: PostCSS/CLI para Tailwind, etc.).
2. Entrega el código HTML final completamente limpio y listo para producción.
3. Entrega al usuario un único comando de terminal (PowerShell/Bash) para generar físicamente la estructura de carpetas del proyecto (`assets/img`, `style`, `js`) y sus archivos en blanco si aún no existen.
4. Notifica al usuario que el pipeline ha finalizado con éxito y el proyecto está listo para su despliegue local.