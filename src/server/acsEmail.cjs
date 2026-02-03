const { EmailClient } = require('@azure/communication-email');

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value || String(value).trim().length === 0) {
    throw new Error(`${name} is required`);
  }
  return value;
}

function getRequiredEmailEnv(name) {
  const value = getRequiredEnv(name);
  // Basic sanity check: ACS expects a fully qualified sender email address.
  // This prevents confusing downstream errors like InvalidSenderUserName when someone sets just "noreply".
  if (!/^\S+@\S+\.\S+$/.test(String(value).trim())) {
    throw new Error(`${name} must be a valid email address (e.g. noreply@your-verified-domain.com)`);
  }
  return value;
}

function createEmailClient() {
  const connectionString = getRequiredEnv('ACS_CONNECTION_STRING');
  return new EmailClient(connectionString);
}

function buildDemoRequestEmailContent(data) {
  const subject = `Demo request - ${data.companyName}`;

  const lines = [
    'A new demo request was submitted:',
    '',
    `Company Name: ${data.companyName}`,
    `Full Name: ${data.fullName}`,
    `Work Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Employees: ${data.employeeCount}`,
    `Message: ${data.message || ''}`,
  ];

  const plainText = lines.join('\n');

  // Simple HTML version for readability
  const html = `
    <h2>New demo request</h2>
    <ul>
      <li><strong>Company Name:</strong> ${escapeHtml(data.companyName)}</li>
      <li><strong>Full Name:</strong> ${escapeHtml(data.fullName)}</li>
      <li><strong>Work Email:</strong> ${escapeHtml(data.email)}</li>
      <li><strong>Phone:</strong> ${escapeHtml(data.phone)}</li>
      <li><strong>Employees:</strong> ${escapeHtml(data.employeeCount)}</li>
      <li><strong>Message:</strong> ${escapeHtml(data.message || '')}</li>
    </ul>
  `;

  return { subject, plainText, html };
}

function escapeHtml(input) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendDemoRequestEmail(data) {
  const senderAddress = getRequiredEmailEnv('ACS_SENDER_EMAIL');
  const salesEmail = getRequiredEmailEnv('SALES_EMAIL');

  const client = createEmailClient();
  const { subject, plainText, html } = buildDemoRequestEmailContent(data);

  const message = {
    senderAddress,
    recipients: {
      to: [{ address: salesEmail }],
    },
    content: {
      subject,
      plainText,
      html,
    },
    replyTo: [{ address: data.email, displayName: data.fullName }],
  };

  const poller = await client.beginSend(message);
  const result = await poller.pollUntilDone();
  return result;
}

module.exports = {
  sendDemoRequestEmail,
};
