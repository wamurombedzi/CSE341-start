const maxwellRoute = (req, res) => {
  res.send('Max Well');
};

const murombedziRoute = (req, res) => {
  res.send('murombedzi');
};

const wadzaRoute = (req, res) => {
  res.send('wadza');
};

module.exports = {
  maxwellRoute,
  murombedziRoute,
  wadzaRoute,
};