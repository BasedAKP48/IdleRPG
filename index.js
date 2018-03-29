const utils = require('@basedakp48/plugin-utils');

const plugin = new utils.Plugin({ dir: __dirname, useBasicConfig: false });

// Register our presence
plugin.presenceSystem();
// Listen to incoming messages
plugin.messageSystem().on('message-in', (msg) => {
  if (msg.text.startsWith('!~')) { // TODO: Configurable prefix (by server)
    const command = msg.text.substring(2, msg.text.indexOf(' '));
    if (command === 'setup') {
      // TODO: Setup the "village" for this server
      // TODO: Get users and create players for them
    } else if (command === 'idle') {
      // TODO: Get game info
    } else if (command === 'me') {
      // TODO: Get player info
    }
  }

  // TODO: penalize players
});
