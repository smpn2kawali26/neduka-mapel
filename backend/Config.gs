const APP = Object.freeze({
  NAME: 'NEDUKA MAPEL',
  VERSION: '0.1.0-foundation',
  REQUIRED_SHEETS: {
    USERS: ['user_id','legacy_user_ref','display_name','role','status','created_at','updated_at'],
    MAPEL: ['mapel_id','nama_mapel','ikon','warna','status','urutan','created_at','updated_at'],
    GURU_MAPEL: ['assignment_id','user_id','mapel_id','kelas_id','tahun_ajaran_id','status'],
    KELAS: ['kelas_id','nama_kelas','tingkat','status'],
    TAHUN_AJARAN: ['tahun_ajaran_id','tahun_ajaran','semester','status'],
    PERANGKAT: ['perangkat_id','user_id','mapel_id','kelas_id','tahun_ajaran_id','kategori','judul','drive_file_id','created_at'],
    MATERI: ['materi_id','user_id','mapel_id','kelas_id','tahun_ajaran_id','judul','deskripsi','drive_file_id','status','created_at'],
    TUGAS: ['tugas_id','user_id','mapel_id','kelas_id','judul','instruksi','batas_waktu','status','created_at'],
    PENGUMPULAN: ['pengumpulan_id','tugas_id','siswa_ref','drive_file_id','waktu_kirim','status','nilai'],
    BANK_SOAL: ['soal_id','user_id','mapel_id','kelas_id','kategori','tipe','konten_json','created_at'],
    NILAI: ['nilai_id','user_id','mapel_id','kelas_id','siswa_ref','kategori','nilai','tanggal','tahun_ajaran_id'],
    JURNAL: ['jurnal_id','user_id','mapel_id','kelas_id','tanggal','jam_ke','materi','catatan','created_at'],
    MEDIA: ['media_id','owner_user_id','mapel_id','kelas_id','kategori','original_name','mime_type','drive_file_id','thumbnail_file_id','size_bytes','status','created_at'],
    LOG_AKTIVITAS: ['log_id','actor_user_id','aksi','objek','objek_id','waktu','ringkasan'],
    SETTING: ['key','value','updated_at']
  }
});
