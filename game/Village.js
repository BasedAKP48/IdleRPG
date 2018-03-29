/**
 * Represents the server.
 * Stores players. Manages events.
 */
class Village {
  constructor(uid, plugin) {
    this.id = uid;
    this.plugin = plugin;
    this.players = [];
    this.config = plugin.config().of(`village/${uid}`); // plugin.config() isn't real (yet)

    this.channel = 'output channel ID';
    this.settings = { // TODO: settings
      // setting: value,
    };
  }

  get online() {
    return this.players.filter(player => player.online);
  }

  tick(elapsed) {
    this.online.forEach((player) => {
      // TODO
    });
  }
}

module.exports = Village;
