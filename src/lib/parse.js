export function parseTeamsJson(data) {
  return JSON.parse(data);
}

export function isValidGame(game, b) {
  if (game.length === 0) {
    return false;
  }
  if (
    b.includes(game.home.name) &&
    b.includes(game.away.name) &&
    game.away.score >= 0 &&
    game.away.score <= 100 &&
    game.home.score >= 0 &&
    game.away.score <= 100 &&
    typeof game.home.score === 'number' &&
    typeof game.away.score === 'number'
  ) {
    return true;
  }
  return false;
}

export function parseGames(filtered, leikir) {
  const filteredData = filtered.map((item) => {
    // Filter the games array within each object
    const validGames = item.games.filter((game) => isValidGame(game, leikir));

    // Return a new object with only the valid games
    return { ...item, games: validGames };
  });

  return filteredData;
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
    console.error('invalid data', e);
    return null;
  }
  if (!parsed) {
    console.warn('parsed data is not an object');
    return null;
  }
  if (!parsed.games) {
    console.warn('missing games array');
    return null;
  }
  return parsed;
}
