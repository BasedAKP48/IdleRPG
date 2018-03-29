class Player {
  constructor(key, village) {
    this.key = key;
    this.village = village;
    this.online = false;

    this.config = village.plugin.config().of(`players/${key}`);

    this.name = 'player name';
    this.level = 0;
    this.ttl = 0; // Seconds to level
    this.owner = 'userID';
    this.idled = 0; // Total time existed
    this.penalties = 0; // Total time extended
  }

  tick(time) {
    this.idled += time;
    this.adjust(time);
  }

  /**
   * @param {number} time
   * @returns {boolean} true if leveled
   */
  adjust(time) {
    this.ttl -= time;
    if (this.ttl > 0) return false;
    while (this.ttl <= 0) {
      this.level += 1;
      this.ttl += Math.floor(100 * this.level); // TODO: formula for leveling
    }
    return true;
  }
}

module.exports = Player;
