import {
	AutocompleteInteraction,
	ChatInputCommandInteraction,
	SlashCommandBuilder
} from 'discord.js';
import { Command } from './BaseComand';
import { ChatInputHelper } from './ChatInputHelper';
import { ChatInputCommandBuilders } from './CommandTypes';

/**
 * Slash command
 */
export class ChatInputCommand extends Command<ChatInputCommandBuilders, ChatInputCommandInteraction> {


	private _helpInfo: ChatInputHelper;

	/**
	 * Runs when client receives and Autocomplete interaction
	 * @param interaction Autocomplete interaction received by the client
	 */
	protected _autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
	
	get helpInfo() {
		return this._helpInfo;
	}

	private set helpInfo(info: ChatInputHelper) {
		this._helpInfo = info;
	}

	get autocomplete() {
		return this._autocomplete;
	}

	private set autocomplete(autocomplete: (interaction: AutocompleteInteraction) => Promise<void>) {
		this._autocomplete = autocomplete;
	}

	/**
	 * Set the command builder method
	 * @param input Slah command builder or callback
	 * @returns The modified object
	 */
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

	setHelpInfo(input: ChatInputHelper | ((helpInfo: ChatInputHelper) => ChatInputHelper)) {
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
		if (options.helpInfo) this.helpInfo = options.helpInfo;
	}
}
