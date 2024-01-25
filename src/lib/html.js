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
      ${extractDates(data).map(date => `<div><section>${date}<section></div>`).join('')}
      </section>
      <p><a href="./index.html">Til baka</a></p>
      `;
  return template(team, index);
}

function extractDates(data) {
  return data
    .filter(item => item && item.date) // Filter out null values and items without dates
    .map(item => new Date(item.date).toLocaleDateString()); // Extract and format dates
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
