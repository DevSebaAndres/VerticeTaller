/**
 * Vértice Motores S.R.L. - Sistema de Interacción
 * Control de Acordeón Mobile, Scroll Reveal Escalonado y ScrollSpy
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initScrollSpy();
});

/**
 * Control del menú acordeón móvil
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileMenu) return;

  function setMenuState(open) {
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileMenuBtn.setAttribute(
      'aria-label',
      open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );

    if (open) {
      mobileMenu.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('max-h-[600px]', 'opacity-100', 'pointer-events-auto');

      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    } else {
      mobileMenu.classList.remove('max-h-[600px]', 'opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');

      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  }

  // Toggle al hacer click en el botón
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  // Cerrar al clickear cualquier enlace de navegación
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Cerrar al clickear fuera del menú o del botón
  document.addEventListener('click', (e) => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    if (
      isExpanded &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn.contains(e.target)
    ) {
      setMenuState(false);
    }
  });

  // Cerrar al presionar la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      mobileMenuBtn.focus();
    }
  });

  // Restablecer si la pantalla cambia a desktop (>= 1024px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
    }
  });
}

/**
 * Scroll Reveal Escalonado - Alto rendimiento y compatible al 100%
 * Utiliza IntersectionObserver + aceleración de GPU (transform & opacity)
 * Costo de CPU posterior = 0 (unobserve tras activarse)
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-header, .reveal-card');
  if (!elements.length) return;

  // Si el usuario tiene activado prefers-reduced-motion o no hay soporte IO, no ocultamos nada
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    return;
  }

  // Activamos la clase en el HTML para habilitar el estado inicial
  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Desconectar elemento para liberar recursos
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    }
  );

  elements.forEach((el) => {
    observer.observe(el);
  });
}

/**
 * ScrollSpy - Sincroniza la sección activa con el indicador en la Navbar
 * Funciona de forma reactiva con requestAnimationFrame (0 lag, 60/120 FPS)
 */
function initScrollSpy() {
  const navTargets = [
    { id: 'inicio', href: '#inicio' },
    { id: 'servicios-matriz', href: '#servicios-matriz' },
    { id: 'metodo-transparente', href: '#metodo-transparente' },
    { id: 'homologacion', href: '#metodo-transparente' },
    { id: 'garantia', href: '#garantia' },
    { id: 'faqs', href: '#garantia' },
    { id: 'contacto', href: '#contacto' }
  ];

  const desktopLinks = document.querySelectorAll('.desktop-nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link[href^="#"]');

  function updateActiveNav(activeHref) {
    // 1. Desktop Navbar
    desktopLinks.forEach((link) => {
      const isMatch = link.getAttribute('href') === activeHref;
      const dot = link.querySelector('.nav-dot');

      if (isMatch) {
        link.classList.add('text-vivid-red');
        link.classList.remove('text-neutral-400');
        if (dot) dot.classList.remove('hidden');
      } else {
        link.classList.remove('text-vivid-red');
        link.classList.add('text-neutral-400');
        if (dot) dot.classList.add('hidden');
      }
    });

    // 2. Mobile Accordion Navbar
    mobileLinks.forEach((link) => {
      const isMatch = link.getAttribute('href') === activeHref;
      const dot = link.querySelector('.mobile-nav-dot');

      if (isMatch) {
        link.classList.add('text-vivid-red', 'bg-vivid-red/10', 'border-vivid-red/30', 'font-bold');
        link.classList.remove('text-neutral-300', 'border-transparent');
        if (dot) dot.classList.remove('hidden');
      } else {
        link.classList.remove('text-vivid-red', 'bg-vivid-red/10', 'border-vivid-red/30', 'font-bold');
        link.classList.add('text-neutral-300', 'border-transparent');
        if (dot) dot.classList.add('hidden');
      }
    });
  }

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 160;
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

        if (isAtBottom) {
          updateActiveNav('#contacto');
          ticking = false;
          return;
        }

        let currentHref = '#inicio';
        for (const target of navTargets) {
          const section = document.getElementById(target.id);
          if (section) {
            const top = section.offsetTop;
            if (scrollPosition >= top) {
              currentHref = target.href;
            }
          }
        }

        updateActiveNav(currentHref);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Evaluar estado inicial al cargar
}
