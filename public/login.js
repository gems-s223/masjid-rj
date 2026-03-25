const API_ADMIN_SESSION_URL = '/api/admin/session';
const API_ADMIN_LOGIN_URL = '/api/admin/login';

const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginStatus = document.getElementById('loginStatus');
const passwordInput = document.getElementById('passwordInput');

function showLoginStatus(message) {
  loginStatus.textContent = message;
}

async function getAdminSession() {
  const response = await fetch(API_ADMIN_SESSION_URL, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

async function loginAdmin(password) {
  const response = await fetch(API_ADMIN_LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || `HTTP ${response.status}`);
  }
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const password = passwordInput.value;
  if (!password) {
    showLoginStatus('Masukkan password terlebih dahulu.');
    passwordInput.focus();
    return;
  }

  loginBtn.disabled = true;
  showLoginStatus('Memeriksa password...');

  try {
    await loginAdmin(password);
    window.location.href = '/admin.html';
  } catch (error) {
    showLoginStatus(error.message || 'Login gagal.');
    loginBtn.disabled = false;
  }
});

async function initializeLogin() {
  try {
    const session = await getAdminSession();

    if (!session.configured) {
      loginBtn.disabled = true;
      passwordInput.disabled = true;
      showLoginStatus('ADMIN_PASSWORD belum disetel di server.');
      return;
    }
  } catch (error) {
    console.warn('Failed checking admin session.', error);
    showLoginStatus('Tidak bisa terhubung ke server admin.');
  }

  passwordInput.focus();
}

initializeLogin();
