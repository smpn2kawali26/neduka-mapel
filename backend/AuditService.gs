function appendAudit_(actorUserId, action, objectType, objectId, summary) {
  const id = PropertiesService.getScriptProperties().getProperty('DB_SPREADSHEET_ID');
  const sh = SpreadsheetApp.openById(id).getSheetByName('LOG_AKTIVITAS');
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sh.appendRow([Utilities.getUuid(),actorUserId,action,objectType,objectId,new Date(),summary]);
  } finally {
    lock.releaseLock();
  }
}
