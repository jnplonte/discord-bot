import * as supertest from 'supertest';
import { expect } from 'chai';

import app from '../../../../app';

describe('encouragements component', () => {
	it('should get all encouragement', (done) => {
		supertest(app)
			.get('/v1/core/encouragements?test=true')
			.set('x-node-api-key', 'S3VRbXZueFhFalI3S1h3ZnVjZ2VyVGY2WXdaVjVBbXo1YXd3eGY1UEZna3BHcmIzSm4=')
			.expect('Content-Type', /json/)
			.expect(200, (err, res) => {
				if (err) {
					return done(err);
				}

				expect(res.body.status).to.equal('success');

				done();
			});
	});
});
