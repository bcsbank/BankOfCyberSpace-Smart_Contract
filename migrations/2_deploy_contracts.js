var NAiToken = artifacts.require("./BCSToken.sol");

module.exports = function(deployer) {
    return deployer.deploy(NAiToken);
};
