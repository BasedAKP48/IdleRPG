const utils = require('@basedakp48/plugin-utils');

const plugin = new utils.Plugin({ dir: __dirname, useBasicConfig: false });

// Register our presence
plugin.presenceSystem();
// Listen to incoming messages
plugin.messageSystem().on('message-in', (msg) => {
  if (msg.data && msg.data.isPM) {
    // Handle PM's differently than prefixed commands
    // We'll penalize ALL the users players for PM's I think.
  } else if (msg.text.startsWith('!~')) { // TODO: Configurable prefix (by server)
    const end = msg.text.indexOf(' ');
    const command = msg.text.substring(2, end !== -1 ? end : undefined);
    if (command === 'setup') {
      // TODO: Setup the "village" for this server
      // TODO: Get users and create players for them
    } else if (command === 'idle') {
      // TODO: Get game info
    } else if (command === 'me') {
      // TODO: Get player info
    }
  }

  // TODO: penalize players for activities
});
