function reiknaStig(stig, lid) {
  let scored = 0;
  for (const lids of lid) {
    if (lids.team === stig) {
      scored += lids.score;
    }
  }
  return scored;
}

export function calculateStandings(data, teams) {
  const calculatedScore = [];
  for (const { games } of data) {
    for (const { home, away } of games) {
      if (home.score > away.score) {
        calculatedScore.push({
          team: home.name,
          score: 3,
        });
      } else if (away.score > home.score) {
        calculatedScore.push({ team: away.name, score: 1 });
      } else {
        calculatedScore.push(
          {
            team: home.name,
            score: 1,
          },
          {
            team: away.name,
            score: 1,
          },
        );
      }
    }
  }

  const teamScore = [];
  for (const team in teams) {
    if (team) {
      teamScore.push({
        team: teams[team],
        score: reiknaStig(teams[team], calculatedScore),
      });
    }
  }

  teamScore.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  return teamScore;
}
