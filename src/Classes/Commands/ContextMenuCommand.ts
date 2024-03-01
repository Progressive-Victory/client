import { ContextMenuCommandBuilder, ContextMenuCommandInteraction } from 'discord.js';
import { BaseHelper } from '../HelpInfo/BaseHelper';
import { Command } from './BaseComand';
import { Command as ICommand } from './interfaces';

export class ContextMenuCommand extends Command<ContextMenuCommandBuilder, ContextMenuCommandInteraction> implements ICommand {

	private _helpInfo: BaseHelper;

	get helpInfo() {
		return this._helpInfo;
	}

	private set helpInfo(info: BaseHelper) {
		this._helpInfo = info;
	}

	/**
	 * Set the Context Menu command builder method
	 * @param input Context Menu command builder or callback
	 * @returns The modified object
	 */
	setBuilder(
		input: ContextMenuCommandBuilder | ((subcommandBuilder: ContextMenuCommandBuilder) => ContextMenuCommandBuilder)
	): this {
		if (typeof input === 'function') {
			this._builder = input(new ContextMenuCommandBuilder());
		}
		else {
			this._builder = input;
		}
		return this;
	}

	setHelpInfo(input: BaseHelper | ((helpInfo: BaseHelper) => BaseHelper)) {
		if (typeof input === 'function') {
			this._helpInfo = input(new BaseHelper());
		}
		else {
			this._helpInfo = input;
		}
		return this;
	}

}
