import exp from "constants";

export type NewWalletResposne = {
    privateKey: string;
    publicKey: string;
}

export type TransferCurrencyDto = {
    fromPrivateKey: string,
    toPublicKey: string,
    amount: number
}

export type TransferNFTDto = {
    fromPrivateKey: string,
    toPublicKey: string,
    tokenId: number
}

export type TransferResponse = {
    transactionHash: string;
}

export type TransactionStatus = TransferResponse;

export type TransactionStatusResponse = {
    status: 'Success' | string;
}

export type BalanceResponse = {
    maticAmount: number,
	coinsAmount: number
}

export type NFTResponse = {
    balance: {
        URI: string,
        tokens: number[]
    }[]
}

export type SendNftRequest = {
    toPublicKey: string;
    uri: string;
    nftCount: number;
}

export type NFTInfo = {
    tokenId: number,
    uri: number,
    publicKey: string
}

export type NFTInfoByTransaction = {
    wallet_id: string,
    tokens: number[]
}

export type HistoryParams = {
    page: number,
    offset: number,
    sort: 'asc' | 'desc'
}

interface TransactionItem {
    blockNumber: number;
    timeStamp: number;
    contractAddress: string;
    from: string;
    to: string;
    tokenName: 'Wrapped Matic' | 'NFT',
    tokenSymbol: 'WMATIC' | 'NFT',
    gasUsed: number;
    confirmations: number;
}

interface TransferItem extends TransactionItem {
    value: number;
}

interface NFTItem extends TransactionItem {
    tokenId: number;
}

export type History = {
    history: (TransferItem | NFTItem)[];
}