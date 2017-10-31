'use strict';

// https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis-visit.html#访问留存

module.exports = {
  getDdailyRetaininfo(startDate, endDate) {
    return this.request('/getweanalysisappiddailyretaininfo', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  },

  getWeeklyRetaininfo(startDate, endDate) {
    return this.request('/getweanalysisappidweeklyretaininfo', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  },

  getMonthlyRetaininfo(startDate, endDate) {
    return this.request('/getweanalysisappidmonthlyretaininfo', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  }
};
