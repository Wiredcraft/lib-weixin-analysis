'use strict';

const assert = require('assert');
const axios = require('axios');
const Promise = require('bluebird');
const url = require('url');

const validateGetToken = (getToken) => {
  getToken().then(res => {
    if (!res.access_token || !res.expires_in) {
      console.warn('>> Faile to fech `access_toke` or `expires_in` from getToken method');
    }
  }).catch(err => {
    console.warn('>> Faile to fech `access_toke` or `expires_in` from getToken method with error: ', err);
  });
};

const checkUpdateToken = (self) => new Promise((resolve, reject) => {
  const updateToken = () => self.getToken()
    .then(({ access_token: token, expires_in: expires }) => {
      self.accessToken = token;
      self.expiredAt = new Date(currentMilliseconds + (expires - 30) * 1000);
      return resolve();
    });

  const currentMilliseconds = (new Date()).valueOf();
  if (this.accessToken && (currentMilliseconds < self.expiredAt)) return resolve();

  return updateToken();
});

module.exports = class BaseWeChat {
  constructor(appId, secret) {
    this.appId = appId;
    this.secret = secret;
    this.baseURL = 'https://api.weixin.qq.com/datacube',
    this.lastToken = null,
    this.accessToken = null,
    this.expiredAt = null,
    this.OPS = 3000,
    this.axios = axios;
  }

  getToken() {
    return axios({
      baseURL: 'https://api.weixin.qq.com/cgi-bin',
      url: '/token',
      method: 'get',
      params: {
        grant_type: 'client_credential',
        appid: this.appId,
        secret: this.secret
      }
    });
  }

  request(path, option) {
    return checkUpdateToken(this)
      .then(() => axios(Object.assign({
        baseURL: this.baseURL,
        url: path,
        method: 'post',
        params: {
          access_token: this.accessToken
        }
      }, option)));
  }

  setOPS(ops) {
    this.OPS = ops;
  }

  setGetToken(getToken) {
    const result = getToken();

    if (result instanceof Promise) {
      this.getToken = getToken;
    } else {
      this.getToken = () => new Promise((resolve, reject) => {
        return resolve(getToken());
      });
    }

    validateGetToken(this.getToken);
  }
};
