import { ChatInputCommandInteraction } from 'discord.js';

export default async function ping(interaction: ChatInputCommandInteraction) {
	return interaction.reply('Pong!');
}
