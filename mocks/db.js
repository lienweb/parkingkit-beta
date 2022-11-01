const availability = require('./availability.json');
const info = require('./info.json');

module.exports = () => ({
  availability: availability,
  info: info,
});