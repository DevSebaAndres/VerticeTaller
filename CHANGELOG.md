# CHANGELOG

## [Unreleased]
### 🚀 Características & SEO
- **Fase 3 (GEO):** Se inyectó JSON-LD (`AutoRepair` y `FAQPage`) optimizado para indexación semántica, añadiendo `areaServed` y `sameAs`.
- **Auditoría (Fase 4):** Se añadió la etiqueta `<link rel="canonical" href="...">` para evitar duplicidad de contenido.
- Archivos `robots.txt`, `sitemap.xml` y `llms.txt` generados.

### 🐛 Correcciones & Optimizaciones
- **Producción (Fase 5):** Se eliminó la dependencia externa del CDN de TailwindCSS (`https://cdn.tailwindcss.com`) y su script de configuración dinámico en línea (`<script id="tailwind-config">`) del `<head>` del `index.html` para evitar vulnerabilidades de rendimiento y garantizar el renderizado de costo cero.
- **Compilación requerida:** El proyecto requiere ahora la compilación local de Tailwind CLI (o PostCSS) para generar el archivo CSS de salida final. Se enlazó en el documento HTML la hoja de estilos estática: `<link rel="stylesheet" href="./style/output.css">`. Los tokens de diseño exportados de Stitch deberán configurarse en `tailwind.config.js`.
