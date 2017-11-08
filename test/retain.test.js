'use strict';

const should = require('should');
const { mockRes } = require('./fixture/mock');
const MiniProgram = require('../lib/mini-program');

describe('Mini Program Retain', () => {
  const mProAnalysis = new MiniProgram('testAppId', 'testSecret');
  mProAnalysis.setGetToken(() => ({ access_token: 'ACCESS_TOKEN', expires_in: 7200 }));

  it('should can get daily retain info', () => {
    const fakeResponse = {
      'ref_date': '20170313',
      'visit_uv_new': [
        {
          'key': 0,
          'value': 5464
        }
      ],
      'visit_uv': [
        {
          'key': 0,
          'value': 55500
        }
      ]
    };

    mockRes('/getweanalysisappiddailyretaininfo', fakeResponse);

    return mProAnalysis.getDdailyRetaininfo('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });

  it('should can get weekly retain info', () => {
    const fakeResponse = {
      'ref_date': '20170306-20170312',
      'visit_uv_new': [
        {
          'key': 0,
          'value': 0
        },
        {
          'key': 1,
          'value': 16853
        }
      ],
      'visit_uv': [
        {
          'key': 0,
          'value': 0
        },
        {
          'key': 1,
          'value': 99310
        }
      ]
    };

    mockRes('/getweanalysisappidweeklyretaininfo', fakeResponse);

    return mProAnalysis.getWeeklyRetaininfo('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });

  it('should can get monthly retain info', () => {
    const fakeResponse = {
      'ref_date': '201702',
      'visit_uv_new': [
        {
          'key': 0,
          'value': 346249
        }
      ],
      'visit_uv': [
        {
          'key': 0,
          'value': 346249
        }
      ]
    };

    mockRes('/getweanalysisappidmonthlyretaininfo', fakeResponse);

    return mProAnalysis.getMonthlyRetaininfo('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });
});
