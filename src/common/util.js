const path = require('node:path');
const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const APP_PATH = app.getAppPath()

const MAIN_DIR = path.resolve(APP_PATH, 'src/main');
const RENDER_DIR = path.resolve(APP_PATH, 'src/render');
const COMMON_DIR = path.resolve(APP_PATH, 'src/common');


module.exports = {
  MAIN_DIR,
  RENDER_DIR,
  COMMON_DIR,
}