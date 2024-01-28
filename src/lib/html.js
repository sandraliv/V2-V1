export function indexTemplate(title, buttons) {
  const index = `
      <h1>Collab-deildin</h1>
      <h2>Nánari upplýsingar</h2>
      <ul>
      ${buttons
        .filter((buttons) => buttons?.title?.length > 0)
        .map(
          (buttons) =>
            `<li><a href="${buttons.html}">${buttons.title}</a></li>\n`,
        )
        .join('')}
      </ul>
      `;
  return template(title, index);
}

export function stadaTemplate(team, data) {
  const standingsHtml = data.toString();
  const index = `
  <h1>Collab-deildin</h1>
  <section>
      <h2>Staðan í deildinni</h2>
      ${standingsHtml};
      </section>
      <p><a href="./index.html">Til baka</a></p>
      `;
  return template(team, index);
}
export function leikirTemplate(team, data) {
  const index = `
  <h1>Collab deildin</h1>
  <section>
      <h2>Staða síðustu leikja</h2>
      ${extractGames(data).join('')}
      </section>
      
      ${console.log(extractGames(data))}
      <section></section>
    
      <p><a href="./index.html">Til baka</a></p>
      `;
  return template(team, index);
}

function extractGames(data) {
  return data
    .filter((item) => item && item.games && item.date) // Filter out null values and items without dates
    .map((item) => new GameDay(item.date, item.games)); // Extract and format dates
}

function GameDay(date, games) {
  return `
  <h1>Dagsetning${date}</h1>
  <div>${games.map((item) => new leikjaTemplate(item))}</div>
      `;
}

export function leikjaTemplate(item) {
  console.log(item.home.name);
  return `
  <p>${item.home.name}</p>
  <p>${item.away.name}</p>
      `;
}

export function template(title, content) {
  return `<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <link rel="stylesheet" href="./public/styles.css">
    <script type="module" src="./public/scripts.js"></script>
  </head>
  <body>${content}</body>
</html>`;
}
