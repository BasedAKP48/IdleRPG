const Discord = require('eris').Client;

const discord = new Discord();

discord.on('ready', () => {
  // TODO: What do we need to do on connections?
});
discord.on('disconnect', () => {
  // TODO: What do we need to do on disconnects?
  // Pause the game? Allow it to run (and revalidate on ready)?
});
discord.on('guildCreate', (guild) => {
  // TODO: joined a new server
  // Initialize game!
  // Add all members (except bots) to game
});
discord.on('guildDelete', (guild) => {
  if (guild.unavailable) {
    // Guild is unavailable for some reason
    // TODO: What do we need to do in this case?
    // Pause the game? Allow it to run anyway?
  } else {
    // Left the server
  }
});
discord.on('guildMemberAdd', (guild, member) => {
  // Ignore bots
  if (member.bot) return;
  // add them to the game
});
discord.on('guildMemberRemove', (guild, member) => {
  // Ignore bots
  if (member.bot) return;
  // set offline
  // penalize
  // remove from memory
});
discord.on('guildMemberUpdate', (guild, member, old) => {
  // TODO: Don't think we need this, it doesn't say *who* changed the nick
});
discord.on('messageReactionAdd', (message, emoji, userID) => {
  // TODO: penalize for action
});
discord.on('messageReactionRemove', (message, emoji, userID) => {
  // TODO: penalize for action
});
discord.on('presenceUpdate', (member, presence) => {
  // Ignore bots
  if (member.bot) return;
  // TODO: Track offline status
  // Don't penalize for status changes
});
discord.on('typingStart', (channel, user) => {
  // Ignore bots
  if (user.bot) return;
  // TODO: A small penalty for being not idle? (maybe not)
});
discord.on('userUpdate', (user, oldUser) => {
  // Ignore bots
  if (user.bot) return;
  // TODO: Is this needed?
});
discord.on('voiceChannelJoin', (member, channel) => {
  // Ignore bots
  if (member.bot) return;
  // TODO: How dare you join voice
});
discord.on('voiceChannelLeave', (member, channel) => {
  // Ignore bots
  if (member.bot) return;
  // TODO: How dare you leave!?
});
discord.on('voiceChannelSwitch', (member, oldChannel, newChannel) => {
  // Ignore bots
  if (member.bot) return;
  // TODO: penalize? (admins can move you...)
});
discord.on('voiceStateUpdate', (member, oldState) => {
  // Ignore bots
  if (member.bot) return;
  // TODO: penalize
});
discord.on('messageCreate', (message) => {
  // Ignore bots
  if (message.author.bot) return;
  // If command... parse it
  // TODO: Penalize for creation
});
discord.on('messageUpdate', (message, oldMessage) => {
  // Ignore bots
  if (message.author.bot) return;
  // TODO: penalize for edit (less penalty than creation)
});
// "messageDelete" is a free action

module.exports = (token) => {
  if (discord.ready) {
    if (discord.token === token) {
      return Promise.resolve();
    }
    discord.disconnect();
  }
  discord.token = token;
  return discord.connect();
};
