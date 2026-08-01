const { getDE, getWmTheme }                  = require('./de');
const { findThemeFile }                       = require('./theme');
const { readBorderValues, applyBorderValues } = require('./xml');
const { restartWM }                           = require('./wm');

module.exports = { getDE, getWmTheme, findThemeFile, readBorderValues, applyBorderValues, restartWM };
