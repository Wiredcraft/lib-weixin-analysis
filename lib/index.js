const axios = require('axios')

axios({
  method: 'post',
  baseURL: 'https://api.weixin.qq.com/datacube'
})

module.exports = class Rectangle {
  constructor(appId, secret, options) {
    this.appId = appId;
    this.secret = secret;
    this.lastToken = null,
    this.accessToken = null,
    this.expiredAt = null,
    this.OPS = options.OPS || 3000
    this.axios = axios
  }
}