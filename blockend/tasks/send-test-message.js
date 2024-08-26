const { networks } = require("../networks");
const coreAbi = require("../build/artifacts/contracts/DropifyCore.sol/DropifyCore.json");
task("send-test-message", "Deploys the DropifyCore contract")
  .addParam("destination", "Set the destination chain name")
  .setAction(async (taskArgs) => {
    const { ethers, deployments } = hre;
    const [signer] = await ethers.getSigners();
    const core = new ethers.Contract(
      networks[network.name].test,
      coreAbi.abi,
      signer
    );
    const response = await core.sendTestMessage(
      "Gabriel!",
      networks[taskArgs.destination].chainId,
      {
        gasLimit: 30000000,
        value: ethers.utils.parseEther("0.00001"),
      }
    );
    const receipt = await response.wait();
    console.log(receipt);
  });
