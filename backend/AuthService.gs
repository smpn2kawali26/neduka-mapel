/**
 * AUTH ADAPTER — sengaja belum diimplementasikan.
 * Jangan menerima user_id/role dari browser sebagai identitas.
 * Implementasi harus memverifikasi token yang diterbitkan backend tepercaya.
 * Jangan menyimpan password DIGITAL NEDUKA dalam spreadsheet atau Script Properties.
 */
function requireAuthenticatedUser_(token) {
  const mode = PropertiesService.getScriptProperties().getProperty('AUTH_MODE') || 'disabled';
  if (mode !== 'enabled') throw new Error('AUTH_NOT_CONFIGURED');
  if (!token) throw new Error('UNAUTHORIZED');
  // TODO: verifikasi signature, issuer, audience, expiry, nonce/replay, dan status pengguna.
  throw new Error('AUTH_ADAPTER_NOT_IMPLEMENTED');
}
