const PancakeRouter = artifacts.require("PancakeRouter");

module.exports = function (deployer) {

	const FACTORY_ADDRESS = '';
	const WETH_ADDRESS = '0xEA58428bc69Bbaf8A46EB01108eE62D085834aB9'; // Bitkub = KKUB / BSC Network = WBNB / ETH Network = WETH

  deployer.deploy(PancakeRouter,FACTORY_ADDRESS,WETH_ADDRESS);
};
