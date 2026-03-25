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
      console.warn('API unavailable, using local fallback.', error);

      let saved = {};
      try {
        saved = JSON.parse(localStorage.getItem(CONTENT_STORAGE_KEY) || '{}');
      } catch (parseError) {
        console.error('Invalid local fallback content.', parseError);
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
