# AGENTS.md — Global Constraints & Operating System for Antigravity

> **Scope:** Project-wide execution rules, architectural constraints, and skill orchestration.
> **Target Agent:** Antigravity AI Assistant & Dev Agents.
> **Version:** 2.0.0 (Syntropy Digital Standards)

---

## 🚫 1. CRITICAL CONSTRAINTS & PROHIBITIONS

Every action, file generation, or code refactor executed by the agent MUST strictly comply with the following boundaries:

1. **NO Unrequested Framework Overheads:**
   - Do NOT introduce heavy JS frameworks (React, Vue, Next.js) unless explicitly requested by the user.
   - Default output MUST be clean, zero-cost, ultra-fast **Semantic HTML5, CSS (Flexbox/Grid), and vanilla JS**.
2. **NO Client-Side Text Hiding:**
   - Critical SEO/GEO text content, headers, and FAQ sections MUST NEVER be rendered purely via client-side dynamic JavaScript execution. Core text must exist in the static DOM.
3. **NO Unsafe or Destructive Shell Commands:**
   - The agent MUST NOT execute destructive file operations (`rm -rf`, overwrite uncommitted git files) without explicit user confirmation.
4. **NO Secret or API Key Exposure:**
   - Hardcoding credentials, API keys, or private domain environment variables in frontend code is strictly forbidden.

---

## 🧠 2. SKILL & GUIDE ORCHESTRATION

When writing, editing, or auditing web code, the agent MUST passively combine and obey the active knowledge base. Differentiate between executing an action (Skills) and referencing rules (Guides):

### A. Execution Tools (Skills)
Located in `.agents/skills/[skill-name]/SKILL.md`. Use these to perform tasks:
- **`local-seo-aeo-landing-page-writer/SKILL.md`:** Use for generating commercial copy, defining entities, and structuring the funnel.
- **`stitch-html-extractor/SKILL.md`:** Use for extracting UI code via MCP and cleaning up the DOM/CSS.
- **`geo-optimization/SKILL.md`:** Use for injecting JSON-LD (Schema.org), SSR compliance, and robots.txt generation.

### B. Knowledge Base & Auditing (Guides)
Located in `.agents/guides/[guide-name]/GUIDE.md`. Use these strictly to audit and validate your output:
- **`modern-web-guide/GUIDE.md`:** Enforce Core Web Vitals, strict WCAG accessibility (ARIA, contrast), and use native modern APIs (`<dialog>`, `<details>`, `@container`).
- **`Google_Official_Seo_guide/GUIDE.md`:** Validate crawler access, safe anchor texts, canonical tags, and ensure no spam policies are violated.

## ⚡ 3. WORKFLOW EXECUTION PROTOCOL

Workflows located in `.agents/workflows/` (such as `.agents/workflows/syntropy-pipeline/WORKFLOW.md`) are **interactive, multi-phase procedures**. When a workflow is invoked:

1. **Mandatory Checkpoints:**
   - The agent MUST halt execution and ask for explicit user confirmation at designated `[!] Checkpoint` or `PAUSA` steps before advancing to the next phase.
2. **No Assumptions:**
   - If a workflow offers multiple strategies (e.g., Strategy A vs. Strategy B in extraction), present the pros/cons and wait for user selection before proceeding.

---

## 📋 4. PRE-FLIGHT AUDIT CHECKLIST

Before marking any web development task as complete, the agent must run this silent internal check:

- [ ] Is there exactly **one `<h1>`** on the page?
- [ ] Is valid **JSON-LD Schema** injected in the `<head>` without duplication?
- [ ] Are all image assets compressed or in **`.webp`** format?
- [ ] Is the primary conversion path (WhatsApp CTA) clear, sticky, and accessible?
- [ ] Does the page load with **zero hosting cost ($0/mo)** architectural compatibility?