# @progressive-victory/client

## Usage

Install of @progressive-victory/client:

```sh
npm install @progressive-victory/client
yarn add @progressive-victory/client
```

Example index.ts for a bot:

```ts
import { init } from '@i18n';
import { Client } from 'discord-client';

export const client = new Client({
   receiveMessageComponents: true,
   receiveModals: true,
   receiveAutocomplete: true,
   replyOnError: true,
   splitCustomID: true,
   splitCustomIDOn: '_',
 useGuildCommands: false
});

(async function start() {
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
});
```

### How to use event objects

In a Dirctory path set in the `eventPath`
Example event for Discord client event `ready`

```ts
import { Events } from 'discord.js';
import {
    Client, Event 
} from 'discord-client';
export default new Event().setName(Events.ClientReady).setOnce(true).setExecute((client: Client) => {
    console.log(`Ready! Logged in as ${client.user.us}`);
    });
```
