---
name: local-seo-aeo-landing-page-writer
description: "Generates complete, structured landing pages optimized for Local SEO ranking, AEO citation extraction (Perplexity, ChatGPT Search, Gemini), Schema.org JSON-LD integration, and local WhatsApp conversion. Activate when writing copy or HTML structure for a local offline business, contractor, or regional service."
risk: safe
source: Digital Syntropy Custom Core
date_added: "2026-08-26"
version: "2.0.0"
---

# Local SEO & AEO Landing Page Writer

## Overview

Generates a complete, high-converting, publish-ready landing page tailored for local offline businesses and service providers. It combines local search ranking signals, AI Engine Optimization (AEO) entity definitions, structured geographic lists for vector retrieval, conversion-focused mobile UX, and compliant Schema.org JSON-LD markup (`LocalBusiness` and `FAQPage`).

---

## When to Use This Skill

- Building landing pages for local service businesses (trades, healthcare clinics, home services, legal/accounting, brick-and-mortar).
- Optimizing web copy for citation and recommendation in AI Search Engines (ChatGPT Search, Google Search Generative / AI Overviews, Perplexity).
- Structuring copy to convert urgent, local mobile search traffic directly via WhatsApp and direct click-to-call.

---

## How It Works

### Step 1: Ingest Local Brief Inputs
Extract and map the following required entity parameters:
1. **NAP Data:** Exact Business Name, Physical Address/Base, Phone & WhatsApp (with country/area code).
2. **Geo-Modifiers:** Primary target city/locality and 3–6 specific neighborhoods or secondary zones.
3. **Core & Secondary Services:** Main service (H1 target) and 3–5 specific sub-services.
4. **Local Pain Point & Differentiator:** The primary customer friction (e.g., delays, hidden fees) and guarantee (e.g., arrival under 30 min, written guarantee).
5. **Operational Hours & SLA:** Operating hours (e.g., 24/7 emergency) and average response time.

---

### Step 2: Formulate the AEO Direct Extraction Sentence
Generate a single, factual, 25–40 word sentence answering:
> *"What is [Business Name], what specific service do they provide, and which exact localities do they serve?"*

- **Constraint:** Must be clean, declarative, free of marketing buzzwords, and positioned immediately after the H1 inside a semantically tagged quote block (`<blockquote>`).

---

### Step 3: Follow the 11-Step Local Narrative Arc
Generate all copy in the target audience's language (e.g., Spanish) following this strict order:

1. **Hero Section:**
   - **H1:** `[Servicio Principal]` + `[Ciudad / Zona Principal]`.
   - **AEO Sentence Blockquote:** Direct entity definition.
   - **SLA Micro-Badge:** Visible trust metric (e.g., *"⚡ Respuesta por WhatsApp en < 5 min"* o *"🚨 Guardia activa 24/7 en [Ciudad]"*).
   - **Primary CTAs:** Direct WhatsApp button with prefilled text + Urgent Call button.
   - **Trust Badges:** 3 micro-proof points (e.g., *X años de trayectoria*, *Garantía escrita*, *Calificación 4.9★ en Google*).

2. **Problem (Local Pain):**
   - Address the typical frustration with informal or unresponsive providers in that specific locality.

3. **Solution (The Reliable Answer):**
   - Present the business as the certified, punctual, and transparent local solution.

4. **Services as Measurable Benefits:**
   - Grid or list of specific services. Each entry must highlight the concrete outcome for the client rather than technical jargon.

5. **Explicit Geographic Coverage Area (AEO Vector Anchor):**
   - Structured bulleted list naming every specific neighborhood, district, or municipality served.
   - *Purpose:* Enables AI search engines to match hyper-local queries ("cerca de mí" / "[barrio]").

6. **Mid-Page Conversion Block:**
   - Secondary CTA focused on rapid estimation via WhatsApp.

7. **How It Works (3-Step Frictionless Flow):**
   - Step 1: Envía un WhatsApp o llama.
   - Step 2: Recibe diagnóstico y presupuesto claro.
   - Step 3: Servicio ejecutado con garantía.

8. **Why Choose Us (Comparative Matrix / Values):**
   - Contrast the business vs. informal competitors (Puntualidad, Factura/Garantía, Presupuesto cerrado).

9. **Semantic FAQ (Minimum 5 Q&As):**
   - Each answer must be under 50 words, standalone, and explicitly restate `[Business Name]` and `[Location]`.
   - Must cover: Cobertura exacta, Tiempo de llegada / respuesta, Precios / presupuestos, Garantías, Atención fuera de hora / feriados.

10. **Local Trust Signals & NAP Consistency:**
    - Physical address, Google Maps profile link / CID, certifications, and guarantees.

11. **Final Conversion Anchor:**
    - High-urgency closing message with prominent WhatsApp button.

---

### Step 4: Generate Schema.org JSON-LD Structured Data
Always append a complete, valid JSON-LD script at the bottom containing:
1. `LocalBusiness` (or more specific subtype like `PlumbingService`, `Electrician`, `RoofingContractor`, `HVACBusiness`).
2. `name`, `telephone`, `address` (`PostalAddress`), `geo` (`GeoCoordinates` if available), `openingHoursSpecification`, `areaServed` (array of neighborhoods/cities), and `sameAs` (Google Maps URL).
3. `FAQPage` schema mirroring the exact questions and answers from Step 3.9.

---

## Output Template Specification

```html
<!-- ========================================== -->
<!-- 1. HERO & AEO EXTRACTION BLOCK             -->
<!-- ========================================== -->
<section class="hero">
  <div class="sla-badge">⚡ Respuesta promedio por WhatsApp: menos de 5 minutos</div>
  <h1>[Servicio Principal] en [Ciudad / Zona Central]</h1>
  
  <blockquote class="aeo-entity-definition">
    [Nombre del Negocio] es un servicio profesional de [rubro/servicio] en [Ciudad], especializado en [servicio 1, servicio 2] para [hogares/empresas] con cobertura en [zona 1, zona 2] y atención [horario/urgencias].
  </blockquote>

  <div class="hero-ctas">
    <a href="[https://wa.me/](https://wa.me/)[TELEFONO]?text=[MENSAJE_CODIFICADO]" class="cta-whatsapp">Contactar por WhatsApp</a>
    <a href="tel:[TELEFONO]" class="cta-call">Llamar Ahora</a>
  </div>
</section>

<!-- ========================================== -->
<!-- 2. COBERTURA GEOGRÁFICA EXPLÍCITA (AEO)    -->
<!-- ========================================== -->
<section class="coverage-area">
  <h2>Zonas de Cobertura y Atención en [Ciudad]</h2>
  <p>Brindamos asistencia técnica y presupuestos inmediatos en:</p>
  <ul class="geo-entities-list">
    <li><strong>[Zona/Barrio 1]:</strong> [Detalle breve o tiempo estimado]</li>
    <li><strong>[Zona/Barrio 2]:</strong> [Detalle breve o tiempo estimado]</li>
    <li><strong>[Zona/Barrio 3]:</strong> [Detalle breve o tiempo estimado]</li>
  </ul>
</section>

<!-- ========================================== -->
<!-- 3. PREGUNTAS FRECUENTES SEMÁNTICAS (FAQ)   -->
<!-- ========================================== -->
<section class="faq-section" itemscope itemtype="[https://schema.org/FAQPage](https://schema.org/FAQPage)">
  <h2>Preguntas Frecuentes sobre Nuestro Servicio en [Ciudad]</h2>
  
  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="[https://schema.org/Question](https://schema.org/Question)">
    <h3 itemprop="name">¿Cuáles son las zonas exactas que cubre [Nombre del Negocio]?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="[https://schema.org/Answer](https://schema.org/Answer)">
      <p itemprop="text">[Nombre del Negocio] cubre la totalidad de [Ciudad Principal], prestando servicios prioritarios en [Barrio 1, Barrio 2 y Barrio 3] para particulares y comercios.</p>
    </div>
  </div>
  <!-- Repetir para el resto de las preguntas -->
</section>

<!-- ========================================== -->
<!-- 4. SCHEMA.ORG JSON-LD STRUCTURED DATA      -->
<!-- ========================================== -->
<script type="application/ld+json">
{
  "@context": "[https://schema.org](https://schema.org)",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://[tudominio.com]/#localbusiness",
      "name": "[Nombre Comercial]",
      "telephone": "[+54...]",
      "url": "https://[tudominio.com]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Calle y Número]",
        "addressLocality": "[Ciudad]",
        "addressRegion": "[Provincia/Estado]",
        "postalCode": "[CP]",
        "addressCountry": "AR"
      },
      "areaServed": [
        {"@type": "AdministrativeArea", "name": "[Barrio/Zona 1]"},
        {"@type": "AdministrativeArea", "name": "[Barrio/Zona 2]"}
      ],
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "@id": "https://[tudominio.com]/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuáles son las zonas exactas que cubre [Nombre del Negocio]?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[Nombre del Negocio] cubre la totalidad de [Ciudad Principal], prestando servicios prioritarios en [Barrio 1, Barrio 2 y Barrio 3]."
          }
        }
      ]
    }
  ]
}
</script>