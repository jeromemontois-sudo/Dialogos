// ============================================
// DIALOGOS — Ultra Premium Quiz Engine
// ============================================

const quizData = {
  lecon1: {
    title: "Quiz : Introduction au dialogue interreligieux",
    questions: [
      {
        q: "Quelle definition du dialogue interreligieux est privilegiee par l'Eglise catholique ?",
        options: [
          "Un syncretisme aboutissant a une religion universelle",
          "Tous les chemins menent au salut de maniere equivalente",
          "Un echange constructif respectant l'identite de chaque tradition",
          "Une strategie de conversion directe et immediate"
        ],
        correct: 2,
        explanation: "L'Eglise definit le dialogue comme un echange constructif qui respecte l'identite de chaque tradition religieuse, fonde sur le respect mutuel et la recherche de la verite."
      },
      {
        q: "Selon Nostra Aetate (par. 2), l'Eglise catholique rejette-elle tout ce qui se trouve dans les autres religions ?",
        options: [
          "Oui, car la verite n'est presente que dans l'Eglise catholique",
          "Non, elle reconnait que les autres religions peuvent contenir des 'rayons de la verite'",
          "Elle ne prend pas position sur cette question",
          "Seules les religions abrahamiques contiennent des elements de verite"
        ],
        correct: 1,
        explanation: "Nostra Aetate 2 affirme que l'Eglise catholique 'ne rejette rien de ce qui est vrai et saint dans ces religions' et y reconnait 'des rayons de la verite qui eclairent tous les hommes'."
      },
      {
        q: "Lequel de ces principes fondamentaux du dialogue interreligieux catholique est incorrect ?",
        options: [
          "Le respect de la liberte religieuse",
          "L'egalite absolue de toutes les religions (toutes se valent)",
          "L'authenticite dans la foi chretienne",
          "La recherche commune du bien de l'humanite"
        ],
        correct: 1,
        explanation: "L'Eglise ne soutient pas l'egalite absolue des religions. Selon Dominus Iesus, 'le salut vient de Christ' meme si Dieu veut le salut de tous. Le dialogue se fait dans la verite et le respect mutuel, pas dans le relativisme."
      }
    ]
  },
  lecon2: {
    title: "Quiz : Fondements bibliques du dialogue",
    questions: [
      {
        q: "Quel episode biblique illustre le dialogue interreligieux avec un etranger ?",
        options: [
          "Le sacrifice d'Isaac",
          "Le passage de la Mer Rouge",
          "Le recit de Melchisedek (Genese 14)",
          "La tour de Babel"
        ],
        correct: 2,
        explanation: "Melchisedek, roi de Salem et pretre du Dieu Tres-Haut, benit Abraham. Ce recit montre que Dieu agit aussi en dehors du peuple elu."
      },
      {
        q: "Selon le Nouveau Testament, comment Jesus traite-t-il les etrangers ?",
        options: [
          "Il les ignore car sa mission ne concerne que les Juifs",
          "Il les repousse fermement",
          "Il les accueille avec compassion (Samaritain, Cananeenne, centurion romain)",
          "Il ne les mentionne jamais"
        ],
        correct: 2,
        explanation: "Jesus accueille avec compassion le Samaritain, guerit la fille de la Cananeenne, loue la foi du centurion romain. Ces recits fondent le dialogue chretien avec les autres."
      },
      {
        q: "L'episode de la Pentecote (Actes 2) est important pour le dialogue interreligieux car :",
        options: [
          "Il montre que le Saint-Esprit ne vient que sur les Juifs",
          "Des personnes de toutes les nations comprennent la parole de Dieu dans leur langue",
          "Il interdit toute relation avec les paiens",
          "Il etablit l'hebreu comme seule langue liturgique"
        ],
        correct: 1,
        explanation: "A la Pentecote, des personnes de 'toutes les nations' comprennent les Apotres dans leur propre langue. Ce signe montre que l'Evangile s'adresse a tous les peuples dans leur diversite."
      }
    ]
  },
  lecon3: {
    title: "Quiz : Nostra Aetate (1965)",
    questions: [
      {
        q: "Quand le Concile Vatican II a-t-il promulgue la declaration Nostra Aetate ?",
        options: [
          "1958",
          "1962",
          "28 octobre 1965",
          "1970"
        ],
        correct: 2,
        explanation: "Nostra Aetate a ete promulguee le 28 octobre 1965, au dernier jour de la IVe session du Concile Vatican II, par le pape Paul VI."
      },
      {
        q: "Nostra Aetate est particulierement novatrice concernant :",
        options: [
          "L'ordination des femmes",
          "Les relations de l'Eglise avec les religions non chretiennes",
          "La reforme de la liturgie",
          "Le celibat des pretres"
        ],
        correct: 1,
        explanation: "Nostra Aetate est la premiere declaration magisterielle a traiter positivement et systematiquement des relations de l'Eglise catholique avec les religions non chretiennes."
      },
      {
        q: "Selon Nostra Aetate (par. 4), concernant les Juifs :",
        options: [
          "L'Eglise doit les convertir de force",
          "Dieu ne s'est pas eloigne de son peuple, malgre les difficultes historiques",
          "Le judaisme n'a plus aucune validite depuis le Christ",
          "L'Eglise ne reconnait aucun lien spirituel avec Israel"
        ],
        correct: 1,
        explanation: "Nostra Aetate 4 affirme que 'Dieu ne s'est pas eloigne de son peuple' et que 'l'appel de Dieu est irrevocable'. C'est un tournant dans les relations judaisme-christianisme."
      }
    ]
  },
  lecon4: {
    title: "Quiz : Dignitatis Humanae — La liberte religieuse",
    questions: [
      {
        q: "Quel concile a promulgue la declaration Dignitatis Humanae ?",
        options: [
          "Vatican I (1869-1870)",
          "Vatican II (1962-1965)",
          "Le concile de Trente",
          "Le concile de Nicee"
        ],
        correct: 1,
        explanation: "Dignitatis Humanae a ete promulguee par le Concile Vatican II le 7 decembre 1965, le meme jour que Nostra Aetate."
      },
      {
        q: "Selon Dignitatis Humanae (par. 2), la liberte religieuse repose sur :",
        options: [
          "La tolerance de l'Etat envers les minorites",
          "La dignite inherente de la personne humaine",
          "L'accord entre les differentes Eglises",
          "La neutralite absolue de l'Etat en matiere religieuse"
        ],
        correct: 1,
        explanation: "Dignitatis Humanae 2 affirme que 'le fondement de la liberte religieuse (...) est a chercher dans la dignite de la personne humaine'."
      },
      {
        q: "Le droit a la liberte religieuse inclut :",
        options: [
          "Seulement le droit de pratiquer sa religion en prive",
          "Le droit de changer de religion et de pratiquer en public",
          "Le droit d'imposer sa religion aux autres",
          "Le droit d'ignorer toute religion"
        ],
        correct: 1,
        explanation: "Dignitatis Humanae garantit le droit de choisir librement sa religion, de la pratiquer en prive et en public, et de la changer."
      }
    ]
  },
  lecon5: {
    title: "Quiz : Lumen Gentium et les autres religions",
    questions: [
      {
        q: "Quelle image de l'Eglise est privilegiee dans Lumen Gentium ?",
        options: [
          "Une institution bureaucratique",
          "Le peuple de Dieu en marche vers le salut",
          "Un club ferme et exclusif",
          "Une entreprise commerciale spirituelle"
        ],
        correct: 1,
        explanation: "Lumen Gentium utilise l'image du 'peuple de Dieu' (ch. II), une communaute en marche vers le salut, ouverte a l'universalite du dessein de Dieu."
      },
      {
        q: "Lumen Gentium parle de 'sementes du Verbe' (semina Verbi). Cela signifie :",
        options: [
          "Que seule l'Eglise possede la verite",
          "Que des elements de verite peuvent exister en dehors de l'Eglise visible",
          "Que les autres religions sont sans valeur",
          "Que les non-baptises ne peuvent pas etre sauves"
        ],
        correct: 1,
        explanation: "Lumen Gentium 16-17 reconnait que des 'sementes du Verbe' existent en dehors de l'Eglise visible, ce qui fonde une attitude positive envers les autres religions."
      },
      {
        q: "La 'Notion de salut universel' dans Lumen Gentium signifie que :",
        options: [
          "Tous les hommes sont automatiquement sauves",
          "Dieu veut le salut de tous les hommes, mais il leur offre des moyens differents",
          "Seuls les catholiques peuvent etre sauves",
          "Le salut ne depend pas de Dieu"
        ],
        correct: 1,
        explanation: "Lumen Gentium affirme que Dieu veut le salut de tous (LG 16), tout en maintenant que le Christ est le Sauveur unique. L'Eglise est le 'sacrement universel de salut'."
      }
    ]
  },
  lecon6: {
    title: "Quiz : Jean-Paul II et Benoit XVI",
    questions: [
      {
        q: "Redemptoris Missio (1990) du pape Jean-Paul II affirme que :",
        options: [
          "Le dialogue interreligieux doit remplacer l'annonce missionnaire",
          "Le dialogue et l'annonce sont complementaires dans la mission de l'Eglise",
          "Le dialogue est inutile car seul le proselytisme compte",
          "L'Eglise doit abandonner toute mission"
        ],
        correct: 1,
        explanation: "Redemptoris Missio (par. 55-57) affirme que le dialogue et l'annonce sont complementaires. Le dialogue n'est pas un renoncement a la mission mais une de ses dimensions."
      },
      {
        q: "Dans Dominus Iesus (2000), le cardinal Ratzinger (futur Benoit XVI) affirme :",
        options: [
          "Toutes les religions se valent et menent au salut de maniere egale",
          "Le Christ est le Sauveur unique et definitif, tout en respectant la liberte religieuse",
          "Le dialogue interreligieux est inutile",
          "Les autres religions n'ont aucune valeur"
        ],
        correct: 1,
        explanation: "Dominus Iesus maintient l'unicite du Christ Sauveur (par. 13-15) tout en reconnaissant que Dieu peut sauver par des voies connues de Lui seul. C'est une mise en garde contre le relativisme religieux."
      },
      {
        q: "La 'civilisation de l'amour' chere a Jean-Paul II est :",
        options: [
          "Une utopie irrealisable",
          "Un ideal de societe fonde sur le respect mutuel et la solidarite entre les religions",
          "Un projet politique concret",
          "Une doctrine economique"
        ],
        correct: 1,
        explanation: "Jean-Paul II appelle a construire une 'civilisation de l'amour' fondee sur le respect mutuel, la solidarite et la collaboration entre les religions pour le bien commun."
      }
    ]
  },
  lecon7: {
    title: "Quiz : Le magistere de Francois",
    questions: [
      {
        q: "Laquelle de ces encycliques/lettres traite du dialogue interreligieux ?",
        options: [
          "Laudato Si'",
          "Fratelli Tutti",
          "Evangelii Gaudium",
          "Toutes les reponses"
        ],
        correct: 3,
        explanation: "Le pape Francois a traite du dialogue interreligieux dans de nombreux documents : Laudato Si' (ecologie et religions), Fratelli Tutti (fraternite universelle), Evangelii Gaudium (dialogue comme dimension missionnaire)."
      },
      {
        q: "Dans Fratelli Tutti (2020), le pape Francois propose :",
        options: [
          "Une mondialisation sans ame",
          "La fraternite ouverte a tous comme antidote aux conflits",
          "L'abandon de l'identite catholique",
          "Le retour a un integralisme religieux"
        ],
        correct: 1,
        explanation: "Fratelli Tutti (par. 8) propose la fraternite ouverte a tous comme reponse aux divisions et conflits du monde contemporain, fondant un dialogue authentique."
      },
      {
        q: "Les rencontres du pape Francois avec les leaders religieux (Al-Azhar, grands rabbins) illustrent :",
        options: [
          "Une strategie politique",
          "La dimension 'fraternelle' du dialogue interreligieux",
          "Un syncretisme religieux",
          "Un abandon de la foi catholique"
        ],
        correct: 1,
        explanation: "Ces rencontres illustrent la dimension fraternelle du dialogue. Francois parle de 'fraternite humaine' et signe le Document sur la fraternite humaine avec le Grand Imam d'Al-Azhar (2019)."
      }
    ]
  },
  lecon8: {
    title: "Quiz : Mise en oeuvre concrete",
    questions: [
      {
        q: "Le dialogue interreligieux ne se fait pas seulement au niveau institutionnel mais aussi :",
        options: [
          "Au niveau personnel et spirituel",
          "Uniquement entre experts theologiques",
          "Par des declarations diplomatiques",
          "Dans les medias uniquement"
        ],
        correct: 0,
        explanation: "Le dialogue a trois niveaux : de la vie (personnel), theologique (experts), et action commune. Le Comite pour les relations avec les musulmans souligne l'importance du dialogue de la vie."
      },
      {
        q: "Une 'spiritualite du dialogue' implique :",
        options: [
          "Abandonner ses convictions pour les autres",
          "Ecouter, accueillir, temoigner en restant fidele a sa foi",
          "Refuser tout contact avec les autres religions",
          "Pratiquer toutes les religions simultanement"
        ],
        correct: 1,
        explanation: "Une spiritualite du dialogue implique d'ecouter l'autre, d'accueillir ce qui est vrai et saint chez lui, et de temoigner de sa foi chretienne dans le respect mutuel."
      },
      {
        q: "Les 'mauvaises raisons de dialoguer' incluent :",
        options: [
          "Le respect mutuel et la recherche de la verite",
          "Le syncretisme (melange confus des religions) et le proselytisme dissimule",
          "La volonte de servir le bien commun",
          "L'ouverture au Saint-Esprit"
        ],
        correct: 1,
        explanation: "Les mauvaises raisons incluent le syncretisme (melange confus des religions), le proselytisme dissimule et le relativisme ('tout se vaut'). Le dialogue authentique se fait dans la verite et le respect."
      }
    ]
  }
};

// ============================================
// Premium Quiz Engine
// ============================================

function initQuiz(lessonId) {
  const quiz = quizData[lessonId];
  if (!quiz) return;

  const container = document.getElementById('quiz-container');
  if (!container) return;

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function render() {
    if (currentQuestion >= quiz.questions.length) {
      renderResult();
      return;
    }

    const q = quiz.questions[currentQuestion];
    const progress = ((currentQuestion) / quiz.questions.length) * 100;

    let html = `
      <div class="quiz-top">
        <span>${quiz.title}</span>
        <span>Question ${currentQuestion + 1} / ${quiz.questions.length}</span>
      </div>
      <div class="quiz-track">
        <div class="quiz-track-fill" style="width:${progress}%"></div>
      </div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts" id="quiz-options">
    `;

    q.options.forEach((opt, i) => {
      html += `
        <div class="quiz-opt" onclick="window.selectOption(${i})" data-index="${i}">
          <span class="letter">${String.fromCharCode(65 + i)}</span>
          <span>${opt}</span>
        </div>
      `;
    });

    html += `</div><div id="quiz-feedback"></div>`;
    container.innerHTML = html;
    answered = false;

    // Update progress bar to show current
    setTimeout(() => {
      const bar = container.querySelector('.quiz-track-fill');
      if (bar) bar.style.width = ((currentQuestion + 1) / quiz.questions.length) * 100 + '%';
    }, 50);
  }

  window.selectOption = function(index) {
    if (answered) return;
    answered = true;

    const q = quiz.questions[currentQuestion];
    const options = container.querySelectorAll('.quiz-opt');
    const feedbackEl = container.querySelector('#quiz-feedback');

    options.forEach((opt, i) => {
      opt.classList.add('disabled');
      opt.onclick = null;
      if (i === q.correct) {
        opt.classList.add('right');
      } else if (i === index && i !== q.correct) {
        opt.classList.add('wrong');
      }
    });

    const isCorrect = index === q.correct;
    if (isCorrect) score++;

    feedbackEl.innerHTML = `
      <div class="quiz-feedback ${isCorrect ? 'right' : 'wrong'}">
        ${isCorrect ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:2px;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Correct !' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:2px;"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>Incorrect.'} ${q.explanation}
      </div>
      <div style="text-align:right;margin-top:20px;">
        <button class="btn btn-primary btn-sm" onclick="window.nextQuestion()">
          ${currentQuestion < quiz.questions.length - 1 ? 'Suivant →' : 'Voir les resultats →'}
        </button>
      </div>
    `;
  };

  window.nextQuestion = function() {
    currentQuestion++;
    render();
  };

  function renderResult() {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    let emoji, message, color;

    if (percentage === 100) {
      emoji = '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>';
      message = 'Parfait ! Maitrise parfaite de la lecon.';
      color = '#22c55e';
      setTimeout(() => { if (window.launchConfetti) window.launchConfetti(); }, 400);
    } else if (percentage >= 70) {
      emoji = '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
      message = 'Tres bien ! Vous avez bien compris les points essentiels.';
      color = '#22c55e';
    } else if (percentage >= 50) {
      emoji = '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>';
      message = 'Continuez vos efforts. Relisez les passages cites dans la lecon.';
      color = '#f59e0b';
    } else {
      emoji = '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';
      message = 'N\'hesitez pas a relire la lecon pour mieux assimiler le contenu.';
      color = '#ef4444';
    }

    const progression = JSON.parse(localStorage.getItem('dialogos_progression') || '{}');
    const lessonNum = parseInt(lessonId.replace('lecon', ''));
    progression['lecon' + lessonNum + 'Vue'] = true;
    progression['lecon' + lessonNum + 'Quiz'] = score;

    const nextLessonNum = lessonNum + 1;
    if (nextLessonNum <= 8) {
      const unlockTime = Date.now() + 24 * 60 * 60 * 1000;
      progression['lecon' + nextLessonNum + 'DebloqueAt'] = unlockTime;
    }

    localStorage.setItem('dialogos_progression', JSON.stringify(progression));

    const nextBtnHtml = nextLessonNum <= 8
      ? `<a href="etape${nextLessonNum}.html" class="btn btn-primary btn-sm">Étape suivante →</a>`
      : `<a href="index.html" class="btn btn-primary btn-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>Retour a l'accueil</a>`;

    container.innerHTML = `
      <div class="quiz-result">
        <span class="emoji">${emoji}</span>
        <h3>Quiz termine !</h3>
        <div class="score" style="color:${color}">${score} / ${quiz.questions.length} — ${percentage}%</div>
        <p class="message">${message}</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-outline btn-sm" onclick="window.location.reload()" style="color:var(--primary);border-color:var(--border);"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>Recommencer</button>
          ${nextBtnHtml}
        </div>
      </div>
    `;
  }

  render();
}

// ============================================
// Check Unlocks
// ============================================

function checkUnlocks() {
  const progression = JSON.parse(localStorage.getItem('dialogos_progression') || '{}');
  const now = Date.now();

  for (let i = 1; i <= 8; i++) {
    const key = 'lecon' + i + 'DebloqueAt';
    if (progression[key] && now >= progression[key]) {
      progression['lecon' + i + 'Debloque'] = true;
    }
  }

  localStorage.setItem('dialogos_progression', JSON.stringify(progression));
}

checkUnlocks();

// ============================================
// Auto-init module quizzes (DIALOGOS_QUIZ format)
// ============================================

function initModuleQuiz() {
  // Skip if a quiz was already initialized by inline script (module 1 style)
  if (window.__quizInitialized) return;
  window.__quizInitialized = true;

  const data = window.DIALOGOS_QUIZ || window.dialogosQuiz;
  if (!data) return;

  // Find which module key is present (module1, module2, etc.)
  const moduleKeys = Object.keys(data).filter(k => /^module\d+$/.test(k));
  if (moduleKeys.length === 0) return;

  const container = document.getElementById('quiz-container');
  if (!container) return;

  const moduleKey = moduleKeys[0];
  const questions = data[moduleKey];
  if (!Array.isArray(questions) || questions.length === 0) return;

  const moduleNum = parseInt(moduleKey.replace('module', ''), 10);
  const title = 'Module ' + moduleNum;

  // Convert DIALOGOS_QUIZ format to internal format
  const convertedQuestions = questions.map(q => ({
    q: q.question || q.q,
    options: q.options || q.choices,
    correct: q.correct,
    explanation: q.feedback || q.explanation
  }));

  // Temporarily add to quizData
  const tempKey = 'module' + moduleNum;
  quizData[tempKey] = {
    title: title,
    questions: convertedQuestions
  };

  initQuiz(tempKey);
}

// Auto-init if DOM already ready, or wait for it
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModuleQuiz);
} else {
  initModuleQuiz();
}
