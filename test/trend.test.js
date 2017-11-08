'use strict';

const should = require('should');
const { mockRes } = require('./fixture/mock');
const MiniProgram = require('../lib/mini-program');

describe('Mini Program Trend', () => {
  const mProAnalysis = new MiniProgram('testAppId', 'testSecret');
  mProAnalysis.setGetToken(() => ({ access_token: 'ACCESS_TOKEN', expires_in: 7200 }));

  it('should can get daily summary trend', () => {
    const fakeResponse = {
      'list': [
        {
          'ref_date': '20170313',
          'visit_total': 391,
          'share_pv': 572,
          'share_uv': 383
        }
      ]
    };

    mockRes('/getweanalysisappiddailysummarytrend', fakeResponse);

    return mProAnalysis.getDailySummaryTrend('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });

  it('should can get daily visit trend', () => {
    const fakeResponse = {
      'list': [
        {
          'ref_date': '20170313',
          'session_cnt': 142549,
          'visit_pv': 472351,
          'visit_uv': 55500,
          'visit_uv_new': 5464,
          'stay_time_session': 0,
          'visit_depth': 1.9838
        }
      ]
    };

    mockRes('/getweanalysisappiddailyvisittrend', fakeResponse);

    return mProAnalysis.getDailyVisitTrend('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });

  it('should can get weekly visit trend', () => {
    const fakeResponse = {
      'list': [
        {
          'ref_date': '20170306-20170312',
          'session_cnt': 986780,
          'visit_pv': 3251840,
          'visit_uv': 189405,
          'visit_uv_new': 45592,
          'stay_time_session': 54.5346,
          'visit_depth': 1.9735
        }
      ]
    };

    mockRes('/getweanalysisappidweeklyvisittrend', fakeResponse);

    return mProAnalysis.getWeeklyVisitTrend('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });

  it('should can get monthly visit trend', () => {
    const fakeResponse = {
      'list': [
        {
          'ref_date': '201702',
          'session_cnt': 126513,
          'visit_pv': 426113,
          'visit_uv': 48659,
          'visit_uv_new': 6726,
          'stay_time_session': 56.4112,
          'visit_depth': 2.0189
        }
      ]
    };

    mockRes('/getweanalysisappidmonthlyvisittrend', fakeResponse);

    return mProAnalysis.getMonthlyVisitTrend('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });
});
