// ============================================
// DIALOGOS — Edition Raffinee v4
// ============================================

// --- 404 redirect for unknown pages ---
(function() {
  var validPages = ['index.html','module1.html','module2.html','module3.html','module4.html','module5.html','glossaire.html','bibliographie.html','medias.html','404.html'];
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page && page !== '' && page !== 'index.html' && validPages.indexOf(page) === -1 && page.indexOf('.html') > -1) {
    window.location.href = '404.html';
  }
})();

// ============================================
// AUTHENTICATION SYSTEM
// ============================================
// Hash SHA-256 du mot de passe "DIALOGOS2025"
// Pour changer le mot de passe : console.log(await authHash('NOUVEAU_MOT_DE_PASSE'))
const AUTH_HASH = '73de30d389b09cc458ba2b638d4566aeb64db209087237a08cd8fa193679b8fa';
const AUTH_KEY = 'dialogos_auth';
const WHATSAPP_NUMBER = '33756942484';

async function authHash(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

function setAuthenticated(value) {
  localStorage.setItem(AUTH_KEY, value ? 'true' : 'false');
}

// Build the auth modal HTML and inject it
function injectAuthModal() {
  if (document.getElementById('auth-overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'auth-overlay';
  overlay.className = 'auth-overlay';
  const msg = encodeURIComponent(
    "Bonjour,\n\n" +
    "Je souhaite obtenir le mot de passe pour acceder au module DIALOGOS — Fondements du Dialogue Interreligieux Catholique.\n\n" +
    "Nom : [votre nom]\n" +
    "Prenom : [votre prenom]\n" +
    "Qualite / Fonction : [votre qualite]\n" +
    "Email : [votre email]\n\n" +
    "Merci beaucoup."
  );
  overlay.innerHTML = `
    <div class="auth-modal">
      <button class="auth-close" onclick="closeAuthModal()">&times;</button>
      <div class="auth-header">
        <div class="icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.65 10A5.99 5.99 0 007 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg></div>
        <h3>Acces au module de formation</h3>
        <p>Ce contenu est reserve aux personnes ayant effectue une demande d'inscription.</p>
      </div>
      <div class="auth-body">
        <div class="auth-whatsapp">
          <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;margin-right:4px;"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>Demander l'acces par WhatsApp</h4>
          <p>Communiquez au prealable votre <strong>nom, prenom, qualite et email</strong>. Vous recevrez ensuite le mot de passe.</p>
          <a class="whatsapp-btn" href="https://wa.me/${WHATSAPP_NUMBER}?text=${msg}" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contacter par WhatsApp
          </a>
          <p style="font-size:11px;color:var(--text-muted);margin-top:10px;margin-bottom:0;">+33 7 56 94 24 84 &mdash; Service de Dialogue Interreligieux</p>
        </div>

        <div class="auth-divider">Ou</div>

        <div class="auth-input-group">
          <label for="auth-password">Mot de passe</label>
          <input type="password" id="auth-password" placeholder="Saisissez le mot de passe recu">
        </div>

        <div class="auth-error" id="auth-error">Mot de passe incorrect. Veuillez verifier votre saisie ou demander l'acces par WhatsApp.</div>
        <div class="auth-success" id="auth-success">Authentification reussie. Redirection en cours...</div>

        <button class="auth-submit" onclick="checkPassword()">Acceder au module</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close on escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAuthModal(); });
  // Close on overlay click (outside modal)
  overlay.addEventListener('click', e => { if (e.target === overlay) closeAuthModal(); });
  // Enter key in password field
  const pwdInput = document.getElementById('auth-password');
  if (pwdInput) {
    pwdInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkPassword(); });
  }
}

function openAuthModal(redirectUrl) {
  // Si deja authentifie, rediriger directement sans redemander le mot de passe
  if (isAuthenticated()) {
    const dest = redirectUrl || 'module1.html';
    window.location.href = dest;
    return;
  }
  injectAuthModal();
  const overlay = document.getElementById('auth-overlay');
  if (overlay) {
    overlay.dataset.redirect = redirectUrl || 'module1.html';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const pwd = document.getElementById('auth-password');
      if (pwd) pwd.focus();
    }, 300);
  }
}

function closeAuthModal() {
  const overlay = document.getElementById('auth-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Clear inputs
    const pwd = document.getElementById('auth-password');
    if (pwd) pwd.value = '';
    const err = document.getElementById('auth-error');
    if (err) err.classList.remove('visible');
    const suc = document.getElementById('auth-success');
    if (suc) suc.classList.remove('visible');
  }
}

async function checkPassword() {
  const pwdInput = document.getElementById('auth-password');
  const errorDiv = document.getElementById('auth-error');
  const successDiv = document.getElementById('auth-success');
  if (!pwdInput) return;

  const input = pwdInput.value.trim();
  if (!input) {
    if (errorDiv) errorDiv.classList.add('visible');
    return;
  }

  const hash = await authHash(input);
  if (hash === AUTH_HASH) {
    setAuthenticated(true);
    if (errorDiv) errorDiv.classList.remove('visible');
    if (successDiv) successDiv.classList.add('visible');
    setTimeout(() => {
      const overlay = document.getElementById('auth-overlay');
      const redirect = overlay ? (overlay.dataset.redirect || 'module1.html') : 'module1.html';
      closeAuthModal();
      window.location.href = redirect;
    }, 800);
  } else {
    if (successDiv) successDiv.classList.remove('visible');
    if (errorDiv) errorDiv.classList.add('visible');
    pwdInput.value = '';
    pwdInput.focus();
  }
}

// Check if module page is accessed without auth (modules 1-5)
function checkModuleAccess() {
  const moduleNum = parseInt(document.body.dataset.module, 10);
  const isModulePage = moduleNum >= 1 && moduleNum <= 5;
  if (isModulePage && !isAuthenticated()) {
    window.location.href = 'index.html?auth=required';
  }
}

// Handle auth required query param + check module access
document.addEventListener('DOMContentLoaded', () => {
  // Verifier l'acces aux pages protégées
  checkModuleAccess();
  // Si auth=required dans l'URL, ouvrir la popup
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('auth') === 'required') {
    injectAuthModal();
    setTimeout(() => openAuthModal('module1.html'), 500);
  }
});

// Expose functions globally
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.checkPassword = checkPassword;
window.isAuthenticated = isAuthenticated;

// --- Scroll Progress Bar ---
const scrollBar = document.createElement('div');
scrollBar.className = 'scroll-progress-bar';
document.body.prepend(scrollBar);

window.addEventListener('scroll', () => {
  const st = document.documentElement.scrollTop || document.body.scrollTop;
  const sh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollBar.style.width = sh > 0 ? (st / sh * 100) + '%' : '0%';
});

// --- Loader ---
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) setTimeout(() => loader.classList.add('hidden'), 600);
});

// --- Nav scroll ---
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// --- Scroll animations ---
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in, .scale-in').forEach(el => obs.observe(el));
});

// --- Page transitions ---
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    const h = link.getAttribute('href');
    const hasOnclick = link.hasAttribute('onclick');
    if (h && !h.startsWith('#') && !h.startsWith('http') && !h.startsWith('mailto') && !h.startsWith('tel') && !h.startsWith('javascript') && !hasOnclick) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.add('tx-out');
        setTimeout(() => window.location.href = h, 200);
      });
    }
  });
});

// --- Confetti subtil ---
function launchConfetti() {
  let canvas = document.getElementById('confetti-canvas');
  if (!canvas) { canvas = document.createElement('canvas'); canvas.id = 'confetti-canvas'; document.body.appendChild(canvas); }
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;';

  const colors = ['#C9955D', '#DDB380', '#A87842', '#5854A0'];
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height * 0.5,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 1.5 + 0.8,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 4,
      opacity: Math.random() * 0.25 + 0.35
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;
      p.vy += 0.015;
      if (p.y < canvas.height + 20) active = true;
      const op = p.opacity * Math.max(0, 1 - p.y / (canvas.height + 40));
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180); ctx.globalAlpha = op; ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    });
    frame++;
    if (active && frame < 250) requestAnimationFrame(animate);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); if (canvas.parentNode) canvas.parentNode.removeChild(canvas); }
  }
  animate();
}
window.launchConfetti = launchConfetti;


