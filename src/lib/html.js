export function indexTemplate(team) {
  const index = `
      <h1>Kennsluskrá</h1>
      <h2>Deildir</h2>
      <ul>
        ${departments
          .filter((team) => team?.courses?.length > 0)
          .map((team) => `<li><a href="${team.html}">${team.title}</a></li>\n`)
          .join('')}
      </ul>`;
  return template('Kennsluskrá', index);
}
