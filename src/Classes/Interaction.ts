import { Interaction as DiscordInteraction, PermissionFlags } from 'discord.js';
import { Mutable } from '../util';

/**
 * Interaction object
 */
export class Interaction<E extends DiscordInteraction> {
	// Name of Interaction
	readonly name: string;

	// premitions needed to use interaction
	readonly permission?: PermissionFlags;

	// Method that to run when interaction happens
	readonly execute: (interaction: E) => Promise<void>;

	/**
	 *
	 * @param options
	 * @returns
	 */
	constructor(options: Partial<Interaction<E>> = {}) {
		if (options.name) this.name = options.name;
		if (options.execute) this.execute = options.execute;
	}

	protected Mutable() {
		return this as Mutable<typeof this>;
	}

	/**
	 * Set the name of the interaction
	 * @param name Name of interaction
	 * @returns The modified object
	 */
	public setName(name: string) {
		this.Mutable().name = name;
		return this;
	}

	/**
	 * Set the execute method
	 * @param execute function passed in
	 * @returns The modified object
	 */
	public setExecute(execute: (interaction: E) => Promise<void>) {
		this.Mutable().execute = execute;
		return this;
	}
}
