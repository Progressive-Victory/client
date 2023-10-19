import Logger from 'logger';

export { ExtendedClient as Client } from './Classes/ExtendedClient';

export type { ExtendedClientOptions as ClientOptions } from './util';

export {
	ChatInputCommand,
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

export type { LocalizedHelpInfo } from './util';

export type { TimeStyle } from './util';

export const logger = new Logger();
