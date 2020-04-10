require('dotenv').config();
const packageJson = require('../package.json');

const Configuration = {
  botToken: process.env.BOT_TOKEN,
  production: process.env.PRODUCTION,
  dblToken: process.env.DBL_TOKEN,
  imgurClientId: process.env.IMGUR_CLIENT_ID,
  osuToken: process.env.OSU_TOKEN,

  prefix: process.env.PREFIX || '.',
  devs: {
      mmcarparkin: '1',
  },
  devIds: [], // IDE Autocomplete Placeholder for Generated Property
  useNewHelp: process.env.USE_NEW_HELP || 'true',
  embedColor: process.env.EMBED_COLOR || '0x1355A4',
  botVersion: packageJson.version,
  logChannel: process.env.LOG_CHANNEL || '671300233388621834',
  disconnectChannel: process.env.DISCONNECT_CHANNEL || '6',
  bugChannel: process.env.BUG_CHANNEL || '1'
};

// Generated Properties
Configuration.devIds = Object.values(Configuration.devs);

module.exports = Configuration;
