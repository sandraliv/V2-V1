export function parseTeamsJson(data) {
  return JSON.parse(data);
}

/**
 * 
 * @param {string} data Tekur 'gameday' gögnin og hendir ólöglegum færslum, skilar á normalizeruðu formi
 * @returns {string[]} Gögn á flottara formi.
 */
export function parseGameday(data) {
  let parsed;
  try {
    parsed = JSON.parse(data);
  } catch (e) {
    console.error('invalid data', e)
    return null;
  }
  if (!parsed) {
    console.warn('parsed data is not an object');
    console.log(typeof parsed);
    return null;
  }
  if (!parsed.games) {
    console.warn('missing games array');
    return null;
  }
  return parsed;
}
