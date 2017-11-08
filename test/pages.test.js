'use strict';

const should = require('should');
const { mockRes } = require('./fixture/mock');
const MiniProgram = require('../lib/mini-program');

describe('Mini Program Pages', () => {
  const mProAnalysis = new MiniProgram('testAppId', 'testSecret');
  mProAnalysis.setGetToken(() => ({ access_token: 'ACCESS_TOKEN', expires_in: 7200 }));

  it('should can get visit distribution', () => {
    const fakeResponse = {
      'ref_date': '20170313',
      'list': [
        {
          'page_path': 'pages/main/main.html',
          'page_visit_pv': 213429,
          'page_visit_uv': 55423,
          'page_staytime_pv': 8.139198,
          'entrypage_pv': 117922,
          'exitpage_pv': 61304,
          'page_share_pv': 180,
          'page_share_uv': 166
        },
        {
          'page_path': 'pages/linedetail/linedetail.html',
          'page_visit_pv': 155030,
          'page_visit_uv': 42195,
          'page_staytime_pv': 35.462395,
          'entrypage_pv': 21101,
          'exitpage_pv': 47051,
          'page_share_pv': 47,
          'page_share_uv': 42
        },
        {
          'page_path': 'pages/search/search.html',
          'page_visit_pv': 65011,
          'page_visit_uv': 24716,
          'page_staytime_pv': 6.889634,
          'entrypage_pv': 1811,
          'exitpage_pv': 3198,
          'page_share_pv': 0,
          'page_share_uv': 0
        },
        {
          'page_path': 'pages/stationdetail/stationdetail.html',
          'page_visit_pv': 29953,
          'page_visit_uv': 9695,
          'page_staytime_pv': 7.558508,
          'entrypage_pv': 1386,
          'exitpage_pv': 2285,
          'page_share_pv': 0,
          'page_share_uv': 0
        },
        {
          'page_path': 'pages/switch-city/switch-city.html',
          'page_visit_pv': 8928,
          'page_visit_uv': 4017,
          'page_staytime_pv': 9.22659,
          'entrypage_pv': 748,
          'exitpage_pv': 1613,
          'page_share_pv': 0,
          'page_share_uv': 0
        }
      ]
    };

    mockRes('/getweanalysisappidvisitpage', fakeResponse);

    return mProAnalysis.getVisitPage('testStartDate', 'testEndDate')
      .then((data) => {
        data.should.be.eql(fakeResponse);
      });
  });
});
