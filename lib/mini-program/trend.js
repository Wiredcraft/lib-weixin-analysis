'use strict';

// https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis.html#概况趋势
// https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis-visit.html#访问趋势

module.exports = {
  getDailySummaryTrend(startDate, endDate) {
    return this.request('/getweanalysisappiddailysummarytrend', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  },

  getDailyVisitTrend(startDate, endDate) {
    return this.request('/getweanalysisappiddailyvisittrend', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  },

  getWeeklyVisitTrend(startDate, endDate) {
    return this.request('/getweanalysisappidweeklyvisittrend', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  },

  getMonthlyVisitTrend(startDate, endDate) {
    return this.request('/getweanalysisappidmonthlyvisittrend', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  }
};
