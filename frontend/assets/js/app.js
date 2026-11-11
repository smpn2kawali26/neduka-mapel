const apiInput = document.getElementById('apiUrl');
const apiStatus = document.getElementById('apiStatus');
document.getElementById('checkApi').addEventListener('click', async () => {
  const url = apiInput.value.trim();
  if (!url) { apiStatus.textContent = 'Masukkan URL Web App Apps Script terlebih dahulu.'; return; }
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec(?:\?.*)?$/.test(url)) {
    apiStatus.textContent = 'Format URL tidak dikenali. Gunakan URL Web App Apps Script /exec.';
    return;
  }
  apiStatus.textContent = 'Menguji endpoint health...';
  try {
    // Endpoint health hanya untuk pemeriksaan layanan; belum membuktikan autentikasi.
    const response = await fetch(url + (url.includes('?') ? '&' : '?') + 'action=health', {method:'GET', redirect:'follow'});
    const data = await response.json();
    apiStatus.textContent = data && data.ok ? 'Backend merespons. Autentikasi tetap belum aktif.' : 'Backend merespons, tetapi status health tidak sesuai.';
  } catch (err) {
    apiStatus.textContent = 'Belum dapat membaca respons. Periksa deployment, izin Web App, redirect, dan kebijakan komunikasi lintas domain.';
  }
});
