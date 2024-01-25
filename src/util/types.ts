import {
	ChatInputCommandInteraction,
	CommandInteraction,
	ContextMenuCommandInteraction,
	InteractionResponse,
	LocaleString,
	Message,
	SharedSlashCommandOptions
} from 'discord.js';
import {
	Command, ExtendedContextMenuCommandBuilder, ExtendedSlashCommandBuilder
} from '../Classes';

/**
 * Color values that can be referenced
 */
export declare const ExtraColor: {
	EmbedGray: 0x2b2d31;
	PVBlue: 0x2986cc;
	PVDarkBlue: 0x09223a;
	PVOrange: 0xe54c3c;
};

/**
 * Possible command return types
 */
export type ChatInputCommandBuilders =
	| ExtendedSlashCommandBuilder
	| Omit<ExtendedSlashCommandBuilder, Exclude<keyof SharedSlashCommandOptions, 'options'>>
	| Omit<ExtendedSlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;

/**
 * Possible interaction return types
 */
export type ReturnableInteraction = void | CommandInteraction | ContextMenuCommandInteraction | InteractionResponse<boolean> | Message<boolean>;

/**
 * TypeCommand definition
 */
export type TypeCommand = Command<ChatInputCommandBuilders | ExtendedContextMenuCommandBuilder, ChatInputCommandInteraction | ContextMenuCommandInteraction>;

/**
 * Discord time Style definition
 */
export type TimeStyle = 'd' | 'D' | 't' | 'T' | 'f' | 'F' | 'R';

/**
 * Discord TimeStyles
 */
export declare const TimeStyles: {
	ShortDate: 'd';
	LongDatez: 'D';
	ShortTime: 't';
	LongTime: 'T';
	ShortDateTime: 'f';
	LongDateTime: 'F';
	RelativeTime: 'R';
};

/**
 * LocalizationHelpInfo type
 */
export type LocalizedHelpInfo = Partial<Record<LocaleString, string>>;
