
exports.getByDay = (startDate, endDate) => request('getweanalysisappiddailysummarytrend', {
  data: {
    begin_date: startDate,
    end_date: endDate
  }
})
