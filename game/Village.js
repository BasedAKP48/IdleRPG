/**
 * Represents the server.
 * Stores players. Manages events.
 */
class Village {
  constructor(key, uid, plugin) {
    /** database identifier */
    this.id = key;
    /** plugin instance */
    this.plugin = plugin;
    /** player storage */
    this.players = []; // Should players always stay in memory? They probably shouldn't be.
    /** Config of this village */
    this.config = plugin.config().of(`villages/${key}`); // plugin.config() isn't real (yet)

    /** Server identifier */
    this.server = uid;
    /** Connector ID */
    this.origin = null;
    /** Output channel */
    this.channel = null;
    this.settings = { // TODO: settings
      // setting: value,
    };
  }

  get online() {
    return this.players.filter(player => player.online);
  }

  // use a scheduler system?
  tick(elapsed) {
    this.online.forEach((player) => {
      player.tick(elapsed);
    });
  }

  getPlayer(id) {
    return this.players.filter(player => player.owner === id)[0];
  }

  login(id) {
    this.config.get(`players/${id}`).then((val) => {
      // TODO
    });
  }

  create(id) {
    const ref = this.plugin.config.child('players').push();
    this.config.set(`players/${id}`, ref.key);
    // TODO
  }

  sendMessage(text, data) {
    if (!text && !data) return Promise.reject(new Error('One of text or data must be provided'));
    return this.plugin.messageSystem().sendMessage({
      target: this.origin,
      channel: this.channel,
      text: text || '',
      data: data || null,
    });
  }
}

module.exports = Village;
