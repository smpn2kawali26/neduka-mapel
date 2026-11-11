/**
 * Media disimpan privat di folder Drive khusus.
 * File ID bukan mekanisme otorisasi. Setiap operasi baca/unduh wajib melewati
 * pemeriksaan kepemilikan dan role di backend sebelum file disajikan.
 * Upload besar/video perlu desain chunk/resumable terpisah; jangan base64-kan
 * video besar ke satu request Apps Script.
 */
function getMediaRootFolder_() {
  const id = PropertiesService.getScriptProperties().getProperty('MEDIA_ROOT_FOLDER_ID');
  if (!id) throw new Error('MEDIA_ROOT_FOLDER_ID belum dikonfigurasi.');
  return DriveApp.getFolderById(id);
}
