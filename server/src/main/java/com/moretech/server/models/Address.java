package com.moretech.server.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "addresses")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String country;
    private String subject;
    private String city;
    private String street;
    private int home_number;
    private int flat_number;
    private String index;
    private Set<User> users = new HashSet<>();

    public Address() {}

    public Address(String country, String subject, String city, String street,
                   int home_number, int flat_number, String index, Set<User> users) {
        this.country = country;
        this.subject = subject;
        this.city = city;
        this.street = street;
        this.home_number = home_number;
        this.flat_number = flat_number;
        this.index = index;
        this.users = users;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getHome_number() {
        return home_number;
    }

    public void setHome_number(int home_number) {
        this.home_number = home_number;
    }

    public int getFlat_number() {
        return flat_number;
    }

    public void setFlat_number(int flat_number) {
        this.flat_number = flat_number;
    }

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
