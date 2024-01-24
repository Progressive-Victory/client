import { ChatInputCommand } from '../../../../../src';
import handler from '../execution/ping';

export const ns = 'sme';

export default new ChatInputCommand()
	.setBuilder((builder) =>
		builder
			.setName('ping')
			.setDescription('Ping Pong Command')
	)
	.setGlobal(true)
	.setExecute(handler);
