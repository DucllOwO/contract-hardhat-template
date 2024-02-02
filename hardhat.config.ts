import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    base: {
      url: "https://base-goerli.public.blastapi.io",
      chainId: 84531,
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY]
    },
  }
};

export default config;
