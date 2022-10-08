import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiService } from './api.service';
import { GenerateNftDTO } from './dto';
import { NewWalletResponse } from './types';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('new-wallet')
  getHello(): Promise<NewWalletResponse> {
    return this.apiService.makeNewWallet();
  }

  @Get('balance/:publicKey')
  getWalletBalance(@Param() params) {
      return this.apiService.getWalletBalance(params.publicKey)
  }

  @Get('balance/nft/:publicKey')
  getWalletNFT(@Param() params) {
      return this.apiService.getWalletNFT(params.publicKey)
  }

  @Get('transaction/:transactionHash/status')
  getTransactionStatus(@Param() params) {
      return this.apiService.transactionStatus({transactionHash: params.transactionHash})
  }

  @Get('nft/:tokendId/')
  getNFTInfo(@Param() params) {
      return this.apiService.getNFTInfo(params.tokendId);
  }

  @Post('nft/generate')
  generateNewNFT(@Body() dto: GenerateNftDTO) {
      return this.apiService.sendNFT(dto);
  }

  @Post('wallet/history/:publicKey')
  getTransactionHistory(@Body() dto: TransactionHistoryDTO, @Param() params) {
    return this.apiService.getTransactionHistory(params.publicKey, dto);
  }
}
