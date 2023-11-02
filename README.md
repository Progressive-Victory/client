# @progressive-victory/client

`@progressive-victory/client` is a general use Discord bot client that extends [discord.js](https://github.com/discordjs/discord.js)

## Usage

Install of @progressive-victory/client:

```sh
npm install @progressive-victory/client
yarn add @progressive-victory/client
```

The client has a builting interation handler. and does not need the `interactionCreate` event to be added. The Client Does **NOT** support refix commands

## Files setup

Example index.ts for a bot:

```ts
import { init } from '@i18n';
import { Client } from '@progressive-victory/client';

export const client = new Client({
    receiveMessageComponents: true,
    receiveModals: true,
    receiveAutocomplete: true,
    replyOnError: true,
    splitCustomID: true,
    splitCustomIDOn: '_',
    useGuildCommands: false
});

async function start() {
    await client.init({
        eventPath: './events',
        buttonPath: './interactions/buttons',
        selectMenuPath: './interactions/select_menus',
        modalPath: './interactions/modals',
        commandPath: './commands/chat/builders',
        contextMenuPath: './commands/context_menu'
    });

    await client.login(process.env.TOKEN);

    await client.deploy();
};
start();
```

### How to use event objects

In a Dirctory path set in the `eventPath`
Example event for Discord client event `ready`

```ts
import { Events } from 'discord.js';
import { Event, logger } from '@progressive-victory/client';

export default new Event().setName(Events.ClientReady).setOnce(true).setExecute((client) => {
    logger.info(`Ready! Logged in as ${client.user.username}`);
    });
```

### How to create command object

Command objects are a genaric and can be used for any object the following is the example of a button interaction. Button interactions should be placed in the Dirctory path set in the `commandPath` or `contextMenuPath`

```ts
import { ChatInputCommand } from '@progressive-victory/client';

export default new ChatInputCommand()
    .setBuilder(commandBuilder)
    .setGlobal(true)
    .setAutocomplete(autoCompletedFunction);
    .setExecute(executeFunction)
```

### How to create interaction object

Interaction objects are a genaric and can be used for any object the following is the example of a button interaction. Button interactions should be placed in the Dirctory path set in the `buttonPath`

```ts
import { ButtonInteraction } from 'discord.js';
import { Interaction } from '@progressive-victory/client';

export default new Interaction<ButtonInteraction>()
    .setName(buttonCustomId)
    .setExecute(async (interaction) => {
        logger.info('button has been pressed');
    });
```
