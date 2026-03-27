  const CONTENT_STORAGE_KEY = 'rj_site_content_v1';
  const LIVE_STORAGE_KEY = 'rj_live_status';

  const DEFAULT_VIDEOS = [
    {
      url: 'https://www.youtube.com/watch?v=Q_9Nt_tNuaY',
      image: 'https://img.youtube.com/vi/Q_9Nt_tNuaY/maxresdefault.jpg',
      title: 'Video Kajian Terbaru',
      meta: 'Raudhatul Jannah Official'
    },
    {
      url: 'https://www.youtube.com/watch?v=QURlHtbi5PY',
      image: 'https://img.youtube.com/vi/QURlHtbi5PY/maxresdefault.jpg',
      title: 'Video Kajian Terbaru',
      meta: 'Raudhatul Jannah Official'
    },
    {
      url: 'https://www.youtube.com/watch?v=NPfj_f4r2Ck',
      image: 'https://img.youtube.com/vi/NPfj_f4r2Ck/maxresdefault.jpg',
      title: 'Video Kajian Terbaru',
      meta: 'Raudhatul Jannah Official'
    },
    {
      url: 'https://www.youtube.com/watch?v=44X5RHUQppI',
      image: 'https://img.youtube.com/vi/44X5RHUQppI/maxresdefault.jpg',
      title: 'Video Kajian Terbaru',
      meta: 'Raudhatul Jannah Official'
    }
  ];

  const DEFAULT_GALLERY_ITEMS = [
    { caption: 'Sholat Berjamaah', imageUrl: '' },
    { caption: 'Kajian Rutin Ahad Pagi', imageUrl: '' },
    { caption: 'Kegiatan Anak', imageUrl: '' },
    { caption: 'Halaqah Ilmiah', imageUrl: '' },
    { caption: 'Live Streaming', imageUrl: '' }
  ];

  const DEFAULT_PROGRAMS = [
    { icon: 'kajian-pagi', title: 'Kajian Ahad Pagi', desc: 'Kajian rutin setiap Ahad pagi mengkaji kitab-kitab para ulama dengan metode talaqqi yang sistematis dan mudah dipahami seluruh kalangan.', tag: "Ahad · 10:00 WIB" },
    { icon: 'streaming', title: 'Live Streaming', desc: 'Saksikan kajian ilmu dari mana saja melalui siaran langsung di YouTube dan Facebook. Ilmu tanpa batas, tidak terikat tempat maupun waktu.', tag: 'YouTube · Facebook' },
    { icon: 'anak', title: 'Kegiatan Anak', desc: "Program khusus anak-anak: tahsin Al-Qur'an, hafalan surat pendek, dan pendidikan akhlak Islami yang menyenangkan dan penuh semangat.", tag: 'Weekend Program' },
    { icon: 'kajian-malam', title: 'Kajian Malam', desc: 'Kajian tematik malam hari membahas fiqih, tauhid, dan sirah nabawiyah. Ilmu yang menemani malam-malam penuh keberkahan.', tag: "Rabu · Ba'da Isya'" },
    { icon: 'sholat', title: 'Sholat Berjamaah', desc: 'Fasilitas lengkap untuk sholat berjamaah lima waktu. Mari ramaikan shaf masjid dan rasakan keindahan ukhuwah Islamiyah.', tag: '5 Waktu Sholat' },
    { icon: 'zakat', title: 'Zakat & Infaq', desc: 'Layanan zakat, infaq, dan sedekah yang amanah untuk membantu saudara muslim yang membutuhkan di sekitar Karanganyar, Kebumen.', tag: 'LAZIS Raudhatul Jannah' }
  ];

  const PROGRAM_ICONS = {
    'kajian-pagi': '<circle cx="24" cy="24" r="20"/><path d="M24 14v10l6 4"/><path d="M16 10 Q24 6 32 10"/>',
    'streaming': '<rect x="4" y="8" width="40" height="28" rx="3"/><circle cx="24" cy="22" r="6"/><circle cx="24" cy="22" r="2" fill="currentColor" stroke="none"/><path d="M12 36v6 M36 36v6"/>',
    'anak': '<circle cx="18" cy="16" r="7"/><circle cx="30" cy="16" r="7"/><path d="M4 40c0-7 6-12 14-12"/><path d="M44 40c0-7-6-12-14-12"/><path d="M18 28 Q24 34 30 28"/>',
    'kajian-malam': '<path d="M6 18L6 40 42 40 42 18 24 6Z"/><rect x="16" y="26" width="16" height="14" rx="1"/><path d="M20 20 Q24 16 28 20"/>',
    'sholat': '<path d="M10 38V16 Q24 8 38 16 L38 38"/><path d="M18 38V28H30V38"/><path d="M22 28V22 Q24 19 26 22 V28"/><line x1="6" y1="38" x2="42" y2="38"/>',
    'zakat': '<path d="M24 6 C16 6 8 12 8 22 C8 32 16 42 24 42 C32 42 40 32 40 22 C40 12 32 6 24 6Z"/><path d="M16 22 Q20 18 24 22 Q28 26 32 22"/><circle cx="24" cy="22" r="3"/>'
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeVideos(content) {
    if (Array.isArray(content.videos) && content.videos.length > 0) {
      return content.videos.map((item, index) => ({
        url: String(item && item.url ? item.url : DEFAULT_VIDEOS[index % DEFAULT_VIDEOS.length].url),
        image: String(item && item.image ? item.image : DEFAULT_VIDEOS[index % DEFAULT_VIDEOS.length].image),
        title: String(item && item.title ? item.title : 'Video Kajian Terbaru'),
        meta: String(item && item.meta ? item.meta : 'Raudhatul Jannah Official')
      }));
    }

    return DEFAULT_VIDEOS.map((item, index) => ({
      url: content[`video${index + 1}Url`] || item.url,
      image: content[`video${index + 1}Image`] || item.image,
      title: content[`video${index + 1}Title`] || item.title,
      meta: content[`video${index + 1}Meta`] || item.meta
    }));
  }

  function normalizeGalleryItems(content) {
    if (Array.isArray(content.galleryItems) && content.galleryItems.length > 0) {
      return content.galleryItems.map((item, index) => ({
        caption: String(item && item.caption ? item.caption : `Galeri ${index + 1}`),
        imageUrl: String(item && item.imageUrl ? item.imageUrl : '')
      }));
    }

    return DEFAULT_GALLERY_ITEMS.map((item, index) => ({
      caption: content[`galleryCap${index + 1}`] || item.caption,
      imageUrl: content[`galleryImage${index + 1}`] || item.imageUrl
    }));
  }

  function renderVideos(content) {
    const grid = document.querySelector('#videos .videos-grid');
    if (!grid) return;

    const videos = normalizeVideos(content || {});
    grid.innerHTML = videos.map((video) => {
      const videoUrl = escapeHtml(video.url);
      const imageUrl = escapeHtml(video.image);
      const title = escapeHtml(video.title);
      const meta = escapeHtml(video.meta);

      return `
      <a class="vid-card" href="${videoUrl}" target="_blank" rel="noopener">
        <div class="vid-thumb">
          <img src="${imageUrl}" alt="Video kajian" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s">
          <div class="vid-play">
            <div class="vid-play-btn">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        </div>
        <div class="vid-info">
          <p class="vid-title">${title}</p>
          <p class="vid-date">${meta}</p>
        </div>
      </a>`;
    }).join('');
  }

  function renderGallery(content) {
    const grid = document.querySelector('#galeri .gallery-grid');
    if (!grid) return;

    const items = normalizeGalleryItems(content || {});
    // Set data-count so CSS can pick the right layout
    grid.dataset.count = items.length <= 6 ? String(items.length) : 'many';

    grid.innerHTML = items.map((item, index) => {
      const gradientClass = `gb${(index % 5) + 1}`;
      const hasPhoto = Boolean(item.imageUrl && item.imageUrl.trim());
      const caption = escapeHtml(item.caption || `Galeri ${index + 1}`);
      const imageHtml = hasPhoto
        ? `<img class="gl-photo" src="${escapeHtml(item.imageUrl)}" alt="Galeri ${index + 1}">`
        : '';

      return `
      <div class="gl-item ${hasPhoto ? 'has-photo' : ''}">
        <div class="gl-bg ${gradientClass}"></div>
        ${imageHtml}
        <div class="gl-icon"><svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/></svg></div>
        <div class="gl-overlay"><p class="gl-cap">${caption}</p></div>
      </div>`;
    }).join('');
  }

  function renderSchedules(content) {
    const grid = document.getElementById('scheduleGrid');
    if (!grid) return;

    let schedules = content && Array.isArray(content.schedules) ? content.schedules : [];
    
    if (schedules.length === 0) {
      schedules = [
        { day: '23', month: 'Mar', title: 'Kajian Ahad Pagi', detail: 'Kitab Al-Mulakhos Fiqh<br>Bersama: Ust. Muhammad Fakhruddin hafizhahullah', time: '10:00 WIB - Menjelang Dzuhur' },
        { day: '26', month: 'Mar', title: 'Kajian Malam Rabu', detail: 'Kitab Shahih Fiqih Sunnah<br>Bersama: Ust. Abdullah Hakim hafizhahullah', time: "Ba'da Isya' - 21:00 WIB" },
        { day: '30', month: 'Mar', title: 'Kajian Ahad Pagi', detail: 'Kitab Al-Mulakhos Fiqh - Lanjutan<br>Bersama: Ust. Muhammad Fakhruddin hafizhahullah', time: '10:00 WIB - Menjelang Dzuhur' },
        { day: '05', month: 'Apr', title: 'Tahsin Al-Quran', detail: 'Pembelajaran Tajwid &amp; Makhraj Huruf<br>Terbuka untuk umum, ikhwan &amp; akhwat', time: "Ba'da Ashar - 16:30 WIB" }
      ];
    }

    const delays = [0, 0.1, 0.05, 0.15];
    grid.innerHTML = schedules.map((item, index) => {
      const day = escapeHtml(item.day || '');
      const month = escapeHtml(item.month || '');
      const title = escapeHtml(item.title || '');
      const detail = item.detail || '';
      const time = escapeHtml(item.time || '');
      const delay = delays[index % delays.length];

      return `
      <div class="sched-card reveal" style="transition-delay:${delay}s">
        <div class="sched-date">
          <span class="sched-day">${day}</span>
          <span class="sched-month">${month}</span>
        </div>
        <div class="sched-div"></div>
        <div>
          <h3 class="sched-title">${title}</h3>
          <p class="sched-detail">${detail}</p>
          <span class="sched-time">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            ${time}
          </span>
        </div>
      </div>`;
    }).join('');
  }

  function renderPrograms(content) {
    const grid = document.getElementById('programsGrid');
    if (!grid) return;

    const programs = (Array.isArray(content && content.programs) && content.programs.length > 0)
      ? content.programs
      : DEFAULT_PROGRAMS;

    const delays = [0, 0.1, 0.2, 0.05, 0.15, 0.25];
    grid.innerHTML = programs.map((item, index) => {
      const icon = item.icon && PROGRAM_ICONS[item.icon] ? item.icon : 'kajian-pagi';
      const svgPaths = PROGRAM_ICONS[icon];
      const title = escapeHtml(item.title || '');
      const desc = escapeHtml(item.desc || '');
      const tag = escapeHtml(item.tag || '');
      const delay = delays[index % delays.length];
      const delayAttr = delay > 0 ? ` style="transition-delay:${delay}s"` : '';

      return `
      <div class="prog-card reveal"${delayAttr}>
        <svg class="prog-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${svgPaths}</svg>
        <h3 class="prog-title">${title}</h3>
        <p class="prog-desc">${desc}</p>
        <span class="prog-tag">${tag}</span>
      </div>`;
    }).join('');

    grid.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function applyContent(content) {
    Object.entries(content || {}).forEach(([key, value]) => {
      if (typeof value !== 'string') return;

      document.querySelectorAll(`[data-content-key="${key}"]`).forEach((element) => {
        const attr = element.getAttribute('data-content-attr');
        if (!attr) {
          element.innerHTML = value;
          return;
        }

        if (value.trim().length === 0) {
          element.removeAttribute(attr);
        } else {
          element.setAttribute(attr, value);
        }

        if (element.classList.contains('gl-photo')) {
          const parent = element.closest('.gl-item');
          if (parent) {
            parent.classList.toggle('has-photo', value.trim().length > 0);
          }
        }
      });
    });

    renderVideos(content || {});
    renderGallery(content || {});
    renderSchedules(content);
    renderPrograms(content);
  }

  function applyLiveBadge(isLive) {
    const liveBadge = document.getElementById('liveBadge');
    if (!liveBadge) return;

    liveBadge.classList.toggle('is-live', Boolean(isLive));
  }

  async function loadRemoteContent() {
    try {
      const response = await fetch('/api/content', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      applyContent(payload.content || {});
      applyLiveBadge(payload.isLive);

      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(payload.content || {}));
      localStorage.setItem(LIVE_STORAGE_KEY, String(Boolean(payload.isLive)));
    } catch (error) {
      console.warn('API unavailable, trying local JSON fallback.', error);

      let saved = {};
      try {
        saved = JSON.parse(localStorage.getItem(CONTENT_STORAGE_KEY) || '{}');
      } catch (parseError) {
        console.error('Invalid localStorage fallback content.', parseError);
      }

      if (Object.keys(saved).length === 0) {
        try {
          const jsonRes = await fetch('/data/content.json');
          if (jsonRes.ok) {
            const jsonData = await jsonRes.json();
            saved = jsonData.content || {};
          }
        } catch (jsonError) {
          console.error('Local JSON fallback also failed.', jsonError);
        }
      }

      applyContent(saved);
      applyLiveBadge(localStorage.getItem(LIVE_STORAGE_KEY) === 'true');
    }
  }

  loadRemoteContent();

  // Sticky navbar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // Mobile nav
  function toggleNav() {
    const nav = document.getElementById('mobileNav');
    if (!nav) return;
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  }
  window.toggleNav = toggleNav;

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
