export class GenerateNftDTO {
    toPublicKey: string;
    uri: string;
    nftCount: number;
}

export class TransactionHistoryDTO {
    page: number;
    offset: number;
    sort: 'asc' | 'desc';
}