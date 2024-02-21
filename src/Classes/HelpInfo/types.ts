import { LocaleString } from 'discord.js';

/**
 * LocalizationHelpInfo type
 */
export type LocalizedHelpInfo = Partial<Record<LocaleString, string>>;

export type helpInfo = { title: string; description: string };
