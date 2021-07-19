import { Helper } from '../app/services/helper/helper.service';
import { ApiResponse } from '../app/services/api-response/api-response.service';

import { Encouragements } from '../app/v1/core/encouragements/encouragements.component';

export function setup(app, config) {
	const response = new ApiResponse(),
		helper = new Helper(config);

	app.version('v1/core', (appCore) => {
		appCore.use((req, res, next) => {
			res.startTime = new Date().getTime();
			if (
				typeof req.headers === 'undefined' ||
				helper.isEmpty(req.headers[config.secretKey]) ||
				Buffer.from(req.headers[config.secretKey], 'base64').toString('ascii') !== config.secretKeyHash
			) {
				return response.failed(res, 'token', '', 401);
			}

			next();
		});

		new Encouragements(appCore, response, helper);
	});

	return app;
}
