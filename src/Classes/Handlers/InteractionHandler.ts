import {
	AnySelectMenuInteraction, ButtonInteraction, Collection, ModalSubmitInteraction
} from 'discord.js';
import { ExtendedClient } from '../ExtendedClient';
import { Interaction } from '../Interaction';

export class InteractionHandler {
	protected readonly client: ExtendedClient;

	// Collection of Button Interactions
	protected _buttons = new Collection<string, Interaction<ButtonInteraction>>();

	// Collection of Select Menu Interactions
	protected _selectMenus = new Collection<string, Interaction<AnySelectMenuInteraction>>();

	// Collection of Modal Submit Interactions
	protected _modals = new Collection<string, Interaction<ModalSubmitInteraction>>();

	get buttons() {
		return this._buttons;
	}

	get selectMenus() {
		return this._selectMenus;
	}

	get modals() {
		return this._modals;
	}

	addButton(interaction: Interaction<ButtonInteraction>) {
		this._buttons.set(interaction.name, interaction);
		return this;
	}

	addButtons(collection: Collection<string, Interaction<ButtonInteraction>>) {
		this._buttons = this._buttons.concat(collection);
		return this;
	}

	runButton(interaction: ButtonInteraction) {
		const interactionName = this.client.splitCustomID ? interaction.customId.split(this.client.splitCustomIDOn)[0] : interaction.customId;
		return this._buttons.get(interactionName).execute(interaction);
	}

	addModal(interaction: Interaction<ModalSubmitInteraction>) {
		this._modals.set(interaction.name, interaction);
		return this;
	}

	addModals(collection: Collection<string, Interaction<ModalSubmitInteraction>>) {
		this._modals = this._modals.concat(collection);
		return this;
	}

	runModal(interaction: ModalSubmitInteraction) {
		const interactionName = this.client.splitCustomID ? interaction.customId.split(this.client.splitCustomIDOn)[0] : interaction.customId;
		return this._modals.get(interactionName).execute(interaction);
	}

	addSelectMenu(interaction: Interaction<AnySelectMenuInteraction>) {
		this._selectMenus.set(interaction.name, interaction);
		return this;
	}

	addSelectMenus(collection: Collection<string, Interaction<AnySelectMenuInteraction>>) {
		this._selectMenus = this._selectMenus.concat(collection);
		return this;
	}

	runSelectMenus(interaction: AnySelectMenuInteraction) {
		const interactionName = this.client.splitCustomID ? interaction.customId.split(this.client.splitCustomIDOn)[0] : interaction.customId;
		return this._selectMenus.get(interactionName).execute(interaction);
	}

	constructor(client: ExtendedClient) {
		this.client = client;
	}
}
