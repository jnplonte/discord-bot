import * as supertest from 'supertest';
import { expect } from 'chai';
import { baseConfig } from './config';

import app from './app';

describe('application start', () => {
	before((done) => {
		const env = process.env.NODE_ENV || 'local';

		app.listen(process.env.PORT || baseConfig.api[env].port, (error) => {
			if (error) {
				return done(error);
			}

			done();
		});
	});

	it('should show the bot page', (done) => {
		supertest(app)
			.get('/')
			.expect('Content-Type', /html/)
			.expect(200, function (err, res) {
				if (err) {
					return done(err);
				}

				done();
			});
	});

	it('should return not found', (done) => {
		supertest(app)
			.get('/abc')
			.expect('Content-Type', /json/)
			.expect(404, function (err, res) {
				if (err) {
					return done(err);
				}

				done();
			});
	});
});
