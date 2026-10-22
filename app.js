/* 大模型入门课 · 交互：翻页、缩略总览、讲稿、小测、全屏、打印 */
(function () {
  'use strict';

  const SLIDES = window.COURSE_SLIDES || [];
  const TOTAL = SLIDES.length;
  if (!TOTAL) return;

  const stage = document.getElementById('stage');
  const stageFit = document.getElementById('stage-fit');
  const wrap = document.getElementById('stage-wrap');
  const hudChapter = document.getElementById('hud-chapter');
  const hudCount = document.getElementById('hud-count');
  const progressBar = document.getElementById('progress-bar');
  const notesEl = document.getElementById('notes');
  const notesChapter = document.getElementById('notes-chapter');
  const notesBody = document.getElementById('notes-body');
  const overviewEl = document.getElementById('overview');
  const ovGrid = document.getElementById('ov-grid');
  const helpEl = document.getElementById('help');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  let index = 0;

  /* ---------- 渲染页面 ---------- */
  SLIDES.forEach(function (slide, i) {
    const el = document.createElement('section');
    el.className = 'slide slide-' + (slide.layout || 'content');
    el.id = 'slide-' + (i + 1);
    el.innerHTML = slide.html;

    if (slide.layout !== 'cover' && slide.layout !== 'end') {
      const foot = document.createElement('div');
      foot.className = 'slide-foot';
      foot.innerHTML =
        '<span>大模型入门课 · DeepSeek Harness</span>' +
        '<span>' + String(i + 1).padStart(2, '0') + ' / ' + TOTAL + '</span>';
      el.appendChild(foot);
    }

    el.setAttribute('aria-hidden', 'true');
    stage.appendChild(el);
  });

  const slides = Array.prototype.slice.call(stage.querySelectorAll('.slide'));

  /* ---------- 总览 ---------- */
  SLIDES.forEach(function (slide, i) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ov-item' + (slide.layout === 'chapter' ? ' chapter' : '') +
      (slide.layout === 'cover' ? ' cover' : '');
    b.innerHTML =
      '<span class="ov-num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span>' + (slide.title || '') + '</span>';
    b.addEventListener('click', function () {
      go(i);
      toggleOverview(false);
    });
    ovGrid.appendChild(b);
  });
  const ovItems = Array.prototype.slice.call(ovGrid.querySelectorAll('.ov-item'));

  /* ---------- 导航 ---------- */
  function go(i, push) {
    index = Math.max(0, Math.min(TOTAL - 1, i));
    slides.forEach(function (el, k) {
      const on = k === index;
      el.classList.toggle('active', on);
      el.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    ovItems.forEach(function (el, k) {
      el.classList.toggle('current', k === index);
    });

    hudChapter.textContent = SLIDES[index].chapter || '';
    hudCount.textContent = (index + 1) + ' / ' + TOTAL;
    progressBar.style.width = ((index + 1) / TOTAL * 100).toFixed(2) + '%';
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === TOTAL - 1;

    notesChapter.textContent = SLIDES[index].chapter || '';
    notesBody.textContent = SLIDES[index].notes || '（这一页没有讲稿）';

    if (push !== false) {
      history.replaceState(null, '', '#/' + (index + 1));
    }
    if (notesEl.hidden === false) {
      /* 保持打开状态时滚动回顶部 */
      notesBody.scrollTop = 0;
    }
  }

  function next() { if (index < TOTAL - 1) go(index + 1); }
  function prev() { if (index > 0) go(index - 1); }

  /* ---------- 浮层 ---------- */
  function toggleNotes(force) {
    const show = force === undefined ? notesEl.hidden : force;
    notesEl.hidden = !show;
    document.getElementById('btn-notes').setAttribute('aria-pressed', String(show));
  }
  function toggleOverview(force) {
    const show = force === undefined ? overviewEl.hidden : force;
    overviewEl.hidden = !show;
    if (show) {
      const cur = ovItems[index];
      if (cur) cur.scrollIntoView({ block: 'nearest' });
    }
  }
  function toggleHelp(force) {
    const show = force === undefined ? helpEl.hidden : force;
    helpEl.hidden = !show;
  }
  function closeAll() {
    toggleNotes(false);
    toggleOverview(false);
    toggleHelp(false);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      const p = document.documentElement.requestFullscreen &&
        document.documentElement.requestFullscreen();
      if (p && p.catch) p.catch(function () {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }
  }

  /* ---------- 缩放 ---------- */
  function fit() {
    const rect = wrap.getBoundingClientRect();
    const narrow = window.innerWidth <= 620;
    const w = Math.max(240, rect.width - (narrow ? 20 : 40));
    const h = Math.max(180, rect.height - (narrow ? 16 : 26));
    const scale = Math.min(w / 1280, h / 720);
    // 用 transform 缩放画布，同时把占位盒改成缩放后的实际尺寸，
    // 这样 flex 居中的是视觉尺寸，窄屏也不会溢出到右边
    stage.style.transform = 'scale(' + scale.toFixed(4) + ')';
    stageFit.style.width = Math.round(1280 * scale) + 'px';
    stageFit.style.height = Math.round(720 * scale) + 'px';
  }

  /* ---------- 事件 ---------- */
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  document.getElementById('btn-overview').addEventListener('click', function () { toggleOverview(); });
  document.getElementById('btn-notes').addEventListener('click', function () { toggleNotes(); });
  document.getElementById('btn-help').addEventListener('click', function () { toggleHelp(); });
  document.getElementById('btn-full').addEventListener('click', toggleFullscreen);
  document.getElementById('notes-close').addEventListener('click', function () { toggleNotes(false); });
  document.getElementById('ov-close').addEventListener('click', function () { toggleOverview(false); });
  document.getElementById('help-close').addEventListener('click', function () { toggleHelp(false); });

  overviewEl.addEventListener('click', function (e) {
    if (e.target === overviewEl) toggleOverview(false);
  });
  helpEl.addEventListener('click', function (e) {
    if (e.target === helpEl) toggleHelp(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault(); next(); break;
      case ' ':
        e.preventDefault();
        if (e.shiftKey) prev(); else next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); go(0); break;
      case 'End':
        e.preventDefault(); go(TOTAL - 1); break;
      case 'n': case 'N':
        toggleNotes(); break;
      case 'o': case 'O':
        toggleOverview(); break;
      case 'f': case 'F':
        toggleFullscreen(); break;
      case '?':
        toggleHelp(); break;
      case 'Escape':
        closeAll(); break;
      default:
        break;
    }
  });

  /* 小测：点选项揭示答案 */
  stage.addEventListener('click', function (e) {
    const opt = e.target.closest ? e.target.closest('.quiz-option') : null;
    if (!opt) return;
    const quiz = opt.closest('.quiz');
    if (!quiz || quiz.classList.contains('revealed')) return;
    opt.classList.add('picked');
    quiz.classList.add('revealed');
  });

  /* 触摸滑动 */
  let startX = null;
  let startY = null;
  wrap.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse') return;
    startX = e.clientX;
    startY = e.clientY;
  });
  wrap.addEventListener('pointerup', function (e) {
    if (startX === null) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
    startX = null;
    startY = null;
  });

  /* 地址栏同步 */
  window.addEventListener('hashchange', function () {
    const m = /^#\/?(\d+)/.exec(location.hash);
    if (m) {
      const n = parseInt(m[1], 10) - 1;
      if (n !== index && n >= 0 && n < TOTAL) go(n, false);
    }
  });

  window.addEventListener('resize', fit);
  document.addEventListener('fullscreenchange', fit);

  /* ---------- 启动 ---------- */
  const m = /^#\/?(\d+)/.exec(location.hash);
  const start = m ? Math.max(0, Math.min(TOTAL - 1, parseInt(m[1], 10) - 1)) : 0;
  go(start, false);
  fit();
  requestAnimationFrame(fit);
})();
