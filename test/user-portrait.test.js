'use strict';

const should = require('should');
const { mockRes } = require('./fixture/mock');
const MiniProgram = require('../lib/mini-program');

describe('Mini Program User Portrait', () => {
  const mProAnalysis = new MiniProgram('testAppId', 'testSecret');
  mProAnalysis.setGetToken(() => ({ access_token: 'ACCESS_TOKEN', expires_in: 7200 }));

  it('should can get visit distribution', () => {
    const fakeResponse = {
      'ref_date': '20170611',
      'visit_uv_new': {
        'province': [
          {
            'id': 31,
            'name': '广东省',
            'value': 215
          }
        ],
        'city': [
          {
            'id': 3102,
            'name': '广州',
            'value': 78
          }
        ],
        'genders': [
          {
            'id': 1,
            'name': '男',
            'value': 2146
          }
        ],
        'platforms': [
          {
            'id': 1,
            'name': 'iPhone',
            'value': 27642
          }
        ],
        'devices': [
          {
            'name': 'OPPO R9',
            'value': 61
          }
        ],
        'ages': [
          {
            'id': 1,
            'name': '17岁以下',
            'value': 151
          }
        ]
      },
      'visit_uv': {
        'province': [
          {
            'id': 31,
            'name': '广东省',
            'value': 1341
          }
        ],
        'city': [
          {
            'id': 3102,
            'name': '广州',
            'value': 234
          }
        ],
        'genders': [
          {
            'id': 1,
            'name': '男',
            'value': 14534
          }
        ],
        'platforms': [
          {
            'id': 1,
            'name': 'iPhone',
            'value': 21750
          }
        ],
        'devices': [
          {
            'name': 'OPPO R9',
            'value': 617
          }
        ],
        'ages': [
          {
            'id': 1,
            'name': '17岁以下',
            'value': 3156
          }
        ]
      }
    };

    mockRes('/getweanalysisappiduserportrait', fakeResponse);

    return mProAnalysis.getUserPortrait('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });
});
