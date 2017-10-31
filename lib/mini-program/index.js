'use strict';

const BaseWeChat = require('../base-wechat');

const distribution = require('./distribution');
const pages = require('./pages');
const retain = require('./retain');
const trend = require('./trend');
const userPortrait = require('./user-portrait');

class MiniProgramAnalysis extends BaseWeChat {
  constructor(appId, secret) {
    super(appId, secret);
  }
}

Object.assign(MiniProgramAnalysis.prototype, distribution);
Object.assign(MiniProgramAnalysis.prototype, pages);
Object.assign(MiniProgramAnalysis.prototype, retain);
Object.assign(MiniProgramAnalysis.prototype, trend);
Object.assign(MiniProgramAnalysis.prototype, userPortrait);

module.exports = MiniProgramAnalysis;
