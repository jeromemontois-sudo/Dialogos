// ============================================
// DIALOGOS — Systeme de Progression 24h + Verrouillage Inter-Modules
// ============================================
// Intra-module : timer 24h entre etapes (1 bouton par etape).
// Inter-module : module N+1 bloque tant que module N n'est pas valide.
// Progression conservee dans localStorage sous la cle 'dialogos_progression'.

const PROGRESSION_KEY = 'dialogos_progression';
const LOCK_DURATION = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

// --- LocalStorage helpers ---
function getProgression() {
  try {
    const raw = localStorage.getItem(PROGRESSION_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { console.error('Progression parse error:', e); }
  return {};
}

function saveProgression(prog) {
  localStorage.setItem(PROGRESSION_KEY, JSON.stringify(prog));
}

function getCurrentModuleNum() {
  return parseInt(document.body.dataset.module, 10) || 0;
}

function getModuleKey() {
  const moduleNum = getCurrentModuleNum();
  return moduleNum ? 'module' + moduleNum : null;
}

// ============================================
// INTER-MODULE : verrouillage entre modules
// ============================================

function isModuleAccessible(moduleNum) {
  if (moduleNum <= 1) return true; // Module 1 always open
  const prog = getProgression();
  // Module N accessible if module (N-1) step 4 is completed
  return !!prog['module' + (moduleNum - 1) + '_step4'];
}

function isModuleCompleted(moduleNum) {
  const prog = getProgression();
  return !!prog['module' + moduleNum + '_step4'];
}

// Guard: redirect if trying to access a locked module
function guardModuleAccess() {
  const currentModule = getCurrentModuleNum();
  if (currentModule <= 0) return; // Not a module page
  if (!isModuleAccessible(currentModule)) {
    window.location.replace('index.html?locked=' + currentModule);
    return;
  }
}

// ============================================
// INTRA-MODULE : timer 24h entre etapes
// ============================================

function isStepUnlocked(stepNum) {
  if (stepNum <= 1) return true; // Step 1 always unlocked
  const prog = getProgression();
  const key = getModuleKey();
  if (!key) return true;
  const stepKey = key + '_step' + (stepNum - 1);
  const completedTime = prog[stepKey];
  if (!completedTime) return false;
  return Date.now() >= completedTime + LOCK_DURATION;
}

function isPrevStepCompleted(stepNum) {
  if (stepNum <= 1) return true;
  const prog = getProgression();
  const key = getModuleKey();
  if (!key) return true;
  return !!prog[key + '_step' + (stepNum - 1)];
}

function getStepUnlockTime(stepNum) {
  const prog = getProgression();
  const key = getModuleKey();
  if (!key) return null;
  const stepKey = key + '_step' + (stepNum - 1);
  const completedTime = prog[stepKey];
  if (!completedTime) return null;
  return completedTime + LOCK_DURATION;
}

function getRemainingTime(targetTime) {
  const remaining = targetTime - Date.now();
  if (remaining <= 0) return null;
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  return { h, m, text: h + 'h ' + m + 'min' };
}

// ============================================
// VISUAL UPDATE
// ============================================

function updateProgressBar() {
  const moduleNum = getCurrentModuleNum();
  if (!moduleNum) return;
  const prog = getProgression();
  const key = getModuleKey();
  if (!key) return;

  // Count completed steps
  let completed = 0;
  for (let i = 1; i <= 4; i++) {
    if (prog[key + '_step' + i]) completed++;
  }

  document.querySelectorAll('.step-dot').forEach(dot => {
    const step = parseInt(dot.dataset.step, 10);
    const circle = dot.querySelector('div:first-child');
    const label = dot.querySelector('div:last-child');
    if (!circle || !label) return;

    if (step <= completed) {
      circle.style.background = 'linear-gradient(135deg,#16a34a,#22c55e)';
      circle.style.color = '#fff';
      circle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
      label.style.color = 'var(--text-secondary)';
    } else if (isStepUnlocked(step)) {
      circle.style.background = 'linear-gradient(135deg,var(--primary),var(--primary-light))';
      circle.style.color = 'var(--accent)';
      circle.textContent = step;
      label.style.color = 'var(--text-secondary)';
    } else {
      circle.style.background = 'var(--border)';
      circle.style.color = 'var(--text-muted)';
      circle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>';
      label.style.color = 'var(--text-muted)';
    }
  });

  // Connector lines
  const lines = document.querySelectorAll('#step-progress > div > div[style*="height:2px"]');
  lines.forEach((line, idx) => {
    const stepNum = idx + 1;
    if (isStepCompleted(stepNum)) {
      line.style.background = 'linear-gradient(90deg, #22c55e, #22c55e)';
    } else if (isStepUnlocked(stepNum + 1)) {
      line.style.background = 'linear-gradient(90deg, #22c55e, var(--accent))';
    } else {
      line.style.background = 'var(--border)';
    }
  });
}

function isStepCompleted(stepNum) {
  const prog = getProgression();
  const key = getModuleKey();
  if (!key) return false;
  return !!prog[key + '_step' + stepNum];
}

// ============================================
// STEP LOCKS
// ============================================

function applyStepLocks() {
  const moduleNum = getCurrentModuleNum();
  if (!moduleNum) return;

  document.querySelectorAll('section[data-step]').forEach(section => {
    const step = parseInt(section.dataset.step, 10);
    if (step <= 1) return; // Step 1 always visible

    // Case 1: previous step not completed → hide completely
    if (!isPrevStepCompleted(step)) {
      section.style.display = 'none';
      return;
    }

    // Case 2: previous step completed, but 24h not elapsed → show timer
    if (!isStepUnlocked(step)) {
      section.classList.add('step-locked');
      const unlockTime = getStepUnlockTime(step);
      const remaining = getRemainingTime(unlockTime);

      section.innerHTML = `
        <div class="content-block" style="text-align:center;padding:60px 20px;">
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-light));display:flex;align-items:center;justify-content:center;margin:0 auto 20px;color:var(--accent);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          </div>
          <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;color:var(--primary);margin-bottom:12px;">Étape ${step} verrouillée</h3>
          <p style="font-size:15px;color:var(--text-secondary);margin-bottom:8px;">Cette étape sera disponible dans :</p>
          <div style="font-size:48px;font-weight:700;font-family:'Cormorant Garamond',serif;color:var(--accent);letter-spacing:2px;margin:20px 0;" id="countdown-step-${step}">
            ${remaining ? remaining.text : 'calcul...'}
          </div>
          <p style="font-size:13px;color:var(--text-muted);max-width:400px;margin:0 auto;line-height:1.6;">Vous devez attendre 24h après avoir validé l'étape précédente avant de pouvoir accéder à celle-ci. Cela favorise une assimilation progressive des contenus.</p>
          <p style="font-size:12px;color:var(--text-muted);margin-top:16px;"><a href="index.html" style="color:var(--accent);text-decoration:none;">← Retour à l'accueil</a></p>
        </div>
      `;

      // Start live countdown
      if (unlockTime) {
        const countdownEl = document.getElementById('countdown-step-' + step);
        if (countdownEl) {
          const interval = setInterval(() => {
            const r = getRemainingTime(unlockTime);
            if (!r) {
              clearInterval(interval);
              location.reload();
            } else {
              countdownEl.textContent = r.text;
            }
          }, 60000);
        }
      }
      return;
    }

    // Case 3: step is unlocked → leave content visible (default)
  });
}

// ============================================
// COMPLETE STEP
// ============================================

function completeStep(stepNum) {
  const key = getModuleKey();
  if (!key) return;

  const prog = getProgression();
  const stepKey = key + '_step' + stepNum;

  // Check if already completed
  if (prog[stepKey]) {
    alert('Cette etape est deja validee.');
    return;
  }

  prog[stepKey] = Date.now();
  saveProgression(prog);

  // Update button UI
  const btn = document.querySelector('.step-complete-btn[data-step="' + stepNum + '"]');
  if (btn) {
    btn.innerHTML = `
      <div style="background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;padding:16px 32px;border-radius:var(--radius);font-weight:600;font-size:14px;display:inline-flex;align-items:center;gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        Étape validée — ${stepNum < 4 ? 'Prochaine etape dans 24h' : 'Module termine'}
      </div>
      ${stepNum < 4 ? '<p style="font-size:12px;color:var(--text-muted);margin-top:10px;">Vous pouvez continuer a lire cette section. La section suivante sera debloquee automatiquement.</p>' : '<p style="font-size:12px;color:var(--text-muted);margin-top:10px;">Felicitations ! Le module suivant est maintenant accessible.</p>'}
    `;
  }

  // Launch confetti
  if (typeof launchConfetti === 'function') launchConfetti();

  // Update progress bar
  updateProgressBar();

  // Show next section (if exists) with lock overlay
  const nextSection = document.querySelector('section[data-step="' + (stepNum + 1) + '"]');
  if (nextSection && stepNum < 4) {
    nextSection.style.display = '';
    nextSection.classList.add('step-locked');
    const unlockTime = Date.now() + LOCK_DURATION;
    nextSection.innerHTML = `
      <div class="content-block" style="text-align:center;padding:60px 20px;">
        <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-light));display:flex;align-items:center;justify-content:center;margin:0 auto 20px;color:var(--accent);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
        </div>
        <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;color:var(--primary);margin-bottom:12px;">Étape ${stepNum + 1} verrouillée</h3>
        <p style="font-size:15px;color:var(--text-secondary);margin-bottom:8px;">Cette étape sera disponible dans :</p>
        <div style="font-size:48px;font-weight:700;font-family:'Cormorant Garamond',serif;color:var(--accent);letter-spacing:2px;margin:20px 0;" id="countdown-step-${stepNum + 1}">24h 0min</div>
        <p style="font-size:13px;color:var(--text-muted);max-width:400px;margin:0 auto;line-height:1.6;">Vous devez attendre 24h apres avoir valide l'etape precedente avant de pouvoir acceder a celle-ci. Cela favorise une assimilation progressive des contenus.</p>
        <p style="font-size:12px;color:var(--text-muted);margin-top:16px;"><a href="index.html" style="color:var(--accent);text-decoration:none;">← Retour a l'accueil</a></p>
      </div>
    `;
    // Start countdown
    const countdownEl = document.getElementById('countdown-step-' + (stepNum + 1));
    if (countdownEl) {
      let remaining = LOCK_DURATION;
      const interval = setInterval(() => {
        remaining -= 60000;
        if (remaining <= 0) {
          clearInterval(interval);
          location.reload();
        } else {
          const h = Math.floor(remaining / 3600000);
          const m = Math.floor((remaining % 3600000) / 60000);
          countdownEl.textContent = h + 'h ' + m + 'min';
        }
      }, 60000);
    }
  }

  // Message
  if (stepNum < 4) {
    alert('Etape ' + stepNum + ' validee. L\'etape ' + (stepNum + 1) + ' sera disponible dans 24 heures.');
  } else {
    const moduleNum = getCurrentModuleNum();
    if (moduleNum && moduleNum < 5) {
      alert('Module ' + moduleNum + ' valide ! Le Module ' + (moduleNum + 1) + ' est maintenant accessible.');
    } else {
      alert('Felicitations ! Vous avez termine le parcours DIALOGOS.');
    }
  }
}

// Expose globally
window.completeStep = completeStep;
window.onStepCompleted = completeStep; // Alias for module1 quiz inline script
window.isStepUnlocked = isStepUnlocked;

// ============================================
// INIT
// ============================================

function initProgression() {
  guardModuleAccess();   // Inter-module guard
  updateProgressBar();   // Visual update
  applyStepLocks();      // Intra-module locks
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProgression);
} else {
  initProgression();
}
