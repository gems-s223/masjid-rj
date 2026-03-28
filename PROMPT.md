# Website Project Prompt: Islamic Organization Profile with Admin Panel

## Project Overview

Create a complete website for an Islamic organization (mosque/masjid) that serves as both a public-facing profile site and a fully manageable content system. The website should be beautiful, professional, and easy to update without touching code.

**Key Principle:** Content editors should never need to edit HTML, CSS, or JavaScript files. All editable content is managed through an admin panel.

---

## 1. Project Structure

```
project/
├── public/                      # Static files served to browser
│   ├── index.html                # Main homepage
│   ├── login.html                # Admin login page
│   ├── admin.html                # Content management panel
│   ├── styles.css                # Main stylesheet
│   ├── admin.css                 # Admin panel styles
│   ├── script.js                 # Homepage JavaScript
│   ├── admin.js                  # Admin panel JavaScript
│   ├── login.js                 # Login functionality
│   ├── HELP.md                   # Admin user guide
│   └── assets/                   # Images, fonts, etc.
├── src/
│   └── server.js                # Node.js server (local dev)
├── api/                         # API handlers (for Vercel/serverless)
│   ├── content.js               # Content CRUD
│   ├── upload-image.js          # Image upload
│   └── admin/                   # Auth endpoints
│       ├── login.js
│       ├── logout.js
│       └── session.js
├── lib/                        # Shared libraries
│   └── auth.js                 # Authentication utilities
├── data/                       # Content storage (local)
│   └── content.json
├── media/                      # Uploaded images
├── server.js                   # Entry point
├── package.json
├── vercel.json                 # Vercel routing
└── .env.example
```

---

## 2. Homepage Requirements

### 2.1 Sections to Include

Create a comprehensive homepage with these sections:

1. **Navigation (Navbar)**
   - Fixed position at top
   - Logo and organization name
   - Links to each section
   - Mobile hamburger menu
   - CTA button (e.g., "Hubungi Kami")

2. **Hero Section**
   - Full-screen or large banner
   - Organization logo/photo
   - Main title (supports HTML for emphasis)
   - Subtitle/tagline
   - Call-to-action buttons
   - LIVE badge indicator (toggles when streaming)

3. **About Section (Tentang Kami)**
   - Section label and heading
   - 2-3 paragraphs of description (supports HTML)
   - Statistics cards (e.g., "5+ Tahun Berdiri", "20+ Program/Tahun")

4. **Programs Section (Program Kami)**
   - Section label and heading
   - Grid of program cards (6 items)
   - Each card: icon, title, description, tag/time
   - Icons should be thematic (Islamic/programs)

5. **Schedule Section (Jadwal Kajian)**
   - Section label and heading
   - List of upcoming events/schedules
   - Each item: date (day/month), title, details, time
   - Supports multiple items

6. **Live Streaming Section**
   - Section label and heading
   - Description text
   - Badges for YouTube and Facebook
   - Embedded player or link

7. **Videos Section (Video Kegiatan)**
   - Section label and heading
   - Link to full YouTube channel
   - Grid of video thumbnails
   - YouTube video embeds

8. **Gallery Section (Galeri)**
   - Section label and heading
   - Magazine-style photo grid
   - Support for both uploaded images and image URLs
   - Lightbox or click-to-expand

9. **Facilities Section (Fasilitas)**
   - Section label and heading
   - Grid of facility cards
   - Each card: icon, title, description

10. **Contact Section (Hubungi Kami)**
    - Section label and heading
    - Physical address
    - Embedded Google Maps
    - Social links: WhatsApp, Phone, Instagram, Facebook, YouTube
    - Each with icon and clickable link

11. **Donation Section (Donasi)**
    - Section label and heading
    - Description
    - Bank information (name, account number, holder name)
    - WhatsApp confirmation button

12. **Footer**
    - Organization name and location
    - Inspirational Quranic verse
    - Copyright text
    - Navigation links

### 2.2 Design Requirements

**Color Palette:**
- Warm, professional Islamic aesthetic
- Primary: Rich browns (#150800 to #8B4513 range)
- Accent: Gold (#C8A96E, #DEC18A)
- Background: Cream tones (#FAE8D4, #FDF5EE)
- Text: Dark brown on light, cream on dark

**Typography:**
- Headings: Cormorant Garamond (elegant serif)
- Body: Plus Jakarta Sans (modern sans-serif)
- Arabic text: Amiri

**Features:**
- Responsive design (mobile-first)
- Smooth scroll navigation
- Scroll reveal animations (IntersectionObserver)
- Islamic geometric tile patterns as decorative elements
- Consistent spacing and visual rhythm

---

## 3. Admin Panel Requirements

### 3.1 Access Control

- Login page at `/login.html`
- Password-only authentication (no username)
- Session-based auth with cookies
- Session expires after 12 hours
- Rate limiting: 5 attempts per 10 minutes, 15-minute lockout

### 3.2 Admin Interface

**Tab Navigation** with these sections:
- Hero, About, Program, Schedule, Streaming, Videos, Gallery, Fasilitas, Contact, Donation, Footer

**Form Features:**
- Text inputs, textareas
- Checkbox for LIVE toggle
- Repeater fields for arrays (videos, gallery items, programs, etc.)
- Drag-and-drop image upload with progress bar
- Auto-generate thumbnail from YouTube URL

**Actions:**
- Save Changes (POST to API)
- Reset to Default
- Logout

### 3.3 Content Fields

**Hero:**
- Title (textarea, supports HTML)
- Subtitle
- Tagline (supports HTML)
- LIVE checkbox

**About:**
- Label, Heading, 3 paragraphs
- 3 statistic pairs (number + label)

**Program:**
- Label, Heading
- Repeater: icon (dropdown), title, description, tag

**Schedule:**
- Label, Heading
- Repeater: day, month, title, detail (HTML), time

**Streaming:**
- Label, Heading, Description

**Videos:**
- Label, Heading, Channel URL
- Repeater: video URL, thumbnail URL, title, meta

**Gallery:**
- Label, Heading
- Repeater: caption, image URL OR drag-drop upload

**Fasilitas:**
- Label, Heading
- Repeater: icon (dropdown), title, description

**Contact:**
- Section label and title
- Location label and address
- Google Maps link and embed link
- WhatsApp label, link, phone link, phone text
- Instagram label, link, display text
- Facebook label, link, display text
- YouTube label, link, display text

**Donation:**
- Label, Title, Description
- Bank name, account label, account number, holder name
- WhatsApp confirmation link and button text

**Footer:**
- Brand name, brand location
- Quranic verse (supports HTML)
- Copyright text

---

## 4. Backend Requirements

### 4.1 Local Development Server (Node.js)

Pure Node.js HTTP server (no framework) with:

**Static File Serving:**
- Serve from `public/` directory
- MIME type mapping
- Cache control headers
- Path traversal prevention

**API Endpoints:**
```
GET  /api/admin/session     - Check auth status
POST /api/admin/login       - Login with password
POST /api/admin/logout      - Logout
GET  /api/content           - Get all content
POST /api/content           - Save content (auth required)
POST /api/upload-image      - Upload image (auth required)
```

**Authentication:**
- HMAC-signed session tokens
- HttpOnly, SameSite cookies
- 12-hour session TTL
- Rate limiting per IP

**Content Storage:**
- JSON file at `data/content.json`
- Input sanitization
- Atomic writes

**Image Upload:**
- Accept base64 data
- Generate unique filenames
- Support JPG, PNG, WEBP, GIF
- Store in `media/` directory

### 4.2 Serverless API (for Vercel)

Same API endpoints but adapted for Vercel/serverless:
- Use Supabase for data persistence
- Image uploads to Supabase Storage

---

## 5. Content Data Structure

```json
{
  "content": {
    "hero": {
      "title": "Masjid<br><em>Raudhatul</em> Jannah",
      "sub": "Taman Surga di Bumi Karanganyar",
      "tagline": "Rumah Ibadah <span>·</span> Pusat Ilmu <span>·</span> Cahaya Umat"
    },
    "about": {
      "label": "Tentang Kami",
      "heading": "Lebih dari<br>Sekadar Masjid",
      "p1": "Description paragraph 1...",
      "p2": "Description paragraph 2...",
      "p3": "Description paragraph 3...",
      "stats": [
        { "number": "5+", "label": "Tahun Berdiri" },
        { "number": "20+", "label": "Program/Tahun" },
        { "number": "2K+", "label": "Jama'ah" }
      ]
    },
    "program": {
      "label": "Program Kami",
      "heading": "Kegiatan & Program Unggulan",
      "items": [
        { "icon": "kajian-pagi", "title": "Kajian Pagi", "desc": "...", "tag": "Ahad · 10:00 WIB" }
      ]
    },
    "schedule": {
      "label": "Agenda",
      "heading": "Jadwal Kajian Mendatang",
      "items": [
        { "day": "23", "month": "Mar", "title": "Kajian Ahad Pagi", "detail": "...", "time": "10:00 WIB" }
      ]
    },
    "streaming": {
      "label": "Live Streaming",
      "heading": "Saksikan Kajian<br>Secara Langsung",
      "desc": "Description..."
    },
    "videos": {
      "label": "Video Terbaru",
      "heading": "Video Kegiatan & Kajian di YouTube",
      "channelUrl": "https://youtube.com/@channel",
      "items": [
        { "url": "https://youtube.com/watch?v=...", "image": "...", "title": "...", "meta": "..." }
      ]
    },
    "gallery": {
      "label": "Galeri",
      "heading": "Momen & Kegiatan Masjid",
      "items": [
        { "caption": "...", "imageUrl": "..." }
      ]
    },
    "fasilitas": {
      "label": "Fasilitas",
      "heading": "Fasilitas & Layanan",
      "items": [
        { "icon": "parkir", "title": "Area Parkir", "desc": "..." }
      ]
    },
    "contact": {
      "sectionLabel": "Hubungi Kami",
      "sectionTitle": "Temukan Kami<br>di Sini",
      "locationLabel": "Lokasi",
      "address": "Address...",
      "mapsUrl": "https://maps.google.com/...",
      "mapEmbedUrl": "https://maps.google.com/maps/...?output=embed",
      "whatsappLabel": "Telepon / WhatsApp",
      "whatsappUrl": "https://wa.me/...",
      "phoneHref": "tel:...",
      "phoneText": "0858-xxxx-xxxx",
      "instagramUrl": "https://instagram.com/...",
      "instagramText": "@username",
      "facebookUrl": "https://facebook.com/...",
      "facebookText": "Page Name",
      "youtubeUrl": "https://youtube.com/...",
      "youtubeText": "Channel Name"
    },
    "donation": {
      "label": "Donasi & Infaq",
      "title": "Dukung Kemakmuran<br>Masjid...",
      "desc": "...",
      "bankName": "Bank Name",
      "bankLabel": "Nomor Rekening",
      "bankNumber": "XXXX-XXXX-XXXX",
      "bankOwner": "a.n. Organization Name",
      "whatsappUrl": "https://wa.me/...",
      "whatsappText": "Konfirmasi via WhatsApp"
    },
    "footer": {
      "brandName": "Organization Name",
      "brandLocation": "Location",
      "ayat": "Verse text - <cite>QS. Surah: Ayat</cite>",
      "copy": "© 2026 Organization Name. Hak cipta dilindungi."
    }
  },
  "isLive": false
}
```

---

## 6. Environment Variables

```
PORT=3000
HOST=0.0.0.0
ADMIN_PASSWORD=your-secure-password-here
JWT_SECRET=random-secret-for-hmac-signing
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 7. Key Implementation Details

### 7.1 Dynamic Content Loading

On homepage load:
1. Fetch `/api/content`
2. Apply content to DOM elements using `data-content-key` attributes
3. Render dynamic sections (videos, gallery, schedules, programs, facilities)
4. Fallback to localStorage if API fails
5. Apply LIVE badge state

### 7.2 YouTube Integration

- Extract video ID from various YouTube URL formats
- Generate thumbnail URL: `https://img.youtube.com/vi/{id}/hqdefault.jpg`
- Support both watch URLs and short URLs

### 7.3 Image Upload Flow

1. User drags/drops or selects file
2. Convert to base64
3. POST to `/api/upload-image`
4. Server validates, saves to media folder
5. Return URL, populate form field
6. User saves content

### 7.4 Icon System

SVG icons defined in JavaScript as path strings:
```javascript
const ICONS = {
  'kajian-pagi': '<svg>...</svg>',
  'streaming': '<svg>...</svg>',
  // etc.
};
```

---

## 8. Security Considerations

- Input sanitization on all user content
- Path traversal prevention
- XSS prevention (escape HTML in user content)
- Rate limiting on login attempts
- HttpOnly cookies (no JS access)
- SameSite cookie attribute
- No sensitive data in client-side code

---

## 9. Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

---

## 10. Animations

- Scroll reveal: fade-in + slide-up, 400ms ease-out
- Hover transitions: 200ms ease
- LIVE badge: pulse animation
- Gallery: smooth lightbox transitions

---

## 11. Deployment

### Local Development
```bash
npm install
cp .env.example .env
# Edit .env with password
npm start
# Visit http://localhost:3000
```

### Vercel Deployment
- Push to GitHub
- Import to Vercel
- Set environment variables
- Deploy

---

## 12. Files to Create

### Required Files
1. `public/index.html` - Homepage
2. `public/login.html` - Login page
3. `public/admin.html` - Admin panel
4. `public/styles.css` - Main styles
5. `public/admin.css` - Admin styles
6. `public/script.js` - Homepage JS
7. `public/admin.js` - Admin panel JS
8. `public/login.js` - Login JS
9. `public/HELP.md` - Admin guide
10. `src/server.js` - Node.js server
11. `server.js` - Entry point
12. `api/content.js` - Content API
13. `api/upload-image.js` - Upload API
14. `api/admin/login.js` - Login handler
15. `api/admin/logout.js` - Logout handler
16. `api/admin/session.js` - Session check
17. `lib/auth.js` - Auth utilities
18. `lib/supabase.js` - Supabase client
19. `data/content.json` - Default content
20. `package.json` - Dependencies
21. `vercel.json` - Vercel config
22. `.env.example` - Environment template

---

## 13. Content Language

All content should be in **Bahasa Indonesia** as this is for an Indonesian audience. Use appropriate Islamic terminology and respectful language.
