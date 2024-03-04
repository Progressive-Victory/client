import {
	describe, expect, it
} from '@jest/globals';
import { join } from 'path';

import { ExtendedClient as Client } from '../src/Classes/ExtendedClient';

describe('Client', () => {
	it('Should throw if logging in without token', async () => {
		const init = async () => {
			const client = new Client({ intents: [] });
			await client.login();
		};

		await expect(init()).rejects.toThrow();
	});

	it('Should throw if initialised with invalid strings for directories', async () => {
		const init = async () => {
			const client = new Client({ intents: [] });
			await client.init({
				commandPath: '',
				eventPath: ''
			});
		};

		await expect(init()).rejects.toThrow();
	});

	it('Should throw if initialised with wrong paths', async () => {
		const init = async () => {
			const client = new Client({ intents: [] });
			await client.init({
				commandPath: join(__dirname, 'empty', 'commands', 'invalid'),
				eventPath: join(__dirname, 'empty', 'events', 'invalid')
			});
		};

		await expect(init()).rejects.toThrow();
	});

	it('Should not throw if initialised with valid, but empty directories', async () => {
		const init = async () => {
			const client = new Client({ intents: [] });
			await client.init({
				commandPath: join(__dirname, 'empty', 'commands'),
				eventPath: join(__dirname, 'empty', 'events')
			});
		};

		await expect(init()).resolves.not.toThrow();
	});

	it('Should not throw if initialised with valid, but not empty directories', async () => {
		const init = async () => {
			const client = new Client({ intents: [] });
			await client.init({
				commandPath: join(__dirname, 'valid', 'commands'),
				eventPath: join(__dirname, 'valid', 'events')
			});
		};

		await expect(init()).resolves.not.toThrow();
	});

	it('Should throw if command builder doesn\'t come with an execute handler', async () => {
		const init = async () => {
			const client = new Client({ intents: [] });
			await client.init({
				commandPath: join(__dirname, 'invalid-command', 'commands', 'chat', 'builders'),
				eventPath: join(__dirname, 'invalid-command', 'events')
			});
		};

		await expect(init()).rejects.toThrow();
	});

	it('Should throw if event builder doesn\'t come with an execute handler', async () => {
		const init = async () => {
			const client = new Client({ intents: [] });
			await client.init({
				commandPath: join(__dirname, 'invalid-event', 'commands', 'chat', 'builders'),
				eventPath: join(__dirname, 'invalid-event', 'events')
			});
		};

		await expect(init()).rejects.toThrow();
	});
});
