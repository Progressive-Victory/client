import {
	ChatInputCommandInteraction,
	ContextMenuCommandBuilder,
	ContextMenuCommandInteraction,
	SharedSlashCommandOptions,
	SlashCommandBuilder
} from 'discord.js';
import { Command } from './BaseCommand';

/**
 * Possible command return types
 */
export type ChatInputCommandBuilders =
	| SlashCommandBuilder
	| Omit<SlashCommandBuilder, Exclude<keyof SharedSlashCommandOptions, 'options'>>
	| Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;

/**
 * Possible interaction return types
 */
export type ReturnableInteraction = void;

// Other type that should be here but cant do becuse of error look ing to
// | CommandInteraction | ContextMenuCommandInteraction | InteractionResponse<boolean> | Message<boolean>

/**
 * TypeCommand definition
 */
export type TypeCommand = Command<ChatInputCommandBuilders | ContextMenuCommandBuilder, ChatInputCommandInteraction | ContextMenuCommandInteraction>;
