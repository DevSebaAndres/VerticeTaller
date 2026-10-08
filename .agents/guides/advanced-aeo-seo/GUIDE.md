# Guía Técnica: SEO Semántico & AEO para Negocios Locales
## Estándares para el Pipeline de Syntropy Digital

**Versión:** 1.0.0  
**Fecha:** Septiembre 2026  
**Fuentes:** Google Search Central (Sep 2026), Schema.org, OpenAI Developers Docs, hidekazu-konishi.com (GEO research), searchviu.com (AI Crawler Analysis)  
**Alcance:** Páginas de aterrizaje para negocios locales. Vanilla HTML5 + CSS + JSON-LD.

---

## ⚠️ AVISOS CRÍTICOS ANTES DE LEER

> **DEPRECATED (Junio 2026):** Google eliminó el rich result de `FAQPage`. El
> esquema `FAQPage` ya **NO genera resultados enriquecidos en Google Search**.
> Debe usarse `<details>/<summary>` nativo en HTML + JSON-LD `FAQPage` **solo**
> para AEO (ChatGPT Search, Perplexity, Gemini), NO esperando rich results de Google.

> **CRÍTICO — Bots de IA sin JavaScript:** GPTBot, OAI-SearchBot, PerplexityBot,
> ClaudeBot operan **sin ejecutar JavaScript** (69% de los bots IA actuales).
> Todo el contenido SEO/AEO crítico DEBE existir en el HTML estático del servidor.

---

## 1. Jerarquía de Etiquetas HTML5 — Reglas Estrictas

### 1.1 Estructura Obligatoria de Página

```html
<!DOCTYPE html>
<html lang="es-AR">
<head>
  <!-- Meta críticos ANTES de cualquier script -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Nombre del Negocio] — [Servicio Principal] en [Ciudad]</title>
  <meta name="description" content="[Descripción de 150-160 chars. Sin keyword stuffing.]">
  <link rel="canonical" href="https://dominio.com/pagina/">

  <!-- JSON-LD SIEMPRE en <head> -->
  <script type="application/ld+json">{ ... }</script>
</head>
<body>
  <header>          <!-- Branding, nav principal -->
    <nav>           <!-- Único <nav> principal de la página -->
      <!-- Links de navegación -->
    </nav>
  </header>

  <main>            <!-- UNO por página. Contiene el contenido único. -->
    <article>       <!-- Solo si el contenido es autocontenible (landing page) -->

      <!-- ⚠️ REGLA ABSOLUTA: Solo UN <h1> por página -->
      <h1>[Nombre del Negocio o Servicio Principal — 1 sola vez]</h1>

      <section aria-labelledby="servicios-titulo">
        <h2 id="servicios-titulo">Nuestros Servicios</h2>
        <!-- contenido -->

        <section aria-labelledby="servicio-1">
          <h3 id="servicio-1">Instalación Eléctrica Domiciliaria</h3>
          <!-- contenido -->
        </section>
      </section>

      <section aria-labelledby="faq-titulo">
        <h2 id="faq-titulo">Preguntas Frecuentes</h2>
        <!-- <details>/<summary> aquí — ver sección 3 -->
      </section>

    </article>
  </main>

  <aside aria-label="Información de contacto">
    <!-- CTA WhatsApp, horarios — fuera del flujo principal -->
  </aside>

  <footer>
    <!-- Datos NAP, links legales, copyright -->
  </footer>
</body>
</html>
```

### 1.2 Reglas de Jerarquía — Tabla de Referencia Rápida

| Etiqueta | Cantidad por página | Propósito | Error común |
|---|---|---|---|
| `<h1>` | **Exactamente 1** | Identidad de la página | Múltiples h1 en secciones |
| `<h2>` | Sin límite | Secciones principales | Saltar a h3 sin h2 padre |
| `<h3>`–`<h6>` | Sin límite | Subsecciones anidadas | Usarlos por estilo visual |
| `<main>` | **Exactamente 1** | Contenido primario | Dentro de `<article>` |
| `<nav>` | 1–2 (primario + breadcrumb) | Navegación | `<div class="nav">` |
| `<section>` | Sin límite | Grupos temáticos | Sin heading asociado |
| `<article>` | 1 en landing | Contenido autocontenible | Múltiples sin semántica |
| `<details>` | Sin límite | FAQs interactivas | `<div>` con JS toggle |

### 1.3 El Árbol de Headings como Esquema de Recuperación

Los LLMs y motores de búsqueda dividen el contenido por encabezados para crear
"pasajes recuperables". Tu árbol de headings ES tu esquema de indexación.

**✅ Correcto:**
```
h1: Electricista en Buenos Aires — Instalaciones y Reparaciones
  h2: Servicios de Electricidad
    h3: Instalación de Tableros Eléctricos
    h3: Reparación de Cortocircuitos
  h2: Zona de Cobertura
  h2: Preguntas Frecuentes
    h3: ¿Cuánto tarda una instalación nueva?
```

**❌ Incorrecto:**
```
h1: Bienvenidos
h1: Servicios          ← PROHIBIDO segundo h1
h3: Electricidad       ← Salta h2
h2: FAQ
```

---

## 2. JSON-LD Optimizado para Negocios Locales

### 2.1 Reglas Generales Anti-Keyword-Stuffing

| ❌ PROHIBIDO | ✅ CORRECTO |
|---|---|
| `"name": "Electricista Barato Buenos Aires 24hs"` | `"name": "Voltaje Soluciones Eléctricas"` |
| `"description": "electricista electricidad instalaciones..."` | `"description": "Servicio de instalaciones y reparaciones eléctricas con más de 15 años de trayectoria."` |
| Repetir ciudad en cada campo | Definir ciudad UNA vez en `address` |
| Inventar horarios o ratings | Solo datos verificables y reales |

### 2.2 Bloque LocalBusiness — Template Completo

**Propiedades requeridas por Google** (fuente: Google Search Central, Sep 2026):
- `@context`, `@type`, `name`, `address`

**Propiedades recomendadas** (mejoran calidad del rich result):
- `geo`, `telephone`, `url`, `openingHoursSpecification`, `image`, `priceRange`

```json
{
  "@context": "https://schema.org",
  "@type": "Electrician",

  "name": "Voltaje Soluciones Eléctricas",
  "description": "Servicio profesional de instalaciones y reparaciones eléctricas en CABA y GBA Norte. Habilitados por el GCBA.",

  "url": "https://www.voltaje.com.ar/",
  "telephone": "+541130001234",
  "priceRange": "$$",

  "image": [
    "https://www.voltaje.com.ar/img/taller-1x1.webp",
    "https://www.voltaje.com.ar/img/taller-4x3.webp",
    "https://www.voltaje.com.ar/img/taller-16x9.webp"
  ],

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Corrientes 1500",
    "addressLocality": "Buenos Aires",
    "addressRegion": "CABA",
    "postalCode": "C1042AAD",
    "addressCountry": "AR"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.60370,
    "longitude": -58.38161
  },

  "areaServed": [
    {
      "@type": "City",
      "name": "Buenos Aires"
    },
    {
      "@type": "AdministrativeArea",
      "name": "GBA Norte"
    }
  ],

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],

  "sameAs": [
    "https://www.instagram.com/voltaje_electrica/",
    "https://www.facebook.com/voltajeelectrica/"
  ]
}
```

### 2.3 Bloque FAQPage para AEO (sin expectativa de rich result en Google)

> **Contexto:** FAQPage ya no genera rich results en Google (deprecado Mayo 2026).
> SU USO ACTUAL es para AEO: permite a ChatGPT Search, Perplexity y Gemini
> extraer preguntas y respuestas estructuradas como fuentes citables.

**Reglas para preguntas AEO efectivas:**
1. Cada respuesta debe ser **autocontenible** (un bot puede citarla sin contexto previo)
2. Incluir el **nombre del servicio/ciudad** dentro de la respuesta
3. Sin keyword stuffing — una pregunta real, una respuesta real
4. Máximo 6-8 preguntas por página (calidad > cantidad)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una revisión eléctrica en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo de una revisión eléctrica básica en Buenos Aires varía entre $15.000 y $30.000 según la superficie del inmueble. Voltaje Soluciones Eléctricas ofrece presupuesto sin cargo previo a la visita técnica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados y en emergencias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestro horario regular de atención es lunes a viernes de 8 a 18 hs y sábados de 9 a 13 hs. Para emergencias eléctricas fuera de horario, contactarse al +541130001234."
      }
    },
    {
      "@type": "Question",
      "name": "¿Están habilitados por el Gobierno de la Ciudad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Voltaje Soluciones Eléctricas cuenta con habilitación del GCBA y todos nuestros técnicos están matriculados ante el Consejo Profesional de Técnicos de Buenos Aires."
      }
    }
  ]
}
```

### 2.4 HTML Semántico Sincronizado con FAQ JSON-LD

El contenido de las FAQs DEBE existir también en el DOM estático. Los bots de IA
sin JS (GPTBot, OAI-SearchBot) leen el HTML, NO el JSON-LD exclusivamente.

```html
<section aria-labelledby="faq-titulo">
  <h2 id="faq-titulo">Preguntas Frecuentes</h2>

  <!-- <details>/<summary> = nativo, sin JS, accesible, crawleable -->
  <details>
    <summary>
      <h3>¿Cuánto cuesta una revisión eléctrica en Buenos Aires?</h3>
    </summary>
    <p>El costo de una revisión eléctrica básica en Buenos Aires varía entre
    $15.000 y $30.000 según la superficie del inmueble. Voltaje Soluciones
    Eléctricas ofrece presupuesto sin cargo previo a la visita técnica.</p>
  </details>

  <details>
    <summary>
      <h3>¿Trabajan los sábados y en emergencias?</h3>
    </summary>
    <p>Sí. Nuestro horario regular es lunes a viernes de 8 a 18 hs y sábados
    de 9 a 13 hs. Para emergencias fuera de horario, contactarse
    al +541130001234.</p>
  </details>
</section>
```

> **⚠️ REGLA:** El texto de `<p>` dentro de `<details>` debe ser **idéntico**
> al `"text"` del `"acceptedAnswer"` en el JSON-LD. Consistencia es obligatoria.

---

## 3. Accesibilidad y Contraste — Reglas que las IAs Valoran

### 3.1 Por qué la accesibilidad impacta el AEO

Los bots de IA que **no ejecutan JavaScript** consumen el DOM exactamente como
un lector de pantalla. Si tu contenido es accesible para tecnologías asistivas,
es óptimo para IA. Son la misma audiencia técnica.

### 3.2 Contraste de Color — WCAG 2.2 AA Obligatorio

| Contexto | Ratio mínimo requerido |
|---|---|
| Texto normal (< 18px) | **4.5:1** |
| Texto grande (≥ 18px o ≥ 14px bold) | **3:1** |
| Componentes UI (bordes, iconos funcionales) | **3:1** |
| Texto decorativo / logos | Sin requisito |

**Herramienta de validación:** https://webaim.org/resources/contrastchecker/

```css
/* ✅ Ejemplo de sistema de colores accesible */
:root {
  --color-texto-principal: #1a1a2e;     /* Sobre blanco: ratio 16.8:1 ✅ */
  --color-fondo: #ffffff;
  --color-acento: #0d6efd;             /* Sobre blanco: ratio 4.7:1 ✅ */
  --color-texto-secundario: #6c757d;   /* OJO: sobre blanco = 4.6:1, límite */
  --color-cta-whatsapp: #128C7E;       /* Sobre blanco: ratio 5.0:1 ✅ */
}
```

### 3.3 ARIA — Uso Correcto (Regla de Primacía Semántica)

> **Regla de oro:** Si existe una etiqueta HTML nativa para el propósito, úsala.
> ARIA complementa, nunca reemplaza la semántica nativa.

```html
<!-- ❌ INCORRECTO: ARIA en lugar de semántica -->
<div role="heading" aria-level="2" class="titulo-seccion">Servicios</div>

<!-- ✅ CORRECTO: Semántica nativa -->
<h2>Servicios</h2>

<!-- ❌ INCORRECTO: botón con div -->
<div role="button" onclick="..." tabindex="0">Contactar</div>

<!-- ✅ CORRECTO: elemento nativo -->
<button type="button" onclick="...">Contactar</button>

<!-- ✅ CORRECTO: ARIA cuando no hay alternativa nativa -->
<nav aria-label="Navegación principal">...</nav>
<section aria-labelledby="faq-titulo">
  <h2 id="faq-titulo">Preguntas Frecuentes</h2>
</section>
```

### 3.4 Densidad Factual — El Principio de Pasaje Autocontenible

Los motores de respuesta (Perplexity, ChatGPT Search, AI Overviews) extraen y
citan pasajes individuales. Un pasaje que requiere leer el párrafo anterior para
tener sentido **no puede ser citado con precisión**.

**Regla práctica:**
```
❌ MAL: "Lo hacemos con más de 15 años de experiencia."
✅ BIEN: "Voltaje Soluciones Eléctricas tiene más de 15 años de trayectoria
          en instalaciones eléctricas en Buenos Aires."
```

Cada oración de valor debe contener: **sujeto + afirmación + calificador**.

### 3.5 Imágenes — Obligaciones de Accesibilidad y Rendimiento

```html
<!-- ✅ Imagen informativa: alt descriptivo -->
<figure>
  <img
    src="/img/tablero-electrico.webp"
    alt="Técnico instalando un tablero eléctrico trifásico en una vivienda de CABA"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
  >
  <figcaption>Instalación de tablero trifásico — Proyecto residencial, Palermo 2025</figcaption>
</figure>

<!-- ✅ Imagen decorativa: alt vacío -->
<img src="/img/separador.webp" alt="" role="presentation" width="1200" height="4">
```

> **⚠️ REGLA:** Toda imagen DEBE estar en formato `.webp`  
> **⚠️ REGLA:** Toda imagen informativa DEBE tener `alt` no vacío y descriptivo

---

## 4. robots.txt & llms.txt — Configuración para Bots de IA

### 4.1 Taxonomía de Bots de IA (Referencia Sep 2026)

| User-agent | Empresa | Rol | Ejecuta JS | Respeta robots.txt |
|---|---|---|---|---|
| `GPTBot` | OpenAI | Training crawler | ❌ No | ✅ Sí |
| `OAI-SearchBot` | OpenAI | Search-index crawler | ❌ No | ✅ Sí |
| `ChatGPT-User` | OpenAI | User-triggered fetch | ❌ No | ⚠️ Puede no aplicar |
| `ClaudeBot` | Anthropic | Training crawler | ❌ No | ✅ Sí |
| `PerplexityBot` | Perplexity | Search-index crawler | ❌ No | ✅ Sí |
| `Googlebot` | Google | Search + indexing | ✅ Full JS | ✅ Sí |
| `Google-Extended` | Google | Token permiso Gemini/Vertex | N/A | N/A |
| `Applebot-Extended` | Apple | Token permiso Apple Intelligence | N/A | N/A |

> **IMPORTANTE:** `Google-Extended` y `Applebot-Extended` **NO son crawlers**.
> Son tokens de permiso en robots.txt. Bloquearlos NO afecta el ranking en Google Search.

### 4.2 robots.txt Recomendado (Negocios Locales — Máxima Visibilidad IA)

```
User-agent: *
Allow: /

# Permitir indexación en ChatGPT Search explícitamente:
User-agent: OAI-SearchBot
Allow: /

# Permitir indexación en Perplexity:
User-agent: PerplexityBot
Allow: /

# Bots de entrenamiento — Decisión del cliente.
# Descomente las líneas de abajo para bloquear uso en entrenamiento de modelos:
# User-agent: GPTBot
# Disallow: /
# User-agent: ClaudeBot
# Disallow: /

Sitemap: https://dominio.com/sitemap.xml
```

### 4.3 llms.txt (Propuesta emergente — no estándar IETF)

Archivo opcional en la raíz del sitio (`/llms.txt`). Provee contexto
estructurado a LLMs durante fetches agenticos. No es reconocido por Google.

```markdown
# [Nombre del Negocio]

> [Descripción en 1-2 oraciones. Quién es, qué hace, dónde opera.]

## Servicios

- [Servicio 1]: [URL]
- [Servicio 2]: [URL]

## Contacto

- WhatsApp: https://wa.me/54XXXXXXXXXX
- Teléfono: +54 11 XXXX-XXXX
- Dirección: [Dirección completa]

## Aviso de uso de contenido

El contenido de este sitio puede ser utilizado para responder consultas de usuarios
en motores de búsqueda de IA. No está autorizada la reproducción comercial sin
permiso escrito.
```

---

## 5. Checklist de Auditoría Pre-Deploy

```
✅ ESTRUCTURA HTML
  [ ] ¿Exactamente 1 <h1> en la página?
  [ ] ¿El árbol h1→h2→h3 es secuencial sin saltos?
  [ ] ¿<main> contiene solo el contenido único de la página?
  [ ] ¿Las FAQs usan <details>/<summary> nativo (sin JS toggle)?
  [ ] ¿Todo el contenido crítico existe en HTML estático (no solo en JS)?
  [ ] ¿Cada <section> tiene un heading o aria-labelledby?

✅ JSON-LD
  [ ] ¿El JSON-LD está en el <head>?
  [ ] ¿El @type es el subtipo más específico de LocalBusiness?
  [ ] ¿El campo "name" es el nombre real del negocio (sin keywords extra)?
  [ ] ¿Las coordenadas geo tienen al menos 5 decimales?
  [ ] ¿El texto del FAQPage JSON-LD es idéntico al texto del DOM?
  [ ] ¿Validado en https://search.google.com/test/rich-results?

✅ ACCESIBILIDAD
  [ ] ¿Contraste de todos los textos normales ≥ 4.5:1?
  [ ] ¿Contraste de textos grandes ≥ 3:1?
  [ ] ¿Toda imagen informativa tiene alt descriptivo?
  [ ] ¿Toda imagen está en formato .webp?
  [ ] ¿Los botones son <button>, no <div role="button">?
  [ ] ¿Los inputs de formulario tienen <label> asociado?

✅ DESCUBRIMIENTO Y CANONICALIZACIÓN
  [ ] ¿El sitemap.xml está referenciado en robots.txt?
  [ ] ¿El <link rel="canonical"> es byte-a-byte idéntico al og:url?
  [ ] ¿Las fechas son consistentes en: texto visible, datetime=, y JSON-LD?
  [ ] ¿El JSON-LD NO está duplicado en la misma página?
```

---

## 6. Glosario de Términos

| Término | Definición |
|---|---|
| **AEO** | Answer Engine Optimization. Optimización para que motores de IA citen tu contenido en sus respuestas generadas. |
| **GEO** | Generative Engine Optimization. Término académico del paper Princeton/KDD 2024. Sinónimo de AEO con énfasis en visibilidad en respuestas generadas. |
| **Pasaje autocontenible** | Fragmento de texto que tiene sentido completo sin requerir contexto previo; apto para citación directa por IA. |
| **Rich Result** | Resultado enriquecido en Google SERP (carrusel, estrellas, FAQ expandidas). El tipo FAQPage fue deprecado en 2026. |
| **llms.txt** | Archivo de texto en raíz del sitio que provee contexto a LLMs durante fetches agenticos. Propuesta no oficial. |
| **Training crawler** | Bot que descarga contenido para entrenar modelos (GPTBot, ClaudeBot). Distinto de search-index crawlers. |
| **User-triggered fetcher** | Bot que actúa cuando un usuario pide leer una URL en tiempo real (ChatGPT-User). Robots.txt puede no aplicar. |
| **Token de permiso** | Google-Extended y Applebot-Extended. No son crawlers; controlan si el contenido ya indexado puede usarse en entrenamiento de modelos. |

---

## 7. Hallazgos Clave de Investigación (Base de esta Guía)

| Hallazgo | Fuente | Impacto en pipeline |
|---|---|---|
| FAQPage deprecated en Google (Mayo-Jun 2026) | Google Search Central Updates | **CRÍTICO** — Ajustar expectativas del cliente; usar para AEO, no rich results |
| 69% de bots IA no ejecutan JavaScript | searchviu.com / Vercel Research | **CRÍTICO** — Todo contenido en HTML estático del servidor |
| OAI-SearchBot ≠ GPTBot (funciones distintas) | OpenAI Developers Docs oficial | **MEDIO** — Configuración robots.txt diferenciada por función |
| Pasajes autocontenibles = hasta +40% visibilidad AEO | Princeton/KDD 2024 GEO Paper | **ALTO** — Principio redaccional obligatorio |
| `<details>`/`<summary>` nativo para FAQs | W3C / WHATWG | **ALTO** — Sin dependencia JS, accesible, crawleable |
| Coordenadas geo JSON-LD requieren ≥5 decimales | Google Search Central | **MEDIO** — Calidad del dato para Knowledge Panel |
| Google-Extended no es un crawler | OpenAI Developers / Google Docs | **MEDIO** — Error conceptual frecuente en robots.txt |

---

*Documento generado por Antigravity (rol: Arquitecto SEO & Especialista AEO) para Syntropy Digital.*  
*Investigación realizada con Firecrawl MCP sobre fuentes primarias. Septiembre 2026.*  
*Revisar cambios en [Google Search Central](https://developers.google.com/search/updates) periódicamente.*
