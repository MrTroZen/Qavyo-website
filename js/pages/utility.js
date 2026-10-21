(() => {
  const menuButton = document.querySelector('[data-utility-menu]');
  const menu = document.querySelector('[data-utility-nav]');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menu.dataset.open = String(open);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.dataset.open = 'false';
        menuButton.focus();
      }
    });
  }

  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      let firstInvalid = null;
      form.querySelectorAll('[required]').forEach((field) => {
        const valid = field.checkValidity();
        field.setAttribute('aria-invalid', String(!valid));
        const error = form.querySelector(`#${field.id}-error`);
        if (error) error.textContent = valid ? '' : (field.type === 'email' ? 'Enter a valid email address.' : 'Complete this field.');
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        if (status) status.textContent = 'Check the highlighted fields and try again.';
        firstInvalid.focus();
        return;
      }
      sessionStorage.setItem('qavyoFormSource', form.dataset.demoForm || 'website form');
      window.location.href = form.dataset.success || 'form-success.html';
    });
  });

  const source = document.querySelector('[data-form-source]');
  if (source) source.textContent = sessionStorage.getItem('qavyoFormSource') || 'website form';
  document.querySelectorAll('[data-current-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
})();
