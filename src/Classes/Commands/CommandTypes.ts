import {
	ChatInputCommandInteraction,
	CommandInteraction,
	ContextMenuCommandBuilder,
	ContextMenuCommandInteraction, InteractionResponse, LocaleString, Message,
	SharedSlashCommandOptions,
	SlashCommandBuilder
} from 'discord.js';
import { Command } from './BaseComand';

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
export type ReturnableInteraction = void | CommandInteraction | ContextMenuCommandInteraction | InteractionResponse<boolean> | Message<boolean>;

/**
 * TypeCommand definition
 */
export type TypeCommand = Command<ChatInputCommandBuilders | ContextMenuCommandBuilder, ChatInputCommandInteraction | ContextMenuCommandInteraction>;

/**
 * LocalizationHelpInfo type
 */
export type LocalizedHelpInfo = Partial<Record<LocaleString, string>>;

export type helpInfo = { title: string; description: string };
