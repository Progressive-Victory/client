import { Events } from 'discord.js';
import { Event } from '../../../src';

async function onReady() {
	// Noop
}

export default new Event().setName(Events.ClientReady).setOnce(true).setExecute(onReady);
