import { Events } from 'discord.js';
import { Event } from '../../../src';

export default new Event().setName(Events.ClientReady).setOnce(true);
