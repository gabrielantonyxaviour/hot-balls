require("@chainlink/env-enc").config();

const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 3;

const PRIVATE_KEY = process.env.TEST_PRIVATE_KEY;

const accounts = [];
if (PRIVATE_KEY) {
  accounts.push(PRIVATE_KEY);
}

const networks = {
  chilizSpicy: {
    url: "https://spicy-rpc.chiliz.com",
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: "VERIFY",
    chainId: 88882,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "CHZ",
    mailbox: "0x1EBa83975Bb26c3F13fb4ACEd748550A29F0BB1B",
    test: "0xd819d9457F0272e1DAccf52d2DEed44079aeF25A",
  },
  fhenixTestnet: {
    url: "https://api.helium.fhenix.zone",
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: "VERIFY",
    chainId: 8008135,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "tFHE",
    mailbox: "0x8723e1E9955BC0461a12ADD57DEa5Ab84B3aFdAc",
    test: "0xCfA62ac3Cc7E9eBA17Fab9Bc92df6AC648A18338",
  },
  arbitrumSepolia: {
    url:
      "https://arb-sepolia.g.alchemy.com/v2/" +
      process.env.ALCHEMY_API_KEY_BASE,
    gasPrice: undefined,
    nonce: undefined,
    accounts,
    verifyApiKey: process.env.ARBISCAN_API_KEY || "UNSET",
    chainId: 421614,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "ETH",
    mailbox: "0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8",
    test: "0x874F9914c3e5cA477cD858496a7078FAAAF92a8d",
  },
};

module.exports = {
  networks,
};
