export class Messages {
	constructor(private client, private helper) {}

	onMessage() {
		this.client.on('message', (msg) => {
			if (msg.author.bot) return;

			if (msg.content === 'china') {
				msg.channel.send('is china numba wan');
			}
		});
	}
}
