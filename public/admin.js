const CONTENT_STORAGE_KEY = 'rj_site_content_v1';
const LIVE_STORAGE_KEY = 'rj_live_status';
const API_CONTENT_URL = '/api/content';
const API_UPLOAD_URL = '/api/upload-image';
const API_ADMIN_LOGOUT_URL = '/api/admin/logout';

const DEFAULT_SCHEDULES = [
  {
    day: '23',
    month: 'Mar',
    title: 'Kajian Ahad Pagi',
    detail: 'Kitab Al-Mulakhos Fiqh<br>Bersama: Ust. Muhammad Fakhruddin hafizhahullah',
    time: '10:00 WIB - Menjelang Dzuhur'
  },
  {
    day: '26',
    month: 'Mar',
    title: 'Kajian Malam Rabu',
    detail: 'Kitab Shahih Fiqih Sunnah<br>Bersama: Ust. Abdullah Hakim hafizhahullah',
    time: "Ba'da Isya' - 21:00 WIB"
  },
  {
    day: '30',
    month: 'Mar',
    title: 'Kajian Ahad Pagi',
    detail: 'Kitab Al-Mulakhos Fiqh - Lanjutan<br>Bersama: Ust. Muhammad Fakhruddin hafizhahullah',
    time: '10:00 WIB - Menjelang Dzuhur'
  },
  {
    day: '05',
    month: 'Apr',
    title: 'Tahsin Al-Quran',
    detail: 'Pembelajaran Tajwid &amp; Makhraj Huruf<br>Terbuka untuk umum, ikhwan &amp; akhwat',
    time: "Ba'da Ashar - 16:30 WIB"
  }
];

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

const DEFAULT_PROGRAMS = [
  {
    icon: 'kajian-pagi',
    title: 'Kajian Ahad Pagi',
    desc: 'Kajian rutin setiap Ahad pagi mengkaji kitab-kitab para ulama dengan metode talaqqi yang sistematis dan mudah dipahami seluruh kalangan.',
    tag: "Ahad · 10:00 WIB"
  },
  {
    icon: 'streaming',
    title: 'Live Streaming',
    desc: 'Saksikan kajian ilmu dari mana saja melalui siaran langsung di YouTube dan Facebook. Ilmu tanpa batas, tidak terikat tempat maupun waktu.',
    tag: 'YouTube · Facebook'
  },
  {
    icon: 'anak',
    title: 'Kegiatan Anak',
    desc: "Program khusus anak-anak: tahsin Al-Qur'an, hafalan surat pendek, dan pendidikan akhlak Islami yang menyenangkan dan penuh semangat.",
    tag: 'Weekend Program'
  },
  {
    icon: 'kajian-malam',
    title: 'Kajian Malam',
    desc: 'Kajian tematik malam hari membahas fiqih, tauhid, dan sirah nabawiyah. Ilmu yang menemani malam-malam penuh keberkahan.',
    tag: "Rabu · Ba'da Isya'"
  },
  {
    icon: 'sholat',
    title: 'Sholat Berjamaah',
    desc: 'Fasilitas lengkap untuk sholat berjamaah lima waktu. Mari ramaikan shaf masjid dan rasakan keindahan ukhuwah Islamiyah.',
    tag: '5 Waktu Sholat'
  },
  {
    icon: 'zakat',
    title: 'Zakat & Infaq',
    desc: 'Layanan zakat, infaq, dan sedekah yang amanah untuk membantu saudara muslim yang membutuhkan di sekitar Karanganyar, Kebumen.',
    tag: 'LAZIS Raudhatul Jannah'
  }
];

const DEFAULT_GALLERY_ITEMS = [
  { caption: 'Sholat Berjamaah', imageUrl: '' },
  { caption: 'Kajian Rutin Ahad Pagi', imageUrl: '' },
  { caption: 'Kegiatan Anak', imageUrl: '' },
  { caption: 'Halaqah Ilmiah', imageUrl: '' },
  { caption: 'Live Streaming', imageUrl: '' }
];

const defaultContent = {
  programsLabel: 'Program Kami',
  programsHeading: 'Kegiatan &amp; Program Unggulan',
  stat1Number: '5+',
  stat1Label: 'Tahun Berdiri',
  stat2Number: '20+',
  stat2Label: 'Program/Tahun',
  stat3Number: '3K+',
  stat3Label: "Jama'ah",
  heroTitle: 'Masjid<br><em>Raudhatul</em> Jannah',
  heroSub: 'Taman Surga di Bumi Karanganyar',
  heroTagline: 'Rumah Ibadah <span>&middot;</span> Pusat Ilmu <span>&middot;</span> Cahaya Umat',
  aboutTitle: 'Lebih dari<br>Sekadar Masjid',
  aboutP1: 'Masjid Raudhatul Jannah adalah pusat kegiatan Islam yang berlokasi di Komplek Minimarket RJ Mart, Karanganyar, Kebumen. Nama <em>Raudhatul Jannah</em> - yang berarti "Taman Surga" - mencerminkan visi kami untuk menjadikan masjid ini sebagai tempat yang penuh keberkahan, ilmu, dan ketenangan bagi seluruh umat.',
  aboutP2: 'Kami berkomitmen untuk menghadirkan kajian ilmu yang bersumber dari Al-Quran dan As-Sunnah sesuai pemahaman Salafus Shalih, serta melayani kebutuhan ibadah dan pendidikan masyarakat sekitar.',
  aboutP3: 'Dengan program kajian rutin, live streaming, dan kegiatan untuk seluruh kalangan - anak, remaja, hingga dewasa - Raudhatul Jannah hadir sebagai rumah bagi setiap muslim yang ingin menuntut ilmu dan mendekatkan diri kepada Allah.',
  streamingDesc: 'Kajian-kajian di Masjid Raudhatul Jannah dapat Anda saksikan secara langsung maupun replay melalui channel YouTube dan Facebook kami. Ilmu Islam tidak mengenal jarak maupun waktu.',
  videosHeading: 'Kajian di YouTube',
  videosChannelUrl: 'https://www.youtube.com/@RaudhatulJannahOfficial',
  schedulesHeading: 'Jadwal Kajian Mendatang',
  galleryHeading: 'Momen &amp; Kegiatan Masjid',
  contactSectionLabel: 'Hubungi Kami',
  contactSectionTitle: 'Temukan Kami<br>di Sini',
  contactLocationLabel: 'Lokasi',
  contactAddress: 'Komplek Minimarket RJ Mart<br>JL. Pabrik No. 1, Karanganyar, Kebumen',
  contactMapsUrl: 'https://maps.google.com/?q=Masjid+Raudhatul+Jannah+Karanganyar+Kebumen',
  contactMapEmbedUrl: 'https://maps.google.com/maps?q=Masjid+Raudhatul+Jannah+Karanganyar+Kebumen&output=embed',
  contactWhatsappLabel: 'Telepon / WhatsApp',
  contactWhatsappUrl: 'https://wa.me/6285865206010',
  contactPhoneHref: 'tel:085865206010',
  contactPhoneText: '0858-6520-6010',
  contactInstagramLabel: 'Instagram',
  contactInstagramUrl: 'https://www.instagram.com/masjid.rjannah/',
  contactInstagramText: '@masjid.rjannah',
  contactFacebookLabel: 'Facebook',
  contactFacebookUrl: 'https://www.facebook.com/masjid.mrj',
  contactFacebookText: 'Masjid Raudhatul Jannah',
  contactYoutubeLabel: 'YouTube',
  contactYoutubeUrl: 'https://www.youtube.com/@masjid.rjannah/',
  contactYoutubeText: 'Raudhatul Jannah Official',
  donasiLabel: 'Donasi &amp; Infaq',
  donasiTitle: 'Dukung Kemakmuran<br>Masjid Raudhatul Jannah',
  donasiDesc: 'Sedekah Anda adalah investasi akhirat yang tak ternilai. Bantu kami terus menjalankan program dakwah, pendidikan, dan pelayanan umat di Karanganyar, Kebumen.',
  bankLabel: 'Nomor Rekening',
  bankName: 'Nama Bank',
  bankNumber: 'No. Rek: XXXX-XXXX-XXXX',
  bankOwner: 'a.n. Masjid Raudhatul Jannah',
  donasiWhatsappUrl: 'https://wa.me/6285865206010',
  donasiWhatsappText: 'Konfirmasi via WhatsApp',
  footerBrandName: 'Masjid Raudhatul Jannah',
  footerBrandLocation: 'Karanganyar - Kebumen',
  footerAyat: '"Dan sesungguhnya masjid-masjid itu adalah untuk Allah, maka janganlah kamu menyembah seseorang pun di dalamnya beserta Allah." <br>- QS. Al-Jin: 18',
  footerCopy: '(c) 2026 Masjid Raudhatul Jannah - Karanganyar, Kebumen. Hak cipta dilindungi.'
};

const scalarKeys = Object.keys(defaultContent);

const form = document.getElementById('adminForm');
const statusText = document.getElementById('statusText');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const logoutBtn = document.getElementById('logoutBtn');
const isLiveCheckbox = document.getElementById('isLive');
const addVideoBtn = document.getElementById('addVideoBtn');
const addGalleryBtn = document.getElementById('addGalleryBtn');
const videosRepeater = document.getElementById('videosRepeater');
const galleryRepeater = document.getElementById('galleryRepeater');
const videoItemTemplate = document.getElementById('videoItemTemplate');
const galleryItemTemplate = document.getElementById('galleryItemTemplate');

const state = {
  videos: [],
  galleryItems: [],
  schedules: [],
  programs: []
};

function showStatus(message) {
  statusText.textContent = message;
}

function cloneDefaultVideos() {
  return DEFAULT_VIDEOS.map((item) => ({ ...item }));
}

function cloneDefaultPrograms() {
  return DEFAULT_PROGRAMS.map((item) => ({ ...item }));
}

function cloneDefaultGalleryItems() {
  return DEFAULT_GALLERY_ITEMS.map((item) => ({ ...item }));
}

function cloneDefaultSchedules() {
  return DEFAULT_SCHEDULES.map((item) => ({ ...item }));
}

function readSavedContent() {
  const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed to parse saved content.', error);
    return {};
  }
}

function normalizeContent(raw) {
  const safe = raw && typeof raw === 'object' ? raw : {};
  const normalized = { ...defaultContent };

  scalarKeys.forEach((key) => {
    if (typeof safe[key] === 'string') {
      normalized[key] = safe[key];
    }
  });

  if (Array.isArray(safe.videos) && safe.videos.length > 0) {
    normalized.videos = safe.videos.map((item, index) => ({
      url: typeof item?.url === 'string' ? item.url : DEFAULT_VIDEOS[index % DEFAULT_VIDEOS.length].url,
      image: typeof item?.image === 'string' ? item.image : '',
      title: typeof item?.title === 'string' ? item.title : 'Video Kajian Terbaru',
      meta: typeof item?.meta === 'string' ? item.meta : 'Raudhatul Jannah Official'
    }));
  } else {
    normalized.videos = cloneDefaultVideos().map((item, index) => ({
      url: typeof safe[`video${index + 1}Url`] === 'string' ? safe[`video${index + 1}Url`] : item.url,
      image: typeof safe[`video${index + 1}Image`] === 'string' ? safe[`video${index + 1}Image`] : item.image,
      title: typeof safe[`video${index + 1}Title`] === 'string' ? safe[`video${index + 1}Title`] : item.title,
      meta: typeof safe[`video${index + 1}Meta`] === 'string' ? safe[`video${index + 1}Meta`] : item.meta
    }));
  }

  if (Array.isArray(safe.galleryItems) && safe.galleryItems.length > 0) {
    normalized.galleryItems = safe.galleryItems.map((item, index) => ({
      caption: typeof item?.caption === 'string' ? item.caption : `Item ${index + 1}`,
      imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : ''
    }));
  } else {
    normalized.galleryItems = cloneDefaultGalleryItems().map((item, index) => ({
      caption: typeof safe[`galleryCap${index + 1}`] === 'string' ? safe[`galleryCap${index + 1}`] : item.caption,
      imageUrl: typeof safe[`galleryImage${index + 1}`] === 'string' ? safe[`galleryImage${index + 1}`] : item.imageUrl
    }));
  }

  if (Array.isArray(safe.programs) && safe.programs.length > 0) {
    normalized.programs = safe.programs.map((item) => ({
      icon: typeof item?.icon === 'string' ? item.icon : 'kajian-pagi',
      title: typeof item?.title === 'string' ? item.title : '',
      desc: typeof item?.desc === 'string' ? item.desc : '',
      tag: typeof item?.tag === 'string' ? item.tag : ''
    }));
  } else {
    normalized.programs = cloneDefaultPrograms();
  }

  if (Array.isArray(safe.schedules) && safe.schedules.length > 0) {
    normalized.schedules = safe.schedules.map((item) => ({
      day: typeof item?.day === 'string' ? item.day : '',
      month: typeof item?.month === 'string' ? item.month : '',
      title: typeof item?.title === 'string' ? item.title : '',
      detail: typeof item?.detail === 'string' ? item.detail : '',
      time: typeof item?.time === 'string' ? item.time : ''
    }));
  } else {
    normalized.schedules = cloneDefaultSchedules();
  }

  return normalized;
}

function updateImagePreview(imageElement, url) {
  const safeUrl = String(url || '').trim();
  if (!safeUrl) {
    imageElement.removeAttribute('src');
    imageElement.classList.remove('show');
    return;
  }

  imageElement.src = safeUrl;
  imageElement.classList.add('show');
}

function renderVideosRepeater() {
  videosRepeater.innerHTML = '';

  state.videos.forEach((video, index) => {
    const node = videoItemTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector('[data-role="index"]').textContent = String(index + 1);

    const urlInput = node.querySelector('[data-field="url"]');
    const imageInput = node.querySelector('[data-field="image"]');
    const titleInput = node.querySelector('[data-field="title"]');
    const metaInput = node.querySelector('[data-field="meta"]');
    const previewImage = node.querySelector('[data-role="preview"]');
    const removeBtn = node.querySelector('[data-action="remove-video"]');
    const moveUpBtn = node.querySelector('[data-action="move-video-up"]');
    const moveDownBtn = node.querySelector('[data-action="move-video-down"]');

    urlInput.value = video.url;
    titleInput.value = video.title;
    metaInput.value = video.meta;

    // Auto-generate YT thumbnail if image is missing on load
    let resolvedImage = video.image;
    if (!resolvedImage.trim()) {
      const ytMatch = video.url.match(/(?:v=|\/vi\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (ytMatch) {
        resolvedImage = `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
        state.videos[index].image = resolvedImage;
      }
    }
    imageInput.value = resolvedImage;
    updateImagePreview(previewImage, resolvedImage);

    moveUpBtn.disabled = index === 0;
    moveDownBtn.disabled = index === state.videos.length - 1;

    urlInput.addEventListener('input', () => {
      state.videos[index].url = urlInput.value;
      // Always auto-fill thumbnail from YouTube URL
      const ytMatch = urlInput.value.match(/(?:v=|\/vi\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (ytMatch) {
        const thumb = `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
        state.videos[index].image = thumb;
        imageInput.value = thumb;
        updateImagePreview(previewImage, thumb);
      }
    });
    imageInput.addEventListener('input', () => {
      state.videos[index].image = imageInput.value;
      updateImagePreview(previewImage, imageInput.value);
    });
    titleInput.addEventListener('input', () => { state.videos[index].title = titleInput.value; });
    metaInput.addEventListener('input', () => { state.videos[index].meta = metaInput.value; });

    removeBtn.addEventListener('click', () => {
      state.videos.splice(index, 1);
      renderVideosRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.videos[index - 1], state.videos[index]] = [state.videos[index], state.videos[index - 1]];
      renderVideosRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.videos.length - 1) return;
      [state.videos[index + 1], state.videos[index]] = [state.videos[index], state.videos[index + 1]];
      renderVideosRepeater();
    });

    videosRepeater.appendChild(node);
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Failed to read image file.'));
    reader.readAsDataURL(file);
  });
}

async function uploadImage(file, onProgress) {
  const dataUrl = await fileToDataUrl(file);
  const splitIndex = dataUrl.indexOf(',');
  if (splitIndex < 0) {
    throw new Error('Invalid image data format.');
  }

  const metadata = dataUrl.slice(0, splitIndex);
  const base64Data = dataUrl.slice(splitIndex + 1);
  const mimeMatch = metadata.match(/^data:(.*?);base64$/i);
  const mimeType = mimeMatch ? mimeMatch[1] : '';
  const body = JSON.stringify({ fileName: file.name, mimeType, base64Data });

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    if (onProgress) {
      xhr.upload.onprogress = (e) => {
        onProgress(e.lengthComputable ? Math.round((e.loaded / e.total) * 100) : -1);
      };
    }

    xhr.onload = () => {
      if (xhr.status === 401) {
        window.location.href = '/login.html';
        reject(new Error('Unauthorized'));
        return;
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const payload = JSON.parse(xhr.responseText);
          if (payload.url) {
            resolve(payload.url);
          } else {
            reject(new Error(payload.error || 'No URL in response.'));
          }
        } catch {
          reject(new Error('Invalid JSON response from server.'));
        }
      } else {
        reject(new Error(`Upload failed (${xhr.status}).`));
      }
    };

    xhr.onerror = () => reject(new Error('Network error during upload.'));
    xhr.open('POST', API_UPLOAD_URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(body);
  });
}

function renderGalleryRepeater() {
  galleryRepeater.innerHTML = '';

  state.galleryItems.forEach((item, index) => {
    const node = galleryItemTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector('[data-role="index"]').textContent = String(index + 1);

    const captionInput = node.querySelector('[data-field="caption"]');
    const imageInput = node.querySelector('[data-field="imageUrl"]');
    const previewImage = node.querySelector('[data-role="preview"]');
    const dropzone = node.querySelector('[data-role="dropzone"]');
    const fileInput = node.querySelector('[data-role="file-input"]');
    const progressEl = node.querySelector('[data-role="upload-progress"]');
    const barEl = node.querySelector('[data-role="upload-bar"]');
    const pctEl = node.querySelector('[data-role="upload-pct"]');
    const removeBtn = node.querySelector('[data-action="remove-gallery"]');
    const moveUpBtn = node.querySelector('[data-action="move-gallery-up"]');
    const moveDownBtn = node.querySelector('[data-action="move-gallery-down"]');

    captionInput.value = item.caption;
    imageInput.value = item.imageUrl;
    updateImagePreview(previewImage, item.imageUrl);

    moveUpBtn.disabled = index === 0;
    moveDownBtn.disabled = index === state.galleryItems.length - 1;

    captionInput.addEventListener('input', () => {
      state.galleryItems[index].caption = captionInput.value;
    });

    imageInput.addEventListener('input', () => {
      state.galleryItems[index].imageUrl = imageInput.value;
      updateImagePreview(previewImage, imageInput.value);
    });

    removeBtn.addEventListener('click', () => {
      state.galleryItems.splice(index, 1);
      renderGalleryRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.galleryItems[index - 1], state.galleryItems[index]] = [state.galleryItems[index], state.galleryItems[index - 1]];
      renderGalleryRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.galleryItems.length - 1) return;
      [state.galleryItems[index + 1], state.galleryItems[index]] = [state.galleryItems[index], state.galleryItems[index + 1]];
      renderGalleryRepeater();
    });

    const runUpload = async (file) => {
      if (!file) return;
      dropzone.classList.add('dragging');
      progressEl.hidden = false;
      barEl.style.width = '0%';
      pctEl.textContent = '0%';
      showStatus('Uploading image...');

      try {
        const imageUrl = await uploadImage(file, (pct) => {
          if (pct >= 0) {
            barEl.style.width = pct + '%';
            pctEl.textContent = pct + '%';
          }
        });
        barEl.style.width = '100%';
        pctEl.textContent = '100%';
        state.galleryItems[index].imageUrl = imageUrl;
        imageInput.value = imageUrl;
        updateImagePreview(previewImage, imageUrl);
        showStatus('Upload selesai. URL gambar sudah terpasang.');
      } catch (error) {
        console.error(error);
        showStatus(`Upload gagal: ${error.message}`);
      } finally {
        dropzone.classList.remove('dragging');
        setTimeout(() => { progressEl.hidden = true; }, 1500);
      }
    };

    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (event) => {
      event.preventDefault();
      dropzone.classList.add('dragging');
    });
    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragging');
    });
    dropzone.addEventListener('drop', (event) => {
      event.preventDefault();
      const file = event.dataTransfer?.files?.[0];
      void runUpload(file);
    });
    fileInput.addEventListener('change', () => {
      const file = fileInput.files?.[0];
      void runUpload(file);
      fileInput.value = '';
    });

    galleryRepeater.appendChild(node);
  });
}

function renderSchedulesRepeater() {
  const container = document.getElementById('schedulesRepeater');
  if (!container) return;
  container.innerHTML = '';

  state.schedules.forEach((item, index) => {
    const node = document.getElementById('scheduleItemTemplate').content.firstElementChild.cloneNode(true);
    node.querySelector('[data-role="index"]').textContent = String(index + 1);

    const dayInput = node.querySelector('[data-field="day"]');
    const monthInput = node.querySelector('[data-field="month"]');
    const titleInput = node.querySelector('[data-field="title"]');
    const detailInput = node.querySelector('[data-field="detail"]');
    const timeInput = node.querySelector('[data-field="time"]');
    const removeBtn = node.querySelector('[data-action="remove-schedule"]');
    const moveUpBtn = node.querySelector('[data-action="move-schedule-up"]');
    const moveDownBtn = node.querySelector('[data-action="move-schedule-down"]');

    dayInput.value = item.day;
    monthInput.value = item.month;
    titleInput.value = item.title;
    detailInput.value = item.detail;
    timeInput.value = item.time;

    moveUpBtn.disabled = index === 0;
    moveDownBtn.disabled = index === state.schedules.length - 1;

    dayInput.addEventListener('input', () => { state.schedules[index].day = dayInput.value; });
    monthInput.addEventListener('input', () => { state.schedules[index].month = monthInput.value; });
    titleInput.addEventListener('input', () => { state.schedules[index].title = titleInput.value; });
    detailInput.addEventListener('input', () => { state.schedules[index].detail = detailInput.value; });
    timeInput.addEventListener('input', () => { state.schedules[index].time = timeInput.value; });

    removeBtn.addEventListener('click', () => {
      state.schedules.splice(index, 1);
      renderSchedulesRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.schedules[index - 1], state.schedules[index]] = [state.schedules[index], state.schedules[index - 1]];
      renderSchedulesRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.schedules.length - 1) return;
      [state.schedules[index + 1], state.schedules[index]] = [state.schedules[index], state.schedules[index + 1]];
      renderSchedulesRepeater();
    });

    container.appendChild(node);
  });
}

function renderProgramsRepeater() {
  const container = document.getElementById('programsRepeater');
  if (!container) return;
  container.innerHTML = '';

  state.programs.forEach((item, index) => {
    const node = document.getElementById('programItemTemplate').content.firstElementChild.cloneNode(true);
    node.querySelector('[data-role="index"]').textContent = String(index + 1);

    const iconSelect = node.querySelector('[data-field="icon"]');
    const titleInput = node.querySelector('[data-field="title"]');
    const descInput = node.querySelector('[data-field="desc"]');
    const tagInput = node.querySelector('[data-field="tag"]');
    const removeBtn = node.querySelector('[data-action="remove-program"]');
    const moveUpBtn = node.querySelector('[data-action="move-program-up"]');
    const moveDownBtn = node.querySelector('[data-action="move-program-down"]');

    iconSelect.value = item.icon;
    titleInput.value = item.title;
    descInput.value = item.desc;
    tagInput.value = item.tag;

    moveUpBtn.disabled = index === 0;
    moveDownBtn.disabled = index === state.programs.length - 1;

    iconSelect.addEventListener('change', () => { state.programs[index].icon = iconSelect.value; });
    titleInput.addEventListener('input', () => { state.programs[index].title = titleInput.value; });
    descInput.addEventListener('input', () => { state.programs[index].desc = descInput.value; });
    tagInput.addEventListener('input', () => { state.programs[index].tag = tagInput.value; });

    removeBtn.addEventListener('click', () => {
      state.programs.splice(index, 1);
      renderProgramsRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.programs[index - 1], state.programs[index]] = [state.programs[index], state.programs[index - 1]];
      renderProgramsRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.programs.length - 1) return;
      [state.programs[index + 1], state.programs[index]] = [state.programs[index], state.programs[index + 1]];
      renderProgramsRepeater();
    });

    container.appendChild(node);
  });
}

function fillScalarInputs(values) {
  scalarKeys.forEach((key) => {
    const input = form.elements.namedItem(key);
    if (input) {
      input.value = typeof values[key] === 'string' ? values[key] : defaultContent[key];
    }
  });
}

function collectScalarValues() {
  const values = {};
  scalarKeys.forEach((key) => {
    const input = form.elements.namedItem(key);
    const formValue = input ? input.value : '';
    values[key] = formValue.trim() ? formValue : defaultContent[key];
  });
  return values;
}

function getRequestPayload() {
  return {
    ...collectScalarValues(),
    videos: state.videos,
    galleryItems: state.galleryItems,
    schedules: state.schedules,
    programs: state.programs
  };
}

async function loadFromApi() {
  const response = await fetch(API_CONTENT_URL, { cache: 'no-store' });
  if (response.status === 401) {
    window.location.href = '/login.html';
    throw new Error('Unauthorized');
  }
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

async function logoutAdmin() {
  const response = await fetch(API_ADMIN_LOGOUT_URL, {
    method: 'POST'
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
}

async function saveToApi(payload) {
  const response = await fetch(API_CONTENT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (response.status === 401) {
    window.location.href = '/login.html';
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
}

function applyContentToForm(content) {
  const normalized = normalizeContent(content);

  fillScalarInputs(normalized);
  state.videos = normalized.videos;
  state.galleryItems = normalized.galleryItems;
  state.schedules = normalized.schedules;
  state.programs = normalized.programs;
  renderVideosRepeater();
  renderGalleryRepeater();
  renderSchedulesRepeater();
  renderProgramsRepeater();
}

saveBtn.addEventListener('click', async () => {
  const content = getRequestPayload();
  const requestBody = {
    content,
    isLive: isLiveCheckbox.checked
  };

  try {
    await saveToApi(requestBody);
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
    localStorage.setItem(LIVE_STORAGE_KEY, String(isLiveCheckbox.checked));
    showStatus('Perubahan tersimpan ke server. Refresh beranda untuk melihat hasil.');
  } catch (error) {
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
    localStorage.setItem(LIVE_STORAGE_KEY, String(isLiveCheckbox.checked));
    showStatus('Server tidak tersedia. Perubahan tersimpan lokal di browser ini.');
    console.warn('Failed saving to API, fallback to local storage.', error);
  }
});

resetBtn.addEventListener('click', async () => {
  const resetContent = {
    ...defaultContent,
    videos: cloneDefaultVideos(),
    galleryItems: cloneDefaultGalleryItems(),
    schedules: cloneDefaultSchedules(),
    programs: cloneDefaultPrograms()
  };

  try {
    await saveToApi({
      content: resetContent,
      isLive: false
    });
  } catch (error) {
    console.warn('Failed resetting through API, applying local reset only.', error);
  }

  localStorage.removeItem(CONTENT_STORAGE_KEY);
  localStorage.setItem(LIVE_STORAGE_KEY, 'false');
  isLiveCheckbox.checked = false;
  applyContentToForm(resetContent);
  showStatus('Konten dikembalikan ke default.');
});

addVideoBtn.addEventListener('click', () => {
  state.videos.push({
    url: '',
    image: '',
    title: 'Video Kajian',
    meta: 'Raudhatul Jannah Official'
  });
  renderVideosRepeater();
});

addGalleryBtn.addEventListener('click', () => {
  state.galleryItems.push({
    caption: 'Item Baru',
    imageUrl: ''
  });
  renderGalleryRepeater();
});

const addProgramBtn = document.getElementById('addProgramBtn');
if (addProgramBtn) {
  addProgramBtn.addEventListener('click', () => {
    state.programs.push({
      icon: 'kajian-pagi',
      title: '',
      desc: '',
      tag: ''
    });
    renderProgramsRepeater();
  });
}

const addScheduleBtn = document.getElementById('addScheduleBtn');
if (addScheduleBtn) {
  addScheduleBtn.addEventListener('click', () => {
    state.schedules.push({
      day: '',
      month: '',
      title: '',
      detail: '',
      time: ''
    });
    renderSchedulesRepeater();
  });
}

logoutBtn.addEventListener('click', async () => {
  try {
    await logoutAdmin();
  } catch (error) {
    console.warn('Failed to logout cleanly.', error);
  }

  window.location.href = '/login.html';
});

async function initializeForm() {
  try {
    const payload = await loadFromApi();
    applyContentToForm(payload.content || {});
    isLiveCheckbox.checked = Boolean(payload.isLive);

    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(payload.content || {}));
    localStorage.setItem(LIVE_STORAGE_KEY, String(Boolean(payload.isLive)));
    showStatus('Data dimuat dari server.');
  } catch (error) {
    applyContentToForm(readSavedContent());
    isLiveCheckbox.checked = localStorage.getItem(LIVE_STORAGE_KEY) === 'true';
    showStatus('Server tidak tersedia. Menggunakan data lokal browser.');
    console.warn('API unavailable, local fallback in use.', error);
  }
}

initializeForm();
