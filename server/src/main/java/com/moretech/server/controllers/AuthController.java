package com.moretech.server.controllers;

import com.moretech.server.repo.UserRepository;
import com.moretech.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    protected PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(12);
    }

    @Autowired
    private UserService userService;
}
