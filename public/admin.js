const CONTENT_STORAGE_KEY = 'rj_site_content_v1';
const LIVE_STORAGE_KEY = 'rj_live_status';
const API_CONTENT_URL = '/api/content';
const API_UPLOAD_URL = '/api/upload-image';
const API_ADMIN_LOGOUT_URL = '/api/admin/logout';

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

const DEFAULT_SCHEDULE_ITEMS = [
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

const DEFAULT_GALLERY_ITEMS = [
  { caption: 'Sholat Berjamaah', imageUrl: '' },
  { caption: 'Kajian Rutin Ahad Pagi', imageUrl: '' },
  { caption: 'Kegiatan Anak', imageUrl: '' },
  { caption: 'Halaqah Ilmiah', imageUrl: '' },
  { caption: 'Live Streaming', imageUrl: '' }
];

const DEFAULT_PROGRAM_ITEMS = [
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

const DEFAULT_FASILITAS_ITEMS = [
  {
    icon: 'toilet',
    title: 'Toilet Gratis',
    desc: 'Fasilitas toilet bersih tersedia gratis untuk seluruh jamaah dan pengunjung masjid, terjaga kebersihannya setiap saat.'
  },
  {
    icon: 'parkir',
    title: 'Parkir Luas & Gratis',
    desc: 'Area parkir yang luas, nyaman, dan gratis untuk kendaraan roda dua maupun roda empat seluruh jamaah dan pengunjung.'
  },
  {
    icon: 'toko',
    title: 'Toko RJ Mart',
    desc: 'Minimarket RJ Mart berlokasi di kompleks masjid, memudahkan jamaah memenuhi kebutuhan sehari-hari sebelum atau sesudah ibadah.'
  }
];

const defaultContent = {
  hero: {
    title: 'Masjid<br><em>Raudhatul</em> Jannah',
    sub: 'Taman Surga di Bumi Karanganyar',
    tagline: 'Rumah Ibadah <span>&middot;</span> Pusat Ilmu <span>&middot;</span> Cahaya Umat'
  },
  about: {
    label: 'Tentang Kami',
    heading: 'Lebih dari<br>Sekadar Masjid',
    p1: 'Masjid Raudhatul Jannah adalah pusat kegiatan Islam yang berlokasi di Komplek Minimarket RJ Mart, Karanganyar, Kebumen. Nama <em>Raudhatul Jannah</em> - yang berarti "Taman Surga" - mencerminkan visi kami untuk menjadikan masjid ini sebagai tempat yang penuh keberkahan, ilmu, dan ketenangan bagi seluruh umat.',
    p2: 'Kami berkomitmen untuk menghadirkan kajian ilmu yang bersumber dari Al-Quran dan As-Sunnah sesuai pemahaman Salafus Shalih, serta melayani kebutuhan ibadah dan pendidikan masyarakat sekitar.',
    p3: 'Dengan program kajian rutin, live streaming, dan kegiatan untuk seluruh kalangan - anak, remaja, hingga dewasa - Raudhatul Jannah hadir sebagai rumah bagi setiap muslim yang ingin menuntut ilmu dan mendekatkan diri kepada Allah.',
    stats: [
      { number: '5+', label: 'Tahun Berdiri' },
      { number: '20+', label: 'Program/Tahun' },
      { number: '2K+', label: "Jama'ah" }
    ]
  },
  program: {
    label: 'Program Kami',
    heading: 'Kegiatan &amp; Program Unggulan',
    items: DEFAULT_PROGRAM_ITEMS
  },
  fasilitas: {
    label: 'Fasilitas',
    heading: 'Fasilitas &amp; Layanan',
    items: DEFAULT_FASILITAS_ITEMS
  },
  streaming: {
    label: 'Live Streaming',
    heading: 'Saksikan Kajian<br>Secara Langsung',
    desc: 'Kajian-kajian di Masjid Raudhatul Jannah dapat Anda saksikan secara langsung maupun replay melalui channel YouTube dan Facebook kami. Ilmu Islam tidak mengenal jarak maupun waktu.'
  },
  videos: {
    label: 'Video Kajian',
    heading: 'Kajian di YouTube',
    channelUrl: 'https://www.youtube.com/@RaudhatulJannahOfficial',
    items: DEFAULT_VIDEOS_ITEMS
  },
  schedule: {
    label: 'Jadwal',
    heading: 'Jadwal Kajian Mendatang',
    items: DEFAULT_SCHEDULE_ITEMS
  },
  gallery: {
    label: 'Galeri Foto',
    heading: 'Momen &amp; Kegiatan Masjid',
    items: DEFAULT_GALLERY_ITEMS
  },
  contact: {
    sectionLabel: 'Hubungi Kami',
    sectionTitle: 'Temukan Kami<br>di Sini',
    locationLabel: 'Lokasi',
    address: 'Komplek Minimarket RJ Mart<br>JL. Pabrik No. 1, Karanganyar, Kebumen',
    mapsUrl: 'https://maps.google.com/?q=Masjid+Raudhatul+Jannah+Karanganyar+Kebumen',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Masjid+Raudhatul+Jannah+Karanganyar+Kebumen&output=embed',
    whatsappLabel: 'Telepon / WhatsApp',
    whatsappUrl: 'https://wa.me/6285865206010',
    phoneHref: 'tel:085865206010',
    phoneText: '0858-6520-6010',
    instagramLabel: 'Instagram',
    instagramUrl: 'https://www.instagram.com/masjid.rjannah/',
    instagramText: '@masjid.rjannah',
    facebookLabel: 'Facebook',
    facebookUrl: 'https://www.facebook.com/masjid.mrj',
    facebookText: 'Masjid Raudhatul Jannah',
    youtubeLabel: 'YouTube',
    youtubeUrl: 'https://www.youtube.com/@masjid.rjannah/',
    youtubeText: 'Raudhatul Jannah Official'
  },
  donation: {
    label: 'Donasi &amp; Infaq',
    title: 'Dukung Kemakmuran<br>Masjid Raudhatul Jannah',
    desc: 'Sedekah Anda adalah investasi akhirat yang tak ternilai. Bantu kami terus menjalankan program dakwah, pendidikan, dan pelayanan umat di Karanganyar, Kebumen.',
    bankName: 'Nama Bank',
    bankLabel: 'Nomor Rekening',
    bankNumber: 'No. Rek: XXXX-XXXX-XXXX',
    bankOwner: 'a.n. Masjid Raudhatul Jannah',
    whatsappUrl: 'https://wa.me/6285865206010',
    whatsappText: 'Konfirmasi via WhatsApp',
    qrisUrl: ''
  },
  footer: {
    brandName: 'Masjid Raudhatul Jannah',
    brandLocation: 'Karanganyar - Kebumen',
    ayat: '"Dan sesungguhnya masjid-masjid itu adalah untuk Allah, maka janganlah kamu menyembah seseorang pun di dalamnya beserta Allah." <br>- QS. Al-Jin: 18',
    copy: '(c) 2026 Masjid Raudhatul Jannah - Karanganyar, Kebumen. Hak cipta dilindungi.'
  }
};

const scalarKeys = {
  hero: ['title', 'sub', 'tagline'],
  about: ['label', 'heading', 'p1', 'p2', 'p3'],
  program: ['label', 'heading'],
  fasilitas: ['label', 'heading'],
  streaming: ['label', 'heading', 'desc'],
  videos: ['label', 'heading', 'channelUrl'],
  schedule: ['label', 'heading'],
  gallery: ['label', 'heading'],
  contact: ['sectionLabel', 'sectionTitle', 'locationLabel', 'address', 'mapsUrl', 'mapEmbedUrl', 'whatsappLabel', 'whatsappUrl', 'phoneHref', 'phoneText', 'instagramLabel', 'instagramUrl', 'instagramText', 'facebookLabel', 'facebookUrl', 'facebookText', 'youtubeLabel', 'youtubeUrl', 'youtubeText'],
  donation: ['label', 'title', 'desc', 'bankName', 'bankLabel', 'bankNumber', 'bankOwner', 'whatsappUrl', 'whatsappText', 'qrisUrl'],
  footer: ['brandName', 'brandLocation', 'ayat', 'copy']
};

const form = document.getElementById('adminForm');
const statusText = document.getElementById('statusText');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const logoutBtn = document.getElementById('logoutBtn');
const isLiveCheckbox = document.getElementById('isLive');
const addVideoBtn = document.getElementById('addVideoBtn');
const addGalleryBtn = document.getElementById('addGalleryBtn');
const addFasilitasBtn = document.getElementById('addFasilitasBtn');
const videosRepeater = document.getElementById('videosRepeater');
const galleryRepeater = document.getElementById('galleryRepeater');
const fasilitasRepeater = document.getElementById('fasilitasRepeater');
const videoItemTemplate = document.getElementById('videoItemTemplate');
const galleryItemTemplate = document.getElementById('galleryItemTemplate');
const fasilitasItemTemplate = document.getElementById('fasilitasItemTemplate');

const state = {
  videosItems: [],
  galleryItems: [],
  scheduleItems: [],
  programItems: [],
  fasilitasItems: []
};

function showStatus(message) {
  statusText.textContent = message;
}

function cloneDefaultVideos() {
  return DEFAULT_VIDEOS_ITEMS.map((item) => ({ ...item }));
}

function cloneDefaultPrograms() {
  return DEFAULT_PROGRAM_ITEMS.map((item) => ({ ...item }));
}

function cloneDefaultGalleryItems() {
  return DEFAULT_GALLERY_ITEMS.map((item) => ({ ...item }));
}

function cloneDefaultSchedules() {
  return DEFAULT_SCHEDULE_ITEMS.map((item) => ({ ...item }));
}

function cloneDefaultFasilitas() {
  return DEFAULT_FASILITAS_ITEMS.map((item) => ({ ...item }));
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
  const normalized = JSON.parse(JSON.stringify(defaultContent));

  const sections = ['hero', 'about', 'program', 'fasilitas', 'streaming', 'videos', 'schedule', 'gallery', 'contact', 'donation', 'footer'];
  
  sections.forEach((section) => {
    if (safe[section] && typeof safe[section] === 'object') {
      const sectionKeys = scalarKeys[section] || [];
      sectionKeys.forEach((key) => {
        if (typeof safe[section][key] === 'string') {
          normalized[section][key] = safe[section][key];
        }
      });
    }
  });

  if (safe.about && safe.about.stats && Array.isArray(safe.about.stats)) {
    normalized.about.stats = safe.about.stats.map((item) => ({
      number: typeof item?.number === 'string' ? item.number : '',
      label: typeof item?.label === 'string' ? item.label : ''
    }));
  }

  if (safe.videos && safe.videos.items && Array.isArray(safe.videos.items) && safe.videos.items.length > 0) {
    normalized.videos.items = safe.videos.items.map((item, index) => ({
      url: typeof item?.url === 'string' ? item.url : DEFAULT_VIDEOS_ITEMS[index % DEFAULT_VIDEOS_ITEMS.length].url,
      image: typeof item?.image === 'string' ? item.image : '',
      title: typeof item?.title === 'string' ? item.title : 'Video Kajian Terbaru',
      meta: typeof item?.meta === 'string' ? item.meta : 'Raudhatul Jannah Official'
    }));
  } else {
    normalized.videos.items = cloneDefaultVideos();
  }

  if (safe.gallery && safe.gallery.items && Array.isArray(safe.gallery.items) && safe.gallery.items.length > 0) {
    normalized.gallery.items = safe.gallery.items.map((item) => ({
      caption: typeof item?.caption === 'string' ? item.caption : '',
      imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : ''
    }));
  } else if (safe.galleryItems && Array.isArray(safe.galleryItems) && safe.galleryItems.length > 0) {
    normalized.gallery.items = safe.galleryItems.map((item) => ({
      caption: typeof item?.caption === 'string' ? item.caption : '',
      imageUrl: typeof item?.imageUrl === 'string' ? item.imageUrl : ''
    }));
  } else {
    normalized.gallery.items = cloneDefaultGalleryItems();
  }

  if (safe.program && safe.program.items && Array.isArray(safe.program.items) && safe.program.items.length > 0) {
    normalized.program.items = safe.program.items.map((item) => ({
      icon: typeof item?.icon === 'string' ? item.icon : 'kajian-pagi',
      title: typeof item?.title === 'string' ? item.title : '',
      desc: typeof item?.desc === 'string' ? item.desc : '',
      tag: typeof item?.tag === 'string' ? item.tag : ''
    }));
  } else if (safe.programs && Array.isArray(safe.programs) && safe.programs.length > 0) {
    normalized.program.items = safe.programs.map((item) => ({
      icon: typeof item?.icon === 'string' ? item.icon : 'kajian-pagi',
      title: typeof item?.title === 'string' ? item.title : '',
      desc: typeof item?.desc === 'string' ? item.desc : '',
      tag: typeof item?.tag === 'string' ? item.tag : ''
    }));
  } else {
    normalized.program.items = cloneDefaultPrograms();
  }

  if (safe.schedule && safe.schedule.items && Array.isArray(safe.schedule.items) && safe.schedule.items.length > 0) {
    normalized.schedule.items = safe.schedule.items.map((item) => ({
      day: typeof item?.day === 'string' ? item.day : '',
      month: typeof item?.month === 'string' ? item.month : '',
      title: typeof item?.title === 'string' ? item.title : '',
      detail: typeof item?.detail === 'string' ? item.detail : '',
      time: typeof item?.time === 'string' ? item.time : ''
    }));
  } else if (safe.schedules && Array.isArray(safe.schedules) && safe.schedules.length > 0) {
    normalized.schedule.items = safe.schedules.map((item) => ({
      day: typeof item?.day === 'string' ? item.day : '',
      month: typeof item?.month === 'string' ? item.month : '',
      title: typeof item?.title === 'string' ? item.title : '',
      detail: typeof item?.detail === 'string' ? item.detail : '',
      time: typeof item?.time === 'string' ? item.time : ''
    }));
  } else {
    normalized.schedule.items = cloneDefaultSchedules();
  }

  if (safe.fasilitas && safe.fasilitas.items && Array.isArray(safe.fasilitas.items) && safe.fasilitas.items.length > 0) {
    normalized.fasilitas.items = safe.fasilitas.items.map((item) => ({
      icon: typeof item?.icon === 'string' ? item.icon : 'masjid',
      title: typeof item?.title === 'string' ? item.title : '',
      desc: typeof item?.desc === 'string' ? item.desc : ''
    }));
  } else {
    normalized.fasilitas.items = cloneDefaultFasilitas();
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

  state.videosItems.forEach((video, index) => {
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

    let resolvedImage = video.image;
    if (!resolvedImage.trim()) {
      const ytMatch = video.url.match(/(?:v=|\/vi\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (ytMatch) {
        resolvedImage = `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
        state.videosItems[index].image = resolvedImage;
      }
    }
    imageInput.value = resolvedImage;
    updateImagePreview(previewImage, resolvedImage);

    moveUpBtn.disabled = index === 0;
    moveDownBtn.disabled = index === state.videosItems.length - 1;

    urlInput.addEventListener('input', () => {
      state.videosItems[index].url = urlInput.value;
      const ytMatch = urlInput.value.match(/(?:v=|\/vi\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (ytMatch) {
        const thumb = `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
        state.videosItems[index].image = thumb;
        imageInput.value = thumb;
        updateImagePreview(previewImage, thumb);
      }
    });
    imageInput.addEventListener('input', () => {
      state.videosItems[index].image = imageInput.value;
      updateImagePreview(previewImage, imageInput.value);
    });
    titleInput.addEventListener('input', () => { state.videosItems[index].title = titleInput.value; });
    metaInput.addEventListener('input', () => { state.videosItems[index].meta = metaInput.value; });

    removeBtn.addEventListener('click', () => {
      state.videosItems.splice(index, 1);
      renderVideosRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.videosItems[index - 1], state.videosItems[index]] = [state.videosItems[index], state.videosItems[index - 1]];
      renderVideosRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.videosItems.length - 1) return;
      [state.videosItems[index + 1], state.videosItems[index]] = [state.videosItems[index], state.videosItems[index + 1]];
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

  state.scheduleItems.forEach((item, index) => {
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
    moveDownBtn.disabled = index === state.scheduleItems.length - 1;

    dayInput.addEventListener('input', () => { state.scheduleItems[index].day = dayInput.value; });
    monthInput.addEventListener('input', () => { state.scheduleItems[index].month = monthInput.value; });
    titleInput.addEventListener('input', () => { state.scheduleItems[index].title = titleInput.value; });
    detailInput.addEventListener('input', () => { state.scheduleItems[index].detail = detailInput.value; });
    timeInput.addEventListener('input', () => { state.scheduleItems[index].time = timeInput.value; });

    removeBtn.addEventListener('click', () => {
      state.scheduleItems.splice(index, 1);
      renderSchedulesRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.scheduleItems[index - 1], state.scheduleItems[index]] = [state.scheduleItems[index], state.scheduleItems[index - 1]];
      renderSchedulesRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.scheduleItems.length - 1) return;
      [state.scheduleItems[index + 1], state.scheduleItems[index]] = [state.scheduleItems[index], state.scheduleItems[index + 1]];
      renderSchedulesRepeater();
    });

    container.appendChild(node);
  });
}

function renderProgramsRepeater() {
  const container = document.getElementById('programsRepeater');
  if (!container) return;
  container.innerHTML = '';

  state.programItems.forEach((item, index) => {
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
    moveDownBtn.disabled = index === state.programItems.length - 1;

    iconSelect.addEventListener('change', () => { state.programItems[index].icon = iconSelect.value; });
    titleInput.addEventListener('input', () => { state.programItems[index].title = titleInput.value; });
    descInput.addEventListener('input', () => { state.programItems[index].desc = descInput.value; });
    tagInput.addEventListener('input', () => { state.programItems[index].tag = tagInput.value; });

    removeBtn.addEventListener('click', () => {
      state.programItems.splice(index, 1);
      renderProgramsRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.programItems[index - 1], state.programItems[index]] = [state.programItems[index], state.programItems[index - 1]];
      renderProgramsRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.programItems.length - 1) return;
      [state.programItems[index + 1], state.programItems[index]] = [state.programItems[index], state.programItems[index + 1]];
      renderProgramsRepeater();
    });

    container.appendChild(node);
  });
}

function renderFasilitasRepeater() {
  const container = document.getElementById('fasilitasRepeater');
  if (!container) return;
  container.innerHTML = '';

  state.fasilitasItems.forEach((item, index) => {
    const node = fasilitasItemTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector('[data-role="index"]').textContent = String(index + 1);

    const iconSelect = node.querySelector('[data-field="icon"]');
    const titleInput = node.querySelector('[data-field="title"]');
    const descInput = node.querySelector('[data-field="desc"]');
    const removeBtn = node.querySelector('[data-action="remove-fasilitas"]');
    const moveUpBtn = node.querySelector('[data-action="move-fasilitas-up"]');
    const moveDownBtn = node.querySelector('[data-action="move-fasilitas-down"]');

    iconSelect.value = item.icon;
    titleInput.value = item.title;
    descInput.value = item.desc;

    moveUpBtn.disabled = index === 0;
    moveDownBtn.disabled = index === state.fasilitasItems.length - 1;

    iconSelect.addEventListener('change', () => { state.fasilitasItems[index].icon = iconSelect.value; });
    titleInput.addEventListener('input', () => { state.fasilitasItems[index].title = titleInput.value; });
    descInput.addEventListener('input', () => { state.fasilitasItems[index].desc = descInput.value; });

    removeBtn.addEventListener('click', () => {
      state.fasilitasItems.splice(index, 1);
      renderFasilitasRepeater();
    });

    moveUpBtn.addEventListener('click', () => {
      if (index === 0) return;
      [state.fasilitasItems[index - 1], state.fasilitasItems[index]] = [state.fasilitasItems[index], state.fasilitasItems[index - 1]];
      renderFasilitasRepeater();
    });

    moveDownBtn.addEventListener('click', () => {
      if (index === state.fasilitasItems.length - 1) return;
      [state.fasilitasItems[index + 1], state.fasilitasItems[index]] = [state.fasilitasItems[index], state.fasilitasItems[index + 1]];
      renderFasilitasRepeater();
    });

    container.appendChild(node);
  });
}

function fillScalarInputs(values) {
  Object.keys(scalarKeys).forEach((section) => {
    const keys = scalarKeys[section];
    keys.forEach((key) => {
      const input = form.elements.namedItem(`${section}_${key}`);
      if (input && values[section] && typeof values[section] === 'object') {
        input.value = typeof values[section][key] === 'string' ? values[section][key] : (defaultContent[section]?.[key] || '');
      }
    });
  });

  if (values.about && values.about.stats && Array.isArray(values.about.stats)) {
    values.about.stats.forEach((stat, index) => {
      const numInput = form.elements.namedItem(`about_stat${index + 1}_number`);
      const lblInput = form.elements.namedItem(`about_stat${index + 1}_label`);
      if (numInput) numInput.value = stat.number || '';
      if (lblInput) lblInput.value = stat.label || '';
    });
  }
}

function collectScalarValues() {
  const values = {};
  
  Object.keys(scalarKeys).forEach((section) => {
    values[section] = {};
    const keys = scalarKeys[section];
    keys.forEach((key) => {
      const input = form.elements.namedItem(`${section}_${key}`);
      const formValue = input ? input.value : '';
      values[section][key] = formValue.trim() || (defaultContent[section]?.[key] || '');
    });
  });

  values.about = values.about || { stats: [] };
  values.about.stats = [];
  for (let i = 0; i < 3; i++) {
    const numInput = form.elements.namedItem(`about_stat${i + 1}_number`);
    const lblInput = form.elements.namedItem(`about_stat${i + 1}_label`);
    values.about.stats.push({
      number: numInput ? (numInput.value.trim() || defaultContent.about.stats[i].number) : defaultContent.about.stats[i].number,
      label: lblInput ? (lblInput.value.trim() || defaultContent.about.stats[i].label) : defaultContent.about.stats[i].label
    });
  }

  return values;
}

function getRequestPayload() {
  const scalars = collectScalarValues();
  return {
    ...scalars,
    videos: { ...scalars.videos, items: state.videosItems },
    gallery: { ...scalars.gallery, items: state.galleryItems },
    schedule: { ...scalars.schedule, items: state.scheduleItems },
    program: { ...scalars.program, items: state.programItems },
    fasilitas: { ...scalars.fasilitas, items: state.fasilitasItems }
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
  state.videosItems = normalized.videos?.items || cloneDefaultVideos();
  state.galleryItems = normalized.gallery?.items || cloneDefaultGalleryItems();
  state.scheduleItems = normalized.schedule?.items || cloneDefaultSchedules();
  state.programItems = normalized.program?.items || cloneDefaultPrograms();
  state.fasilitasItems = normalized.fasilitas?.items || cloneDefaultFasilitas();
  renderVideosRepeater();
  renderGalleryRepeater();
  renderSchedulesRepeater();
  renderProgramsRepeater();
  renderFasilitasRepeater();
  updateQrisPreview(normalized.donation?.qrisUrl);
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
  const resetContent = JSON.parse(JSON.stringify(defaultContent));

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
  state.videosItems.push({
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
    state.programItems.push({
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
    state.scheduleItems.push({
      day: '',
      month: '',
      title: '',
      detail: '',
      time: ''
    });
    renderSchedulesRepeater();
  });
}

if (addFasilitasBtn) {
  addFasilitasBtn.addEventListener('click', () => {
    state.fasilitasItems.push({
      icon: 'masjid',
      title: '',
      desc: ''
    });
    renderFasilitasRepeater();
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

const qrisDropzone = document.getElementById('qrisDropzone');
const qrisFileInput = document.getElementById('qrisFileInput');
const qrisProgress = document.getElementById('qrisProgress');
const qrisBar = document.getElementById('qrisBar');
const qrisPct = document.getElementById('qrisPct');
const qrisPreview = document.getElementById('qrisPreview');
const qrisUrlInput = document.querySelector('input[name="donation_qrisUrl"]');

function updateQrisPreview(url) {
  if (url && url.trim()) {
    qrisPreview.src = url;
    qrisPreview.style.display = 'block';
  } else {
    qrisPreview.style.display = 'none';
  }
}

async function runQrisUpload(file) {
  if (!file) return;
  qrisDropzone.classList.add('dragging');
  qrisProgress.hidden = false;
  qrisBar.style.width = '0%';
  qrisPct.textContent = '0%';
  showStatus('Mengupload gambar QRIS...');

  try {
    const imageUrl = await uploadImage(file, (pct) => {
      if (pct >= 0) {
        qrisBar.style.width = pct + '%';
        qrisPct.textContent = pct + '%';
      }
    });
    qrisBar.style.width = '100%';
    qrisPct.textContent = '100%';
    qrisUrlInput.value = imageUrl;
    updateQrisPreview(imageUrl);
    showStatus('Upload QRIS selesai.');
  } catch (error) {
    console.error(error);
    showStatus(`Upload gagal: ${error.message}`);
  } finally {
    qrisDropzone.classList.remove('dragging');
    setTimeout(() => { qrisProgress.hidden = true; }, 1500);
  }
}

if (qrisDropzone) {
  qrisDropzone.addEventListener('click', () => qrisFileInput.click());
  qrisDropzone.addEventListener('dragover', (e) => { e.preventDefault(); qrisDropzone.classList.add('dragging'); });
  qrisDropzone.addEventListener('dragleave', () => qrisDropzone.classList.remove('dragging'));
  qrisDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];
    void runQrisUpload(file);
  });
}

if (qrisFileInput) {
  qrisFileInput.addEventListener('change', () => {
    const file = qrisFileInput.files?.[0];
    void runQrisUpload(file);
    qrisFileInput.value = '';
  });
}

if (qrisUrlInput) {
  qrisUrlInput.addEventListener('input', () => updateQrisPreview(qrisUrlInput.value));
}

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
