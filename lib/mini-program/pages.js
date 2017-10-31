'use strict';

// https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis-visit.html#访问页面

module.exports = {
  getVisitPage(startDate, endDate) {
    return this.request('/getweanalysisappidvisitpage', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  }
};
