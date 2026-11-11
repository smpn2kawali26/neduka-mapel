# NEDUKA MAPEL — Starter Foundation

Aplikasi mandiri yang diakses dari PORTAL DIGITAL NEDUKA.

## Komponen
- `frontend/`: GitHub Pages (HTML/CSS/JavaScript)
- `backend/`: Google Apps Script (API dan layanan)
- Database: Google Sheets baru
- Storage: Google Drive baru

## Status keamanan
Starter ini **belum mengaktifkan login produksi**. `AuthService.gs` memakai mode deny-by-default sampai adapter autentikasi resmi dikonfigurasi. Jangan memasukkan password portal lama ke frontend atau menyimpan password dalam Sheets.

## Langkah pemasangan
1. Buat repository GitHub baru, misalnya `neduka-mapel`.
2. Upload isi folder `frontend/` ke repository dan aktifkan GitHub Pages.
3. Buat Google Spreadsheet baru `DB_NEDUKA_MAPEL`.
4. Buat folder Drive baru `NEDUKA_MAPEL_STORAGE`.
5. Buat project Apps Script standalone baru. Salin semua file dalam `backend/`.
6. Jalankan `setupDatabase()` sebagai pemilik project untuk membuat sheet dan header.
7. Isi Script Properties:
   - `DB_SPREADSHEET_ID`
   - `MEDIA_ROOT_FOLDER_ID`
   - `APP_ENV` = `development`
   - `AUTH_MODE` = `disabled` (default; jangan ubah sebelum integrasi autentikasi diuji)
8. Deploy Apps Script sebagai Web App hanya setelah konfigurasi autentikasi dan transport API selesai diuji.

## Catatan integrasi
Menu di portal lama cukup diarahkan ke URL GitHub Pages NEDUKA MAPEL. Pada tahap awal, gunakan tab baru. Tidak perlu mengubah backend atau database portal lama.

SSO memerlukan mekanisme token yang ditandatangani/diterbitkan backend terpercaya. Jangan mengirim password, token permanen, atau secret ke URL query string. Jangan menerima `userId` dari browser sebagai bukti identitas.
