import { ChatInputCommand } from '../../../../../src';

export const ns = 'sme';

export default new ChatInputCommand()
	.setBuilder((builder) =>
		builder
			.setName('ping')
			.setDescription('Ping Pong Command')
	)
	.setGlobal(true);
