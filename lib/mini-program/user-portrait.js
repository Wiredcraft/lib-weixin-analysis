'use strict';

// https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis-user.html

module.exports = {
  getUserPortrait(startDate, endDate) {
    return this.request('/getweanalysisappiduserportrait', {
      data: {
        begin_date: startDate,
        end_date: endDate
      }
    });
  }
};
