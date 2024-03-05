import {
	ChatInputCommandInteraction, ContextMenuCommandBuilder, ContextMenuCommandInteraction, SlashCommandBuilder
} from 'discord.js';
import { BaseHelper } from '../HelpInfo/BaseHelper';
import { ChatInputHelper } from '../HelpInfo/ChatInputHelper';
import { ChatInputCommandBuilders } from './types';

export interface Command {
	isGlobal: boolean;

	builder: ChatInputCommandBuilders | ContextMenuCommandBuilder;

	execute: (interaction: ChatInputCommandInteraction | ContextMenuCommandInteraction) => Promise<void>;

	helpInfo: BaseHelper | ChatInputHelper;

	/**
	 * Set the isGlobal Value
	 * @param isGlobal boolean vaule to be set
	 * @returns The modified object
	 */
	setGlobal(isGlobal: boolean): this;

	/**
	 * Set the command builder method
	 * @param input The command Builder or a callback function
	 * @returns The modified object
	 */
	setBuilder(
		input:
			| SlashCommandBuilder
			| ContextMenuCommandBuilder
			| ((subcommandBuilder: SlashCommandBuilder) => ChatInputCommandBuilders)
			| ((subcommandBuilder: ContextMenuCommandBuilder) => ContextMenuCommandBuilder)
	): this;

	setExecute(
		execute: (interaction: ChatInputCommandInteraction | ContextMenuCommandInteraction) => Promise<void>
	): this;
	/**
	 * Set Help Info
	 * @param input help info object
	 * @returns The updated object
	 */
	setHelpInfo(input: ChatInputHelper | BaseHelper | ((helpInfo: ChatInputHelper) => ChatInputHelper) | ((helpInfo: BaseHelper) => BaseHelper)): this;
}
