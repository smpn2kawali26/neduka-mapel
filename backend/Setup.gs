function setupDatabase() {
  const id = PropertiesService.getScriptProperties().getProperty('DB_SPREADSHEET_ID');
  if (!id) throw new Error('Script Property DB_SPREADSHEET_ID belum diisi.');
  const ss = SpreadsheetApp.openById(id);
  Object.keys(APP.REQUIRED_SHEETS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    const headers = APP.REQUIRED_SHEETS[name];
    if (sh.getLastRow() === 0) sh.getRange(1,1,1,headers.length).setValues([headers]);
    sh.setFrozenRows(1);
  });
  seedInitialSubjects_(ss);
  return {ok:true, message:'Struktur database NEDUKA MAPEL berhasil disiapkan.'};
}
function seedInitialSubjects_(ss) {
  const sh = ss.getSheetByName('MAPEL');
  if (sh.getLastRow() > 1) return;
  const names = ['Pendidikan Agama','Pendidikan Pancasila','Bahasa Indonesia','Matematika','IPA','IPS','Bahasa Inggris','PJOK','Informatika','Seni Budaya','Bahasa Sunda'];
  const rows = names.map((name,i) => ['MP'+String(i+1).padStart(3,'0'),name,'book-open','#2476C9','AKTIF',i+1,new Date(),new Date()]);
  sh.getRange(2,1,rows.length,rows[0].length).setValues(rows);
}
