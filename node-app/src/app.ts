import * as express from 'express';
import * as discord from 'discord.js';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';

import { Helper } from './app/services/helper/helper.service';

import { baseConfig } from './config';

import { Messages } from './app/messages.component';

class App {
	public express;
	public client;
	public cache;
	public env = process.env.NODE_ENV || 'local';

	constructor() {
		this.express = express();
		this.client = new discord.Client();
		this.express.disable('x-powered-by');

		this.addConfig();
		this.initApp();
		this.setRoute();
		this.setNotFound();

		this.client.login(baseConfig.token);
	}

	private addConfig(): void {
		this.express.use(helmet());
		this.express.use(compression());
		this.express.use(cors());
	}

	private initApp(): void {
		this.client.on('ready', () => {
			console.log(`Logged in as ${this.client.user.tag}!`);

			const helper = new Helper(baseConfig);
			const messages = new Messages(this.client, helper);
			messages.onMessage();
		});
	}

	private setRoute(): void {
		this.express.all('/', (req, res) => {
			res.send('bot is running!');
		});
	}

	private setNotFound(): void {
		this.express.use((req, res) => {
			return res.status(404).json({
				status: 'failed',
				message: 'Page Not Found',
				executionTime: 0,
				data: '',
			});
		});
	}
}

export default new App().express;
