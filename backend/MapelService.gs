function listActiveMapel_() {
  const id = PropertiesService.getScriptProperties().getProperty('DB_SPREADSHEET_ID');
  const sh = SpreadsheetApp.openById(id).getSheetByName('MAPEL');
  if (sh.getLastRow() < 2) return [];
  const values = sh.getRange(2,1,sh.getLastRow()-1,APP.REQUIRED_SHEETS.MAPEL.length).getValues();
  return values.filter(r => String(r[4]) === 'AKTIF').map(r => ({
    mapel_id:String(r[0]), nama_mapel:String(r[1]), ikon:String(r[2]), warna:String(r[3]), urutan:Number(r[5])
  })).sort((a,b)=>a.urutan-b.urutan);
}
