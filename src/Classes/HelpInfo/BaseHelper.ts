import {
	EmojiResolvable, Locale, LocaleString
} from 'discord.js';
import { LocalizedHelpInfo, helpInfo } from './types';

export class BaseHelper {
	private _name: string;

	private _title: string;

	private _description: string;

	private _emoji?: EmojiResolvable;

	/**
	 * Titles for help Embed
	 */
	private _titleLocalizations: LocalizedHelpInfo = {};

	/**
	 * Descriptions for help Embed
	 */
	private _descriptionLocalizations: LocalizedHelpInfo = {};

	get name() {
		return this._name;
	}

	private set name(input: string) {
		this._name = input;
	}

	get title() {
		return this._title;
	}

	private set title(title: string) {
		this._title = title;
	}

	get description() {
		return this._description;
	}

	private set description(description: string) {
		this._description = description;
	}

	get emoji() {
		return this._emoji;
	}

	private set emoji(input: EmojiResolvable) {
		this._emoji = input;
	}

	get titleLocalizations() {
		return this._titleLocalizations;
	}

	private set titleLocalizations(helpTitles: LocalizedHelpInfo) {
		this._titleLocalizations = helpTitles;
	}

	get descriptionLocalizations() {
		return this._descriptionLocalizations;
	}

	private set descriptionLocalizations(helpDescriptions: LocalizedHelpInfo) {
		this._descriptionLocalizations = helpDescriptions;
	}

	setName(name: string) {
		this.name = name;
		return this;
	}

	setTitle(title: string) {
		this.title = title;
		return this;
	}

	setDescription(description: string) {
		this.description = description;
		return this;
	}

	setEmoji(emoji: EmojiResolvable) {
		this.emoji = emoji;
		return this;
	}

	setTitleLocalization(locale: LocaleString, localizedName: string): this {
		this.titleLocalizations[locale] = localizedName;
		return this;
	}

	setDescriptionLocalization(locale: LocaleString, localizedDescription: string): this {
		this.titleLocalizations[locale] = localizedDescription;
		return this;
	}

	setDescriptionLocalizations(localizedTitle: LocalizedHelpInfo) {
		Object.assign(this.descriptionLocalizations, localizedTitle);
		return this;
	}

	setTitleLocalizations(localizedTitle: LocalizedHelpInfo) {
		Object.assign(this.titleLocalizations, localizedTitle);
		return this;
	}

	getInfo(locale: Locale): helpInfo {
		const obj: helpInfo = {
			title: this.titleLocalizations[locale],
			description: this.descriptionLocalizations[locale]
		};

		if (!obj.title) obj.title = this._title;
		if (!obj.description) obj.description = this._description;

		return obj;
	}
}
