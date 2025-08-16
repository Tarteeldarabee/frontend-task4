/* script.js (shared across pages)
   - Mobile menu toggle
   - Active nav link based on current page
   - Contact form demo (only on contact page)
*/

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  if (navToggle && mobileMenu && iconOpen && iconClose) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });
  }

  // Active nav link (works for index.html / about.html / contact.html)
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || path === href) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // Contact form demo (only if form exists on the page)
  const form = document.getElementById('contact-form');
  const resultMsg = document.getElementById('form-result');
  const sendBtn = document.getElementById('send-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const msg = form.querySelector('#message').value.trim();

      if (!name || !email || !msg) {
        alert('Please fill all fields.');
        return;
      }

      if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Sending...'; }

      setTimeout(() => {
        if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = 'Send Message'; }
        if (resultMsg) {
          resultMsg.classList.remove('hidden');
          resultMsg.textContent = 'Message sent (demo) — I will contact you soon.';
          setTimeout(() => resultMsg.classList.add('hidden'), 5000);
        }
        form.reset();
      }, 900);
    });
  }
});
