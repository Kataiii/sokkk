package com.moretech.server.controllers;

import com.moretech.server.models.Wallet;
import com.moretech.server.repo.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/v1/wallets")
public class WalletsController {

    @Autowired
    WalletRepository walletRepository;

    @GetMapping("/new")
    public String createNewWalletGet(){
        Wallet wallet = new Wallet();
        walletRepository.save(wallet);
        return "";
    }

    @PostMapping("/new")
    public String createNewWalletPost(){
        return "";
    }

    @GetMapping("/{publicKey}/balance")
    public String balance(){
        return "";
    }

    @GetMapping("/{publicKey}/nft/balance")
    public String nftBalance(){
        return "";
    }
}
