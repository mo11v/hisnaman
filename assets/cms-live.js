(function () {
  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => [...r.querySelectorAll(s)];
  const get = async (u) => {
    try {
      const r = await fetch(u, { cache: 'default' });
      return r.ok ? await r.json() : null;
    } catch (e) { return null; }
  };
  const esc = (v) => String(v || '').replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));

  document.addEventListener('DOMContentLoaded', async () => {

    const s = await get('/content/settings.json');
    if (s) {
      qa('.brand strong').forEach(e => e.textContent = s.company_name_ar || 'حصن أمان');
      qa('.brand small').forEach(e => e.textContent = s.tagline_ar || '');
      qa('.logo img').forEach(i => { if (s.logo) i.src = s.logo; });
      qa('[data-hero-photo]').forEach(i => { if (s.logo) i.src = s.logo; });

      const hb = q('.hero-bg');
      if (hb && s.hero_image) hb.style.backgroundImage = "linear-gradient(90deg,rgba(4,21,11,.12),rgba(4,21,11,.92)),url('" + s.hero_image + "')";
      const h = q('.hero h1'); if (h && s.hero_title_ar) h.textContent = s.hero_title_ar;
      const p = q('.hero p'); if (p && s.hero_subtitle_ar) p.textContent = s.hero_subtitle_ar;
      const b = q('.hero .badge'); if (b && s.hero_badge_ar) b.textContent = s.hero_badge_ar;

      qa('a[href^="tel:"]').forEach(a => a.href = 'tel:' + (s.phone || ''));
      qa('a[href^="mailto:"]').forEach(a => a.href = 'mailto:' + (s.email || ''));
      qa('a[href*="wa.me"]').forEach(a => a.href = 'https://wa.me/' + (s.whatsapp || ''));
      qa('.instagram').forEach(a => { if (s.instagram) a.href = s.instagram; });
      qa('.linkedin').forEach(a => { if (s.linkedin) a.href = s.linkedin; });
      qa('.threads').forEach(a => { if (s.threads) a.href = s.threads; });
      qa('.facebook').forEach(a => { if (s.facebook) a.href = s.facebook; });
    }

    const sv = await get('/content/services.json');
    const sg = q('.services-grid');
    if (sv && sg) sg.innerHTML = (sv.items || []).map(x =>
      `<article class="pest-card" style="--img:url('${esc(x.image || '/assets/logo.jpg')}')"><div class="pest-body"><h3>${esc(x.icon || '')} ${esc(x.title)}</h3><p>${esc(x.description)}</p><a class="more" href="/services/${esc(x.slug)}.html"><i>+</i> اعرف المزيد</a></div></article>`
    ).join('');

    const cl = await get('/content/clients.json');
    const cg = q('.client-grid');
    if (cl && cg) cg.innerHTML = (cl.items || []).map(x =>
      `<article class="client-card"><div class="client-img"><img src="${esc(x.image || '/assets/logo.jpg')}" alt="${esc(x.title)}"></div><div class="client-body"><h3>${esc(x.title)}</h3><div class="client-meta"><span>${esc(x.category)}</span><span>${esc(x.location)}</span><span>✅ تم التنفيذ</span></div><p>${esc(x.description)}</p></div></article>`
    ).join('');

    const ps = await get('/content/posts.json');
    const pg = q('.magazine-grid,.blog-grid');
    if (ps && pg) pg.innerHTML = (ps.items || []).map(x =>
      `<article class="magazine-card"><img src="${esc(x.image || '/assets/logo.jpg')}" alt="${esc(x.title)}"><div class="magazine-card-body"><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><a class="btn gold" href="/magazine.html#${esc(x.slug)}">اقرأ المزيد</a></div></article>`
    ).join('');

    const br = await get('/content/branches.json');
    const bg = q('.branches-grid,.area-grid');
    if (br && bg) bg.innerHTML = (br.items || []).map(x =>
      `<div class="branch-card"><span class="pin">⌖</span><h3>${esc(x.title)}</h3><p>${esc(x.areas).replace(/\n/g, '<br>')}</p></div>`
    ).join('');

  });
})();
