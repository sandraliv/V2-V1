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

export function indexTemplate(title, buttons) {
  if (buttons) {
    const index = `
      <h1>Collab-deildin</h1>
      <h2>Nánari upplýsingar</h2>
      <ul>
      ${buttons
        .map(
          (button) => `<li><a href="${button.html}">${button.title}</a></li>\n`,
        )
        .join('')}
      </ul>
      `;
    return template(title, index);
  }
  return template(title, {});
}

export function stadaTemplate(team, data) {
  const standingsHtml = data
    .map(
      (teams, index) =>
        ` <div class='stada-lids'<li>${index + 1}<section>${teams.team}</section><section>Stig: ${teams.score}<section></li></div>`,
    )
    .join('');
  const index = `
  <h1>Collab-deildin</h1>
  <section class='lid-container'>
      <h2>Staðan í deildinni</h2>
      ${standingsHtml};
      </section>
      <p><a href="./index.html">Til baka</a></p>
      `;
  const inde = index.replace(';', '');
  return template(team, inde);
}

export function leikirTemplate(team, data) {
  const gamesHtml = data
    .map(
      (gameday) => `
      <div class="childs">
        <h3 class="leikir">${new Date(gameday.date).toLocaleDateString('en-GB')}</h2>
        <ul>
          ${gameday.games
            .map(
              (g) =>
                ` <li>${g.home.name} ${g.home.score} — ${g.away.score} ${g.away.name}</li>`,
            )
            .join('')}
        </ul>
      </div>
    `,
    )
    .join('');

  const index = `
    <div class="contains">
    <h1>Collab deildin</h1>
    <div>
      <h2>Staða síðustu leikja</h2>
      <div class ="container">
      ${gamesHtml}
      </div>
    </div>
 
 
      <p><a href="./index.html">Til baka</a></p>
      </div>
      `;
  return template(team, index);
}
