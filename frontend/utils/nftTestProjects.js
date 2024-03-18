import { Timestamp } from "firebase/firestore"
import {
  floorPrice_Listing_01,
  address_Listing_01,
  abi_Listing_01,
} from "../components/launchpad/test/constants_Listing_01"

import {
  floorPrice_Listing_02,
  address_Listing_02,
  abi_Listing_02,
} from "../components/launchpad/test/constants_Listing_02"

import {
  floorPrice_Listing_03,
  address_Listing_03,
  abi_Listing_03,
} from "../components/launchpad/test/constants_Listing_03"

import {
  floorPrice_Listing_04,
  address_Listing_04,
  abi_Listing_04,
} from "../components/launchpad/test/constants_Listing_04"

export const nftProjects = [
  // {
  //   projectTitle: "Phunk APE Origins",
  //   imageSrcList: [
  //     "/Listing_01/photo-l1-1.png",
  //     "/Listing_01/photo-l1-2.png",
  //     "/Listing_01/photo-l1-3.png",
  //   ],
  //   projectDescription:
  //     "In true Phunk phashion, this project is for the community. Phunk Ape Origins pays homage to the CryptoPhunk culture as well as to the Great Apes.",
  //   marketing: {
  //     fp: { amount: 0.01, currency: "ETH" },
  //     goal: 500,
  //     endDate: new Date("01.01.2024"),
  //   },
  //   chainId: 11155111,
  //   listingId: {
  //     floorPrice: floorPrice_Listing_01,
  //     address: address_Listing_01,
  //     abi: abi_Listing_01,
  //   },
  //   kyc: false,
  //   contract:
  //     "https://sepolia.etherscan.io/address/0xB04D78aC3850E9458eC8A9e90f48AA84a82d5f4b",
  //   socials: {
  //     website:
  //       "https://app.indelible.xyz/mint/0x9b66d03fc1eee61a512341058e95f1a68dc3a913",
  //     twitter: "https://twitter.com/PhunkAPEorigins",
  //     discord: "https://discord.com/invite/WNtZURFPTc",
  //     opensea: "https://opensea.io/collection/phunk-ape-origins",
  //   },
  // },
  // {
  //   projectTitle: "Encryptas",
  //   imageSrcList: [
  //     "/Listing_02/photo-l2-1.png",
  //     "/Listing_02/photo-l2-2.png",
  //     "/Listing_02/photo-l2-3.png",
  //   ],
  //   projectDescription:
  //     "10,000 Faceless Coder Chicks saving the world through code & flowers! Each faceless coder chick is inspired by the fashions of Millenial & Gen Z women.",
  //   marketing: {
  //     fp: { amount: 0.02, currency: "ETH" },
  //     goal: 50,
  //     endDate: new Date("01.01.2024"),
  //   },
  //   chainId: 11155111,
  //   listingId: {
  //     floorPrice: floorPrice_Listing_02,
  //     address: address_Listing_02,
  //     abi: abi_Listing_02,
  //   },
  //   kyc: false,
  //   socials: {
  //     website: "https://www.cypherchk.com/",
  //     twitter: "https://twitter.com/cypherchk",
  //     discord: "https://discord.com/invite/vTswEfkPdJ",
  //     opensea: "https://opensea.io/collection/encryptas-1",
  //   },
  // },
  // {
  //   projectTitle: "Crypto Homeless Degen",
  //   imageSrcList: [
  //     "/Listing_03/photo-l3-1.png",
  //     "Listing_03/photo-l3-2.png",
  //     "/Listing_03/photo-l3-3.png",
  //   ],
  //   projectDescription:
  //     "A collection of 23K unique Crypto Homeless Degens. It's a funny collection about enthusiasts who bought crypto and NFTs in the Bull Market.",
  //   marketing: {
  //     fp: { amount: 0.03, currency: "ETH" },
  //     goal: 50,
  //     endDate: new Date("01.01.2024"),
  //   },
  //   chainId: 11155111,
  //   listingId: {
  //     floorPrice: floorPrice_Listing_03,
  //     address: address_Listing_03,
  //     abi: abi_Listing_03,
  //   },
  //   kyc: false,
  //   socials: {
  //     website: "http://www.cryptohomeless.art/",
  //     twitter: "https://twitter.com/CryptoHomelessN",
  //     // discord: "http://discord.com",
  //     opensea: "https://opensea.io/collection/cryptohomelessdegens",
  //   },
  // },
  // {
  //   projectTitle: "TROGG",
  //   imageSrcList: [
  //     "/Listing_04/photo-l4-1.png",
  //     "/Listing_04/photo-l4-2.png",
  //     "/Listing_04/photo-l4-3.png",
  //   ],
  //   projectDescription:
  //     "The Troggs welcome you in their newfound magical cave!  Join them to learn more about their surroundings!",
  //   marketing: {
  //     fp: { amount: 0.04, currency: "ETH" },
  //     goal: 50,
  //     endDate: new Date("01.01.2024"),
  //   },
  //   chainId: 11155111,
  //   listingId: {
  //     floorPrice: floorPrice_Listing_04,
  //     address: address_Listing_04,
  //     abi: abi_Listing_04,
  //   },
  //   kyc: false,
  //   socials: {
  //     website: "https://tro.gg/",
  //     twitter: "https://twitter.com/troggnft",
  //     discord: "https://discord.com/invite/trogg",
  //     opensea: "https://hyperspace.xyz/collection/trogg",
  //   },
  // },
  {
    name: "MxSe",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/mxse%2Fmxse_1.png?alt=media&token=261126d4-043c-4d24-9c92-aa5f5671d16f",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/mxse%2Fmxse_2.png?alt=media&token=c50824b1-f965-4479-84d8-1362d4f23f71",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/mxse%2Fmxse_3.png?alt=media&token=142ed495-daf4-4318-afd9-5cf946acf0db",
    ],
    description:
      "This is a collection of 50 NFTs, the first 5 are editions of 5 and the next 45 will be 1 of 1s." +
      " Original, freehand doodles created with oil paint. Muse is a collection depicting Black experience and expressionism. Each individual piece uses shape, movement and purposeful deconstruction of features to project the intellect, changing thought and creativity of the mind. While at the same time representing distortion of self and self-identity of Black Folk." +
      "Blending the traditions of Greek and west African theatre, each mask-like appearance represents an original muse.",
    floorPrice: { amount: 0.275, currency: "ETH" },
    goal: 15,
    endDate: Timestamp.fromDate(new Date("2024-01-01")),
    created: Timestamp.now(),
    chainId: 11155111,
    contract: null,
    kyc: false,
    subscribers: [],
    socials: {
      website: "https://www.mxsenft.com/",
      twitter: "https://twitter.com/NessyFTee",
      discord: "https://discord.com/invite/4ApZEY5k",
      opensea: "https://opensea.io/collection/mxse",
    },
    ownerAddress: null,
  },
  {
    name: "Dooplicator",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/dooplicator%2Fdooplicator.gif?alt=media&token=33395bb7-7d89-4ee7-b3ff-5d77fce55f0b",
    ],
    description:
      "The Dooplicator is supercharged with endless utility." +
      "The Dooplicator's 'charges', allows its Doodle-y matter to utilize other NFTs to create new content." +
      "Planned upgrades to its firmware will allow Dooplicators, even used ones, to be utilized in new and different ways.",
    floorPrice: { amount: 0.2951, currency: "ETH" },
    goal: 30,
    endDate: Timestamp.fromDate(new Date("2024-01-01")),
    created: Timestamp.now(),
    chainId: 11155111,
    contract: null,
    kyc: false,
    subscribers: [],
    socials: {
      website: "https://doodles.app/dooplicator",
      twitter: "https://twitter.com/doodles",
      discord: "https://discord.com/invite/doodles",
      opensea: "https://opensea.io/collection/the-dooplicator",
    },
    ownerAddress: null,
  },
  {
    name: "Kanpai Pandas",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/kanpai_pandas%2Fkanpai_panda_1.png?alt=media&token=5c51f020-c6c0-4573-a56a-188bd9d9dc30",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/kanpai_pandas%2Fkanpai_panda_2.png?alt=media&token=a3bd6451-37cb-4ef9-a923-a371d8dcf063",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/kanpai_pandas%2Fkanpai_panda_3.png?alt=media&token=712676ae-f6c8-41eb-81e2-ac0b303e106e",
    ],
    description:
      "Kanpai Pandas is an omnichain NFT collection that merges exclusive luxurious collaborations and major brand partnerships with on-chain game theory to provide tangible real-world utility to holders. This collection shows Pandas that are currently roaming Ethereum Mainnet.",
    floorPrice: { amount: 2.61, currency: "ETH" },
    goal: 50,
    endDate: Timestamp.fromDate(new Date("2024-01-01")),
    created: Timestamp.now(),
    chainId: 11155111,
    contract: null,
    kyc: false,
    subscribers: [],
    socials: {
      website: "https://kanpaipandas.io/",
      twitter: "https://twitter.com/KanpaiPandas",
      discord: "https://discord.com/invite/PHx7M83BwN",
      opensea: "https://opensea.io/collection/kanpai-pandas",
    },
    ownerAddress: null,
  },
  {
    name: "Apollo By Asaf Slook",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/apollo_by_asaf_slook%2Fapollo_1.png?alt=media&token=986e2c4e-773c-4d35-9b57-8e4b120951a9",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/apollo_by_asaf_slook%2Fapollo_2.png?alt=media&token=f3d7f5ca-a753-4f9d-8467-a06ec334fe4b",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/apollo_by_asaf_slook%2Fapollo_3.png?alt=media&token=d834cd1c-c007-4518-8c97-b63533457b15",
    ],
    description:
      "gm. studio presents 'Apollo' by Asaf Slook, a generative series exploring circular geometry.This collection is the sixth to be featured on the generative art platform gm. studio." +
      " It consists of 555 pieces & launched on December 17th 2022.",
    floorPrice: { amount: 0.3799, currency: "ETH" },
    goal: 79,
    endDate: Timestamp.fromDate(new Date("2024-01-01")),
    created: Timestamp.now(),
    chainId: 11155111,
    contract: null,
    kyc: false,
    subscribers: [],
    socials: {
      website: "https://www.gmstudio.art/collections/apollo",
      twitter: "https://twitter.com/gmdaostudio",
      discord: "https://discord.com/invite/KabaNMBfnw",
      opensea: "https://opensea.io/collection/apollo-by-asaf-slook",
    },
    ownerAddress: null,
  },
  {
    name: "Lascaux: The Future",
    imgUrls: [
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/lascaux_the_future%2Flascaux_1.gif?alt=media&token=516f2084-53c5-412a-a42e-89c03ad017ef",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/lascaux_the_future%2Flascaux_2.gif?alt=media&token=07414ddc-c89d-4651-8944-8e006457b79b",
      "https://firebasestorage.googleapis.com/v0/b/rok-finance-66b44.appspot.com/o/lascaux_the_future%2Flascaux_3.gif?alt=media&token=d70fb61c-5ec1-42b9-abac-48a8bb507540",
    ],
    description:
      "The Record is a living, breathing on-chain account of the art, performance, and path we have all taken, the decisions going forward, and the outcome for future rarity traits for 721 series. Written on a Macintosh M0001 personal computer and transferred to modernized technology to mint.",
    floorPrice: { amount: 0.0075, currency: "ETH" },
    goal: 100,
    endDate: Timestamp.fromDate(new Date("2024-01-01")),
    created: Timestamp.now(),
    chainId: 11155111,
    contract: null,
    kyc: false,
    subscribers: [],
    socials: {
      twitter: "https://twitter.com/Lascauxart",
      opensea: "https://opensea.io/collection/lascauxfuture",
    },
    ownerAddress: null,
  },
]
