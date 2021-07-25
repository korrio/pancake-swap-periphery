const PancakeRouter = artifacts.require("PancakeRouter");

module.exports = function (deployer) {

	const FACTORY_ADDRESS = '';
	const WETH_ADDRESS = '';

  deployer.deploy(PancakeRouter,FACTORY_ADDRESS,WETH_ADDRESS);
};
