import { Request, Response } from 'express';
import { CoreMiddleware } from '../../../middlewares/core/core.middleware';

export class Encouragements extends CoreMiddleware {
	constructor(app, private response, private helper) {
		super(app);
	}

	get services() {
		return {
			'GET /encouragements': 'all',
		};
	}

	/**
	 * @api {get} /core/encouragements get all encouragement
	 * @apiVersion 1.0.0
	 * @apiName all
	 * @apiGroup ENCOURAGEMENTS
	 * @apiPermission authenticated-user
	 *
	 * @apiDescription get all encouragement
	 *
	 */
	all(req: Request, res: Response): void {
		console.log(this.helper.env);
		return this.response.success(res, 'wip', '');
	}
}
