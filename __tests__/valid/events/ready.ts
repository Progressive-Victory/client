import { Events } from 'discord.js';
import { Client, Event } from '../../../src';

async function onReady(client: Client) {
	// Noop
}

export default new Event().setName(Events.ClientReady).setOnce(true).setExecute(onReady);
