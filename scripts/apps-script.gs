/**
 * Google Apps Script Webhook endpoint
 * 
 * Instructions:
 * 1. Go to script.google.com and create a new project.
 * 2. Paste this code into Code.gs.
 * 3. Replace SHEET_ID with your actual Google Sheet ID.
 * 4. Deploy > New Deployment > Web App.
 * 5. Set "Execute as" to "Me" and "Who has access" to "Anyone".
 * 6. Copy the resulting Web App URL and set it as GOOGLE_SHEETS_WEBHOOK_URL in Next.js env.
 */

/*
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";

function doPost(e) {
  try {
    if (!e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "No payload"})).setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Header row validation
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Source", "Name", "Email", "Phone", "Interest", "Message"]);
      sheet.getRange("A1:G1").setFontWeight("bold");
    }
    
    var row = [
      data.timestamp || new Date().toISOString(),
      data.source || "",
      data.name || "",
      data.email || "",
      data.phone || "",
      data.interest || "",
      data.message || ""
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
*/
