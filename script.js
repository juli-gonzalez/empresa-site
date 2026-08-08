(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.textContent = open ? '✕' : '☰';
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Analytics: descomentar cuando haya dominio. Plausible:
  // <script defer data-domain="TU-DOMINIO" src="https://plausible.io/js/script.js"></script>
  // O Google Analytics:
  // const ga = document.createElement('script'); ga.src = `https://www.googletagmanager.com/gtag/js?id=TU-GA-ID`; ga.async = true; document.head.appendChild(ga);
  // window.dataLayer = window.dataLayer || []; window.gtag = function(){ dataLayer.push(arguments); }; gtag('js', new Date()); gtag('config', 'TU-GA-ID');

  // Reveal on scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  for (const el of document.querySelectorAll('.reveal')) revealObserver.observe(el);

  // Animated counters
  const formatCount = (num, suffix) => `${num.toLocaleString('es')}${suffix}`;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        counterObserver.unobserve(entry.target);
        const num = entry.target.querySelector('.stat-num');
        const target = Number(num.dataset.count);
        const suffix = num.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          num.textContent = formatCount(Math.round(target * eased), suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.4 }
  );

  for (const stat of document.querySelectorAll('.stat')) counterObserver.observe(stat);

  // Form
  const form = document.getElementById('contact-form');
  const status = document.querySelector('.form-status');

  const validators = {
    nombre: (v) => v.trim().length >= 2 || 'Ingresá tu nombre.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Ingresá un email válido.',
    mensaje: (v) => v.trim().length >= 10 || 'Contanos algo más (mínimo 10 caracteres).',
  };

  function validateField(field) {
    const msg = validators[field.name](field.value);
    const errorEl = document.querySelector(`.error[data-for="${field.name}"]`);
    field.classList.toggle('invalid', Boolean(msg));
    errorEl.textContent = msg || '';
    return !msg;
  }

  for (const field of form.querySelectorAll('input, textarea')) {
    if (validators[field.name]) {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => field.classList.remove('invalid'));
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';

    const fields = ['nombre', 'email', 'mensaje'];
    const ok = fields.every((name) => validateField(form.elements[name]));
    if (!ok) return;

    // ponytail: sin backend aún — mailto. Reemplazar por servicio de email (Hostinger) o API en deploy.
    const { nombre, email, mensaje } = form.elements;
    const subject = encodeURIComponent(`Consulta desde el sitio — ${nombre.value}`);
    const body = encodeURIComponent(`${mensaje.value}\n\n—\n${nombre.value} (${email.value})`);
    window.location.href = `mailto:hola@TU-DOMINIO?subject=${subject}&body=${body}`;

    status.className = 'form-status success';
    status.textContent = '¡Gracias! Se abre tu cliente de correo para enviar la consulta.';
    form.reset();
  });
})();
