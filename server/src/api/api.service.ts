import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { 
    NewWalletResposne,
    TransferCurrencyDto,
    TransferResponse,
    TransferNFTDto,
    TransactionStatus,
    TransactionStatusResponse,
    BalanceResponse,
    NFTResponse,
    SendNftRequest,
    NFTInfo,
    NFTInfoByTransaction,
    HistoryParams,
    History
} from './types';

const axios = require('axios')

const BASE_URL = 'https://hackathon.lsp.team/hk';

const makeUrl = (url: string): string => `${BASE_URL}${url}`;

@Injectable()
export class ApiService {
    private async makeRequest<B = any ,R = any>(config: AxiosRequestConfig<B>): Promise<R> {
        console.log(`Performing request: ${JSON.stringify(config)}`);
        return axios.request(config).then(response => response.data);
    }

    public async makeNewWallet(): Promise<NewWalletResposne> {
        return this.makeRequest<{}, NewWalletResposne>({
            url: makeUrl('/v1/wallets/new'),
            method: 'POST'
        });
    }

    public async transferMatic(transfer: TransferCurrencyDto): Promise<TransferResponse> {
        return this.makeRequest<TransferCurrencyDto, TransferResponse>({
            url: makeUrl('/v1/transfers/matic'),
            method: 'POST', 
            data: transfer
        });
    }

    public async transferRuble(transfer: TransferCurrencyDto): Promise<TransferResponse>  {
        return this.makeRequest<TransferCurrencyDto, TransferResponse>({
            url: makeUrl('/v1/transfers/ruble'),
            method: 'POST',
            data: transfer
        });
    }

    public async transferNft(transfer: TransferNFTDto): Promise<TransferResponse>  {
        return this.makeRequest<TransferNFTDto, TransferResponse>({
            url: makeUrl('/v1/transfers/nft'),
            method: 'POST',
            data: transfer
        });
    }

    public async transactionStatus(payload: TransactionStatus): Promise<TransactionStatusResponse> {
        return this.makeRequest<{}, TransactionStatusResponse>({
            url: makeUrl(`/v1/transfers/status/${payload.transactionHash}`),
            method: 'GET',
        });
    }

    public async getWalletBalance(publicKey: string): Promise<BalanceResponse> {
        return this.makeRequest<{}, BalanceResponse>({
            url: makeUrl(`/v1/wallets/${publicKey}/balance`),
            method: 'GET',
        });
    }

    public async getWalletNFT(publicKey: string): Promise<NFTResponse> {
        return this.makeRequest<{}, NFTResponse>({
            url: makeUrl(`/v1/wallets/${publicKey}/nft/balance`),
            method: 'GET',
        });
    }

    public async sendNFT(payload: SendNftRequest): Promise<TransferResponse> {
        if (payload.nftCount > 20) {
            throw new Error(`NFT count should be less than 20, but equal ${payload.nftCount}`)
        }

        return this.makeRequest<SendNftRequest, TransferResponse>({
            url: makeUrl('/v1/nft/generate'),
            method: 'POST',
            data: payload
        });
    }

    public async getNFTInfo(tokenId: number): Promise<NFTInfo> {
        return this.makeRequest<{}, NFTInfo>({
            url: makeUrl(`/v1/nft/${tokenId}`),
            method: 'GET',
        }); 
    }

    public async getGeneratedNFTList(transactionHash: string) {
        return this.makeRequest<{}, NFTInfoByTransaction>({
            url: makeUrl(`/v1/nft/generate/${transactionHash}`),
            method: 'GET',
        }); 
    }

    public async getTransactionHistory(publicKey: string, params: HistoryParams) {
        params = {
            ... {page: 20, offset: 0, sort: 'asc'},
            ... params
        };
        
        return this.makeRequest<HistoryParams, History>({
            url: makeUrl(`/v1/wallets/${publicKey}/history`),
            method: 'POST',
            data: params
        }); 
    }
}
