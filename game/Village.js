/**
 * Represents the server.
 * Stores players. Manages events.
 */
class Village {
  constructor(plugin) {
    this.plugin = plugin;
    this.players = [];
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
