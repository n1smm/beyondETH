import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTokenCenter: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // const layerOneToken = await hre.ethers.getContractFactory("LayerOneToken");
  // const layerOneToken = await hre.deployments.get("LayerOneToken");
  // const layerOneTokenAddress = layerOneToken.address;
  // const layerOneToken = await hre.ethers.getContract<Contract>("layerOneToken", deployer);
  // const layerOneTokenAddress = await layerOneToken.getAddress();

  const tokenCenter = await deploy("TokenCenter", {
    from: deployer,
    // Contract constructor arguments
    args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  console.log(`TokenCenter deployed at: ${tokenCenter.address}`);

  // Get the deployed contract to interact with it after deploying.
  // const tokenCenterInstance = await hre.ethers.getContract<Contract>("TokenCenter", deployer);
};

export default deployTokenCenter;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTokenCenter.tags = ["tokenCenter"];
