---
name: modern-web-guide
description: Actúa como consultor y auditor de desarrollo web moderno usando las directrices oficiales de "Modern Web Guidance" de Google Chrome. Cubre accesibilidad, rendimiento, UX/UI, HTML semántico, CSS avanzado, seguridad, privacidad y WebMCP.
---

# Guía de la Web Moderna (Modern Web Guide)

Esta skill permite al agente actuar como experto en desarrollo web moderno, aplicando las habilidades y estándares promovidos por la guía oficial de Chrome Developers. Cada sub-habilidad tiene su propia guía técnica en el repositorio oficial de Google Chrome en GitHub.

**Fuente oficial:** https://developer.chrome.com/docs/modern-web-guidance/explore-skills?hl=es-419
**Repositorio de referencia:** https://github.com/GoogleChrome/modern-web-guidance-src

---

## Cuándo usar esta skill
Actívate cuando el usuario pida:
- Auditar, estructurar u optimizar código HTML, CSS o JS de una app web.
- Aplicar mejores prácticas de rendimiento, accesibilidad o seguridad a un proyecto web.
- Generar componentes, layouts o formularios modernos siguiendo los estándares actuales de la web.
- Implementar autenticación con llaves de acceso (passkeys) o configurar políticas de privacidad.
- Integrar WebMCP para exponer funcionalidades del navegador a agentes de IA.

---

## Sub-habilidades Disponibles

Elige la sub-habilidad que mejor se adapte a la tarea del usuario:

### 🎯 Orquestadores (Disciplinas Principales)

#### `accessibility`
Sirve como guía central de auditoría para evaluar, corregir y aplicar patrones de accesibilidad en toda la aplicación.
- **Cuándo usarla:** Al revisar contrastes de color, uso de ARIA, navegación por teclado, lectores de pantalla o formularios accesibles.
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/megaskill-accessibility/SKILL.md)

#### `performance`
Optimiza las métricas Core Web Vitals (LCP, INP, CLS), reduce latencias de carga y mejora la respuesta a la interacción del usuario.
- **Cuándo usarla:** Al diagnosticar páginas lentas, optimizar imágenes, eliminar bloqueo del hilo principal o mejorar la percepción de velocidad.
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/megaskill-performance/SKILL.md)

#### `user-experience`
Kit de herramientas de UI para implementar elementos responsivos, transiciones fluidas y patrones de diseño modernos.
- **Cuándo usarla:** Al diseñar o mejorar la interfaz de usuario con animaciones, diseño responsivo o componentes interactivos.
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/megaskill-user-experience/SKILL.md)

---

### 🧱 Habilidades Core (Bases del Proyecto)

#### `html`
Lineamientos para arquitectura HTML moderna: semántica, APIs nativas interactivas (Dialog, Popover, Details), gestión de enfoque y priorización de recursos.
- **Cuándo usarla:** Al estructurar documentos web, implementar superposiciones nativas o definir el orden de carga.
- [Ver guía en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/guides/html/html/guide.md)

#### `css`
Lineamientos para arquitectura CSS moderna, sistemas de diseño y rendimiento de renderización.
- **Cuándo usarla:** Al crear estilos, definir sistemas de tokens de diseño o auditar la carga de CSS.
- [Ver guía en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/guides/css/css/guide.md)

#### `css-layout`
Layouts con Flexbox, CSS Grid, subgrid, consultas de contenedor (`@container`), posicionamiento de anclaje y tamaño intrínseco.
- **Cuándo usarla:** Al diseñar componentes responsivos o estructuras de página complejas.
- [Ver guía en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/guides/css-layout/css-layout/guide.md)

#### `forms`
Mejores prácticas para formularios web accesibles, seguros y fáciles de usar.
- **Cuándo usarla:** Al crear o modificar formularios, inputs, validaciones y flujos de envío.
- [Ver guía en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/guides/forms/forms/guide.md)

#### `cpp-on-the-web`
Compilación de C y C++ para la web con WebAssembly usando Emscripten.
- **Cuándo usarla:** Al portar código C++, compilar bibliotecas nativas o configurar módulos de alto rendimiento en el navegador.
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/cpp-on-the-web/SKILL.md)

---

### 🔐 Seguridad, Privacidad y Autenticación

#### `security`
Lineamientos de seguridad preventiva (XSS, CSP, cookies seguras, aislamiento de origen cruzado).
- **Cuándo usarla:** Al auditar cabeceras HTTP, implementar políticas de seguridad de contenido o proteger contra inyecciones.
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/security/SKILL.md)

#### `passkeys`
Guía integral para implementar WebAuthn y passkeys: registro, autenticación, administración y reautenticación.
- **Cuándo usarla:** Al implementar autenticación sin contraseñas o flujos de inicio de sesión modernos y seguros.
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/passkeys/SKILL.md)

#### `privacy`
Implementación de privacidad desde el diseño: minimización de datos, auditorías de terceros, manejo seguro de datos y configuración de encabezados de seguridad.
- **Cuándo usarla:** Al diseñar la política de privacidad de una app, integrar servicios de terceros o manejar datos personales de usuarios.
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/privacy/SKILL.md)

---

### 🔌 Extensiones de Chrome (Opcional)

#### `chrome-extensions`
Extensiones de Chrome seguras y compatibles con Manifest V3, evitando errores comunes del ciclo de vida del service worker.
- **Cuándo usarla:** Al desarrollar o auditar una extensión de Chrome para la Chrome Web Store.
- **Instalación:** `npx skills add GoogleChrome/modern-web-guidance --skill chrome-extensions`
- [Ver SKILL.md en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/skills-src/chrome-extensions/SKILL.md)

---

### 🤖 Integración con IA (WebMCP)

#### `webmcp`
Implementa WebMCP para exponer la funcionalidad del navegador del cliente como herramientas interactivas que los agentes de IA pueden invocar directamente.
- **Cuándo usarla:** Al conectar una app web con agentes de IA para que estos puedan interactuar con las funciones del navegador.
- [Ver guía en GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/guides/webmcp/webmcp/guide.md)

---

## Lista de verificación / Checklist
- [ ] ¿Se ha identificado correctamente qué sub-habilidad aplica a la tarea del usuario?
- [ ] ¿El código HTML utiliza APIs interactivas nativas (`<dialog>`, `popover`, etc.) donde corresponde?
- [ ] ¿El layout utiliza CSS Grid o Container Queries en lugar de depender únicamente de media queries globales?
- [ ] ¿Se han optimizado los recursos de carga (LCP, CLS, INP)?
- [ ] ¿La interfaz cumple con los criterios de accesibilidad (teclado, contraste, ARIA)?
- [ ] ¿Se han implementado cabeceras HTTP defensivas (CSP, HSTS)?
- [ ] ¿Los formularios tienen etiquetas `<label>` correctamente vinculadas y validación accesible?
