import { ExtendedClient } from '../Classes/ExtendedClient';

declare module 'discord.js' {
	interface BaseInteraction {
		client: ExtendedClient;
	}

	interface Component {
		client: ExtendedClient;
	}

	interface Message {
		client: ExtendedClient;
	}

	interface BaseChannel {
		client: ExtendedClient;
	}

	interface Role {
		client: ExtendedClient;
	}

	interface Guild {
		client: ExtendedClient;
	}

	interface User {
		client: ExtendedClient;
	}

	interface GuildMember {
		client: ExtendedClient;
	}
}
