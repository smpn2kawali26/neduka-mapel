function doGet(e) {
  const action = e && e.parameter ? String(e.parameter.action || '') : '';
  if (action === 'health') return json_({ok:true,app:APP.NAME,version:APP.VERSION,auth:'disabled'});
  return json_({ok:false,error:'ENDPOINT_NOT_FOUND'});
}
function doPost(e) {
  // Default-deny: tidak ada endpoint data sebelum autentikasi dan transport disahkan.
  return json_({ok:false,error:'AUTH_NOT_CONFIGURED',message:'Autentikasi belum dikonfigurasi.'});
}
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
