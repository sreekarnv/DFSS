const DStorage = artifacts.require('Storage');

module.exports = function (deployer) {
	deployer.deploy(DStorage);
} as Truffle.Migration;
