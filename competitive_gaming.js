function numPlayers(k, scores) {
  scores.sort((a, b) => b - a);

  const playersScoreAndRank = [];
  const numberOfPlayers = scores.length;

  for (let i = 0; i < numberOfPlayers; i++) {
    const score = scores[i];
    if (scores[i - 1] === scores[i]) {
      playersScoreAndRank[playersScoreAndRank.length] = {
        rank: playersScoreAndRank[playersScoreAndRank.length - 1].rank,
        score,
      };
    } else
      playersScoreAndRank[playersScoreAndRank.length] = {
        rank: i + 1,
        score,
      };
  }

  const numberOfLevelUpPlayers = playersScoreAndRank.filter(
    (playerScoreAndRank) =>
      playerScoreAndRank.score > 0 && playerScoreAndRank.rank <= k
  ).length;

  console.log({ numberOfLevelUpPlayers });
  return numberOfLevelUpPlayers;
}

// Testing the code
const test1 = [5, 10, 10, 20, 20, 20, 60, 80, 100];
const test2 = [5, 0, 0, 0, 0, 0, 20, 0, 100];
const test3 = [100, 50, 50, 23];

numPlayers(4, test2);
