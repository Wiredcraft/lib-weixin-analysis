'use strict';

const nock = require('nock');

exports.mockRes = (path, result) => nock('https://api.weixin.qq.com/datacube')
  .post(path, {
    begin_date: 'testStartDate',
    end_date: 'testEndDate'
  })
  .query({ access_token: 'ACCESS_TOKEN' })
  .reply(200, result);
