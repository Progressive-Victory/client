import {
	AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder
} from 'discord.js';
import { ChatInputHelper } from '../HelpInfo/ChatInputHelper';
import { Command } from './BaseCommand';
import { Command as ICommand } from './interfaces';
import { ChatInputCommandBuilders } from './types';

/**
 * Slash command
 */
export class ChatInputCommand extends Command<ChatInputCommandBuilders, ChatInputCommandInteraction> implements ICommand {
	// Help Info data structure
	private _helpInfo: ChatInputHelper;

	get helpInfo() {
		return this._helpInfo;
	}

	// Autocomplete function
	protected _autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;

	get autocomplete() {
		return this._autocomplete;
	}

	private set autocomplete(autocomplete: (interaction: AutocompleteInteraction) => Promise<void>) {
		this._autocomplete = autocomplete;
	}

	setBuilder(input: SlashCommandBuilder | ((subcommandBuilder: SlashCommandBuilder) => ChatInputCommandBuilders)): this {
		if (typeof input === 'function') {
			this._builder = input(new SlashCommandBuilder());
		}
		else {
			this._builder = input;
		}
		return this;
	}

	/**
	 * Set Autocomplete method
	 * @param autocomplete autocomplete function
	 * @returns The modified object
	 */
	setAutocomplete(autocomplete: (interaction: AutocompleteInteraction) => Promise<void>) {
		this._autocomplete = autocomplete;
		return this;
	}

	setHelpInfo(input: ChatInputHelper | ((helpInfo: ChatInputHelper) => ChatInputHelper)): this {
		if (typeof input === 'function') {
			this._helpInfo = input(new ChatInputHelper());
		}
		else {
			this._helpInfo = input;
		}
		return this;
	}

	constructor(options: Partial<ChatInputCommand> = {}) {
		super(options);
		if (options.autocomplete) this.autocomplete = options.autocomplete;
	}
}
