// Modules to control application life and create native browser window
const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('node:path');
const APP_PATH = app.getAppPath()
const MAIN_DIR = path.resolve(APP_PATH, 'src/main');
const RENDER_DIR = path.resolve(APP_PATH, 'src/render');
const COMMON_DIR = path.resolve(APP_PATH, 'src/common');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(MAIN_DIR, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(RENDER_DIR, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}
let tray;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  const icon = nativeImage.createFromPath(
    path.join(COMMON_DIR, 'images/36x36.png')
  );
  tray = new Tray(icon);

  // 注意: 你的 contextMenu, Tooltip 和 Title 代码需要写在这里!
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
  ]);

  tray.setContextMenu(contextMenu);

  tray.setToolTip('This is my application');
  tray.setTitle('This is my title');
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
