'use strict';

const should = require('should');

const BaseWeChat = require('../lib/base-wechat');

describe('Basic Wechat Class', () => {
  const base = new BaseWeChat('testAppId', 'testSecret');

  it('should can create instance', () => {
    base.should.have.property('appId', 'testAppId');
    base.should.have.property('secret', 'testSecret');
  });

  it('should can set OPS', () => {
    base.setOPS(4000);

    base.should.have.property('OPS', 4000);
  });

  it('should can set getToken method', () => {
    base.setGetToken(() => ({
      access_token: 'ACCESS_TOKEN',
      expires_in: 7200
    }));

    return base.getToken().then(result => {
      base.should.have.property('getToken').which.is.a.Function();
      result.should.have.property('access_token', 'ACCESS_TOKEN');
      result.should.have.property('expires_in', 7200);
    });
  });

  it('should can set getToken promise method', () => {
    base.setGetToken(() => new Promise((resolve, reject) => {
      return resolve({
        access_token: 'ACCESS_TOKEN',
        expires_in: 7200
      });
    }));

    return base.getToken().then(result => {
      base.should.have.property('getToken').which.is.a.Function();
      result.should.have.property('access_token', 'ACCESS_TOKEN');
      result.should.have.property('expires_in', 7200);
    });
  });
});
