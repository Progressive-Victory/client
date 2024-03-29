import { TimeStyle } from './types';

export { tsNodeRun } from './tsNodeRun';

export type { TimeStyle } from './types';

export { ExtraColor, TimeStyles } from './types';

export type { ExtendedClientOptions, HelpInfoProperties, initOptions } from './interfaces';

// Implementation of the Date Prototype additional function of toDiscordString
// eslint-disable-next-line func-names
Date.prototype.toDiscordString = function(this: Date, style?: TimeStyle) {
	// Round the Number of milliseconds to seconds
	const code = Math.floor(this.getTime() / 1000);

	// If a style is not present return formatted timestamp with out style
	// Note: This defaults to ShortDate/Time
	if (!style) return `<t:${code}>`;
	return `<t:${code}:${style}>`;
};

declare global {
	interface Date {
		/**
		 * Convert Date object to Discord Formatted sting
		 * @param format The Style that will be used on the time stamp
		 * @see https://discord.com/developers/docs/reference#message-formatting-timestamp-styles
		 */
		toDiscordString(style?: TimeStyle): string;
	}
}
