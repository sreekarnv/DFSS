// eslint-disable-next-line
const _Storage = artifacts.require('Storage');

module.exports = function (deployer) {
	deployer.deploy(_Storage);
};
