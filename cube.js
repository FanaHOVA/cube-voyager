// Cube.js configuration options: https://cube.dev/docs/config
module.exports = {
};

const PostgresDriver = require('@cubejs-backend/postgres-driver');
{
	driverFactory: () => PostgresDriver({
		ssl: {
			rejectUnauthorized: false
		}
	})
}