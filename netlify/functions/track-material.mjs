/**
 * Optional audit log for material interactions.
 * Set in india-2030.html: const MATERIAL_TRACK_WEBHOOK = '/.netlify/functions/track-material';
 * View in Netlify → Functions → Logs. Forward to HubSpot/Airtable/Sheets from here if needed.
 */
export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    console.log('[track-material]', JSON.stringify(body));
  } catch {
    console.log('[track-material] invalid JSON', event.body);
  }

  return {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: ''
  };
};
