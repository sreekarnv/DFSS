require('ts-node').register({ files: true });

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 7545,
			network_id: '*',
		},
	},
	contracts_directory: './contracts/',
	contracts_build_directory: './contracts/build/',
	compilers: {
		solc: {
			version: '0.8.10',
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
