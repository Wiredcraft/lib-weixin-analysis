'use strict';

// https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis-visit.html#访问分布

module.exports = {
  getVisitDistribution(startDate, endDate) {
    return this.request('/getweanalysisappidvisitdistribution', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  }
};
