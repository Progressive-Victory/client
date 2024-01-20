import Logger from '@progressive-victory/logger';

export {
	ChatInputCommand, ExtendedClient as Client,
	Command,
	ContextMenuCommand,
	Event,
	ExtendedContextMenuCommandBuilder,
	ExtendedSlashCommandBuilder,
	ExtendedSlashCommandSubcommandBuilder,
	ExtendedSlashCommandSubcommandGroupBuilder,
	Interaction
} from './Classes';

export { ExtraColor, TimeStyles, tsNodeRun } from './util';

export type { ChatInputCommandBuilders, ExtendedClientOptions as ClientOptions, LocalizedHelpInfo, ReturnableInteraction, TimeStyle, TypeCommand } from './util';

export const logger = new Logger();
