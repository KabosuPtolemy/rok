require("dotenv").config()

// https://chainid.network/chains.json
export const supportedChains = [
  // Ethereum
  {
    name: "Ethereum Mainnet",
    chain: "ETH",
    rpcUrls: [
      "https://mainnet.infura.io/v3/" + process.env.ETHEREUM_API_KEY,
      "wss://mainnet.infura.io/ws/v3/" + +process.env.ETHEREUM_API_KEY,
      "https://api.mycryptoapi.com/eth",
      "https://cloudflare-eth.com",
    ],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://ethereum.org",
    img: "chain_images/ethereum.png",
    shortName: "eth",
    chainId: 1,
    explorers: [
      {
        name: "etherscan",
        url: "https://etherscan.io",
        standard: "EIP3091",
      },
    ],
  },
  // Sepolia
  {
    name: "Sepolia",
    chain: "ETH",
    rpcUrls: ["https://rpc.sepolia.org", "https://rpc-sepolia.rockx.com"],
    nativeCurrency: {
      name: "Sepolia Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://sepolia.etherscan.io",
    img: "../chain_images/rokToken.png",
    shortName: "sep",
    chainId: 11155111,
    explorers: [
      {
        name: "etherscan-sepolia",
        url: "https://sepolia.etherscan.io",
        standard: "EIP3091",
      },
      {
        name: "otterscan-sepolia",
        url: "https://sepolia.otterscan.io",
        standard: "EIP3091",
      },
    ],
  },
]
