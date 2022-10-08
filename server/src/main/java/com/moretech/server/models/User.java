package com.moretech.server.models;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username")
        })
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password_hash")
    private String passwordHash;

    private String post;

    @Column(name = "image_url")
    private String imageUrl;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_wallets",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "wallet_id"))
    private Set<Wallet> wallets = new HashSet<>();

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "user_friends",
//            joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id"))
//    private Set<User> friends;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_addresses",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Address> addresses = new HashSet<>();

    public User(String username, String passwordHash, String post,
                Set<Wallet> wallets, Set<User> friends, Set<Address> addresses) {
        this.username = username;
        this.passwordHash = passwordHash;
//        this.friends = friends;
        this.post = post;
        this.wallets = wallets;
        this.addresses = addresses;
    }
}
