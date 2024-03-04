import {
	ChatInputCommandInteraction, ContextMenuCommandBuilder, ContextMenuCommandInteraction
} from 'discord.js';
import { ChatInputCommandBuilders, ReturnableInteraction } from './types';

/**
 * Slash command or context command
 */
export class Command<
	TypeBuilder extends ChatInputCommandBuilders | ContextMenuCommandBuilder,
	TypeInteraction extends ChatInputCommandInteraction | ContextMenuCommandInteraction
> {
	// The constructor for the registration for the command
	protected _builder: TypeBuilder;

	// State if the command is available in all servers
	protected _isGlobal: boolean = true;

	// Method that is run when command is executed
	protected _execute: (interaction: TypeInteraction) => Promise<ReturnableInteraction> | ReturnableInteraction;

	get isGlobal() {
		return this._isGlobal;
	}

	private set isGlobal(isGlobal: boolean) {
		this._isGlobal = isGlobal;
	}

	get builder() {
		return this._builder;
	}

	private set builder(builder: TypeBuilder) {
		this._builder = builder;
	}

	get execute() {
		return this._execute;
	}

	private set execute(execute: (interaction: TypeInteraction) => Promise<ReturnableInteraction> | ReturnableInteraction) {
		this._execute = execute;
	}

	/**
	 * Set the isGlobal Value
	 * @param isGlobal boolean value to be set
	 * @returns The modified object
	 */
	setGlobal(isGlobal: boolean): this {
		this.isGlobal = isGlobal;
		return this;
	}

	/**
	 * Set the execute method
	 * @param execute function passed in
	 * @returns The modified object
	 */
	setExecute(execute: (interaction: TypeInteraction) => Promise<ReturnableInteraction> | ReturnableInteraction): this {
		this.execute = execute;
		return this;
	}

	toJSON() {
		return this._builder.toJSON();
	}

	/**
	 *
	 * @param options
	 */
	constructor(options: Partial<Command<TypeBuilder, TypeInteraction>> = {}) {
		if (options.isGlobal) this.isGlobal = options.isGlobal;
		if (options.builder) this.builder = options.builder;
		if (options.execute) this.execute = options.execute;
	}
}
