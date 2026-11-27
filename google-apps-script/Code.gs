/* =====================================================
   SPECO INTERIORS
   CONTACT + CAREERS + SUBSCRIBE
   SINGLE GOOGLE SHEET SYSTEM
   GOOGLE DRIVE CV UPLOAD + EMAIL NOTIFICATIONS
===================================================== */

const EMAIL_TO = 'maria.wisemove@gmail.com';

const SPREADSHEET_PROPERTY = 'CONTACT_SPREADSHEET_ID';
const DRIVE_FOLDER_PROPERTY = 'CAREER_CV_FOLDER_ID';

const SUBMISSIONS_SHEET = 'Submissions';

const CV_MAX_SIZE = 5 * 1024 * 1024;

const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

/* =====================================================
   1. INITIAL SETUP
   RUN ONCE AFTER UPDATING THE CODE
===================================================== */

function setupContactSystem() {

  const properties = PropertiesService.getScriptProperties();

  let spreadsheet;

  const existingId = properties.getProperty(
    SPREADSHEET_PROPERTY
  );

  if (existingId) {

    spreadsheet = SpreadsheetApp.openById(existingId);

  } else {

    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    if (!spreadsheet) {
      throw new Error(
        'Open your Google Sheet and run setup from Extensions > Apps Script.'
      );
    }

    properties.setProperty(
      SPREADSHEET_PROPERTY,
      spreadsheet.getId()
    );

  }

  // CREATE SINGLE SUBMISSIONS SHEET

  let sheet = spreadsheet.getSheetByName(
    SUBMISSIONS_SHEET
  );

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SUBMISSIONS_SHEET);
  }

  // CREATE HEADERS

  if (sheet.getLastRow() === 0) {

    sheet.appendRow([
      'Submitted At',
      'Form Type',
      'Name',
      'Phone Number',
      'Email',
      'Project Location',
      'Type of Project',
      'Budget Range',
      'Tell Us About Your Project',
      'Age',
      'Designation',
      'Experience',
      'Qualification',
      'Location',
      'CV File Name',
      'CV Drive Link',
      'Page URL'
    ]);

    sheet.setFrozenRows(1);

  }

  // CREATE GOOGLE DRIVE CV FOLDER

  let folderId = properties.getProperty(
    DRIVE_FOLDER_PROPERTY
  );

  if (!folderId) {

    const folder = DriveApp.createFolder(
      'SPECO Career Applications - CVs'
    );

    folderId = folder.getId();

    properties.setProperty(
      DRIVE_FOLDER_PROPERTY,
      folderId
    );

  } else {

    DriveApp.getFolderById(folderId);

  }

  Logger.log(
    'Spreadsheet URL: ' + spreadsheet.getUrl()
  );

  Logger.log(
    'Submissions Sheet: ' + SUBMISSIONS_SHEET
  );

  Logger.log(
    'CV Folder URL: https://drive.google.com/drive/folders/' +
    folderId
  );

  Logger.log(
    'SPECO Contact, Careers and Subscribe setup completed.'
  );

}

/* =====================================================
   2. MAIN POST FUNCTION
===================================================== */

function doPost(e) {

  let lock;

  try {

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('No form data received.');
    }

    const data = JSON.parse(e.postData.contents);

    const allowedTypes = [
      'contact',
      'careers',
      'subscribe'
    ];

    if (!allowedTypes.includes(data.formType)) {
      throw new Error('Invalid form type.');
    }

    lock = LockService.getScriptLock();

    lock.waitLock(30000);

    const properties = PropertiesService.getScriptProperties();

    const spreadsheetId = properties.getProperty(
      SPREADSHEET_PROPERTY
    );

    if (!spreadsheetId) {
      throw new Error(
        'Run setupContactSystem() before submitting forms.'
      );
    }

    const spreadsheet = SpreadsheetApp.openById(
      spreadsheetId
    );

    const sheet = spreadsheet.getSheetByName(
      SUBMISSIONS_SHEET
    );

    if (!sheet) {
      throw new Error('Submissions sheet not found.');
    }

    const submittedAt = new Date();

    const pageUrl = cleanValue(data.pageUrl);

    const email = cleanValue(data.email);

    if (!email) {
      throw new Error('Email is required.');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Please provide a valid email address.');
    }

    // COMMON ROW STRUCTURE

    const row = [
      submittedAt,
      data.formType,
      '', // Name
      '', // Phone Number
      email,
      '', // Project Location
      '', // Type of Project
      '', // Budget Range
      '', // Project Description
      '', // Age
      '', // Designation
      '', // Experience
      '', // Qualification
      '', // Career Location
      '', // CV File Name
      '', // CV Drive Link
      pageUrl
    ];

    let emailSubject = '';
    let emailBody = '';

    /* ==============================================
       1. CONTACT FORM
    ============================================== */

    if (data.formType === 'contact') {

      const name = cleanValue(data.name);
      const phone = cleanValue(data.phoneNumber);

      const projectLocation = cleanValue(
        data.projectLocation
      );

      const projectType = cleanValue(
        data.projectType
      );

      const budgetRange = cleanValue(
        data.budgetRange
      );

      const message = cleanValue(data.message);

      if (
        !name ||
        !phone ||
        !projectLocation ||
        !projectType ||
        !budgetRange ||
        !message
      ) {
        throw new Error(
          'Please complete all required project enquiry fields.'
        );
      }

      // MAP CONTACT DETAILS TO COMMON ROW

      row[2] = name;
      row[3] = phone;
      row[5] = projectLocation;
      row[6] = projectType;
      row[7] = budgetRange;
      row[8] = message;

      emailSubject = 'New Project Enquiry - SPECO Interiors';

      emailBody =
        'You have received a new project enquiry.\n\n' +
        'Name: ' + name + '\n' +
        'Phone Number: ' + phone + '\n' +
        'Email: ' + email + '\n' +
        'Project Location: ' + projectLocation + '\n' +
        'Type of Project: ' + projectType + '\n' +
        'Budget Range: ' + budgetRange + '\n\n' +
        'Tell Us About Your Project:\n' +
        message + '\n\n' +
        'Submitted At: ' + submittedAt + '\n' +
        'Page URL: ' + pageUrl;

    }

    /* ==============================================
       2. CAREERS FORM
    ============================================== */

    if (data.formType === 'careers') {

      const name = cleanValue(data.name);
      const phone = cleanValue(data.phoneNumber);
      const age = cleanValue(data.age);

      const designation = cleanValue(data.designation);
      const experience = cleanValue(data.experience);
      const qualification = cleanValue(data.qualification);
      const location = cleanValue(data.location);

      if (
        !name ||
        !phone ||
        !age ||
        !designation ||
        !experience ||
        !qualification ||
        !location
      ) {
        throw new Error(
          'Please complete all required career fields.'
        );
      }

      // VALIDATE CV

      const cvBase64 = String(data.cvBase64 || '');
      const cvFileName = cleanValue(data.cvFileName);
      const cvMimeType = cleanValue(data.cvMimeType);

      if (!cvBase64 || !cvFileName) {
        throw new Error('CV file is missing.');
      }

      if (!ALLOWED_CV_TYPES.includes(cvMimeType)) {
        throw new Error(
          'Only PDF, DOC and DOCX files are allowed.'
        );
      }

      const decodedBytes = Utilities.base64Decode(
        cvBase64
      );

      if (decodedBytes.length > CV_MAX_SIZE) {
        throw new Error('CV must be 5 MB or smaller.');
      }

      // GET GOOGLE DRIVE FOLDER

      const folderId = properties.getProperty(
        DRIVE_FOLDER_PROPERTY
      );

      if (!folderId) {
        throw new Error(
          'CV upload folder is not configured.'
        );
      }

      const folder = DriveApp.getFolderById(folderId);

      const blob = Utilities.newBlob(
        decodedBytes,
        cvMimeType,
        cvFileName
      );

      const cvFile = folder.createFile(blob);

      const cvUrl = cvFile.getUrl();

      // MAP CAREER DETAILS TO COMMON ROW

      row[2] = name;
      row[3] = phone;
      row[9] = age;
      row[10] = designation;
      row[11] = experience;
      row[12] = qualification;
      row[13] = location;
      row[14] = cvFileName;
      row[15] = cvUrl;

      emailSubject = 'New Career Application - SPECO';

      emailBody =
        'You have received a new career application.\n\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone Number: ' + phone + '\n' +
        'Age: ' + age + '\n' +
        'Designation: ' + designation + '\n' +
        'Experience: ' + experience + '\n' +
        'Qualification: ' + qualification + '\n' +
        'Location: ' + location + '\n\n' +
        'CV File: ' + cvFileName + '\n' +
        'CV Google Drive Link: ' + cvUrl + '\n\n' +
        'Submitted At: ' + submittedAt + '\n' +
        'Page URL: ' + pageUrl;

    }

    /* ==============================================
       3. SUBSCRIBE FORM
    ============================================== */

    if (data.formType === 'subscribe') {

      emailSubject = 'New Newsletter Subscriber - SPECO Interiors';

      emailBody =
        'You have received a new newsletter subscription.\n\n' +
        'Email: ' + email + '\n\n' +
        'Submitted At: ' + submittedAt + '\n' +
        'Page URL: ' + pageUrl;

    }

    /* ==============================================
       SAVE ALL FORM TYPES TO SAME SHEET
    ============================================== */

    sheet.appendRow(row);

    /* ==============================================
       SEND EMAIL NOTIFICATION
    ============================================== */

    let emailSent = false;

    try {

      MailApp.sendEmail({
        to: EMAIL_TO,
        subject: emailSubject,
        body: emailBody
      });

      emailSent = true;

    } catch (emailError) {

      console.error(
        'Email sending failed: ' + emailError.message
      );

    }

    /* ==============================================
       SUCCESS RESPONSE
    ============================================== */

    return createResponse({
      ok: true,
      emailSent: emailSent,
      message: 'Form submitted successfully.'
    });

  } catch (error) {

    console.error(error.message);

    return createResponse({
      ok: false,
      error: error.message
    });

  } finally {

    if (lock && lock.hasLock()) {
      lock.releaseLock();
    }

  }

}

/* =====================================================
   3. CLEAN FORM VALUES
===================================================== */

function cleanValue(value) {

  return String(value || '')
    .trim()
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');

}

/* =====================================================
   4. JSON RESPONSE
===================================================== */

function createResponse(data) {

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);

}
