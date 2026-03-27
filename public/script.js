  const CONTENT_STORAGE_KEY = 'rj_site_content_v1';
  const LIVE_STORAGE_KEY = 'rj_live_status';

  const DEFAULT_VIDEOS_ITEMS = [
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

  const DEFAULT_PROGRAM_ITEMS = [
    { icon: 'kajian-pagi', title: 'Kajian Ahad Pagi', desc: 'Kajian rutin setiap Ahad pagi mengkaji kitab-kitab para ulama dengan metode talaqqi yang sistematis dan mudah dipahami seluruh kalangan.', tag: "Ahad · 10:00 WIB" },
    { icon: 'streaming', title: 'Live Streaming', desc: 'Saksikan kajian ilmu dari mana saja melalui siaran langsung di YouTube dan Facebook. Ilmu tanpa batas, tidak terikat tempat maupun waktu.', tag: 'YouTube · Facebook' },
    { icon: 'anak', title: 'Kegiatan Anak', desc: "Program khusus anak-anak: tahsin Al-Qur'an, hafalan surat pendek, dan pendidikan akhlak Islami yang menyenangkan dan penuh semangat.", tag: 'Weekend Program' },
    { icon: 'kajian-malam', title: 'Kajian Malam', desc: 'Kajian tematik malam hari membahas fiqih, tauhid, dan sirah nabawiyah. Ilmu yang menemani malam-malam penuh keberkahan.', tag: "Rabu · Ba'da Isya'" },
    { icon: 'sholat', title: 'Sholat Berjamaah', desc: 'Fasilitas lengkap untuk sholat berjamaah lima waktu. Mari ramaikan shaf masjid dan rasakan keindahan ukhuwah Islamiyah.', tag: '5 Waktu Sholat' },
    { icon: 'zakat', title: 'Zakat & Infaq', desc: 'Layanan zakat, infaq, dan sedekah yang amanah untuk membantu saudara muslim yang membutuhkan di sekitar Karanganyar, Kebumen.', tag: 'LAZIS Raudhatul Jannah' }
  ];

  const DEFAULT_FASILITAS_ITEMS = [
    { icon: 'toilet', title: 'Toilet Gratis', desc: 'Fasilitas toilet bersih tersedia gratis untuk seluruh jamaah dan pengunjung masjid, terjaga kebersihannya setiap saat.', tag: 'Gratis & Bersih' },
    { icon: 'parkir', title: 'Parkir Luas & Gratis', desc: 'Area parkir yang luas, nyaman, dan gratis untuk kendaraan roda dua maupun roda empat seluruh jamaah dan pengunjung.', tag: 'Roda 2 & Roda 4' },
    { icon: 'toko', title: 'Toko RJ Mart', desc: 'Minimarket RJ Mart berlokasi di kompleks masjid, memudahkan jamaah memenuhi kebutuhan sehari-hari sebelum atau sesudah ibadah.', tag: 'Buka Setiap Hari' }
  ];

  const DEFAULT_SCHEDULE_ITEMS = [
    { day: '24', month: 'Mar', title: 'Kajian Ahad Pagi', detail: 'Kitab Al-Mulakhos Fiqh<br>Bersama: Ust. Muhammad Fakhruddin hafizhahullah', time: '10:00 WIB - Menjelang Dzuhur' },
    { day: '27', month: 'Mar', title: 'Kajian Malam Kamis', detail: 'Kitab Shahih Fiqih Sunnah<br>Bersama: Ust. Abdullah Hakim hafizhahullah', time: "Ba'da Isya' - 21:00 WIB" },
    { day: '30', month: 'Mar', title: 'Kajian Ahad Pagi', detail: 'Kitab Al-Mulakhos Fiqh - Lanjutan<br>Bersama: Ust. Muhammad Fakhruddin hafizhahullah', time: '10:00 WIB - Menjelang Dzuhur' },
    { day: '05', month: 'Apr', title: 'Tahsin Al-Quran', detail: 'Pembelajaran Tajwid &amp; Makhraj Huruf<br>Terbuka untuk umum, ikhwan &amp; akhwat', time: "Ba'da Ashar - 16:30 WIB" }
  ];

  const FASILITAS_ICONS = {
    'toilet': '<path d="M16 6 C16 6 12 10 12 16 C12 20 14 22 16 24 L16 42"/><path d="M20 6 L20 18 C20 20 18 22 16 22"/><path d="M24 6 L24 42"/><path d="M28 28 C28 28 36 26 36 34 C36 39 32 42 28 42"/><path d="M28 28 C28 28 36 26 36 20 C36 14 30 12 28 16"/>',
    'parkir': '<rect x="4" y="28" width="40" height="12" rx="3"/><path d="M8 28 L14 14 H34 L40 28"/><circle cx="14" cy="40" r="3"/><circle cx="34" cy="40" r="3"/><path d="M4 34 H44"/><path d="M18 20 H30"/>',
    'toko': '<path d="M6 14 L6 42 H42 V14 L24 4 Z"/><rect x="17" y="28" width="14" height="14" rx="1"/><path d="M21 20 Q24 16 27 20"/><line x1="14" y1="42" x2="14" y2="14"/><line x1="34" y1="42" x2="34" y2="14"/>',
    'masjid': '<path d="M10 38V16 Q24 8 38 16 L38 38"/><path d="M18 38V28H30V38"/><path d="M22 28V22 Q24 19 26 22 V28"/><line x1="6" y1="38" x2="42" y2="38"/>',
    'wudhu': '<path d="M12 14v12"/><path d="M12 14c0-4 4-6 8-4s4 8 0 12"/><path d="M8 30v8h8v-8"/><path d="M8 42h8"/>',
    'ac': '<rect x="6" y="10" width="36" height="20" rx="2"/><path d="M10 34v6"/><path d="M38 34v6"/><path d="M10 30h28"/><circle cx="14" cy="20" r="2"/><circle cx="24" cy="20" r="2"/><circle cx="34" cy="20" r="2"/>'
  };

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
    const videosSection = content?.videos;
    if (videosSection?.items && Array.isArray(videosSection.items) && videosSection.items.length > 0) {
      return videosSection.items.map((item, index) => ({
        url: String(item && item.url ? item.url : DEFAULT_VIDEOS_ITEMS[index % DEFAULT_VIDEOS_ITEMS.length].url),
        image: String(item && item.image ? item.image : DEFAULT_VIDEOS_ITEMS[index % DEFAULT_VIDEOS_ITEMS.length].image),
        title: String(item && item.title ? item.title : 'Video Kajian Terbaru'),
        meta: String(item && item.meta ? item.meta : 'Raudhatul Jannah Official')
      }));
    }
    return DEFAULT_VIDEOS_ITEMS.map((item) => ({ ...item }));
  }

  function normalizeGalleryItems(content) {
    const gallerySection = content?.gallery;
    if (gallerySection?.items && Array.isArray(gallerySection.items) && gallerySection.items.length > 0) {
      return gallerySection.items.map((item, index) => ({
        caption: String(item && item.caption ? item.caption : `Galeri ${index + 1}`),
        imageUrl: String(item && item.imageUrl ? item.imageUrl : '')
      }));
    }
    return DEFAULT_GALLERY_ITEMS.map((item) => ({ ...item }));
  }

  function normalizeSchedules(content) {
    const scheduleSection = content?.schedule;
    if (scheduleSection?.items && Array.isArray(scheduleSection.items) && scheduleSection.items.length > 0) {
      return scheduleSection.items;
    }
    return DEFAULT_SCHEDULE_ITEMS;
  }

  function normalizePrograms(content) {
    const programSection = content?.program;
    if (programSection?.items && Array.isArray(programSection.items) && programSection.items.length > 0) {
      return programSection.items;
    }
    return DEFAULT_PROGRAM_ITEMS;
  }

  function normalizeFasilitas(content) {
    const fasilitasSection = content?.fasilitas;
    if (fasilitasSection?.items && Array.isArray(fasilitasSection.items) && fasilitasSection.items.length > 0) {
      return fasilitasSection.items;
    }
    return DEFAULT_FASILITAS_ITEMS;
  }

  function renderVideos(content) {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;

    const videos = normalizeVideos(content);
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
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const items = normalizeGalleryItems(content);
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

    const schedules = normalizeSchedules(content);
    
    if (schedules.length === 0) {
      return;
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

    grid.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function renderPrograms(content) {
    const grid = document.getElementById('programsGrid');
    if (!grid) return;

    const programs = normalizePrograms(content);

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

  function renderFasilitas(content) {
    const grid = document.getElementById('fasilitasGrid');
    if (!grid) return;

    const items = normalizeFasilitas(content);
    const delays = [0, 0.1, 0.2];

    grid.innerHTML = items.map((item, index) => {
      const iconKey = item.icon && FASILITAS_ICONS[item.icon] ? item.icon : 'toilet';
      const svgPaths = FASILITAS_ICONS[iconKey];
      const title = escapeHtml(item.title || '');
      const desc = escapeHtml(item.desc || '');
      const tag = escapeHtml(item.tag || '');
      const delay = delays[index % delays.length];

      return `
      <div class="fac-card reveal" style="transition-delay:${delay}s">
        <svg class="fac-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${svgPaths}</svg>
        <h3 class="fac-title">${title}</h3>
        <p class="fac-desc">${desc}</p>
        ${tag ? `<span class="fac-tag">${tag}</span>` : ''}
      </div>`;
    }).join('');

    grid.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function applyContent(content) {
    const sections = ['hero', 'about', 'streaming', 'videos', 'schedule', 'gallery', 'contact', 'donation', 'footer', 'program', 'fasilitas'];
    
    sections.forEach((section) => {
      const sectionData = content?.[section];
      if (!sectionData || typeof sectionData !== 'object') return;

      Object.entries(sectionData).forEach(([key, value]) => {
        if (typeof value !== 'string') return;

        const dataKey = `${section}_${key}`;
        document.querySelectorAll(`[data-content-key="${dataKey}"]`).forEach((element) => {
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
        });
      });

      if (section === 'about' && sectionData.stats && Array.isArray(sectionData.stats)) {
        sectionData.stats.forEach((stat, index) => {
          const numKey = `about_stat${index + 1}_number`;
          const lblKey = `about_stat${index + 1}_label`;
          
          document.querySelectorAll(`[data-content-key="${numKey}"]`).forEach((el) => {
            el.textContent = stat.number || '';
          });
          document.querySelectorAll(`[data-content-key="${lblKey}"]`).forEach((el) => {
            el.textContent = stat.label || '';
          });
        });
      }
    });

    renderVideos(content);
    renderGallery(content);
    renderSchedules(content);
    renderPrograms(content);
    renderFasilitas(content);
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
