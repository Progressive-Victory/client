/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClientEvents as DiscordClientEvents } from 'discord.js';
import { Mutable } from '../util';

/**
 * Event Class
 */
export class Event {
	// Name of the Event
	readonly name: keyof DiscordClientEvents;

	// Flag if the event should only run once
	readonly once: boolean;

	// Method to be run when the event occurs
	readonly execute: (...args: any[]) => Promise<void>;

	constructor(options: Partial<Event> = {}) {
		if (options.name) this.name = options.name;
		this.once = options.once || false;
		if (options.execute) this.execute = options.execute;
	}

	protected Mutable() {
		return this as Mutable<typeof this>;
	}

	/**
	 * Set the once flag
	 * @param input value to set
	 * @returns The modified object
	 */
	public setOnce(input: boolean) {
		(this as Mutable<Event>).once = input;
		return this;
	}

	/**
	 * Set the name of the event
	 * @param input value to set
	 * @returns The modified object
	 */
	public setName(input: keyof DiscordClientEvents) {
		this.Mutable().name = input;
		return this;
	}

	/**
	 * Set the execute method
	 * @param execute function passed in
	 * @returns The modified object
	 */
	public setExecute(execute: (...args: any[]) => Promise<void>) {
		this.Mutable().execute = execute;
		return this;
	}
}

export default Event;
