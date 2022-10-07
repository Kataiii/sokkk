import React from 'react';
import axios from 'axios';

const URL = '#';


const login = (username:any, password:any) => {
    return axios
      .post(URL + "login", {
        username,
        password,
      })
      .then((response) => {
        return response.data;
      });
  };

const authService = {
    login: login
};

export default authService;
